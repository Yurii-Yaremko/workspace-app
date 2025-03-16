import styles from '@bitcoin/BitcoinTracker.module.scss';

interface Props {
  isConnected: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function Controls({ onStart, onStop, onReset }: Props) {
  return (
      <div className={styles.controls}>
        <button onClick={onStart} className={styles.controlButton}>Start</button>
        <button onClick={onStop} className={styles.controlButton}>Stop</button>
        <button onClick={onReset} className={styles.controlButton}>Reset</button>
    </div>
  );
} 