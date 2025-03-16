export interface BlockData {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    zIndex: number;
    visible: boolean;
  }
  
  export interface BlockProps {
    block: BlockData;
    onDragStop: (id: number, x: number, y: number) => void;
    onResize: (id: number, width: number, height: number, x: number, y: number) => void;
    onClick: (id: number) => void;
    onDelete: (id: number) => void;
    gridSize: number;
  }
  
  export interface UseBlocksReturn {
    blocks: BlockData[];
    handleDragStop: (id: number, x: number, y: number) => void;
    handleResize: (id: number, width: number, height: number, x: number, y: number) => void;
    bringToFront: (id: number) => void;
    deleteBlock: (id: number) => void;
    handleReset: () => void;
  }

  export interface Transaction {
    hash: string;
    from: string;
    to: string;
    amount: number;
    timestamp: string;
  }

  export interface TransactionOutput {
    value: number;
    addr?: string;
  } 