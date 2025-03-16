import { Transaction } from '@types';
import styles from '@bitcoin/BitcoinTracker.module.scss';
import { formatBTCAmount, formatAddress } from '@utils/bitcoin';

interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeaderCell}>From</th>
            <th className={styles.tableHeaderCell}>To</th>
            <th className={styles.tableHeaderCell}>Amount (BTC)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash} className={styles.tableRow}>
              <td className={styles.tableCell}>{formatAddress(tx.from)}</td>
              <td className={styles.tableCell}>{formatAddress(tx.to)}</td>
              <td className={styles.tableCell}>{formatBTCAmount(tx.amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 