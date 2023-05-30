import React from 'react'
import Image from 'next/image'

interface Props {
    first_name: string
    last_name: string
}


function Details(props:Props) {
    const {first_name, last_name} = props
  return (
    <div >
    <div id='about' className='flex gap-56'>
        <div className='flex flex-col leading-4 gap-10 text-9xl pt-20 pl-12 opacity-30'>
           <p>{first_name.toLocaleUpperCase()}</p>  <br/>
           <p>{last_name.toLocaleUpperCase()}</p> 
        </div> 
        <div className='text-9xl text-gray-300 opacity-20'>
          <></> <br/>
            <>00.</>
        </div> 
    </div>

    {/* details */}
    <div className='py-40 flex flex-col gap-10 pl-[55%]'>
        <h1 className='font-bold text-2xl'>FRONT-END DEVELOPER</h1>
        <div className='flex flex-wrap w-80'>
        <p> I'm Ananthakrishnan A, an enthusiastic front-end developer with eight months of professional experience in the field. Currently, I am proud to be a part of Logidots Private Limited, where I contribute to building exceptional user interfaces and crafting seamless web experiences.
With a keen eye for detail and a commitment to delivering high-quality work, I am dedicated to creating engaging web interfaces that not only captivate users but also enhance their overall experience. I am constantly seeking new challenges and opportunities to expand my skill set in this ever-evolving industry.</p>
        </div>
    </div>
    <div id='skills'>
      <div className='flex gap-10 pl-12 h-30 '>
      <p className='text-9xl text-gray-300 opacity-20'>01.</p>
      <h1 className='text-6xl flex items-end pl-36'>SKILLS</h1>
      </div>
      <div className='flex justify-center mt-16'>
      <div className='grid grid-cols-3 pl-60'>
        <p className='w-80'>
        I started out by teaching myself how to code using Codecademy and Treehouse. When I discovered and aptitude and passion for writing code, I decided to attend Front Range Community College to pursue a certificate in front end technologies. Upon finishing the program, I decided I hadn’t had enough so I attended Galvanize, a 6-month immersive full stack development course. Four months into the program I started working professionally as a front-end engineer.
        </p>
        <div className='flex flex-col pl-36'>
         <p>React</p> 
         <p>CSS</p> 
         <p>HTML</p> 
        </div>
        <div className='flex flex-col'>
         <p>React</p> 
         <p>CSS</p> 
         <p>HTML</p> 
        </div>
      </div>

      
      </div>
      
    </div>


    <div id='experience'>
      <div className='flex gap-10 pl-12 h-30 '>
      <p className='text-9xl text-gray-300 opacity-20'>02.</p>
      <h1 className='text-6xl flex items-end pl-36'>EXPERIENCE</h1>
      </div>
      <div className='flex pl-[26.5%] py-16'>
        <div className='flex gap-16 '>
          <div>
            <p className='font-bold text-2xl'>Logidots</p>
            <p className='text-xs font-semibold'>Sep 2022 - Present</p>
          </div>
          <div className='w-3/6'>
          I am currently employed with Vizio as a front end software engineer. I am assisting with, and leading projects in the ad tech space to help develop internal tools for the company.
          </div>
        </div>
      </div>
      
    </div>


    <div id='contact'>
      <div className='flex gap-10 pl-12 h-30 '>
      <p className='text-9xl text-gray-300 opacity-20'>03.</p>
      <h1 className='text-6xl flex items-end pl-36'>CONTACT</h1>
      </div>
      <div className='flex pl-[26.5%] py-16'>
        <div className='flex gap-16 '>
            <div className='font-bold text-2xl'>
              
            </div>
          <p className='w-3/6'>
            akananthu11@gmail.com
          </p>
        </div>
        
      </div>
      
    </div>

    </div>
  )
}

export default Details