import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                    <Image
                        src="/images/logo.png"
                        alt="Bambusa Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <Button variant="secondary" size="sm" asChild>
                        <Link href="#waitlist">Join Waitlist</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
