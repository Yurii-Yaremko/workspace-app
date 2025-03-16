import { BlockData } from "@types";
import { snapToGrid } from "@utils/workspace";

export const useBlocksPosition = (
  blocks: BlockData[],
  setBlocks: React.Dispatch<React.SetStateAction<BlockData[]>>,
  gridSize: number
) => {
  const handleDragStop = (id: number, x: number, y: number) => {
    setBlocks(blocks.map(block => 
      block.id === id 
        ? { ...block, x: snapToGrid(x, gridSize), y: snapToGrid(y, gridSize) }
        : block
    ));
  };

  const handleResize = (id: number, width: number, height: number, x: number, y: number) => {
    setBlocks(blocks.map(block =>
      block.id === id
        ? { 
            ...block, 
            width: snapToGrid(width, gridSize), 
            height: snapToGrid(height, gridSize),
            x: snapToGrid(x, gridSize),
            y: snapToGrid(y, gridSize)
          }
        : block
    ));
  };

  return { handleDragStop, handleResize };
};