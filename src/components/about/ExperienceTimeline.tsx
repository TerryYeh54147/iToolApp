import React from 'react'
import CardComp from '@/components/CardComp'

import { Avatar } from '@mui/material'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart'

type ExpContentType = {
  time: string
  content: React.ReactNode
  icon: React.ReactNode
}
const ExpTimeline: React.FC = () => {
  const expList: ExpContentType[] = [
    {
      time: '2020 Jun',
      content: (
        <>
          <div className="font-bold ">B.S. graduated</div>
          <div className="">from NDHU</div>
        </>
      ),
      icon: <LaptopMacIcon />,
    },
    {
      time: '2021 Jun',
      content: (
        <>
          <div className="font-bold ">B.S. graduated</div>
          <div className="">from NDHU</div>
        </>
      ),
      icon: <LaptopMacIcon />,
    },
    {
      time: '2021 Jun',
      content: (
        <>
          <div className="font-bold ">Alpha Pluse Ltd.</div>
          <div className="">IT Dev</div>
        </>
      ),
      icon: <MonitorHeartIcon />,
    },
    {
      time: '2022 July',
      content: (
        <>
          <div className="font-bold ">TSMC</div>
          <div className="">Mask IT</div>
        </>
      ),
      icon: (
        <Avatar
          alt="tsmc-logo"
          src="https://media.licdn.com/dms/image/v2/C560BAQESjKpbeGX8vA/company-logo_200_200/company-logo_200_200/0/1630598291484/tsmc_logo?e=1735171200&v=beta&t=dM5khFolJuIAy6fmkrry3GSKlZwht972obAg47FqP7A"
        ></Avatar>
      ),
    },
  ]
  const isLastItem = (i: number) => {
    return i === expList.length - 1
  }
  const content = (
    <>
      <Timeline position="alternate">
        {expList.map((e: ExpContentType, i) => {
          return (
            <>
              <TimelineItem key={`exp_timeline_item_${i}`}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  <div className="text-wrap">{e.time}</div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={isLastItem(i) ? 'error' : 'grey'}>
                    {e.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  {e.content}
                </TimelineContent>
              </TimelineItem>
            </>
          )
        })}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {new Date().getFullYear()}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'error.main' }} />
            <TimelineDot color="error"></TimelineDot>
          </TimelineSeparator>
          <TimelineContent align='center'>
            <div className="text-gray-500">Now</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )

  return (
    <>
      <CardComp title="Experience" content={content} className="min-w-max h-full" />
    </>
  )
}

export default ExpTimeline
