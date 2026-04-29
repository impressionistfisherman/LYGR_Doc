---
title: Mekanism 개요
sidebar_label: 개요
sidebar_position: 1
description: Mekanism 모드의 전체 구조, 핵심 소재 오스뮴, 에너지 시스템, 그리고 전체 진행 로드맵을 이해합니다.
tags: [mekanism, 자동화, 에너지, 오스뮴]
---

# Mekanism 개요

Mekanism은 **산업 자동화**에 특화된 기술 모드입니다.  
광석 처리 효율을 최대 5배까지 올리고, 제트팩부터 양자 저장 시스템까지 다양한 고급 기술을 제공합니다.

:::tip Mekanism이 다른 기술 모드와 다른 점
Create가 물리적 회전력을 다루는 모드라면,  
Mekanism은 **전기 에너지(FE/RF)** 를 기반으로 하는 산업 자동화 모드입니다.  
두 모드는 완벽하게 공존하며 서로의 단점을 보완합니다.
:::

---

## 핵심 소재 — 오스뮴 (Osmium)

Mekanism의 모든 것은 **오스뮴**에서 시작합니다.

### 산출 위치

- **Y레벨 -60 \~ +60** 구간 어디서나 생성
- 철보다 흔하게 생성되므로 초반에 충분히 확보 가능
- 광맥이 크고 자주 나와서 빠르게 쌓임

### 오스뮴으로 만드는 것

- 거의 모든 초반\~중반 기계의 필수 소재
- 강철(Steel) 제작의 기반
- 케이싱(Machine Casing)의 핵심 재료

:::info 오스뮴 최우선 확보
게임 시작 후 가장 먼저 오스뮴을 대량 채굴하세요.  
철 1\~2스택 + 오스뮴 2\~3스택을 확보하면 초반 진행이 훨씬 수월합니다.
:::

---

## 에너지 시스템 (FE/RF)

Mekanism은 **Forge Energy(FE)** 를 사용합니다.  
이 모드팩의 다른 기술 모드들과 에너지를 공유할 수 있습니다.

### 에너지 단위

- **FE (Forge Energy)** = RF (Redstone Flux)와 동일
- 모든 기계는 작동하는 데 FE/tick 소비
- 에너지가 없으면 기계가 작동하지 않음

### 에너지 저장

| 아이템/블록 | 저장 용량 |
|------------|-----------|
| **Basic Energy Cube** | 1,600,000 FE |
| **Advanced Energy Cube** | 8,000,000 FE |
| **Elite Energy Cube** | 40,000,000 FE |
| **Ultimate Energy Cube** | 200,000,000 FE |

---

## 기계 티어 시스템

Mekanism의 대부분 기계는 4단계 티어로 업그레이드 가능합니다.

| 티어 | 특징 |
|------|------|
| **Basic (기본)** | 1개 처리 슬롯 |
| **Advanced (고급)** | 처리 슬롯 증가, 속도 향상 |
| **Elite (엘리트)** | 대폭 향상 |
| **Ultimate (최종)** | 최대 성능 |

티어 업그레이드는 현재 기계를 제작대에 놓고 추가 소재를 조합하는 방식입니다.  
한 단계씩만 올릴 수 있습니다 (Basic → Advanced → Elite → Ultimate).

---

## 합금과 회로 (Alloy & Control Circuit)

진행에 따라 4단계 합금과 회로가 해금됩니다.  
이것이 Mekanism 진행의 핵심 척도입니다.

| 단계 | 합금 | 회로 | 해금 내용 |
|------|------|------|-----------|
| 1단계 | Infused Alloy | Basic Control Circuit | 기본 기계 |
| 2단계 | Reinforced Alloy | Advanced Control Circuit | 고급 기계 |
| 3단계 | Atomic Alloy | Elite Control Circuit | 정밀 기계 |
| 4단계 | — | Ultimate Control Circuit | 최종 기계 |

---

## 전체 진행 로드맵

```
1. 오스뮴 대량 확보
2. Metallurgic Infuser 제작 → 강철 생산 시작
3. 첫 번째 발전기 (Heat Generator) 설치 → 에너지 확보
4. Enrichment Chamber + Energized Smelter → 광석 2배 처리
5. Electric Pump + Electrolytic Separator → 산소 생산
6. Purification Chamber + Crusher 추가 → 광석 3배 처리
7. Thermal Evaporation Plant 구축 → 광석 4배 처리
8. Factory 기계로 처리량 대폭 증가
9. Digital Miner로 자동 채굴
10. QIO 저장 시스템 구축
11. MekaSuit 제작 → 최강 장비 완성
```
