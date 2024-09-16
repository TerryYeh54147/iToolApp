import type { NodeProps } from '@xyflow/react'
export type NodeDataType = {
    color?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FlowNodeProps extends NodeProps {
    data: NodeDataType
}