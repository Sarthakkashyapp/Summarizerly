'use client';

import { useUploadThing } from "@/utils/uploadthing";
import UploadInputForm from "./upload-form-input";
import { z } from 'zod';
import { toast, useSonner } from "sonner";
import { generatePdfSummary, generatePdfText, storePdfSummaryAction } from "@/actions/upload-actions";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { formatFileNameAsTitle } from "@/utils/format-utils";

const schema = z.object({
    file: z
        .instanceof(File, {message: 'Invalid file'})
        .refine((file) => file.size <= 20 * 1024 * 1024,
        'File size must be less than 20MB'
    )
        .refine((file) => file.type.startsWith('application/pdf'),
        'File must be a PDF'
    )
})

export default function UploadForm() {

    const formRef = useRef<HTMLFormElement>(null);
    const[isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const { startUpload, routeConfig } = useUploadThing
    ('pdfUploader', {
        onClientUploadComplete: () => {
            console.log('uploaded successfully!');
        },
        onUploadError: () => {
            console.error('error occured while uploading');
            toast("Error occured while uploading", {
               description: "Some error occured, Try again later!",
               descriptionClassName: "text-gray-900"
            })
        },
        onUploadBegin: (file) => {
            console.log('upload has begun for', file);
        }
    });

    //schema with zod
    const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            console.log('submitted')
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;

            //validating the file
            const validatedFields = schema.safeParse({file});

            console.log(validatedFields);

            if (!validatedFields.success) {
                const firstError = validatedFields.error.issues[0]?.message;
                console.log(firstError ?? 'Invalid file');
                toast("❌ Something went wrong", {
                    description: 
                        firstError ?? 'Invalid file',
                        descriptionClassName: "text-red-500"
                })
                setIsLoading(false);
                return;
            }

            toast("📄 Uploading PDF...", {
               description: "We are Uploading your PDF ⚡",
            })

        //upload the file to uploadthing
        const uploadResponse = await startUpload([file])
        if(!uploadResponse) {
            toast("👎 Something went wrong", {
               description: "Please use a different file",
            })
            setIsLoading(false);
            return;
        }

        toast("📃 Processing PDF", {
            description: "Hang Tight! Our AI is reading through your document⚡",
        })

        const uploadFileUrl = uploadResponse[0].serverData.file.url;

        let storeResult: any
            // toast("📃 Saving PDF...", {
            //    description: "Hang Tight! We are saving your summary ☑️",
            //    descriptionClassName: "text-gray-900"
            // })
            
                const formattedFileName = formatFileNameAsTitle(file.name);
                

                //SPLITTING SERVICE (SERVER ACTION) TO MAKE PROCESS SMOOTHER AND FASTER
                const result = await generatePdfText({
                    fileUrl: uploadFileUrl,
                })

                toast("📃 Genarating PDF Summary", {
                   description: "Hang Tight! Our AI is reading through your document⚡",
                })

                //parse the pdf using langchain 
                const summaryResult = await generatePdfSummary({
                  pdfText: result?.data?.pdfText ?? '',
                  fileName: formattedFileName
                });

                 toast("📃 Saving PDF Summary...", {
                   description: "Hang Tight! We are saving your summary ☑️",
                })

                const {data = null, message = null } = summaryResult || {};
                
            if(data?.summary) {
                //save the summary to the database
                storeResult = await storePdfSummaryAction({
                    summary: data.summary,
                    fileUrl: uploadFileUrl,
                    title: formattedFileName,
                    fileName: file.name,
                })
                toast("⭐ Summary Generated", {
                    description: "Your PDF has been successfully summarised and saved ☑️",
                })

                formRef.current?.reset();
                //redirect to the [id] summary page
                router.push(`summaries/${storeResult.data.id}`);
            }
        } catch (error) {
            setIsLoading(true);
            console.error("Error occured", error);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadInputForm 
                isLoading={isLoading} 
                ref={formRef} 
                onSubmit={handleSubmit}
            />
        </div>
    )
}