'use client';

import { useState, useEffect } from 'react';
import { BlockData, UseBlocksReturn } from './Types';

const GRID_SIZE = 10;

const defaultBlocks: BlockData[] = [
  { id: 1, x: 100, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
  { id: 2, x: 420, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
  { id: 3, x: 740, y: 100, width: 300, height: 100, zIndex: 1, visible: true },
  { id: 4, x: 260, y: 220, width: 300, height: 100, zIndex: 1, visible: true },
  { id: 5, x: 580, y: 220, width: 300, height: 100, zIndex: 1, visible: true },
];

export const useBlocks = (): UseBlocksReturn => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);

  useEffect(() => {
    const savedBlocks = localStorage.getItem('workspace-blocks');
    setBlocks(savedBlocks ? JSON.parse(savedBlocks) : defaultBlocks);
  }, []);

  useEffect(() => {
    if (blocks.length > 0) {
      localStorage.setItem('workspace-blocks', JSON.stringify(blocks));
    }
  }, [blocks]);

  const snapToGrid = (value: number) => {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  };

  const handleDragStop = (id: number, x: number, y: number) => {
    setBlocks(blocks.map(block => 
      block.id === id 
        ? { ...block, x: snapToGrid(x), y: snapToGrid(y) }
        : block
    ));
  };

  const handleResize = (id: number, width: number, height: number, x: number, y: number) => {
    setBlocks(blocks.map(block =>
      block.id === id
        ? { 
            ...block, 
            width: snapToGrid(width), 
            height: snapToGrid(height),
            x: snapToGrid(x),
            y: snapToGrid(y)
          }
        : block
    ));
  };

  const bringToFront = (id: number) => {
    const maxZ = Math.max(...blocks.map(b => b.zIndex));
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, zIndex: maxZ + 1 } : block
    ));
  };

  const deleteBlock = (id: number) => {
    setBlocks(blocks.map(block =>
      block.id === id ? { ...block, visible: false } : block
    ));
  };

  const handleReset = () => {
    setBlocks(defaultBlocks);
    localStorage.setItem('workspace-blocks', JSON.stringify(defaultBlocks));
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