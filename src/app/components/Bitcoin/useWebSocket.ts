'use client';

import { useState, useEffect, useCallback } from 'react';
import { Transaction } from '@types';
import { calculateTotalAmount } from '@utils/bitcoin';

const WS_URL = 'wss://ws.blockchain.info/inv';

interface UseWebSocketProps {
  onTransaction: (transaction: Transaction) => void;
}

export function useWebSocket({ onTransaction }: UseWebSocketProps) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      setIsConnected(true);
      ws.send(JSON.stringify({ "op": "unconfirmed_sub" }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === "utx") {
        const tx = data.x;
        const transaction: Transaction = {
          hash: tx.hash,
          from: tx.inputs[0]?.prev_out?.addr || 'Unknown',
          to: tx.out[0]?.addr || 'Unknown',
          amount: calculateTotalAmount(tx.out),
          timestamp: new Date().toISOString()
        };
        onTransaction(transaction);
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    setSocket(ws);
  }, [onTransaction]);

  const disconnect = useCallback(() => {
    if (socket) {
      socket.close();
      setSocket(null);
      setIsConnected(false);
    }
  }, [socket]);

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  return { isConnected, connect, disconnect };
} 