import { Transaction } from './types';
import styles from './BitcoinTracker.module.scss';

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div className={styles.transactionList}>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount (BTC)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash}>
              <td>{tx.from.slice(0, 20)}...</td>
              <td>{tx.to.slice(0, 20)}...</td>
              <td>{tx.amount.toFixed(8)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 