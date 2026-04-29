---
title: 광석 처리 시스템 (2x \~ 5x)
sidebar_label: 광석 처리
sidebar_position: 3
description: Mekanism의 핵심인 광석 처리 1\~5배 증산 시스템을 단계별로 완전히 이해합니다.
tags: [mekanism, 광석처리, 증산, 자동화]
---

# 광석 처리 시스템 (2x \~ 5x)

Mekanism의 핵심은 **광석 하나에서 최대 5개의 주괴**를 얻는 것입니다.  
각 티어는 이전 티어의 기계를 모두 포함하며 새 기계가 추가됩니다.

:::info 실크터치 vs 일반 채굴
광석 블록(실크터치 채굴)을 처리하면 더 높은 증산 효율을 얻습니다.  
가능하면 실크터치로 광석을 채굴해서 처리하세요.
:::

---

## Tier 0 — 기본 제련 (1x)

바닐라 제련 방식입니다.

```
광석 1개 → Energized Smelter → 주괴 1개
```

Energized Smelter는 바닐라 용광로보다 빠르고 에너지로 작동합니다.

---

## Tier 1 — 2배 처리 (2x)

가장 먼저 구축해야 할 기본 라인입니다.

### 필요 기계

| 기계 | 역할 |
|------|------|
| **Enrichment Chamber** | 광석 → 분말 2개 |
| **Energized Smelter** | 분말 → 주괴 |

### 처리 흐름

```
광석 1개 → [Enrichment Chamber] → 분말 2개
분말 2개 → [Energized Smelter]  → 주괴 2개
```

### 설치 방법

두 기계를 나란히 붙여 설치하면 자동으로 아이템이 전달됩니다.  
Logistical Transporter(물류 파이프)로 연결해도 됩니다.

---

## Tier 2 — 3배 처리 (3x)

가스(산소)가 처음 등장하는 단계입니다.

### 새로 필요한 기계

| 기계 | 역할 |
|------|------|
| **Purification Chamber** | 광석 + 산소 → 덩어리(Clump) 3개 |
| **Crusher** | 덩어리 → 더러운 분말(Dirty Dust) |
| **Electric Pump** | 물 자동 수집 |
| **Electrolytic Separator** | 물 → 수소 + 산소 분리 |

### 처리 흐름

```
물 → [Electric Pump] → [Electrolytic Separator] → 산소 + 수소

광석 1개 + 산소 → [Purification Chamber] → 덩어리 3개
덩어리 3개     → [Crusher]              → 더러운 분말 3개
더러운 분말 3개 → [Enrichment Chamber]  → 분말 3개
분말 3개       → [Energized Smelter]    → 주괴 3개
```

### 산소 생산 시스템

```
1. Electric Pump를 물가에 설치
2. Basic Mechanical Pipe로 Electrolytic Separator에 연결
3. Separator에 에너지 연결 → 물 분해 → 산소 + 수소 생산
4. 산소를 Gas Pipe로 Purification Chamber에 연결
5. 수소는 Gas-Burning Generator로 재활용 권장
```

:::tip 수소 재활용
Electrolytic Separator에서 나오는 수소를  
Gas-Burning Generator에 연결하면 에너지를 역으로 생산합니다.  
산소 생산에 쓰는 에너지의 일부를 회수할 수 있습니다.
:::

---

## Tier 3 — 4배 처리 (4x)

Thermal Evaporation Plant 멀티블록 구조물이 등장합니다.

### 새로 필요한 기계/구조물

| 기계/구조물 | 역할 |
|------------|------|
| **Chemical Injection Chamber** | 광석 + 염화수소 → 파편(Shard) 4개 |
| **Chemical Infuser** | 수소 + 염소 → 염화수소(HCl) 생산 |
| **Thermal Evaporation Plant** | 물 → 브라인(Brine) |
| **Electrolytic Separator** (브라인용) | 브라인 → 나트륨 + 염소 |

### 처리 흐름

```
광석 1개 + 염화수소(HCl) → [Chemical Injection Chamber] → 파편 4개
파편 4개 + 산소           → [Purification Chamber]       → 덩어리 4개
덩어리 4개                → [Crusher]                    → 더러운 분말 4개
더러운 분말 4개           → [Enrichment Chamber]         → 분말 4개
분말 4개                  → [Energized Smelter]          → 주괴 4개
```

### 염화수소(HCl) 생산 루프

```
물 → [Thermal Evaporation Plant] → 브라인
브라인 → [Electrolytic Separator] → 나트륨 + 염소
수소(Tier 2 부산물) + 염소 → [Chemical Infuser] → 염화수소(HCl)
```

### Thermal Evaporation Plant 구축

멀티블록 구조물입니다. 크기가 클수록 브라인 생산량이 증가합니다.

```
최소 크기: 4×4×3 (바닥 4×4, 높이 3)
최대 크기: 18×18×18

외벽: Thermal Evaporation Block
     또는 Thermal Evaporation Controller
내부: 비어 있어야 함
가열: Resistive Heater 설치 (에너지 소모)
     또는 태양열 (느림)
```

:::warning 사막/더운 바이옴에 설치하세요
Thermal Evaporation Plant는 설치된 바이옴의 온도에 따라 효율이 달라집니다.  
사막이나 네더 근처 등 따뜻한 바이옴에 설치하면 브라인 생산 속도가 올라갑니다.
:::

---

## Tier 4 — 5배 처리 (5x)

황산(Sulfuric Acid)이 추가되는 최종 단계입니다.

### 새로 필요한 기계

| 기계 | 역할 |
|------|------|
| **Chemical Dissolution Chamber** | 광석 + 황산 → 슬러리(Slurry) |
| **Chemical Washer** | 더러운 슬러리 + 물 → 깨끗한 슬러리 |
| **Chemical Crystallizer** | 깨끗한 슬러리 → 결정 5개 |

### 처리 흐름

```
광석 1개 + 황산    → [Chemical Dissolution Chamber] → 더러운 슬러리
더러운 슬러리 + 물 → [Chemical Washer]              → 깨끗한 슬러리
깨끗한 슬러리      → [Chemical Crystallizer]         → 결정 5개

결정 5개 → (이후 Tier 3 라인과 동일하게 처리)
→ 최종 주괴 5개
```

### 황산(Sulfuric Acid) 생산

```
석탄/목탄 → [Chemical Oxidizer] → 황(Sulfur Dioxide)
황 + 물   → [Chemical Infuser] → 황산(Sulfuric Acid)
```

---

## 광석 처리 티어별 비교

| 티어 | 광석 1개 → 주괴 | 필요 기계 수 | 난이도 |
|------|----------------|-------------|--------|
| **0 (기본)** | 1개 | 1 | 없음 |
| **1 (2배)** | 2개 | 2 | 쉬움 |
| **2 (3배)** | 3개 | 5 | 보통 |
| **3 (4배)** | 4개 | 8 + 멀티블록 | 어려움 |
| **4 (5배)** | 5개 | 11 | 매우 어려움 |

---

## 구축 권장 순서

```
게임 초반:
  Tier 1 (2배) → 바로 구축 가능, 자원 절약 효과 즉각적

중반:
  Tier 2 (3배) → 산소 시스템 구축이 핵심
  → 수소를 Gas-Burning Generator로 재활용해 에너지 자급

중후반:
  Tier 3 (4배) → Thermal Evaporation Plant 구축이 가장 큰 관문
  → 사막 바이옴에 설치 권장

후반:
  Tier 4 (5배) → 황산 생산 루프 추가
  → 중요한 광물(다이아, 에메랄드) 위주로 5배 처리
```
