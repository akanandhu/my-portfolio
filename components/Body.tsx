import React from 'react'
import MainImage from './MainImage'
import ProPic from '../public/images/propic.jpg'
import Details from './Details'
import GlitchEffect from './GlitchEffect'

function Body() {
  return (
    <div className='bg-black bg-inherit text-white '>
    <MainImage image={ProPic} />
    <Details first_name='Anantha' last_name='Krishnan' />
    {/* <div className='bg-red-500 fixed opacity-30 bottom-0 w-full h-10 footer' >
      hello
    </div> */}
    </div>
  )
}

export default Body