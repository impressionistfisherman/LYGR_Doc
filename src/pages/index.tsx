import type {ReactNode} from 'react';
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
    group: '전투 성장',
  },
  {
    title: 'Silent Gear',
    description: '소재, 등급, 파츠 교체로 장비 성능을 설계하는 법.',
    to: '/docs/silent-gear/overview',
    tag: '장비',
    group: '전투 성장',
  },
  {
    title: 'Create',
    description: '동력, 기계, 자동화 장치를 단계별로 구축하는 가이드.',
    to: '/docs/create/overview',
    tag: '자동화',
    group: '기술 자동화',
  },
  {
    title: 'Mekanism',
    description: '광물 처리, 에너지, 기계와 장비 진행 루트.',
    to: '/docs/mekanism/overview',
    tag: '기술',
    group: '기술 자동화',
  },
  {
    title: 'Applied Energistics 2',
    description: 'ME 네트워크, 채널, 자동 조합과 고급 운용.',
    to: '/docs/ae2/overview',
    tag: '저장',
    group: '기술 자동화',
  },
  {
    title: 'RPG Skill Trees',
    description: '경험치, 포인트, 속성, 빌드 방향을 정리한 성장 가이드.',
    to: '/docs/skill-system/overview',
    tag: '성장',
    group: '전투 성장',
  },
  {
    title: 'Spell Engine',
    description: '주문 획득, 시전, 주문력과 전투 운용법.',
    to: '/docs/spell-engine/overview',
    tag: '마법',
    group: '마법 직업',
  },
  {
    title: 'RPG Classes',
    description: '클래스별 역할, 핵심 스킬, 추천 전투 운영.',
    to: '/docs/classes/class-overview',
    tag: '직업',
    group: '마법 직업',
  },
  {
    title: 'Cataclysm',
    description: 'Cataclysm, 구조물, 던전 모드의 탐험 순서와 보상.',
    to: '/docs/cataclysm/overview',
    tag: '탐험',
    group: '탐험 보스',
  },
];

const quickLinks = [
  {title: '초보자 완전 가이드', meta: '처음 시작', to: '/docs/user-guide/beginners-guide'},
  {title: '장비 제작 루트', meta: 'Silent Gear', to: '/docs/silent-gear/first-gear'},
  {title: '자동화 입문', meta: 'Create', to: '/docs/create/early-game'},
  {title: '보스 진행', meta: 'Cataclysm', to: '/docs/cataclysm/overview'},
];

const routeSteps = [
  {title: '초반 생존', to: '/docs/silent-gear/overview'},
  {title: '자동화 입문', to: '/docs/create/overview'},
  {title: '장비 강화', to: '/docs/apotheosis/overview'},
  {title: '보스 공략', to: '/docs/cataclysm/overview'},
];

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>LYGR Modpack Guide</span>
            <Heading as="h1" className={styles.heroTitle}>
              모팩 한판정리
            </Heading>
            <p className={styles.heroSubtitle}>
              처음 시작할 때 볼 것부터 엔드게임 준비까지.
              <br />
              진행 루트와 핵심 모드 가이드를 한 곳에 모았습니다.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/user-guide/beginners-guide">
                초반 가이드
              </Link>
              <Link className="button button--secondary button--lg" to="#guides">
                모드 선택
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel} aria-label="Quick links">
            <span className={styles.panelLabel}>추천 루트</span>
            {quickLinks.map((guide) => (
              <Link className={styles.popularGuide} to={guide.to} key={guide.to}>
                <span>
                  <small>{guide.meta}</small>
                  {guide.title}
                </span>
                <span aria-hidden="true">&gt;</span>
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
              <span className={styles.eyebrow}>모드 선택</span>
              <Heading as="h2">지금 필요한 모드부터 들어가기</Heading>
              <p>
                전체 모드를 한 목록에 몰아넣지 않고, 목적별로 구분해 바로
                이동할 수 있게 정리했습니다.
              </p>
            </div>
            <div className={styles.routeStrip} aria-label="Recommended route">
              {routeSteps.map((step, index) => (
                <Link className={styles.routeStep} to={step.to} key={step.to}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.title}</strong>
                </Link>
              ))}
            </div>
            <div className={styles.cards}>
              {docSections.map((section) => (
                <Link className={styles.card} to={section.to} key={section.to}>
                  <span className={styles.cardTag}>{section.group} / {section.tag}</span>
                  <strong>{section.title}</strong>
                  <span>{section.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
