import { memo } from 'react'
import { Handle, Position, type NodeProps } from '@xyflow/react'
import { type ColorSelectorNode as ColorSelectorNodeType } from '.'
export const ColorSelectorNode = memo(
  ({ data, isConnectable }: NodeProps<ColorSelectorNodeType>) => {
    return (
      <div
        className="border-zinc-500 border-2 rounded p-2"
        style={{ backgroundColor: data.color }}
      >
        <div className="text-wrap text-center">
          <div className="font-bold"> {data.label}</div>
          <input
            className="nodrag"
            type="color"
            onChange={data.onColorChange}
            defaultValue={data.color}
          />
        </div>
        <Handle
          type="source"
          position={Position.Right}
          id="b"
          style={{ background: '#555' }}
          isConnectable={isConnectable}
        />
      </div>
    )
  },
)
