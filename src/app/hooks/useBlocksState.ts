import { BlockData } from "@types";
import { getMaxZIndex } from "@utils/workspace";

export const useBlocksState = (
  blocks: BlockData[],
  setBlocks: React.Dispatch<React.SetStateAction<BlockData[]>>
) => {
  const bringToFront = (id: number) => {
    const maxZ = getMaxZIndex(blocks);
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, zIndex: maxZ + 1 } : block
    ));
  };

  const deleteBlock = (id: number) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, visible: false } : block
    ));
  };

  return { bringToFront, deleteBlock };
};