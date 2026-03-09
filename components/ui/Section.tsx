import type { PropsWithChildren } from 'react';
import styles from './Section.module.css';

export function Section({ children }: PropsWithChildren) {
  return <section className={styles.section}>{children}</section>;
}
