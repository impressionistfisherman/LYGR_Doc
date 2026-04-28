---
title: 중반 진행 — 황동 시대
sidebar_label: 중반 진행 (황동)
sidebar_position: 5
description: 황동 생산부터 Mechanical Arm, 자동 선별, Crushing Wheels 광석 처리 시스템까지 중반 핵심을 다룹니다.
tags: [create, 중반, 황동, brass, 자동화]
---

# 중반 진행 — 황동 시대

황동(Brass)을 만드는 순간 Create의 진짜 자동화가 시작됩니다.  
필터링, 선별, Mechanical Arm 등 정밀 자동화 부품이 모두 황동으로 만들어집니다.

---

## 황동 (Brass) 생산

황동은 Create 중반 진행의 핵심 소재입니다.

### 생산 방법

```
필요 장비: Mechanical Mixer + Basin + Blaze Burner

재료: 구리(Copper) + 아연(Zinc) (1:1 비율)
Basin에 투입 → Blaze Burner로 가열 → Mixer 작동
→ 황동 주괴 생산
```

### Blaze Burner 확보

Blaze Burner는 **블레이즈(Blaze) 포획**이 필요합니다.

1. 네더 요새에서 블레이즈 발견
2. Cage(새장)를 블레이즈에 던지기 → 포획
3. 포획한 블레이즈 + Cage로 Blaze Burner 제작

:::warning 황동 없이는 중반 진행 불가
Mechanical Arm, Brass Funnel, Train Track 등  
중반 핵심 부품들이 전부 황동 소재입니다.  
황동 생산 라인을 최우선 목표로 잡으세요.
:::

---

## Crushing Wheels — 광석 2배 처리

초반 Millstone을 Crushing Wheels로 교체하면 **광석 처리 효율이 2배**가 됩니다.

### 제작 방법

Crushing Wheels는 일반 제작대로 만들 수 없습니다.  
**Mechanical Crafter 21개**를 특정 배열로 구성해야 합니다.

```
Ponder(W키)로 Mechanical Crafter 배열을 확인하세요.
JEI에서 Crushing Wheels 검색 → Mechanical Crafter 레시피 확인
```

### 설치 방법

```
두 바퀴를 나란히 배치
→ 각각 반대 방향으로 회전력 공급 (기어박스 활용)
→ 위에서 아이템 투입 → 아래로 처리된 아이템 출력
```

### 광석 처리 효율

| 방법 | 철 광석 1개 → |
|------|-------------|
| 용광로 직접 제련 | 철 주괴 1개 |
| Millstone 분쇄 → 제련 | 철 주괴 1~2개 |
| **Crushing Wheels** → 제련 | **철 주괴 2개 보장** |

---

## Encased Fan + 물 — 세척(Washing)

Crushing Wheels로 분쇄한 재료를 **Fan + 물**로 세척하면 추가 부산물이 나옵니다.

### 세척 시스템 구성

```
[Crushing Wheels]
      ↓ 분말 출력
[Mechanical Belt]
      ↓
[Fan → 물 → Belt]  ← 세척 영역
      ↓
추가 부산물 수거
```

### 세척 부산물 예시

| 분말 → 세척 | 결과 |
|------------|------|
| 모래 | 금 조각, 철 조각, 에메랄드 등 |
| 자갈 | 부싯돌, 철 조각 등 |
| 철 분말 | 철 주괴 + 금 조각 |

세척 시스템은 **금 조각 대량 확보**에 특히 유용합니다.

---

## Brass Funnel — 아이템 선별

황동 퍼널의 핵심 기능은 **필터**입니다.

### 필터 설정 방법

Brass Funnel에 우클릭 → 필터 아이템을 필터 슬롯에 배치  
→ 해당 아이템만 통과, 나머지는 통과 거부

### 선별 시스템 예시

```
[Crushing Wheels 출력 벨트]
         ↓
    [Brass Funnel] (철 분말 필터)
         ↓                 ↓
   [철 분말 상자]    [나머지 계속 이동]
```

여러 개의 Brass Funnel을 나란히 배치해 여러 종류를 동시에 선별할 수 있습니다.

---

## Mechanical Arm — 복합 자동화

Mechanical Arm은 중반 자동화의 핵심 부품입니다.

### 기본 사용법

1. Mechanical Arm 설치
2. Arm에 우클릭 → 투입 위치(파란색), 출력 위치(주황색) 설정
3. 회전력 공급 → Arm이 자동으로 재료를 집어 지정 위치로 이동

### 활용 예시

**정밀 기계(Precision Mechanism) 제조 라인:**
```
[Deployer 1] (톱니바퀴 배치)
     ↓
[Deployer 2] (큰 톱니바퀴 배치)
     ↓
[Deployer 3] (철 조각 배치)
     ↓
[Precision Mechanism 완성]

→ Mechanical Arm이 각 단계에 재료를 공급
```

---

## 중반 핵심 자동화 라인 구축 순서

```
1. 황동 생산 라인 완성
2. Crushing Wheels 구축 → 광석 2배 처리
3. Fan + 물 세척 시스템 추가
4. Brass Funnel 선별 시스템
5. Mechanical Arm으로 복잡한 제조 자동화
6. Precision Mechanism 자동 생산 라인
```

### Precision Mechanism이 필요한 이유

Precision Mechanism은 중반 이후 핵심 부품의 재료입니다.

| 아이템 | 필요 이유 |
|--------|-----------|
| **Rotation Speed Controller** | RPM 정밀 제어 |
| **Train Controls** | 기차 시스템 |
| **Sequenced Gearshift** | 자동화 시퀀스 |

Precision Mechanism은 제작 과정이 복잡해서 Mechanical Arm + Deployer 자동 라인이 거의 필수입니다.

---

## 중반 동력 업그레이드

황동 시대에 접어들면 물레방아/풍차의 SU가 부족해질 수 있습니다.

### Furnace Engine 도입

```
용광로 엔진(Furnace Engine) + Flywheel 구성
→ 물레방아보다 훨씬 높은 SU 생산
→ 연료 자동 공급 시스템(호퍼)과 함께 구성
```

### 복수 네트워크 분리

하나의 네트워크에 모든 기계를 연결하면 과부하 발생 가능성이 높아집니다.  
용도별로 네트워크를 분리하는 것을 권장합니다.

```
네트워크 1: 광석 처리 (Crushing Wheels)
네트워크 2: 아이템 이송 (Belt 시스템)
네트워크 3: 정밀 가공 (Press, Mixer)
```
