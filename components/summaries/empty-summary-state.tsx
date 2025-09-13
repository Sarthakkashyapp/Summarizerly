import { FileText } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function EmptySummaryState() {
    return (
        <div className="text-center py-12">
            <div className="flex flex-col items-center gap-4">
                <FileText className="w-16 h-16 text-gray-400"/>
                <h3 className="text-xl font-semibold text-gray-600">No summaries yet</h3>
                <p className="text-gray-500 max-w-md">Upload your first PDF to get started with AI=Powered summaries</p>
                <Link href="/upload">
                    <Button variant={'link'} className="mt-4 text-white bg-linear-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:no-underline hover:cursor-pointer">
                        Create Your First Summary
                    </Button>
                </Link>
            </div>
        </div>
    )
}