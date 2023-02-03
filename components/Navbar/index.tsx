import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/Logo-white.png'

const Navbar = () => {
  return (
    <div className='bg-gray-500 h-screen px-10 py-3'>
        <div>
            <Image src={Logo} alt=""/>
            {/* NavLink */}
            <ul className='text-center space-y-10 mt-20'>
                <li>
                    <Link href={'/'}>Dashboard</Link>
                </li>
                <li>
                    <Link href={'/'}>Homepage</Link>
                </li>
                <li>
                    <Link href={'/'}>Homepage</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar