import type { Node, NodeTypes, BuiltInNode } from "@xyflow/react";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { ColorSelectorNode } from "./ColorSelectorNode";
import { ChangeEventHandler } from "react";

export type PositionLoggerNode = Node<
  {
    label?: string;
    color: string;
  } & ColorSelectorNode,
  "position-logger"
>;
export type ColorSelectorNode = Node<
  {
    label?: string;
    color: string;
    onColorChange: ChangeEventHandler<HTMLInputElement> | undefined;
  },
  "color-selector"
>;

export type AppNode = BuiltInNode | PositionLoggerNode | ColorSelectorNode;

export const initialNodes: AppNode[] = [
  // { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  // {
  //   id: "b",
  //   type: "position-logger",
  //   position: { x: -100, y: 100 },
  //   data: { label: "drag me!" },
  // },
  // { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  // {
  //   id: "d",
  //   type: "output",
  //   position: { x: 0, y: 200 },
  //   data: { label: "with React Flow" },
  // },
];

// Add any of your custom nodes here!
export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "color-selector": ColorSelectorNode,
} satisfies NodeTypes;
export type nodesType = keyof typeof nodeTypes | 'input' | 'default' | 'output' 