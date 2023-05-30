import React from 'react'

function Header() {
  return (
    <div className='bg-black bg-inherit flex justify-end'>
     <nav className='flex flex-col text-white pt-[5%] pr-[10%] font-sans'>
        <a href='#about'>00 ABOUT</a>
        <a href='#skills'>01 SKILLS</a>
        <a href='#experience'>02 EXPERIENCE</a>
        <a href='#contact'>03 CONTACT</a>
     </nav>
    </div>
  )
}

export default Header