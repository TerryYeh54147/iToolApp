import React, { useState, useEffect, memo } from 'react'
import { isEmpty } from 'lodash'

export interface CardCompProp {
  content: string | React.ReactNode
  title?: string
  className?: string
  overrideClassName?: boolean
  titleClassName?: string
  overrideTitleClassName?: boolean
}
const BasicInfo: React.FC<CardCompProp> = ({
  content,
  title,
  className,
  overrideClassName = false,
  titleClassName,
  overrideTitleClassName = false,
}) => {
  const oriClsName = 'grid grid-flow-row border-2 rounded p-3 hover:shadow-md'
  const oriTitleClsName = 'font-bold text-xl md:text-2xl'
  return (
    <>
      <div
        className={
          isEmpty(className)
            ? oriClsName
            : overrideClassName
              ? className
              : `${oriClsName} ${className}`
        }
      >
        <div
          className={
            isEmpty(titleClassName)
              ? oriTitleClsName
              : overrideTitleClassName
                ? titleClassName
                : `${oriTitleClsName} ${titleClassName}`
          }
        >
          {title}
        </div>
        <div>{content}</div>
      </div>
    </>
  )
}

export default memo(BasicInfo)
