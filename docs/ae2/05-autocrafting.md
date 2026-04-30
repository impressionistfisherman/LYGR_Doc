---
title: 자동 제작 (Autocrafting)
sidebar_label: 자동 제작
sidebar_position: 5
description: AE2의 핵심 기능인 자동 제작 시스템을 Pattern, Pattern Provider, Molecular Assembler를 이용해 구축하는 방법을 이해합니다.
tags: [ae2, autocrafting, 자동제작, 패턴, 어셈블러]
---

# 자동 제작 (Autocrafting)

AE2의 가장 강력한 기능입니다.
원클릭으로 복잡한 다단계 레시피를 **자동으로 제작**합니다.

---

## 자동 제작의 원리

```
1. 플레이어가 ME Terminal에서 아이템 제작 요청
2. ME 시스템이 필요한 재료와 중간 제작 단계를 자동 계산
3. Pattern Provider가 재료를 인접 기계에 공급
4. 기계가 처리 후 결과물을 네트워크에 반환
5. 완성!
```

---

## 구성 요소

### Pattern Encoding Terminal (패턴 인코딩 터미널)

패턴을 만드는 터미널입니다.

```
설치: ME 케이블에 연결

사용법:
  1. Blank Pattern (빈 패턴) 삽입
  2. 왼쪽: 재료 아이템 배치
  3. 오른쪽: 결과 아이템 설정
  4. Encode 버튼 → 패턴 완성
```

### 패턴 종류

| 패턴 | 용도 |
|------|------|
| **Crafting Pattern** | 제작대 레시피 자동화 |
| **Processing Pattern** | 외부 기계(용광로, Mekanism 등) 레시피 자동화 |
| **Smithing Pattern** | 스미싱 레시피 자동화 |
| **Stone Cutting Pattern** | 석조 자르기 레시피 자동화 |

> **참고: 레시피 불러오기**
>
> Pattern Encoding Terminal에서 JEI의 레시피를 직접 불러올 수 있습니다.
> JEI에서 원하는 레시피 클릭 → "Transfer to Pattern" 버튼 → 자동으로 패턴에 재료 배치

---

### Pattern Provider (패턴 프로바이더)

패턴을 보관하고 자동 제작을 실행하는 핵심 블록입니다.

```
역할:
  - 패턴을 여러 개 저장 (최대 9개)
  - 제작 요청이 오면 인접 인벤토리에 재료 자동 공급
  - 완성된 아이템을 받아 네트워크에 반환
```

**설치:**

| 연결 대상 | 용도 |
|-----------|------|
| Molecular Assembler | 제작대 레시피 자동화 |
| 외부 기계 | Processing Pattern으로 용광로, Mekanism 기계 등 자동화 |

---

### Molecular Assembler (분자 조립기)

Crafting Pattern 전용 자동 제작 기계입니다.

```
역할:
  Pattern Provider 옆에 설치
  → Pattern Provider가 재료를 공급하면 자동으로 제작
  → 완성품을 Pattern Provider에 반환

특징:
  채널 소모 없음 (Pattern Provider의 채널만 사용)
  → Pattern Provider 1개 + Assembler 여러 개 가능
```

**기본 구성:**
```
[Pattern Provider] ← Crafting Pattern 삽입
        ↕
[Molecular Assembler]
```

---

### Crafting CPU (제작 CPU)

자동 제작 작업을 처리하는 멀티블록입니다.

```
구성 블록:
  - Crafting Unit: 기본 블록 (속도/용량 증가)
  - Crafting Co-Processing Unit: 병렬 제작 처리 (빠른 완성)
  - Crafting Storage: 중간 재료 임시 저장 용량

최소 구성:
  Crafting Unit 1개 + Crafting Monitor 1개 (모니터링 용)

추천 구성:
  Crafting Unit × 여러개 + Co-Processor × 여러개
  → 복잡한 다단계 레시피를 빠르게 처리
```

---

## Crafting Pattern으로 제작대 자동화

가장 기본적인 자동화입니다.

```
예시: 철 주괴 9개 → 철 블록 자동 제작

1. Pattern Encoding Terminal에서 패턴 제작
   재료: 철 주괴 × 9
   결과: 철 블록 × 1

2. 패턴을 Pattern Provider에 삽입

3. Pattern Provider 옆에 Molecular Assembler 설치

4. ME Terminal에서 철 블록 제작 요청 (우클릭)
   → 자동 제작 시작!
```

---

## Processing Pattern으로 기계 자동화

외부 기계(용광로, Mekanism 기계 등)를 자동화합니다.

```
예시: 철 광석 → 철 주괴 자동 제련

1. Pattern Encoding Terminal에서 Processing Pattern 생성
   재료: 철 광석 × 1
   결과: 철 주괴 × 2 (또는 Mekanism 처리 결과)

2. 패턴을 Pattern Provider에 삽입

3. Pattern Provider를 용광로/Mekanism 기계 입력 면에 설치

4. 기계 출력 → Import Bus → ME 네트워크로 결과물 수거

5. ME Terminal에서 철 주괴 제작 요청
   → 자동으로 광석 처리!
```

---

## 다단계 자동 제작

AE2 자동 제작의 진가는 **복잡한 다단계 레시피**에서 드러납니다.

```
예시: 다이아몬드 곡괭이 자동 제작

패턴 A: 나무 막대 × 2 + 나무 판자 × 3 → 나무 막대 2개
패턴 B: 다이아몬드 × 3 + 나무 막대 × 2 → 다이아몬드 곡괭이

→ "다이아몬드 곡괭이 제작" 요청 시
→ AE2가 자동으로 패턴 A → 패턴 B 순서로 처리
→ 나무 막대도 자동 제작 후 곡괭이 완성
```

### 재귀 레시피 주의사항

AE2는 재귀 레시피(A → B → A)를 처리하지 못합니다.
이런 경우 Level Emitter를 활용해 별도 자동화로 처리하세요.

---

## Autocrafting 실용 활용

### 자동 보충 시스템

```
Export Bus + Crafting Card 조합:
  → 특정 위치의 아이템이 N개 이하가 되면 자동 제작 요청
  → 항상 N개를 유지하는 자동 보충 시스템
```

### 자동 가공 라인

```
ME 시스템 → [Processing Pattern] → Mekanism 광석 처리
→ 결과물 자동 수거 → ME 네트워크
→ 이후 자동 합금/제작 계속 진행
```
