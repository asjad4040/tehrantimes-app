import React from 'react'
import { Link } from 'react-router-dom'
const SubNav = () => {
  return (
    <div id='sub-nav' className='bg-neutral-900'>
      <ul className='flex text-neutral-300 gap-16 font-montserrat py-2 justify-center font-semibold'>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>International</Link>
        <Link to={"/politics"}>Politics</Link>
        <Link to={"/business"}>Business</Link>
        <Link to={"/crypto"}>Stock Market</Link>
        <Link to={"/technology"}>Technology</Link>
      </ul>
    </div>
  )
}

export default SubNav
