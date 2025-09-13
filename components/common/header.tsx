import { FileText } from 'lucide-react'; 
import { Button } from "../ui/button";     
import NavLink from './nav-link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';


export default function Header() {
    return <nav className=" flex items-center justify-between py-4 lg:px-8 px-2 mx-auto w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50">
        <div className="flex lg:flex-1">
           <NavLink className="flex items-center gap-0 lg:gap-2 shrink-0" href="/">
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out"/>
            <span className="font-bold text-sm lg:text-lg  text-gray-900">
                Summarizerly
            </span>
           </NavLink>
        </div>

        <div className="flex lg:justify-center gap-2 lg:gap-8 lg:items-center justify-center text-sm md:text-lg lg:text-lg">
            {/* <NavLink href="/#pricing">Pricing</NavLink> */}
            <SignedIn>
                <NavLink href="/dashboard" className='text-center'>Your Summaries</NavLink>
            </SignedIn>
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
          <SignedIn>
            <div className="flex gap-2 lg:gap-4 items-center">
                <NavLink href="/upload" className='font-semibold text-gray-700'>Upload a PDF</NavLink>
                {/* <div className='text-blue-600 font-semibold '>Pro</div> */}
                <SignedIn>
                  <UserButton />
                </SignedIn>
            </div>
          </SignedIn>
          <SignedOut>
            <NavLink href="/sign-in">Sign In</NavLink>
          </SignedOut>
        </div>
    </nav>
}