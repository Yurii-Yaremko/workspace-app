'use client';

import dynamic from 'next/dynamic';

const WorkspaceClient = dynamic(() => import('@workspace/WorkspaceClient'), {
  ssr: false,
  loading: () => <div>Loading workspace...</div>
});

export default function ClientWrapper() {
  return <WorkspaceClient />;
} 