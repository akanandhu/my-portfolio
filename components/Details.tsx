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
        I began my coding journey by teaching myself the fundamentals of HTML, CSS, and JavaScript. As my skills progressed, I delved into the world of React, where I discovered my true passion for front-end development.

I had the opportunity to put my skills to the test at Logidots Pvt Ltd, where I worked as a front-end developer. During my time there, I honed my expertise in Next.js, a powerful framework for building server-side rendered and static websites.

In addition to my experience with Next.js, I have extensive knowledge of popular UI libraries such as Material UI, Ant Design, and Bootstrap.        </p>
        <div className='flex flex-col pl-36'>
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
          In my current role at Logidots Pvt Ltd, I am entrusted with managing and executing various frontend tasks for a diverse portfolio of projects across multiple industries. These projects exemplify my commitment to delivering exceptional results and making valuable contributions to the success of the company.         </div>
        </div>
      </div>
      
    </div>


    <div id='contact'>
      <div className='flex gap-10 pl-12 h-30 '>
      <p className='text-9xl text-gray-300 opacity-20'>03.</p>
      <h1 className='text-6xl flex items-end pl-36'>CONTACT</h1>
      </div>
      <div className='flex flex-col gap-5 pl-[26.5%] py-16'>
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