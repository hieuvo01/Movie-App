import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '@/components/ui/themetoggle'

function Header() {
  return (
    <header className='flex fixed w-full z-20 top-0 items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
        <Link className='mr-10' href="/">
            <Image width={120} height={110} className='cursor-pointer invert-0 dark:invert' alt="" src="/phimmoi.png" />
        </Link>
        <div className='flex space-x-2'>
            {/* gene */}
            {/* search */}
            <ModeToggle />
        </div>
    </header>
  )
}

export default Header