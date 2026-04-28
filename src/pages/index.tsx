import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docSections = [
  {title: 'Apotheosis', to: '/docs/apotheosis/overview'},
  {title: 'skill-system', to: '/docs/skill-system/overview'},
  {title: 'spell-engine', to: '/docs/spell-engine/overview'},
  {title: 'silent-gear', to: '/docs/silent-gear/overview'},
  {title: 'create', to: '/docs/create/overview'},
  {title: 'mekanism', to: '/docs/mekanism/overview'},
  {title: 'ae2', to: '/docs/ae2/overview'},
  {title: 'idas', to: '/docs/idas/overview'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Minecraft RPG Server Guide
        </p>
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
