import React from 'react'

function Header() {
  return (
    <div className='bg-black bg-inherit flex lg:justify-end justify-start w-full lg:pt-0 pt-10'>
     <nav className='flex flex-col text-white lg:pt-[5%] lg:pr-[10%] lg:pl-0 pl-8 font-sans'>
        <a href='#about'>00 ABOUT</a>
        <a href='#skills'>01 SKILLS</a>
        <a href='#experience'>02 EXPERIENCE</a>
        <a href='#contact'>03 CONTACT</a>
     </nav>
    </div>
  )
}

export default Header