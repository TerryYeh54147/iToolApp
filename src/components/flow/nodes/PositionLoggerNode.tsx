import { memo } from 'react' // 添加 memo 导入

import { Handle, Position, type NodeProps } from '@xyflow/react'

import { type PositionLoggerNode as PositionLoggerNodeType } from './'

export const PositionLoggerNode = memo(function PositionLoggerNode({
  // 使用 memo 包裹组件
  positionAbsoluteX,
  positionAbsoluteY,
  data,
}: NodeProps<PositionLoggerNodeType>) {
  const x = `${Math.round(positionAbsoluteX)}px`
  const y = `${Math.round(positionAbsoluteY)}px`

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>
        {x} {y}
      </div>

      <Handle type="source" position={Position.Bottom} />
    </div>
  )
})
