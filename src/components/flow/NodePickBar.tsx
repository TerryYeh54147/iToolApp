import { useDnD } from './DnDContext'
import { nodesType } from './nodes'

export default () => {
  const [_, setType] = useDnD()
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: nodesType,
  ) => {
    if (typeof setType === 'function') {
      setType(nodeType)
    }
    event.dataTransfer.effectAllowed = 'move'
  }
  const nodeClsName = 'border-2 rounded p-2'
  return (
    <aside className="space-y-2">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className={`${nodeClsName} border-blue-500`}
        onDragStart={(event) => onDragStart(event, 'input')}
        draggable
      >
        Input Node
      </div>
      <div
        className={`${nodeClsName} border-zinc-500`}
        onDragStart={(event) => onDragStart(event, 'color-selector')}
        draggable
      >
        Color Picker
      </div>
      <div
        className={`${nodeClsName} border-pink-500`}
        onDragStart={(event) => onDragStart(event, 'output')}
        draggable
      >
        Output Node
      </div>
    </aside>
  )
}
