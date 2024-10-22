import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ChevronDown} from 'lucide-react'
const UserButton = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='flex gap-3'>
                    Kirubel H. <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[300px] '>
                    <DropdownMenuLabel>
                       <h2>Kirubel H.</h2>
                       <p className='text-sm font-light'>kirubel@gmail.com</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem >Sign out </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserButton
