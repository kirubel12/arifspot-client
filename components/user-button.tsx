import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import { useAuth } from '@/hooks/auth'
const UserButton = () => {
    const { logout, user } = useAuth()
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className='flex gap-3'>
                    {user?.name} <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[300px] '>
                    <DropdownMenuLabel>
                        <h2>{user?.name}</h2>
                        <p className='text-sm font-light'>{user?.email}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logout} >Sign out </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default UserButton
