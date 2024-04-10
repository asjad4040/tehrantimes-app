import React from 'react'
import { mainLogo } from '../assets'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer className='w-full bg-neutral-900'>
            <div className='flex items-center justify-between mx-4 py-4'>
                <div className='flex flex-col gap-2'>
                    <img src={mainLogo} alt="logo" className='w-28 h-28' />
                    <h1 className='text-white font-garamond font-semibold text-2xl'>Tehran Times</h1>
                    <p className='text-lg text-neutral-400 font-openSans'>Subscribe our NewsLetter for daily updates</p>
                    <div className='flex border border-solid border-neutral-600 rounded-full justify-between'>
                        <input type="text" placeholder='Enter Your Email' className='rounded-full font-roboto bg-slate-100 px-3 py-2'/>
                        <a href="" className='text-neutral-900 bg-slate-100 rounded-full px-3 py-2 font-poppins font-medium'>Subscribe</a>
                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center'>
                    <h2 className='text-white font-openSans font-semibold mb-1'>Quick Links</h2>
                    <ul className='flex flex-col text-slate-100 font-lato gap-4 items-center'>
                        <a href="">Political News</a>
                        <a href="">Israel-Gaza War News</a>
                        <a href="">Terms and Conditions</a>
                        <a href="">Privacy Policies</a>
                    </ul>
                </div>
                <div className='flex flex-col items-start gap-2 text-slate-100'>
                    <h2 className='font-semibold font-openSans text-slate-100'>Social Links</h2>
                    <a href="">
                        <div className='flex gap-2 items-center'>
                            <FaFacebook />
                            <h3>TehranTimes</h3>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex gap-2 items-center'>
                            <FaSquareXTwitter />
                            <h3>@tehrantimes</h3>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex gap-2 items-center'>
                            <FaWhatsapp />
                            <h3>+92-317-0770434</h3>
                        </div>
                    </a>
                    <a href="">
                        <div className='flex gap-2 items-center'>
                            <SiGmail />
                            <h3>asjadabr40@gmail.com</h3>
                        </div>
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer
