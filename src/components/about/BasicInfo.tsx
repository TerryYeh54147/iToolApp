import React from 'react'
import CardComp from '@/components/CardComp'
import { Chip } from '@mui/material'
type itSkillInfo = {
  label: string
  icon?: React.ReactNode
  img?: React.ReactNode
}
const BasicInfo: React.FC = () => {
  const itSkills: itSkillInfo[] = [
    { label: 'React' },
    { label: 'Vue2/3' },
    { label: 'JS' },
    { label: 'TS' },
    { label: 'Python' },
    { label: 'Perl' },
    { label: 'Java' },
    { label: 'Oracle' },
    { label: 'Docker' },
    { label: 'CICD' },
  ]
  const content = (
    <>
      <div className="grid grid-flow-row gap-10 h-full">
        <div className="indent-4 text-wrap break-words ">
          Love to explore new things! I’m constantly creating new tools here.
          Your support through donations helps me continue to innovate and bring
          more exciting projects to life. Thank you for your generosity!
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-full">IT Skill:</div>
          {itSkills.map((e, i) => {
            return (
              <>
                <Chip label={e.label} variant="outlined"></Chip>
              </>
            )
          })}
        </div>
      </div>
    </>
  )

  return (
    <>
      <CardComp title="About Me" content={content} className="min-w-fit" />
    </>
  )
}

export default BasicInfo
