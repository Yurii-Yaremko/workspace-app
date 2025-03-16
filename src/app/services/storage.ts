import { BlockData } from "@types";
import { WORKSPACE_CONSTANTS } from "@utils/workspace";

export const StorageService = {
  getBlocks: (): BlockData[] => {
    const savedBlocks = localStorage.getItem('workspace-blocks');
    return savedBlocks ? JSON.parse(savedBlocks) : WORKSPACE_CONSTANTS.DEFAULT_BLOCKS;
  },
  
  saveBlocks: (blocks: BlockData[]): void => {
    localStorage.setItem('workspace-blocks', JSON.stringify(blocks));
  }
};