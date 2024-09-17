import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react'

import '@xyflow/react/dist/style.css'

import { AppNode, initialNodes, nodeTypes } from '@/components/flow/nodes'
import { initialEdges, edgeTypes } from '@/components/flow/edges'
import { useTheme } from '@mui/material/styles'

export default function FlowPage() {
  const theme = useTheme()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  )
  const [bgColor, setBgColor] = useState('#ffffff')
  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value
    console.log(color)
    setBgColor(color)
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.type === 'color-selector') {
          return { ...node, data: { ...node.data, color } }
        }
        return node
      }),
    )
  }
  useEffect(() => {
    let nodes = [
      ...initialNodes,
      {
        id: 'e',
        type: 'color-selector',
        position: { x: 150, y: 200 },
        data: {
          label: 'Color Picker',
          color: bgColor,
          onColorChange: onColorChange,
        },
      },
    ] satisfies AppNode[]
    setNodes(nodes)
  }, [])

  return (
    <>
      <div className="place-center w-full h-[84dvh]">
        <ReactFlow
          colorMode={theme.palette.mode}
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <MiniMap
            nodeStrokeColor={(n) => {
              if (n.type === 'input') return '#0041d0'
              if (n.type === 'output') return '#ff0072'
              return '#000000'
            }}
            nodeColor={(n) => {
              if (n.type === 'color-selector')
                return n.data?.color as string
              return '#fff'
            }}
          />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
