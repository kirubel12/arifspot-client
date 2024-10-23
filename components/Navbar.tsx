'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import UserButton from './user-button'
import { useAuth } from '@/hooks/auth'



export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const { user } = useAuth()


    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <h1>Your Logo</h1>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">

                            {!user && (
                                <div className='flex gap-8'>
                                    <Link

                                        href='/register'
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === "/register"
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-foreground hover:bg-primary/10'
                                            }`}
                                    >
                                        Register
                                    </Link>

                                    <Link

                                        href='/login'
                                        className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === "/login"
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-foreground hover:bg-primary/10'
                                            }`}
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}

                            {user && (
                                <UserButton />
                            )}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="px-2" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                                <nav className="flex flex-col gap-4">
                                    {!user && (
                                        <div>
                                            <Link

                                                href='/register'
                                                className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === "/register"
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'text-foreground hover:bg-primary/10'
                                                    }`}
                                            >
                                                Register
                                            </Link>

                                            <Link

                                                href='/login'
                                                className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === "/login"
                                                    ? 'bg-primary text-primary-foreground'
                                                    : 'text-foreground hover:bg-primary/10'
                                                    }`}
                                            >
                                                Login
                                            </Link>
                                        </div>
                                    )}
                                    {user && (
                                        <UserButton />
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
