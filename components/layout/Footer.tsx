import styles from './Footer.module.css';
import type { SiteDictionary } from '@/types/i18n';

export function Footer({ dict }: { dict: SiteDictionary }) {
  return (
    <footer className={styles.footer}>
      <p>{dict.footer.legal}</p>
      <p>{dict.footer.rights}</p>
    </footer>
  );
}
