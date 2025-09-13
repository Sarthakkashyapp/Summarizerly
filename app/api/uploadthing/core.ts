import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter  } from "uploadthing/next";
import { UploadThingError} from "uploadthing/server";

const f = createUploadthing();

type UploadedFileWithUrl = {
  key: string;
  name: string;
  size: number;
  url: string;
};

export const ourFileRouter = {
    pdfUploader: f({pdf: {maxFileSize: '32MB'}}).
    middleware(
        async({req}) => {
            //get user info 
            const user = await currentUser();

            if(!user) throw new UploadThingError('Unauthorized user')

            return { userId: user.id};
        }
    )
    .onUploadComplete(async({metadata, file}) => {
        const typedFile = file as UploadedFileWithUrl;
        console.log('upload completed for user id', metadata.userId);
        console.log('file url', typedFile.url);
        return {userId: metadata.userId, file: typedFile};
    }),
} satisfies FileRouter

export type ourFileRouter = typeof ourFileRouter;