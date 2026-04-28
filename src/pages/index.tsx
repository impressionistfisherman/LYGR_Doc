import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docSections = [
  {
    title: 'Apotheosis',
    description: '월드 티어, 보스 드랍, 장비 어픽스와 소켓 강화 흐름.',
    to: '/docs/apotheosis/overview',
    tag: '강화',
  },
  {
    title: 'Silent Gear',
    description: '소재, 등급, 파츠 교체로 장비 성능을 설계하는 법.',
    to: '/docs/silent-gear/overview',
    tag: '장비',
  },
  {
    title: 'Create',
    description: '동력, 기계, 자동화 장치를 단계별로 구축하는 가이드.',
    to: '/docs/create/overview',
    tag: '자동화',
  },
  {
    title: 'Mekanism',
    description: '광물 처리, 에너지, 기계와 장비 진행 루트.',
    to: '/docs/mekanism/overview',
    tag: '기술',
  },
  {
    title: 'Applied Energistics 2',
    description: 'ME 네트워크, 채널, 자동 조합과 고급 운용.',
    to: '/docs/ae2/overview',
    tag: '저장',
  },
  {
    title: 'RPG Skill Trees',
    description: '경험치, 포인트, 속성, 빌드 방향을 정리한 성장 가이드.',
    to: '/docs/skill-system/overview',
    tag: '성장',
  },
  {
    title: 'Spell Engine',
    description: '주문 획득, 시전, 주문력과 전투 운용법.',
    to: '/docs/spell-engine/overview',
    tag: '마법',
  },
  {
    title: 'RPG Classes',
    description: '클래스별 역할, 핵심 스킬, 추천 전투 운영.',
    to: '/docs/classes/class-overview',
    tag: '직업',
  },
  {
    title: 'Boss & Dungeons',
    description: 'Cataclysm, 구조물, 던전 모드의 탐험 순서와 보상.',
    to: '/docs/cataclysm/overview',
    tag: '탐험',
  },
];

const popularGuides = [
  {title: '첫 장비 만들기', to: '/docs/silent-gear/first-gear'},
  {title: '초반 자동화 시작', to: '/docs/create/early-game'},
  {title: '첫 ME 네트워크', to: '/docs/ae2/first-network'},
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>LYGR Guide Hub</span>
            <Heading as="h1" className={styles.heroTitle}>
              Minecraft RPG 서버를 위한 실전 가이드
            </Heading>
            <p className={styles.heroSubtitle}>
              모드별 핵심 진행 루트, 장비 성장, 자동화, 전투 콘텐츠를 바로
              찾아볼 수 있게 정리했습니다.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/silent-gear/overview">
                가이드 시작하기
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/apotheosis/overview">
                강화 가이드
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel} aria-label="Popular guides">
            <span className={styles.panelLabel}>Popular guides</span>
            {popularGuides.map((guide) => (
              <Link className={styles.popularGuide} to={guide.to} key={guide.to}>
                <span>{guide.title}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | Guide Hub`}
      description="LYGR Minecraft RPG server guide hub">
      <HomepageHeader />
      <main>
        <section className={styles.docGrid} id="guides">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Guide categories</span>
              <Heading as="h2">필요한 가이드만 빠르게 찾기</Heading>
              <p>
                Dyte 문서처럼 선택지는 단순하게 유지하고, 각 카테고리는 바로
                본문으로 들어가도록 구성했습니다.
              </p>
            </div>
            <div className={styles.cards}>
              {docSections.map((section) => (
                <Link className={styles.card} to={section.to} key={section.to}>
                  <span className={styles.cardTag}>{section.tag}</span>
                  <strong>{section.title}</strong>
                  <span>{section.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.referenceBand}>
          <div className={clsx('container', styles.referenceLayout)}>
            <div>
              <span className={styles.eyebrow}>Reference</span>
              <Heading as="h2">전체 문서는 좌측 사이드바에서 이어집니다</Heading>
            </div>
            <Link className="button button--outline button--lg" to="/docs/apotheosis/overview">
              전체 가이드 보기
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
