import React, { useState, useRef } from 'react'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva'
import { saveAs } from 'file-saver'
import {
  IconButton,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Snackbar,
  Fade,
} from '@mui/material'
import {
  DrawTwoTone,
  Opacity,
  DriveFileRenameOutline,
  CropDin,
  RadioButtonUnchecked,
  Rectangle,
  Undo,
  Redo,
  RestartAlt,
  Save,
} from '@mui/icons-material'
import { TransitionProps } from '@mui/material/transitions'

export interface SnackbarInfo {
  isOpen: false
  msg: string
  autoHideDuration?: number
  Transition?: React.ComponentType<
    TransitionProps & {
      children: React.ReactElement<any, any>
    }
  >
}
export type BrashToolType = 'pen' | 'rect' | 'line' | 'circle' | 'eraser'
const PaintApp: React.FC = () => {
  const [tool, setTool] = useState<BrashToolType>('pen')
  const [elements, setElements] = useState<any[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [strokeColor, setStrokeColor] = useState('#000000')
  const [strokeWidth, setStrokeWidth] = useState(5)
  const [opacity, setOpacity] = useState(1)
  const stageRef = useRef<any>(null)
  const [history, setHistory] = useState<any[]>([])
  const [redoStack, setRedoStack] = useState<any[]>([])
  const [canvasImage, setCanvasImage] = useState<HTMLImageElement | null>(null)
  // TODO:
  // const [snackbarInfo, setSnackbarInfo] = useState<SnackbarInfo>({
  //   isOpen: false,
  //   msg: '',
  //   autoHideDuration: 3000,
  //   Transition: Fade,
  // })
  // function handleSnackbarOpen(msg: string) {

  // }
  // function handleSnackbarClose() {
  //   snackbarInfo.isOpen = false
  //   snackbarInfo.msg = ''
  // }

  const handleBrashTool = (
    event: React.MouseEvent<HTMLElement>,
    val: BrashToolType | null,
  ) => {
    if (val != null) {
      setTool(val)
    }
  }

  const handleMouseDown = (e: any) => {
    setIsDrawing(true)
    const pos = e.target.getStage().getPointerPosition()
    const newElement: any = {
      tool,
      strokeColor,
      strokeWidth,
      opacity,
      points: [pos.x, pos.y],
    }

    setElements([...elements, newElement])
  }

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return

    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    let lastElement = elements[elements.length - 1]

    if (tool === 'pen' || tool === 'eraser') {
      lastElement.points = lastElement.points.concat([point.x, point.y])
    } else {
      const [x0, y0] = lastElement.points
      lastElement.points = [x0, y0, point.x, point.y]
    }

    elements.splice(elements.length - 1, 1, lastElement)
    setElements(elements.concat())
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
    setHistory([...history, elements])
  }

  const handleUndo = () => {
    const newHistory = [...history]
    const lastState = newHistory.pop()
    setRedoStack([...redoStack, elements])
    setElements(lastState || [])
    setHistory(newHistory)
  }

  const handleRedo = () => {
    if (redoStack.length === 0) return
    const newRedoStack = [...redoStack]
    const lastRedo = newRedoStack.pop()
    setHistory([...history, elements])
    setElements(lastRedo)
    setRedoStack(newRedoStack)
  }

  const handleClear = () => {
    setElements([])
    setHistory([])
    setRedoStack([])
  }

  const handleSave = () => {
    if (window.confirm('Do you wanna download your masterpiece?')) {
      stageRef.current.toImage({
        callback(image: HTMLImageElement) {
          const dataURL = image.src
          const blob = dataURLToBlob(dataURL)
          saveAs(blob, 'drawing.png')
        },
      })
    } else {
      // TODO:
      // handleSnackbarOpen('Keep enjoy your painint ~')
    }
  }

  const handleImportImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function (event) {
        const image = new window.Image()
        image.src = event.target?.result as string
        image.onload = function () {
          setCanvasImage(image)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const dataURLToBlob = (dataURL: string) => {
    const parts = dataURL.split(';base64,')
    const contentType = parts[0].split(':')[1]
    const raw = window.atob(parts[1])
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], { type: contentType })
  }

  const drawElement = (el: any, key: number) => {
    switch (el.tool) {
      case 'pen':
        return (
          <Line
            key={key}
            points={el.points}
            stroke={el.strokeColor}
            strokeWidth={el.strokeWidth}
            opacity={el.opacity}
          />
        )
      case 'eraser':
        return (
          <Line
            key={key}
            points={el.points}
            stroke="#FFFFFF"
            strokeWidth={el.strokeWidth}
            opacity={el.opacity}
          />
        )
      case 'rect':
        const [x0, y0, x1, y1] = el.points
        return (
          <Rect
            key={key}
            x={Math.min(x0, x1)}
            y={Math.min(y0, y1)}
            width={Math.abs(x1 - x0)}
            height={Math.abs(y1 - y0)}
            stroke={el.strokeColor}
            strokeWidth={el.strokeWidth}
            opacity={el.opacity}
          />
        )
      case 'circle':
        const [cx0, cy0, cx1, cy1] = el.points
        const radius = Math.hypot(cx1 - cx0, cy1 - cy0)
        return (
          <Circle
            key={key}
            x={cx0}
            y={cy0}
            radius={radius}
            stroke={el.strokeColor}
            strokeWidth={el.strokeWidth}
            opacity={el.opacity}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div id="tools" className="grid grid-row-3 border p-4">
        <div id="brash-tools" className="pb-4">
          <ToggleButtonGroup
            value={tool}
            color="primary"
            exclusive
            onChange={handleBrashTool}
            aria-label="Brash Tools"
          >
            <ToggleButton value="pen" aria-label="pen">
              <DrawTwoTone />
            </ToggleButton>
            <ToggleButton value="rect" aria-label="rect">
              <CropDin />
            </ToggleButton>
            <ToggleButton value="circle" aria-label="circle">
              <RadioButtonUnchecked />
            </ToggleButton>
            <ToggleButton value="eraser" aria-label="eraser">
              <Rectangle className="-rotate-45" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div id="brash-setting" className="flex flex-wrap gap-1 justify-around">
          <div className="w-1/12">
            <input
              type="color"
              value={strokeColor}
              onChange={(e) => setStrokeColor(e.target.value)}
            />
          </div>
          <div className="w-5/12 grid grid-cols-12">
            <DriveFileRenameOutline />
            <Slider
              className="col-span-11"
              min={1}
              max={10}
              value={strokeWidth}
              onChange={(e, value) => setStrokeWidth(value as number)}
            />
          </div>
          <div className="w-5/12 grid grid-cols-12">
            <Opacity />
            <Slider
              className="col-span-11"
              min={0.1}
              max={1}
              step={0.1}
              value={opacity}
              onChange={(e, value) => setOpacity(value as number)}
            />
          </div>
        </div>
        <div id="action-tools" className="flex flex-wrap gap-2">
          <IconButton onClick={handleUndo}>
            <Undo />
          </IconButton>
          <IconButton onClick={handleRedo}>
            <Redo />
          </IconButton>
          <IconButton onClick={handleClear}>
            <RestartAlt />
          </IconButton>
          <IconButton onClick={handleSave}>
            <Save />
          </IconButton>
          <div className="flex flex-wrap gap-2">
            <div>import background image...</div>
            <input
              type="file"
              onChange={handleImportImage}
              className="col-span-11"
            />
          </div>
        </div>
      </div>
      <Stage
        className="border mt-4 hover:cursor-crosshair"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {canvasImage && (
            <Rect
              x={0}
              y={0}
              width={window.innerWidth}
              height={window.innerHeight}
              fillPatternImage={canvasImage}
              fillPatternScale={{
                x: window.innerWidth / canvasImage.width,
                y: window.innerHeight / canvasImage.height,
              }}
            />
          )}
          {elements.map((el, i) => drawElement(el, i))}
        </Layer>
      </Stage>
      {/* TODO: <Snackbar
        open={snackbarInfo.isOpen}
        onClose={handleSnackbarClose}
        TransitionComponent={snackbarInfo.Transition}
        message={snackbarInfo.msg}
        key={snackbarInfo.Transition?.name}
        autoHideDuration={1200}
      /> */}
    </div>
  )
}

export default PaintApp
