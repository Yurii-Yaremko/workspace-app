import { BlockData } from "@types";

export const WORKSPACE_CONSTANTS = {
  GRID_SIZE: 10,
  DEFAULT_BLOCKS: [
    { id: 1, x: 100, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
    { id: 2, x: 420, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
    { id: 3, x: 740, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
    { id: 4, x: 260, y: 220, width: 300, height: 100, zIndex: 1, visible: true },
    { id: 5, x: 580, y: 220, width: 300, height: 100, zIndex: 1, visible: true },
  ]
};

export const snapToGrid = (value: number, gridSize: number): number => {
  return Math.round(value / gridSize) * gridSize;
};

export const getMaxZIndex = (blocks: BlockData[]): number => {
  return Math.max(...blocks.map(b => b.zIndex));
};