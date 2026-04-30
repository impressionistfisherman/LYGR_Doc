---
title: 작업대 가이드
sidebar_label: 작업대 5종
sidebar_position: 5
description: Apotheosis 전용 작업대 5종의 기능과 사용 방법을 이해합니다.
tags: [apotheosis, 작업대, 리포징, 분해, 강화]
---

# 작업대 가이드

Apotheosis에는 장비를 강화하고 관리하는 전용 작업대가 5종 있습니다.
모두 JEI에서 조합법을 확인할 수 있으며, 제작 순서는 아래 로드맵을 참고하세요.

---

## 추천 제작 순서

```
1. Salvaging Table       ← 불필요한 아이템 분해, 소재 확보
2. Gem Cutting Table     ← 젬 소켓 삽입 및 순도 관리
3. Simple Reforging Table ← Affix 리롤 시작
4. Reforging Table       ← 정밀 Affix 제어
5. Augmenting Table      ← 최종 장비 수치 미세 조정
```

---

## 1. Salvaging Table (분해 테이블)

### 기능
불필요한 Affix 장비를 분해해서 소재를 회수합니다.

### 사용 방법
1. Salvaging Table 제작 후 설치
2. GUI에 분해할 Affix 아이템 투입
3. 경험치 + 소재 + 가끔 젬 회수

### 어떤 아이템을 분해하나요?
- 등급이 너무 낮거나 Affix가 마음에 들지 않는 아이템
- 이미 더 좋은 아이템으로 교체한 구식 장비
- Common/Uncommon 등 낮은 등급 아이템

> **참고: 분해가 버리기보다 항상 낫습니다**
>
> 아무리 별로인 Affix 아이템이라도 분해하면 최소한 경험치는 나옵니다.
> 초반에 얻은 낮은 등급 아이템을 버리지 말고 Salvaging Table에 넣으세요.

---

## 2. Gem Cutting Table (젬 가공 테이블)

### 기능
젬 소켓 삽입, 젬 제거, 젬 분쇄, 젬 합성 전부 이 테이블에서 처리합니다.

### 사용 방법

**젬 삽입:**
1. GUI에 Affix 아이템 + 삽입할 젬 투입
2. 원하는 소켓 선택 → 젬 삽입

**젬 분쇄 (Gem Dust 생성):**
1. GUI에 젬만 투입
2. 분쇄 선택 → Gem Dust 획득

**Gem Dust → 젬 합성:**
1. JEI에서 "Gem Dust" 검색 → 합성 비율 확인
2. 적절한 양의 Gem Dust를 투입해 높은 순도 젬으로 업그레이드

> **위험: 젬 제거 시 젬 파괴**
>
> 소켓에서 젬을 빼면 젬이 파괴됩니다.
> Mythic 젬을 제거할 때는 반드시 신중하게 결정하세요.

---

## 3. Simple Reforging Table (간이 리포징 테이블)

### 기능
Affix 아이템의 능력치와 효과를 **랜덤으로 재롤(Reroll)** 합니다.

### 사용 방법
1. GUI에 Affix 아이템 + 리포징 소재 투입
2. Reforge 버튼 클릭 → 새로운 랜덤 Affix로 교체

### Simple vs 일반 Reforging Table 차이

| 항목 | Simple | 일반 |
|------|--------|------|
| 소재 소모량 | 적음 | 많음 |
| Affix 제어 | 불가 (완전 랜덤) | 특정 Affix 고정 가능 |
| 추천 사용 시점 | 초\~중반 | 중\~후반 |

마음에 들지 않는 Affix가 있을 때 소재가 적게 드는 Simple로 먼저 시도해보고,
나중에 정밀하게 원하는 Affix를 맞출 때 일반 Reforging Table로 넘어가세요.

---

## 4. Reforging Table (리포징 테이블)

### 기능
Simple Reforging Table보다 **세밀하게 Affix를 제어**할 수 있습니다.

### 주요 기능
- 원하는 Affix 하나를 **고정(Lock)** 한 채로 나머지만 재롤 가능
- 원하는 Affix 종류를 **지정**해서 뽑을 확률을 높이는 옵션 지원

### 사용 방법
1. GUI에 Affix 아이템 투입
2. 현재 Affix 목록에서 유지하고 싶은 것을 잠금(Lock)
3. 리포징 소재 투입 후 Reforge 실행
4. 잠근 Affix는 유지되고 나머지만 새로 뽑힘

### 언제 사용하나요?
- 특정 Affix(예: Life Steal)는 마음에 드는데 나머지 Affix가 별로일 때
- 최종 장비를 완성할 때 원하는 Affix 조합을 만들어나갈 때

> **정보: 소재 비용이 비쌉니다**
>
> Reforging Table은 Simple보다 소재 소모가 훨씬 많습니다.
> 중반 이후 소재 여유가 생겼을 때 본격적으로 활용하세요.

---

## 5. Augmenting Table (증강 테이블)

### 기능
아이템의 특정 수치를 **직접 올릴 수** 있는 테이블입니다.

### 리포징과의 차이점
- 리포징: Affix 효과 종류 자체를 바꿈
- 증강: 이미 붙어 있는 Affix의 **수치를 직접 강화**

### 예시
```
[현재] Life Steal 2%
[증강 후] Life Steal 3.5%
```

### 사용 방법
1. GUI에 Affix 아이템 투입
2. 강화하고 싶은 Affix 수치 선택
3. 고급 소재 투입 후 증강 실행

> **주의: 소재 요구량이 가장 높습니다**
>
> Augmenting Table은 5종 중 가장 비싼 소재를 요구합니다.
> 최종 장비가 완성된 후 미세 조정 단계에서 사용하는 것이 효율적입니다.

---

## 작업대 소재 파밍 팁

모든 작업대 소재는 JEI에서 확인할 수 있지만,
주로 다음 경로로 수급합니다.

- **Salvaging Table 분해 소재:** Affix 아이템 분해
- **리포징 소재:** 특정 광물 + 분해 소재 조합
- **증강 소재:** 고급 광물, 던전 드롭 아이템

소재가 부족하다면 Invader Dungeon 파밍을 우선 추천합니다.
