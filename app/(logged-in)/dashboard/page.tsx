import { MotionDiv, MotionH1, MotionP } from "@/components/common/motion-wrapper";
import EmptySummaryState from "@/components/summaries/empty-summary-state";
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { itemVariants } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const user = await currentUser();
    const userId = user?.id;
    if(!userId) return redirect('/sign-in');

    const uploadLimit = 5;
    const summaries = await getSummaries(userId);

    return (
        <main className="min-h-screen">
           <div className="container mx-auto flex flex-col gap-4">
            <div className="px-2 py-12 sm:py-24">
              <div className="flex gap-4 mb-8 justify-between">
                <div className="flex flex-col gap-2">
                    <MotionH1 
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">Your Summaries</MotionH1>
                    <MotionP 
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      className="text-gray-600">Transform your PDF's into concise, actionable insights</MotionP>
                </div>
                <Button variant={'link'} className="btn-primary hover:no-underline hover:scale-105 transition-all duration-300">
                    <Link href="/upload" className="flex text-white items-center">
                       <PlusIcon className="h-5 w-5 mr-2"/>
                       New Summary
                    </Link>
                </Button>
              </div>
              <MotionDiv
               variants={itemVariants}
               initial="hidden"
               whileInView="visible"
               className="mb-6">
                <div className="bg-blue-50 border border-rounded rounded-lg p-4 text-blue-800">
                    {/* <p className="text-sm">You have reached a limit of {uploadLimit} uploads on basic plan{' '}
                    <Link href="#/pricing" className="text-blue-800 font-medium underline underline-offset-4 inline-flex items-center">
                       Click here to upgrade to pro{'  '}
                       <ArrowRight className="w-4 h-4 inline-block"/>
                    </Link>
                    for unlimited uploads.
                    </p> */}
                    <p className="text-sm">
                      Pricing will be added shortly until then enjoy free uploads 😊, 
                      make sure you only use textual PDF's as it a PDF summarizer.
                    </p>
                </div>
              </MotionDiv>

              {/* grid */}
              {summaries.length === 0 ? (<EmptySummaryState/> ) : (
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
                {summaries.map((summary, index) => (
                    <SummaryCard key={index} summary={summary}/>
                ))}
              </div>
              )}
            </div>    
           </div>
        </main>
    )
}