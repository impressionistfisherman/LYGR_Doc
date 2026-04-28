---
title: 초반 진행 — 강철과 첫 에너지
sidebar_label: 초반 진행
sidebar_position: 2
description: Metallurgic Infuser로 강철을 만들고 첫 발전기로 에너지를 확보하는 Mekanism 초반 단계를 완전히 이해합니다.
tags: [mekanism, 초반, 강철, 에너지, 발전기]
---

# 초반 진행 — 강철과 첫 에너지

Mekanism은 **강철(Steel)** 을 만드는 것부터 시작합니다.  
강철이 없으면 어떤 기계도 만들 수 없습니다.

---

## Step 1 — Metallurgic Infuser 제작

강철 생산에 필요한 첫 번째 기계입니다.

### 필요 소재
JEI에서 `Metallurgic Infuser` 검색 → 조합법 확인

주요 소재: 오스뮴 주괴, 철 주괴, 레드스톤

### 역할
- 철 + 탄소(석탄/목탄) → 강철 생산
- 각종 합금(Alloy) 제작
- 다양한 주입 레시피 처리

---

## Step 2 — 강철 (Steel) 생산

### 생산 방법

```
1. Metallurgic Infuser에 석탄(Coal) 또는 목탄(Charcoal) 투입
   → 탄소(Carbon) 주입재로 변환 (자동)

2. 철 주괴를 Infuser에 투입
   → 탄소 주입 → 철 주괴 + 탄소 → 강철 주괴
```

### 효율 팁 — Enriched Coal

Enrichment Chamber로 석탄을 먼저 처리하면 **8배 효율**로 탄소 주입재를 만들 수 있습니다.

```
석탄 1개 → Enrichment Chamber → 농축 석탄(Enriched Coal)
농축 석탄 1개 = 일반 석탄 8개 분량의 탄소 주입 가능
```

초반이라도 Enrichment Chamber를 먼저 만들고 석탄을 항상 농축해서 사용하는 것이 좋습니다.

---

## Step 3 — 기계 케이싱 (Machine Casing)

모든 Mekanism 기계의 기본 재료입니다.

### 제작 방법

```
강철 주괴 + 오스뮴 주괴 + 유리 → Basic Machine Casing
```

Machine Casing이 있어야 모든 기계 제작이 가능합니다.

---

## Step 4 — 첫 번째 발전기

기계를 돌리려면 에너지가 필요합니다.

### Heat Generator (열 발전기) — 초반 최우선

| 항목 | 내용 |
|------|------|
| **발전량** | 용암 옆에 설치 시 최대 800 FE/t |
| **소재** | 오스뮴, 철, 레드스톤, 용광로 |
| **특징** | 연료 없이 용암 접촉만으로 발전 가능 |

**설치 방법:**
```
방법 1 — 수동 연료:
  Heat Generator에 석탄, 목탄 등 연료 투입
  → 연료 소모하며 발전 (비효율)

방법 2 — 용암 수동 접촉:
  Heat Generator 옆면에 용암 버킷 배치
  → 연료 없이 지속 발전 (비효율적이지만 쉬움)

방법 3 — 용암 파이프 연결 (추천):
  Heat Generator 6면을 용암이 채워진 상태로 설치
  → 최대 800 FE/t 수동 발전
  → 주변에 용암을 채우고 Configurator로
     각 면을 "Heat" 모드로 설정
```

:::tip 초반 가장 쉬운 발전 방법
Heat Generator 아래와 옆면을 용암 버킷으로 채우세요.  
연료 없이 지속 발전이 가능합니다.
:::

---

### Wind Generator (풍력 발전기)

| 항목 | 내용 |
|------|------|
| **발전량** | 높이에 따라 최대 480 FE/t |
| **특징** | 높은 위치일수록 발전량 증가 |
| **권장 설치 높이** | Y=192 이상 |

연료 없이 지속 발전하는 무한 에너지원입니다.  
초반 여러 개 설치해두면 에너지 걱정이 사라집니다.

---

### Solar Generator (태양 발전기)

| 항목 | 내용 |
|------|------|
| **발전량** | 낮 기준 최대 120 FE/t |
| **특징** | 낮에만 발전, 날씨 영향 받음 |
| **Advanced Solar Generator** | 발전량 약 8배, 날씨 무관 |

---

## Step 5 — 에너지 케이블 연결

발전기에서 기계로 에너지를 전달하는 케이블입니다.

| 케이블 | 용량 | 소재 |
|--------|------|------|
| **Basic Universal Cable** | 기본 | 오스뮴, 강철 |
| **Advanced Universal Cable** | 중간 | — |
| **Elite Universal Cable** | 고급 | — |
| **Ultimate Universal Cable** | 최대 | — |

### 연결 방법
케이블을 발전기와 기계 사이에 설치하면 자동 연결됩니다.  
**Configurator** 도구로 각 기계의 입력/출력 면을 설정할 수 있습니다.

---

## Step 6 — Configurator (설정 도구)

Mekanism 기계 설정의 핵심 도구입니다.

```
Configurator 손에 들고 기계 면에 우클릭
→ 해당 면의 모드 변경
```

| 색상/모드 | 의미 |
|-----------|------|
| **파란색 (Input)** | 아이템/에너지 입력 |
| **주황색 (Output)** | 아이템/에너지 출력 |
| **빨간색 (Extra)** | 부가 입력 (가스, 액체 등) |
| **회색 (None)** | 비활성화 |

모든 기계의 입력/출력 면을 Configurator로 직접 설정해야 자동화가 됩니다.

---

## 초반 체크리스트

```
[ ] 오스뮴 2~3스택 확보
[ ] Metallurgic Infuser 제작
[ ] 강철 주괴 1스택 이상 생산
[ ] Machine Casing 다량 제작
[ ] Heat Generator 또는 Wind Generator 설치
[ ] Basic Energy Cube로 에너지 저장
[ ] Configurator 제작
[ ] Enrichment Chamber + Energized Smelter → 광석 2배 처리 시작
```
