---
title: 첫 장비 만들기
sidebar_label: 첫 장비 만들기
sidebar_position: 2
description: 블루프린트 제작부터 파트 조립까지, Silent Gear 장비를 처음 만드는 과정을 단계별로 안내합니다.
tags: [silent-gear, 블루프린트, 파트, 제작]
---

# 첫 장비 만들기

Silent Gear 장비를 처음 만드는 과정을 순서대로 따라가 봅니다.

---

## Step 1 — Blueprint Package 제작

모든 블루프린트를 한 번에 얻는 가장 빠른 방법입니다.

### 제작 방법

JEI에서 `Blueprint Package`를 검색 → 조합법 확인 후 제작

### 사용 방법

Blueprint Package를 우클릭 → 모든 종류의 Blueprint와 Template이 인벤토리에 추가됩니다.

:::tip Blueprint vs Template
| 종류 | 재사용 |
|------|--------|
| **Blueprint** (청색) | 무한 재사용 가능 ♾️ |
| **Template** (황색) | 1회 사용 후 소모 |

Blueprint Package로 받은 것은 대부분 Blueprint이므로 잃어버리지 않도록 주의하세요.
:::

---

## Step 2 — 재료 선택

파트를 만들기 전에 어떤 재료를 쓸지 결정합니다.

### 재료 정보 확인 (중요!)

```
재료 아이템에 마우스 올리기 + Ctrl 키 누르기
→ 스탯 수치, 특성(Trait) 전체 표시
```

### 초반 추천 재료

| 재료 | 특징 | 추천 용도 |
|------|------|-----------|
| **철 (Iron)** | 균형잡힌 스탯, 구하기 쉬움 | 초반 전반 |
| **나무 막대기** | 손잡이 기본 소재 | Rod Part |
| **네더라이트** | 최고 내구도, 내화성 | 후반 Head Part |
| **다이아몬드** | 높은 채굴 속도와 공격력 | 중반 Head Part |
| **Silent's Gems 보석** | 고유 특성 + 고성능 | 중반 이후 |

---

## Step 3 — 파트 제작

### 제작 방법 A — Blueprint 사용 (추천)

1. 제작대에 **Blueprint + 재료**를 함께 올리기
2. 결과 슬롯에 파트 완성

```
예시: Pickaxe Head 만들기
  → Pickaxe Head Blueprint + 철 3개 → Pickaxe Head (철)
```

### 제작 방법 B — 빠른 조합 (Quick Recipe)

일부 도구는 블루프린트 없이 재료만으로 바로 조합 가능합니다.

```
JEI에서 원하는 도구 검색 → 두 가지 조합법 중 "Quick" 방식 선택
```

---

## Step 4 — 파트 조립

파트들을 제작대에 올려 최종 장비로 조립합니다.

### 곡괭이 조립 예시

```
제작대:
  [ Pickaxe Head ] [ Rod ]
  →  곡괭이 완성!
```

### 검 조립 예시

```
제작대:
  [ Blade ] [ Guard ] [ Rod ]
  →  검 완성!
```

### Tip Part 추가

일부 도구는 선택적으로 **Tip Part**를 추가할 수 있습니다.

- Tip Part를 추가하면 그 재료의 특성이 도구에 **추가**됩니다
- 예: 다이아몬드 Head + 골드 Tip → 골드 특성 추가 장착
- JEI에서 해당 도구의 조합법을 보면 Tip 슬롯 위치 확인 가능

---

## Step 5 — 완성품 확인

장비가 완성되면 툴팁에서 **파트 구성과 전체 스탯**을 확인할 수 있습니다.

```
[예시 툴팁]
Iron Pickaxe
  Head: Iron (Grade B)
  Rod: Wood
  ---
  Mining Speed: 6.5
  Attack Damage: 3.0
  Durability: 420
  Traits: Magnetic
```

---

## 바닐라 아이템 → Silent Gear 변환

기존에 가지고 있던 바닐라 도구도 Silent Gear 시스템으로 전환할 수 있습니다.

### 방법

제작대에 바닐라 아이템을 혼자 올리면 Silent Gear 버전으로 변환됩니다.

```
[바닐라 다이아몬드 곡괭이]
          ↓ 제작대에 혼자 올리기
[Silent Gear 다이아몬드 곡괭이]
  → 이제 파트 교체 및 업그레이드 가능
```

:::info 기존 인챈트는 유지됩니다
변환 시 기존에 붙어 있던 인챈트는 그대로 유지됩니다.
:::

---

## 자주 하는 실수

**파트가 조립이 안 돼요.**
→ 파트 종류가 맞는지 확인하세요. Blade는 검에만, Head는 도구에만 사용됩니다.

**원하는 특성이 안 붙어요.**
→ Tip Part를 추가하거나, 해당 특성을 가진 재료로 Head를 만들어야 합니다.

**재료를 Ctrl로 눌러도 스탯이 안 나와요.**
→ 해당 아이템이 Silent Gear 재료로 등록된 소재인지 확인하세요.  
→ 모든 아이템이 재료로 사용 가능한 것은 아닙니다.
