import Link from 'next/link'
import React from 'react'

export default function LoginButton() {
  return (
    <Link className='mr-10' href="/login">            
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
    <img className='fill-current w-4 h-4 mr-2' src='/key.svg' />
  <span>Login</span>
</button></Link>
  )
}
