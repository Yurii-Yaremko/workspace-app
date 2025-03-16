'use client';

import { Rnd } from 'react-rnd';
import styles from '@workspace/WorkspaceClient.module.scss';
import { BlockProps } from '@types';

export default function Block({
  block,
  onDragStop,
  onResize,
  onClick,
  onDelete,
  gridSize
}: BlockProps) {
  return (
    <Rnd
      key={block.id}
      default={{
        x: block.x,
        y: block.y,
        width: block.width,
        height: block.height
      }}
      position={{ x: block.x, y: block.y }}
      size={{ width: block.width, height: block.height }}
      style={{ zIndex: block.zIndex }}
      className={styles.block}
      bounds="parent"
      onDragStop={(_, data) => onDragStop(block.id, data.x, data.y)}
      onResize={(_, __, ref, ___, position) => {
        onResize(
          block.id,
          ref.offsetWidth,
          ref.offsetHeight,
          position.x,
          position.y
        );
      }}
      onClick={() => onClick(block.id)}
      dragGrid={[gridSize, gridSize]}
      resizeGrid={[gridSize, gridSize]}
    >
      <div className={styles.blockContent}>
        <span>{block.id}</span>
        <button 
          className={styles.deleteButton}
          onClick={(e) => {
            e.stopPropagation();
            onDelete(block.id);
          }}
        >
          ×
        </button>
      </div>
    </Rnd>
  );
}