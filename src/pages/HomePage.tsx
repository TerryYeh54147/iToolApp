import React from 'react'
import { useNavigate, useLocation, Path } from 'react-router-dom'
import type { Router } from '@toolpad/core'
import navItems from '@/components/NavItems'
import type { NavigationItem } from '@toolpad/core'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-flow-row place-center gap-5">
        <div className="font-bold text-3xl ma-10 text-center">All Items</div>
        <div className="flex flex-row flex-wrap gap-5">
          {navItems.map((e: NavigationItem, i) => {
            return (
              <>
                {e.kind === 'divider' && (
                  <div
                    key={i}
                    className="w-full border-b border-gray-300"
                  ></div>
                )}
                {e.kind === 'header' && (
                  <div
                    key={i}
                    className="w-full text-bold text-start text-gray-500"
                  >
                    {e.title}
                  </div>
                )}
                {e.kind == null && (
                  <div
                    key={i}
                    className="flex-auto border-solid rounded border-2 hover:border-sky-500 hover:shadow-xl "
                    onClick={() => navigate(`/${e.segment}`)}
                  >
                    <div className="grid grid-flow-row gap-2 place-items-center p-4">
                      {e.icon}
                      <div className="text-wrap text-center text-bold text-xl">
                        {e.title}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage
