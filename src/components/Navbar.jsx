import React from 'react'
import { Link } from 'react-router-dom'
import { mainLogo } from '../assets'
const Navbar = () => {
    return (
        <div id='navbar' className="bg-primary flex flex-row justify-between items-center px-2 w-full h-24 sticky top-0 right-0">
            <a href="/"><img src={mainLogo} alt="main-logo" width={150} height={150} /></a>

            <div>
                <ul className='flex gap-16 font-montserrat text-[20px] text-white font-semibold'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/warnews'}>Gaza-Israel War</Link>
                    <Link>Russia-Ukraine War</Link>
                    <Link>Contact/About</Link>
                </ul>
            </div>
            <div className='flex gap-6 font-roboto items-center pr-2 '>
                <a href="" className=" text-white rounded px-4 py-1 bg-neutral-700 ">SignUp</a>
                <a href="" className="text-neutral-900 underline ">Login</a>
            </div>
        </div>
    )
}

export default Navbar
