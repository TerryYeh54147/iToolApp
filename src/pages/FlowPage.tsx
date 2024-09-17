import { ReactFlowProvider } from '@xyflow/react'
import { DnDProvider } from '@/components/flow/DnDContext'
import DnDFlow from '@/components/flow/DnDFlow'
import '@xyflow/react/dist/style.css'

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
)
