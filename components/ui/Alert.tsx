import type { PropsWithChildren } from 'react';
import styles from './Alert.module.css';

export function Alert({ children, tone = 'info' }: PropsWithChildren<{ tone?: 'info' | 'success' | 'error' }>) {
  return <p className={`${styles.alert} ${styles[tone]}`}>{children}</p>;
}
