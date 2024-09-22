// Drag and drop flow
import { useRef, ChangeEvent, useCallback, useEffect, useState } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  useReactFlow,
} from '@xyflow/react'

import NodePickBar from './NodePickBar'
import { useDnD } from './DnDContext'
import { AppNode, initialNodes, nodeTypes } from '@/components/flow/nodes'
import { initialEdges, edgeTypes } from '@/components/flow/edges'
import { useTheme } from '@mui/material/styles'
let id = 0
const getId = () => `dndnode_${id++}`

export default function DnDFlow() {
  const theme = useTheme()
  const reactFlowWrapper = useRef(null)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { screenToFlowPosition } = useReactFlow()
  const [type, _] = useDnD()

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  )
  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()

      // check if the dropped element is valid
      if (!type) {
        return
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })
      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          label: `${type} node`,
          color: bgColor,
          onColorChange: onColorChange,
        },
      }

      setNodes((nodes) => [...nodes, newNode as AppNode])
    },
    [screenToFlowPosition, type],
  )

  const [bgColor, setBgColor] = useState('#ffffff')
  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value
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
      <div id="dndFlow" className="flex flex-row flex-wrap-reverse">
        <div className="place-center w-full h-[84dvh]" ref={reactFlowWrapper}>
          <ReactFlow
            colorMode={theme.palette.mode}
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
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
                if (n.type === 'color-selector') return n.data?.color as string
                return '#fff'
              }}
            />
            <Controls />
          </ReactFlow>
        </div>
        <div className="border-4 p-2 md:w-full">
          <NodePickBar />
        </div>
      </div>
    </>
  )
}
