import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';

interface Props {
    first_name: string
    last_name: string
}



const skills = [
  {
    skill: 'HTML'
  },
  {
    skill: 'CSS'
  },
  {
    skill: 'Next.js'
  },
  {
    skill: 'Tailwind CSS'
  },
  {
    skill: 'React Query'
  },
  {
    skill: 'React Hook Form'
  },

]

const skill = [
  {
    skill: 'Material UI'
  },
  {
    skill: 'Bootstrap'
  },
  {
    skill: 'Ant Design'
  },
  {
    skill: 'Framer Motion'
  },
  {
    skill: 'Figma'
  },
  {
    skill: 'Adobe Photoshop'
  },
{
  skill: ''
}
]


function Details(props:Props) {
    const {first_name, last_name} = props
  return (
    <div >
    <div id='about' className='flex lg:gap-56 lg:flex-row  flex-col '>
        <div className='flex flex-col lg:gap-5   lg:text-9xl text-6xl pt-20 lg:pl-12 opacity-30 font-thin pl-7 '>
           <p>{first_name.toLocaleUpperCase()}</p>
           <p>{last_name.toLocaleUpperCase()}</p> 
        </div> 
        <div className='lg:text-9xl text-6xl hidden lg:flex text-gray-300 opacity-20'>
          <></> <br/>
            <>00.</>
        </div> 
    </div>

    {/* details */}
    <div className='lg:py-40 py-20 flex flex-col gap-10 lg:pl-[55%] '>
        <h1 className='font-bold text-2xl text-start lg:pl-0 pl-8'>FRONT-END DEVELOPER</h1>
        <div className='flex flex-wrap w-80 lg:pl-0 pl-8 leading-8'>
        <p> I'm Ananthakrishnan A, an enthusiastic front-end developer with eight months of professional experience in the field. Currently, I am proud to be a part of Logidots Private Limited, where I contribute to building exceptional user interfaces and crafting seamless web experiences.
With a keen eye for detail and a commitment to delivering high-quality work, I am dedicated to creating engaging web interfaces that not only captivate users but also enhance their overall experience. I am constantly seeking new challenges and opportunities to expand my skill set in this ever-evolving industry.</p>
        </div>
    </div>
    <div  id='skills'>
      <div className='flex gap-10 lg:pl-12 pl-8 h-30 '>
      <p className='text-9xl hidden lg:flex text-gray-300 opacity-20'>01.</p>
      <h1 className='lg:text-6xl text-5xl flex lg:items-end items-center lg:pl-36 '>SKILLS</h1>
      </div>
      <div className='lg:flex lg:justify-center lg:mt-16 mt-9  leading-8 lg:px-0 px-8'>
      <div className='lg:grid lg:grid-cols-3 lg:pl-60'>
        <p className='lg:w-80 flex justify-center'>
        I began my coding journey by teaching myself the fundamentals of HTML, CSS, and JavaScript. As my skills progressed, I delved into the world of React, where I discovered my true passion for front-end development.

I had the opportunity to put my skills to the test at Logidots Pvt Ltd, where I worked as a front-end developer. During my time there, I honed my expertise in Next.js, a powerful framework for building server-side rendered and static websites.

In addition to my experience with Next.js, I have extensive knowledge of popular UI libraries such as Material UI, Ant Design, and Bootstrap.        </p>
        <div className='flex flex-col lg:pl-36'>
         {skills.map((obj:{skill:string}) => {
          return(
            <p key={obj.skill} >{obj.skill}</p>
          )
         })
         }
         
        </div>
        <div className='flex flex-col'>
          {skill.map((obj) => {
            return(
              <p key={obj.skill} >{obj.skill}</p>
            )
          })

          }
        </div>
      </div>

      
      </div>
      
    </div>


    <div id='experience'>
      <div className='flex gap-10 lg:pl-12 pl-8 lg:mt-0 mt-6 h-30 '>
      <p className='text-9xl hidden lg:flex text-gray-300 opacity-20'>02.</p>
      <h1 className='lg:text-6xl text-4xl flex lg:items-end lg:pl-36'>EXPERIENCE</h1>
      </div>
      <div className='flex lg:pl-[26.5%] pl-8 py-16'>
        <div className='lg:flex flex-col gap-16 '>
          <div>
            <p className='font-bold text-2xl'>Logidots</p>
            <p className='text-xs font-semibold'>Sep 2022 - Present</p>
          </div>
          <div className='lg:w-3/6 lg:pt-0 pt-5 leading-8'>
          In my current role at Logidots Pvt Ltd, I am entrusted with managing and executing various frontend tasks for a diverse portfolio of projects across multiple industries. These projects exemplify my commitment to delivering exceptional results and making valuable contributions to the success of the company.         </div>
        </div>
      </div>
      
    </div>


    <div id='contact'>
      <div className='flex gap-10 lg:pl-12 h-30 '>
      <p className='text-9xl hidden lg:flex text-gray-300 opacity-20'>03.</p>
      <h1 className='lg:text-6xl text-3xl flex items-end lg:pl-36 pl-8'>CONTACT</h1>
      </div>
      <div className='flex flex-col gap-5 lg:pl-[26.5%] pl-8 py-16'>
        <div className='flex gap-3 '>
          <div>
          <Icon icon={'tabler:mail'} color='white' fontSize={'2rem'} />
          </div>
          <p className='w-3/6'>
            akananthu11@gmail.com
          </p>
        </div>
        <div className='flex gap-3 '>
          <div>
          <Icon icon={'tabler:brand-github'} color='white' fontSize={'2rem'} />
          </div>
          <p className='w-3/6'>
            github.com/akananadhu
          </p>
        </div>
        <div className='flex gap-3 '>
          <div>
          <Icon icon={'tabler:brand-linkedin'} color='white' fontSize={'2rem'} />
          </div>
          <p className='w-3/6'>
              linkedin.com/in/Ananthakrishnan.A
          </p>
        </div>
        <div className='flex gap-3 '>
          <div>
          <Icon icon={'tabler:device-mobile'} color='white' fontSize={'2rem'} />
          </div>
          <p className='w-3/6'>
              +91-7012896637
          </p>
        </div>
      </div>
      
    </div>

    </div>
  )
}

export default Details