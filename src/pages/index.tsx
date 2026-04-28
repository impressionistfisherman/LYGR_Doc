import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docSections = [
  {title: 'Apotheosis', to: '/docs/apotheosis/overview'},
  {title: '스킬 시스템', to: '/docs/skill-system/overview'},
  {title: '마법 시스템', to: '/docs/spell-engine/overview'},
  {title: '장비 제작', to: '/docs/silent-gear/overview'},
  {title: '자동화', to: '/docs/create/overview'},
  {title: '산업 자동화', to: '/docs/mekanism/overview'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/silent-gear/overview">
            문서 바로가기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.docGrid}>
          <div className="container">
            <Heading as="h2">문서 목록</Heading>
            <div className={styles.cards}>
              {docSections.map((section) => (
                <Link className={styles.card} to={section.to} key={section.to}>
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
