import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between m-3 bg-zinc-300 p-3 px-8 rounded-full fixed w-[96%]'>
      <div>
      <img className="h-10 bg-cover rounded-md mix-blend-color-burn" src="https://imgs.search.brave.com/SAUAp94ILfS5e3CyaPKYDWZPlRpC78DTsHjUa305_1M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc2LzM0LzU1/LzM2MF9GXzI3NjM0/NTUzM19nUXIwUjJo/NjhjRFkxTVJFMVF5/Ujd5ZFMyWHNpd3g3/VC5qcGc"alt=""/>
      </div>

    <div className='flex gap-8 font-semibold text-2xl'>
      <NavLink className={e=>e.isActive ? "bg-zinc-400 rounded-full px-4":"rounded-full px-4 hover:underline"} to={'/'}>Home</NavLink>
      <NavLink className={e=>e.isActive ? "bg-zinc-400 rounded-full px-4":"rounded-full px-4 hover:underline"} to={'/recipe'}>Recipe</NavLink>
      <NavLink className={e=>e.isActive ? "bg-zinc-400 rounded-full px-4":"rounded-full px-4 hover:underline"} to={'/about'}>About & Contact</NavLink>
    </div>
    </nav>
  )
}

export default Nav