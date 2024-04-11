import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from '@/components/ui/themetoggle'
import SearchBar from './search-bar'
import GenerateDropdown from './generate'

function Header() {
  return (
    // bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900
    <header className='flex fixed w-full z-20 top-0 items-center justify-center p-5 bg-slate-900'>
      <div className='w-3/4 flex justify-between items-center'>
      <Link className='mr-10' href="/">
            <Image width={120} height={110} className='cursor-pointer invert-0 dark:invert' alt="" src="/phimmoi.png" />
        </Link>
        <div className='flex space-x-2'>
            <GenerateDropdown />
            <SearchBar />
              <Link className='mr-10' href="/login">            
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <img className='fill-current w-4 h-4 mr-2' src='/key.svg' />
            <span>Login</span>
          </button></Link>
            <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header