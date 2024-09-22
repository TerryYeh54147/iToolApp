import React from 'react'
import CardComp from '@/components/CardComp'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'

type ContactInfoType = {
  title: string
  label: string
  icon: React.ReactNode
  link?: string
}
const ContactInfo: React.FC = () => {
  const contactInfos: ContactInfoType[] = [
    {
      title: 'Github',
      label: 'Github',
      icon: <GitHubIcon></GitHubIcon>,
      link: 'https://github.com/TerryYeh54147',
    },
    {
      title: 'Linkin',
      label: 'Linkin',
      icon: <LinkedInIcon></LinkedInIcon>,
      link: 'https://www.linkedin.com/in/scye-83338a23a/',
    },
    {
      title: 'Email',
      label: 'terry54147@outlook.com',
      link: 'mailto:terry54147@outlook.com',
      icon: <AlternateEmailIcon></AlternateEmailIcon>,
    },
    {
      title: 'Instagram',
      label: 'IG',
      icon: <InstagramIcon></InstagramIcon>,
      link: 'https://www.instagram.com/terry54147/',
    },
  ]
  const content = (
    <>
      <div className="flex gap-3">
        {contactInfos.map((e, i) => {
          return (
            <div key={`contact_info_${i}`}>
              <div className="grid grid-flow-row">
                <div>{e.title}</div>
                <div className="justify-self-center">
                  {e.link !== undefined ? (
                    <IconButton
                      className="w-fit"
                      aria-label={e.label}
                      onClick={() => window.open(e.link, '_blank')}
                    >
                      {e.icon}
                    </IconButton>
                  ) : (
                    <div>
                      {e.icon}: {e.label}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )

  return (
    <>
      {content}
      {/* <CardComp title="Contact Me" content={content} className="min-w-fit max-w-full" /> */}
    </>
  )
}

export default ContactInfo
