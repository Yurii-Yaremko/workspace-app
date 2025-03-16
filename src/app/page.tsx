import Link from 'next/link';
import pageStyles from './page.module.scss';
import styles from '@workspace/WorkspaceClient.module.scss';

export default function Home() {
  return (
    <div className={styles.workspace}>
      <h1 className={pageStyles.title}>Welcome to Workspace App</h1>
      <div className={pageStyles.btns}>
        <Link className={pageStyles['btns__link']} href="/workspace">Go to Workspace</Link>
        <Link className={pageStyles['btns__link']} href="/bitcoin">Go to Bitcoin</Link>
      </div>
    </div>
  );
} 