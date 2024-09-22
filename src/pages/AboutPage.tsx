import React from 'react'
import { Avatar } from '@mui/material'
import BasicInfo from '@/components/about/BasicInfo'
import ContactComp from '@/components/about/ContactComp'
import ExperienceTimeline from '@/components/about/ExperienceTimeline'

const About: React.FC = () => {
  return (
    <>
      <div className="grid grid-flow-row gap-4">
        <div className="flex flex-wrap gap-3 justify-self-center items-center">
          <Avatar
            className="w-1/2"
            sx={{ width: 100, height: 100 }}
            alt="my-linkin-avatar"
            src="https://media.licdn.com/dms/image/v2/C4D03AQH6xvbJOgPFnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652593663531?e=1732752000&v=beta&t=r-Fp6kG8sEDndo4fPWkiad8RI8RPU5Z0emnyGaLCPl4"
          />
          <div className="font-bold text-xl text-center">Terry Yeh</div>
        </div>
        <div className="justify-self-center items-center">
          <ContactComp></ContactComp>
        </div>
        <div className="flex flex-row flex-wrap-reverse gap-2 md:gap-1 items-stretch justify-around min-h-max">
          <div className="grid grid-flow-row w-full sm:w-5/12 font-bold gap-2">
            <BasicInfo></BasicInfo>
          </div>
          <div className="w-full sm:w-6/12 font-bold">
            <ExperienceTimeline></ExperienceTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
