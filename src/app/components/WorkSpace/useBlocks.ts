'use client';

import { useState, useEffect } from 'react';
import { BlockData } from '@types';
import { WORKSPACE_CONSTANTS } from '@utils/workspace';
import { StorageService } from '@services/storage';
import { useBlocksPosition } from '@hooks/useBlocksPosition';
import { useBlocksState } from '@hooks/useBlocksState';

export const useBlocks = () => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);

  useEffect(() => {
    setBlocks(StorageService.getBlocks());
  }, []);

  useEffect(() => {
    if (blocks.length > 0) {
      StorageService.saveBlocks(blocks);
    }
  }, [blocks]);

  const { handleDragStop, handleResize } = useBlocksPosition(blocks, setBlocks, WORKSPACE_CONSTANTS.GRID_SIZE);
  const { bringToFront, deleteBlock } = useBlocksState(blocks, setBlocks);

  const handleReset = () => {
    const defaultBlocks = WORKSPACE_CONSTANTS.DEFAULT_BLOCKS;
    setBlocks(defaultBlocks);
    StorageService.saveBlocks(defaultBlocks);
  };

  return {
    blocks,
    handleDragStop,
    handleResize,
    bringToFront,
    deleteBlock,
    handleReset
  };
};