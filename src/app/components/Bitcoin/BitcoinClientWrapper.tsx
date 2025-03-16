'use client';

import dynamic from 'next/dynamic';

const BitcoinTracker = dynamic(() => import('@bitcoin/BitcoinTracker'), {
  ssr: false,
  loading: () => <div>Connecting to WebSocket...</div>
});

export default function BitcoinClientWrapper() {
  return <BitcoinTracker />;
} 