'use client';

import styles from '@workspace/WorkspaceClient.module.scss';
import Block from '@workspace/Block';
import { useBlocks } from '@workspace/useBlocks';
import Link from 'next/link';
  import pageStyles from '../../page.module.scss';

const GRID_SIZE = 10;

export default function WorkspaceClient() {
  const {
    blocks,
    handleDragStop,
    handleResize,
    bringToFront,
    deleteBlock,
    handleReset
  } = useBlocks();


  return (
    <div className={styles.workspace}>
      <div className={pageStyles.btns}>
        <Link href="/" className={pageStyles['btns__link']}>
          Go to Home
        </Link>
        <button className={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </div>
      {blocks.map((block) => block.visible && (
        <Block
          key={block.id}
          block={block}
          onDragStop={handleDragStop}
          onResize={handleResize}
          onClick={bringToFront}
          onDelete={deleteBlock}
          gridSize={GRID_SIZE}
        />
      ))}
      
    </div>
  );
}