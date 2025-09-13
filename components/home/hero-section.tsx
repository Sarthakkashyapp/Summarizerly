import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import { Cable } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionH2, MotionSection } from "../common/motion-wrapper";
import { containerVariants, itemVariants } from "@/utils/constants";

const buttonHover = {
    scale: 1.05,
}

export default function HeroSection() {
    return <MotionSection 
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className="relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px:12 max-w-7xl"> 
            <div className="flex ">
                <div className="border-blue-500 border-1 relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-blue-100 via-blue-400 to-blue-700 animate-gradient-x group">
                  <Badge variant={'secondary'} className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-100 transition-colors duration-200">
                    <Cable className="!h-6 !w-6 mr-2 text-blue-500 animate-pulse"/>
                    <p className="text-blue-500 text-base">Powered by AI</p>
                  </Badge>
                </div>
            </div>
            <MotionH1 
               variants={itemVariants}
               className="font-bold py-6 text-center bg-linear-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent">
                Transform PDF's into{''}
                <span className="relative inline-block">
                    <span className="relative z-10 px-2 bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">concise </span>
                    <span className="absolute inset-0 bg-blue-200/50 -rotate-2 rounded-lg transform -skew-y-1" aria-hidden="true"></span>
                </span>{''}
                summaries
            </MotionH1>
            <MotionH2 
            variants={itemVariants}
               className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600">
                Get a beautiful summary reel of the document in seconds
            </MotionH2>
            <MotionDiv 
               variants={itemVariants} 
               whileHover={buttonHover}>
                <Button variant={'link'} className="btn-secondary text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 hover:no-underline font-bold shadow-lg animate-gradient-x transition-all duration-300">
                    <Link href="/sign-in" className="flex gap-2 items-center">
                        <span>Try Summarizerly</span>
                        <ArrowRight className="animate-pulse"/>
                    </Link>
                </Button>
            </MotionDiv>
    </MotionSection>
}
