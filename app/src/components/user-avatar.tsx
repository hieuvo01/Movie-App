import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronsUpDown } from "lucide-react"
import { Toaster } from "@/components/ui/toaster"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const signOut = () => {
    const removeToken = function(){
        localStorage.removeItem('token')
    }();
    window.location.href = '/login';
}

export default function UserAvatar() {
  const router = useRouter();
  return (
    <Badge variant="outline">
        <DropdownMenu>
            <DropdownMenuTrigger>
                {/* avatar */}
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                {/* end avatar */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><button>Profile</button></DropdownMenuItem>
                <DropdownMenuItem><Link href="/settings">Settings</Link></DropdownMenuItem>
                <DropdownMenuItem><button onClick={() => signOut()}>Sign out</button></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </Badge>
  )
}
