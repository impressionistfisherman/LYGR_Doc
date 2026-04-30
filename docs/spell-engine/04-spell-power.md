---
title: 스펠 파워 & 데미지 강화
sidebar_label: 스펠 파워
sidebar_position: 4
description: Spell Power 모드의 계열별 데미지 스탯과 마법 데미지를 효과적으로 강화하는 방법을 완전히 이해합니다.
tags: [spell-power, 스펠파워, 데미지, 강화]
---

# 스펠 파워 & 데미지 강화

마법 데미지는 물리 공격력과 **완전히 다른 스탯**으로 계산됩니다.
Spell Power 수치를 제대로 올려야 주문이 강해집니다.

---

## 스펠 파워란?

각 마법 계열(School)에 대응하는 **데미지 계수 스탯**입니다.

```
주문 최종 데미지 = 주문 기본 데미지 × (1 + 해당 계열 Spell Power 보너스)
```

예를 들어 Fire Spell Power가 +50%라면
기본 데미지 100의 화염 주문이 **150의 데미지**를 입힙니다.

---

## 계열별 Spell Power 스탯

| 스탯 이름 | 강화 계열 |
|-----------|-----------|
| **Fire Spell Power** | 화염(Fire) 계열 주문 |
| **Frost Spell Power** | 냉기(Frost) 계열 주문 |
| **Lightning Spell Power** | 번개(Lightning) 계열 주문 |
| **Arcane Spell Power** | 비전(Arcane) 계열 주문 |
| **Healing Power** | 회복(Healing) 계열 주문 |
| **Holy Spell Power** | 성스러움(Holy) 계열 주문 |

> **주의: 계열이 다른 Spell Power는 의미 없음**
>
> Fire Spell Power를 아무리 올려도 Arcane 주문 데미지에는 영향을 주지 않습니다.
> 반드시 **내 직업의 주력 계열에 맞는 Spell Power 장비**를 착용하세요.

---

## Spell Power 올리는 방법

### 방법 1 — 직업 전용 장비 착용 ⭐⭐⭐⭐⭐

가장 주요한 방법입니다.

- 직업 전용 로브, 지팡이, 완드 등에 Spell Power가 기본 내장
- Apotheosis Affix 장비 중 마법 스탯이 붙은 것 우선 수집
- 아이템 툴팁에서 `+X Fire Spell Power` 형식으로 확인

**획득 방법:**
```
1. 던전 탐험 중 직업 관련 장비 수집
2. Apotheosis 티어업 후 마법 계열 Affix 장비 파밍
3. 마법사 계열 몬스터(Wizard, Evoker 계통) 처치 드롭
```

### 방법 2 — 인챈트 ⭐⭐⭐⭐

ApothicEnchanting과 연동해 Spell Power 인챈트를 적용할 수 있습니다.

- 장비에 Spell Power 속성이 하나라도 있어야 인챈트 적용 가능
- JEI에서 `Spell Power` 또는 `Magical` 관련 인챈트 검색
- 고레벨 인챈트일수록 수치가 크게 올라감

### 방법 3 — 스킬 트리 투자 ⭐⭐⭐⭐

skill_tree RPG Series의 직업 트리에 Spell Power 강화 노드가 있습니다.

- 직업 트리 중반부부터 등장
- `+X% Fire Spell Power`, `주문 크리티컬 확률` 등 다양한 노드
- 한 번 찍으면 영구 적용되므로 장기적으로 가장 효율 높음

### 방법 4 — Apotheosis 젬 소켓 ⭐⭐⭐

Spell Power 관련 젬을 방어구 소켓에 박아서 수치를 추가합니다.

- JEI에서 계열별 Spell Power 보너스 젬 검색
- 고순도 젬일수록 수치가 높음
- 주력 계열에 맞는 젬을 우선적으로 확보

### 방법 5 — Apotheosis Affix ⭐⭐⭐

Rare 이상 Affix 아이템에서 Spell Power 스탯이 붙어 나오는 경우가 있습니다.

- Reforging Table로 Spell Power Affix를 유지한 채 다른 Affix 리롤 가능
- 마법 빌드라면 Reforging 시 Spell Power 계열 Affix를 잠금 처리

---

## 추가 스탯 — Spell Haste

쿨다운과 차징 속도를 단축하는 스탯입니다.

| Spell Haste | 효과 |
|-------------|------|
| +10% | 모든 주문 쿨다운 10% 단축, 차징 속도 10% 증가 |
| +30% | 체감 차이 매우 큼 |
| +50% 이상 | 쿨다운이 거의 없어지는 수준 |

### Spell Haste 획득처

- 직업 전용 장비 (일부에 내장)
- 스킬 트리 노드
- Apotheosis Affix

> **참고: Spell Haste 투자 타이밍**
>
> Spell Power를 어느 정도 올린 후에 Spell Haste에 투자하는 것이 효율적입니다.
> 데미지가 낮은 상태에서 쿨다운을 줄여봤자 DPS 향상이 크지 않습니다.

---

## 마법 크리티컬

마법 주문도 **크리티컬 타격**이 발동됩니다.

### 마법 크리티컬 관련 스탯

| 스탯 | 설명 |
|------|------|
| **Spell Critical Chance** | 주문 크리티컬 발동 확률 |
| **Spell Critical Damage** | 주문 크리티컬 시 데미지 배율 |

> **정보: 물리 크리티컬과 별도 계산**
>
> Apotheosis/puffish_attributes의 일반 크리티컬 스탯은
> 마법 크리티컬에 적용되지 않을 수 있습니다.
> 마법 빌드라면 Spell Critical 스탯을 별도로 확보해야 합니다.

---

## 직업별 Spell Power 목표치 (참고)

아래 수치는 각 단계에서 목표로 삼을 Spell Power 수준입니다.
(모드팩 설정에 따라 달라질 수 있습니다.)

| 단계 | 목표 Spell Power |
|------|-----------------|
| 초반 (Haven 티어) | +20\~40% |
| 중반 (Frontier\~Ascent) | +60\~100% |
| 후반 (Summit\~Pinnacle) | +150% 이상 |

이 수치보다 낮으면 주문 데미지가 너무 낮아 마법 전투가 비효율적이 될 수 있습니다.
