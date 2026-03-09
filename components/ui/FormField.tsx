import type { PropsWithChildren } from 'react';
import styles from './FormField.module.css';

export function FormField({ children }: PropsWithChildren) {
  return <label className={styles.field}>{children}</label>;
}
