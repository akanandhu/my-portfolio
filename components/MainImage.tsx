import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    image : string | StaticImageData
}
function MainImage(props:Props) {
    const {image} = props 
  return (
    <div className='pl-8 pt-8'>
        <Image className='grayscale' src={image} alt={'profile-pic'} width={325} height={325}  />
    </div>
  )
}

export default MainImage