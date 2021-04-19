import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <nav className='w-full no-underline'>
        <div className='flex items-center flex-grow float-left px-0 sm:px-20 sm:p-2'>
          <img
            src='/UniqueCode.png'
            height={80}
            width={80}
            className='opacity-100'
            alt='UniqueCode'
          />
          <a className='font-thin sm:text-3xl' href='/'>
            UniqueCode
          </a>
        </div>
        <div className='flex float-right font-thin p-7 px-5 gap-4 sm:gap-12 sm:text-3xl sm:px-20 sm:p-8 font-bold'>
          <Link href='/project'>
            <a href='/project'>프로젝트</a>
          </Link>
          <Link href='/members'>
            <a href='/members'>멤버</a>
          </Link>
          <Link href='/jobs'>
            <a href='/jobs'>채용</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
