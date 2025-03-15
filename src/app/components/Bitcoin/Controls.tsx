import styles from './BitcoinTracker.module.scss';

interface Props {
  isConnected: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function Controls({ onStart, onStop, onReset }: Props) {
  return (
      <div className={styles.controls}>
        <button onClick={onStart}>Start</button>
        <button onClick={onStop}>Stop</button>
      
      <button onClick={onReset}>Reset</button>
    </div>
  );
} 