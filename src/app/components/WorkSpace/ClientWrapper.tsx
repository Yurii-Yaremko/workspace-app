'use client';

import dynamic from 'next/dynamic';

const WorkspaceClient = dynamic(() => import('./WorkspaceClient'), {
  ssr: false,
  loading: () => <div>Loading workspace...</div>
});

export default function ClientWrapper() {
  return <WorkspaceClient />;
} 