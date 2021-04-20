import React from 'react';
import Link from 'next/link';
import logo from '@assets/img/logo.png';

export default function Header() {
  return (
    <div>
      <nav className='w-full'>
        <Link href='/'>
          <a
            href='/'
            className='flex items-center flex-grow float-left px-0 sm:px-20 sm:p-2'
          >
            <img
              src={logo}
              className='opacity-100 w-20 h-20'
              alt='UniqueCode'
            />
            <span className='font-thin sm:text-3xl'>UniqueCode</span>
          </a>
        </Link>
        <div className='flex float-right font-thin p-8 px-5 text-sm gap-4 sm:gap-12 sm:text-3xl sm:px-20 sm:p-8'>
          <Link href='/projects'>
            <a href='/projects'>프로젝트</a>
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
