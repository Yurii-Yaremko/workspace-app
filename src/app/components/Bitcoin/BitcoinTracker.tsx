'use client';

import { useState, useCallback } from 'react';
import styles from './BitcoinTracker.module.scss';
import { Transaction } from './types';
import { useWebSocket } from './useWebSocket';
import TransactionList from './TransactionList';
import Controls from './Controls';
import Link from 'next/link';
import pageStyles from '../../page.module.scss';

export default function BitcoinTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  
  const handleTransaction = useCallback((transaction: Transaction) => {
    setTransactions(prev => [transaction, ...prev]);
    setTotalSum(prev => prev + transaction.amount);
  }, []);

  const { isConnected, connect, disconnect } = useWebSocket({
    onTransaction: handleTransaction
  });

  const handleReset = () => {
    setTransactions([]);
    setTotalSum(0);
  };


  return (
    <div className={styles.container}>
      
      <div className={pageStyles.btns}>
        <Link href="/">Go to Home</Link>
      </div>
      <h1>Bitcoin Transactions Tracker</h1>
      
      <Controls 
        isConnected={isConnected}
        onStart={connect}
        onStop={disconnect}
        onReset={handleReset}
      />

      <div className={styles.totalSum}>
        Total Sum: {totalSum.toFixed(8)} BTC
      </div>

      <TransactionList transactions={transactions} />
    </div>
  );
} 