import type { HomePageDictionary } from '@/types/i18n';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import styles from './BenefitsSection.module.css';

export function BenefitsSection({ content }: { content: HomePageDictionary['benefits'] }) {
  return (
    <Section>
      <div className={styles.benefits}>
        <h2>{content.title}</h2>
        <div className={styles.grid}>
          {content.items.map((item) => (
            <Card key={item}>{item}</Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
