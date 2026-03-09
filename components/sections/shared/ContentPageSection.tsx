import type { ContentPageDictionary } from '@/types/i18n';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import styles from './ContentPageSection.module.css';

export function ContentPageSection({ content }: { content: ContentPageDictionary }) {
  return (
    <Section>
      <div className={styles.page}>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        {content.sections.map((section) => (
          <Card key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
