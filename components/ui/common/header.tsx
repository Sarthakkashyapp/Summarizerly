import { FileText } from 'lucide-react'; 
import { Button } from "../button";     
import NavLink from './nav-link';

const isLoggedIn = false;

export default function Header() {
    return <nav className=" flex items-center justify-between container py-4 lg:px-8 px-2 mx-auto ">
        <div className="flex lg:flex-1">
           <NavLink className="flex items-center gap-1 lg:gap-2 shrink-0" href="/">
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out"/>
            <span className="font-bold lg:text-xl text-gray-900">
                Summarizerly
            </span>
           </NavLink>
        </div>

        <div className="flex lg:justify-center gap-2 lg:gap-8 lg:items-center">
            <NavLink href="/#pricing">Pricing</NavLink>
            {isLoggedIn && <NavLink href="/dashboard">Summaries</NavLink>}
        </div>

        <div className="flex lg:flex-1 lg:justify-end">
        {isLoggedIn ? (
            <div className="flex gap-2 items-center">
                <NavLink href="/upload">Upload a PDF</NavLink>
                <div>Pro</div>
                <Button className="btn-primary">Sign-Out</Button>
            </div>
        ) : (
            <div>
                <NavLink href="/sign-in">Sign In</NavLink>
            </div>
        )}
        </div>
    </nav>
}