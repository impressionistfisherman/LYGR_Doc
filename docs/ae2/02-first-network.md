---
title: 첫 ME 네트워크 구축
sidebar_label: 첫 네트워크 구축
sidebar_position: 2
description: ME Drive, Storage Cell, Terminal을 이용해 처음으로 ME 네트워크를 구축하는 방법을 단계별로 안내합니다.
tags: [ae2, me네트워크, 드라이브, 터미널, 저장셀]
---

# 첫 ME 네트워크 구축

처음에는 아주 단순한 네트워크부터 시작합니다.  
컨트롤러 없이 8채널 이내로 구성하는 **Ad-Hoc 네트워크**입니다.

---

## 필요 소재 준비

### Fluix Crystal (플럭스 결정)

대부분의 AE2 소재에 필요한 중간 재료입니다.

```
제작 방법:
  서투스 쿼츠 결정 + 레드스톤 + 네더쿼츠
  → 물에 던지기 (3가지 동시에 던져야 함)
  → 잠시 후 Fluix Crystal 획득
```

### 주요 초반 소재 목록

| 소재 | 획득 방법 |
|------|-----------|
| **Certus Quartz Crystal** | 운석 채굴 |
| **Fluix Crystal** | 위 합성 |
| **Fluix Dust** | Fluix Crystal 분쇄 |
| **Calculation Processor** | Fluix Dust + 프린트 회로 |
| **Logic Processor** | 금 + 프린트 회로 |
| **Engineering Processor** | 다이아몬드 + 프린트 회로 |

:::tip Processor 제작 — Inscriber 기계 필요
프로세서(Processor) 제작에는 **Inscriber** 기계가 필요합니다.  
JEI에서 Inscriber 검색 → 조합법 확인 후 제작하세요.
:::

---

## Step 1 — Energy Acceptor 설치

AE2 네트워크는 자체 에너지 단위(AE)를 사용합니다.  
FE/RF를 AE로 변환하는 **Energy Acceptor**가 필요합니다.

```
Energy Acceptor 설치
→ Mekanism 에너지 케이블 또는 Create 등 에너지 연결
→ AE2 네트워크에 에너지 공급 시작
```

:::info Crystal Resonance Generator
에너지 공급이 번거롭다면 **Crystal Resonance Generator**를 대신 사용할 수 있습니다.  
소량의 에너지를 무료로 생성하는 AE2 전용 발전기로,  
작은 초반 네트워크를 돌리기에 충분합니다.
:::

---

## Step 2 — ME Drive + Storage Cell 설치

실제 아이템이 저장되는 공간입니다.

```
1. ME Drive 설치
2. Storage Cell 제작 (JEI에서 "Item Storage Cell" 검색)
   → 4k Cell 권장 (용량과 타입 수의 균형이 좋음)
3. ME Drive에 Storage Cell 삽입 (최대 10개)
```

---

## Step 3 — ME Cable 연결

Energy Acceptor와 ME Drive를 케이블로 연결합니다.

```
Energy Acceptor ── [ME Cable] ── ME Drive
```

케이블 종류:
- **Glass Cable (유리 케이블):** 가장 기본, 초반에 충분
- **Covered Cable:** 더 두꺼운 버전, 기능 동일
- **Smart Cable:** 채널 사용량을 육안으로 확인 가능 (추천)
- **Dense Cable:** 32채널 전달, 나중에 필요

---

## Step 4 — ME Terminal 설치

네트워크에 저장된 아이템을 검색하고 꺼내는 인터페이스입니다.

```
ME Drive ── [Cable] ── ME Terminal

또는

ME Crafting Terminal: 터미널 + 제작대 통합 버전 (추천)
```

### Terminal 사용법

```
터미널 UI:
  상단: 검색창 (아이템 이름 타이핑 → 필터링)
  중앙: 저장된 아이템 목록
  하단: 플레이어 인벤토리

아이템 꺼내기: 클릭 (1개), Shift+클릭 (64개), Ctrl+클릭 (전량)
아이템 넣기: 인벤토리 아이템을 터미널 창으로 드래그
```

---

## Step 5 — 네트워크 작동 확인

```
확인 사항:
  [ ] 에너지 공급 중 (Energy Acceptor에 에너지 연결됨)
  [ ] ME Drive에 불이 켜짐
  [ ] ME Terminal 열림
  [ ] 아이템을 터미널에 넣으면 저장됨
  [ ] 검색 기능 작동
```

---

## Ad-Hoc 네트워크 한계

컨트롤러 없는 Ad-Hoc 네트워크는 **최대 8개 기기**까지만 지원합니다.

기기 수가 8개를 초과하면:
- 가장 나중에 연결된 기기부터 비활성화
- 네트워크 전체가 불안정해질 수 있음

8개 기기를 넘을 것 같다면 바로 ME Controller를 추가하세요.

---

## 자주 하는 실수

**터미널이 켜지지 않아요.**
→ 에너지가 연결되어 있는지 확인하세요.  
→ 모든 기기가 케이블로 연결되어 있는지 확인하세요.

**아이템이 저장되지 않아요.**
→ Storage Cell이 ME Drive에 삽입되어 있는지 확인하세요.  
→ 셀의 타입(Type)이 가득 찼을 수 있습니다. 새 셀을 추가하거나 셀을 파티션하세요.

**ME Drive에 빨간 불이 들어와요.**
→ 채널 부족 상태입니다. ME Controller를 추가하거나 기기 수를 줄이세요.
