---
title: 마법 시스템 개요
sidebar_label: 개요
sidebar_position: 1
description: Spell Engine과 Spell Power 두 모드의 구조와 관계, 그리고 마법 계열(School) 시스템을 이해합니다.
tags: [spell-engine, spell-power, 마법, 주문]
---

# 마법 시스템 개요

이 모드팩의 마법 시스템은 두 모드가 함께 작동합니다.

---

## 두 모드의 역할

| 모드 | 담당 역할 |
|------|-----------|
| Spell Engine | 주문서 습득, 스펠북 등록, 핫바 시전, 주문 종류, 쿨다운, 차징, 시전 메커니즘 |
| Spell Power | Fire Power, Frost Power, Arcane Power 등 마법 계열별 데미지 수치 관리 |

Spell Engine은 마법을 어떻게 사용하는지 담당하고, Spell Power는 마법이 얼마나 강한지 계산합니다.

---

## 마법 계열 (School)

모든 주문은 특정 마법 계열에 속합니다.  
장비의 **해당 계열 Spell Power 수치**가 높을수록 그 계열 주문의 데미지가 증가합니다.

| 계열 | 아이콘 | 특징 | 주로 사용하는 직업 |
|------|--------|------|-------------------|
| **Arcane (비전)** | 🔮 | 다목적 공격, 범용성 높음 | Wizard |
| **Fire (화염)** | 🔥 | 지속 피해(DoT), 광역 | Elemental Wizard |
| **Frost (냉기)** | ❄️ | 둔화, 빙결, 컨트롤 | Elemental Wizard |
| **Lightning (번개)** | ⚡ | 광역, 연쇄 타격 | Elemental Wizard |
| **Healing (회복)** | 💚 | 아군 치유, 버프 | Paladin |
| **Holy (성스러움)** | ✨ | 언데드 특효, 보호막 | Paladin |
| **Soul (영혼)** | 👻 | 디버프, 저주 | 특수 직업 |

:::tip 내 직업의 주력 계열 확인
직업 아이템 또는 스펠북 툴팁에 **어떤 계열의 주문을 지원하는지** 명시됩니다.  
주력 계열의 Spell Power 장비를 우선 수집하세요.
:::

---

## 마법 시스템이 적용되는 직업

이 모드팩에서 마법 시스템을 주력으로 사용하는 직업들입니다.

| 직업 | 주력 계열 | 특징 |
|------|-----------|------|
| **Wizards** | Arcane, Frost | 범용 마법사, 냉기 제어 |
| **Elemental Wizards** | Fire, Frost, Lightning | 원소 3계열 전환 |
| **Paladins** | Holy, Healing | 근접 + 마법 혼합 |
| **Forcemaster** | Arcane | 물리력 기반 마법 |

그 외 직업(Berserker, Rogue 등)도 일부 보조 주문을 사용하지만  
마법 시스템에 의존도가 낮습니다.

---

## 시작 전 준비사항 체크

마법 시스템을 본격적으로 사용하기 전에 확인할 사항입니다.

- [ ] 직업 선택 완료
- [ ] 직업 전용 스펠북 획득
- [ ] 스펠 스크롤 최소 2~3개 확보
- [ ] Spell Binding Table 제작
- [ ] 장비에 주력 계열 Spell Power 스탯 확인
- [ ] 스킬 창(K)에서 Spell 관련 노드 확인

다음 챕터부터 각 항목을 순서대로 다룹니다.
