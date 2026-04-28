---
title: Silent Gear 개요
sidebar_label: 개요
sidebar_position: 1
description: Silent Gear와 Silent's Gems 두 모드의 구조와 모듈러 제작 시스템의 핵심 개념을 이해합니다.
tags: [silent-gear, silent-gems, 장비제작, 모듈러]
---

# Silent Gear 개요

Silent Gear는 바닐라의 "재료 → 완성품" 방식 대신  
**파트를 각각 만들어 조립하는 모듈러 제작 시스템**입니다.

---

## 두 모드의 관계

| 모드 | 역할 |
|------|------|
| **Silent Gear** | 도구/무기/방어구 제작 시스템, 파트 구조, 등급 시스템 |
| **Silent's Gems** | 16종 보석 소재 추가, Gear Soul 시스템 |

Silent's Gems가 제공하는 보석 소재는 Silent Gear의 파트 재료로 사용됩니다.  
두 모드는 함께 사용할 때 시너지가 극대화됩니다.

---

## 바닐라와의 핵심 차이

```
바닐라:
  철 5개 → 투구 (끝)

Silent Gear:
  재료 → Head Part + Rod Part + Tip Part 등
       → 조립 → 완성품
       → 각 파트 재료로 성능이 결정됨
       → 나중에 파트 교체 & 업그레이드 가능
```

처음엔 복잡해 보이지만 한 번 익히면 **원하는 성능의 장비를 직접 설계**할 수 있습니다.

---

## 핵심 개념 4가지

### 1. 파트 (Part)

장비를 구성하는 각 부품입니다.

```
곡괭이 = Head Part + Rod Part + (선택) Tip Part
검     = Blade Part + Guard Part + Rod Part
투구   = Main Part + Lining Part
```

파트에 사용하는 재료에 따라 **스탯과 특성(Trait)** 이 결정됩니다.

### 2. 특성 (Trait)

재료에 고유하게 딸려오는 **보너스 효과**입니다.

```
예시:
  🌿 Renew     → 시간이 지나면 내구도 자동 회복
  ⚡ Crushing  → 광석 채굴 시 추가 드롭 가능
  💎 Brittle   → 내구도 낮을수록 속도 증가
  🔥 Flammable → 불에 닿으면 내구도 손상 (단점)
```

좋은 특성과 나쁜 특성이 혼재하므로 **재료 선택 전 특성 확인이 필수**입니다.

### 3. 등급 (Grade)

같은 재료라도 **등급에 따라 최종 스탯이 달라집니다.**

```
등급 순서: E → D → C → B → A → S → SS → SSS → MAX
```

Material Grader 블록으로 재료의 등급을 올릴 수 있습니다.

### 4. Gear Soul

Silent's Gems가 제공하는 장비 강화 시스템입니다.  
도구/무기에 소울을 장착하면 사용할수록 레벨업하며 추가 특성이 부여됩니다.

---

## 재료 정보 확인 방법 (필수!)

:::info JEI + Ctrl 키가 핵심
아무 재료 아이템에 마우스를 올린 뒤 **Ctrl 키**를 누르면  
해당 재료의 **전체 스탯과 특성 목록**이 표시됩니다.

이 방법으로 재료를 선택하는 습관을 들이세요.
장비 제작 전 항상 Ctrl로 재료 정보를 먼저 확인하는 것이 기본입니다.
:::

---

## 전체 진행 로드맵

```
1. Blueprint Package 제작 → 모든 블루프린트 한 번에 획득
2. 기본 재료(철, 나무 등)로 첫 파트 제작 연습
3. Material Grader 제작 → 재료 등급 향상 시작
4. Silent's Gems 보석 채굴 → 고성능 파트 재료 확보
5. 등급 A~S 재료로 중급 장비 완성
6. Gear Soul 제작 → 장비 장기 성장
7. 등급 S~SS 재료 + 보석 조합 → 최종 장비 완성
```
