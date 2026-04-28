import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docSections = [
  {title: 'Apotheosis', to: '/docs/apotheosis/overview'},
  {title: 'RPG Skill Trees', to: '/docs/skill-system/overview'},
  {title: 'Spell Power&engine', to: '/docs/spell-engine/overview'},
  {title: 'Silent Gear', to: '/docs/silent-gear/overview'},
  {title: 'Create', to: '/docs/create/overview'},
  {title: 'Mekanism', to: '/docs/mekanism/overview'},
  {title: 'Applied Energistics2', to: '/docs/ae2/overview'},
  {title: 'Integrated Dungeons And Structures', to: '/docs/idas/overview'},
  {title: 'Lcataclysm', to: '/docs/cataclysm/overview'},
  {title: 'RPG Classes', to: '/docs/classes/class-overview'},
  {title: 'Weapon and Others', to: '/docs/guide-recommended/archers-armory-arsenal'},
  {title: 'Dungeons mods', to: '/docs/wiki-reference/dungeons-arise'},
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
