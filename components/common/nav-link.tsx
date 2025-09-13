"use client";

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function NavLink({
    href,
    children,
    className,
} : {
    href: string,
    children: React.ReactNode,
    className?: string
}) {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname !== "/" && pathname.startsWith(href));
    return (
        <Link href={href} className={cn("text-sm lg:text-lg lg:font-normal transition-colors duration-200 text-gray-600 hover:text-blue-500",
            className,
            isActive && "text-blue-500"
        )}>
            {children}
        </Link>
    );
}