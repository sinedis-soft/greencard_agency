import type { HomePageDictionary } from '@/types/i18n';
import { Section } from '@/components/ui/Section';
import styles from './HeroSection.module.css';

export function HeroSection({ content }: { content: HomePageDictionary['hero'] }) {
  return (
    <Section>
      <div className={styles.hero}>
        <span className={styles.badge}>{content.trustBadge}</span>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>
    </Section>
  );
}
