import { createContext, useContext, useState } from 'react'
import type { ParentProps } from '@/types/component'
import type { nodesType } from '@/components/flow/nodes'
const DnDContext = createContext(['default', (_: nodesType) => {}])

export const DnDProvider = ({ children }: ParentProps) => {
  const [type, setType] = useState<nodesType>('default')

  return (
    <DnDContext.Provider value={[type, setType]}>
      {children}
    </DnDContext.Provider>
  )
}

export default DnDContext

export const useDnD = () => {
  return useContext(DnDContext)
}
