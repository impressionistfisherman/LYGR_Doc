---
title: 고급 기능 — 무선 터미널, Quantum Bridge, 서브네트워크
sidebar_label: 고급 기능
sidebar_position: 6
description: AE2의 무선 접속, Quantum Network Bridge, 서브네트워크, ME Wireless Connector 등 고급 기능을 완전히 이해합니다.
tags: [ae2, 무선터미널, quantum-bridge, 서브네트워크]
---

# 고급 기능 — 무선 터미널, Quantum Bridge, 서브네트워크

기본 네트워크가 구축됐다면 이제 더 편리하고 강력한 기능을 활용할 차례입니다.

---

## 무선 터미널 (Wireless Terminal)

ME Terminal을 들고 다니면서 어디서든 네트워크에 접속합니다.

### 구성 요소

```
ME Wireless Access Point:
  네트워크에 연결해서 설치
  → 일정 반경 내에서 무선 신호 발신

Wireless Terminal:
  충전 후 들고 다니면서 사용
  → ME Terminal과 완전히 동일한 기능
  → 에너지 소모 있음 (충전 필요)
```

### 설정 방법

```
1. ME Wireless Access Point 설치 (케이블에 연결)
2. Wireless Terminal 충전 (충전소 또는 Energy Cell에 꽂기)
3. Wireless Terminal을 ME Wireless Access Point에 우클릭
   → 해당 Access Point에 연결됨
4. 이제 어디서든 네트워크 접속 가능
```

### 거리 제한

무선 접속 거리는 Access Point 업그레이드에 따라 확장됩니다.

```
Range Card 업그레이드 삽입:
  기본: 16블록
  Range Card 1개: 48블록
  Range Card 최대: 128블록 이상
```

---

## Quantum Network Bridge (양자 네트워크 브릿지)

서로 다른 차원 또는 무한히 먼 거리를 연결하는 멀티블록입니다.

### 기능

```
- 무한 거리 채널 전송
- 차원 간(오버월드 ↔ 네더 ↔ 엔드) 연결 가능
- 채널 32개 전송
```

### 구성

```
Quantum Network Bridge = 3×3×1 멀티블록

외곽 8개: Quantum Ring
중앙 1개: Quantum Link Chamber (또는 Quantum Network Bridge)
```

### 사용 방법

```
1. 두 위치에 각각 Quantum Network Bridge 설치
2. Quantum Entangled Singularity 2개 제작
   (폭발 + Singularity 아이템으로 제작 — JEI 확인)
3. 두 Bridge의 Link Chamber에 각각 1개씩 삽입
4. 연결 완료 → 채원을 통해 채널 전송 시작
```

:::info 차원간 자동화에 필수
네더에 있는 블레이즈 스포너나 엔드의 자원을  
오버월드 ME 네트워크와 직접 연결할 수 있습니다.
:::

---

## 서브네트워크 (Subnetwork)

하나의 큰 네트워크를 목적별로 독립된 소규모 네트워크로 분리합니다.

### 왜 서브네트워크를 쓰나요?

```
문제:
  모든 기기를 메인 네트워크에 연결하면
  → 채널이 빠르게 고갈됨
  → 복잡해질수록 관리 어려움

해결:
  기능별로 별도 네트워크 구성
  → 메인 네트워크는 저장/터미널만
  → 자동화 라인은 별도 서브 네트워크
```

### 서브네트워크 구성 방법

| 구성 요소 | 역할 |
|-----------|------|
| 메인 네트워크의 Interface | 메인 저장소와 서브네트워크를 연결 |
| 서브네트워크의 Storage Bus | Interface를 저장 공간처럼 인식 |
| Quartz Fiber | 에너지만 전달하고 채널은 분리 |

이 구조를 쓰면 서브네트워크의 기기들이 메인 채널을 소모하지 않고, 서브네트워크에서 만든 아이템은 메인 저장소에 저장할 수 있습니다.

---

## 저장 셀 관리 고급 팁

### 셀 파티션 (Cell Workbench)

저장 셀에 특정 아이템만 저장하도록 제한합니다.

```
Cell Workbench에 Storage Cell 삽입
→ 저장 허용할 아이템 종류 설정
→ 설정된 아이템만 해당 셀에 저장됩니다

활용:
  광석 전용 셀, 식량 전용 셀, 장비 전용 셀 등으로 분류
  → 타입(Type) 효율 극대화
```

### 셀 용량 최적화

```
같은 아이템을 많이 저장:
  → 1k Cell에도 수천 개 저장 가능
  → 타입(종류 수)이 중요

아이템 종류가 많은 경우:
  → 4k 또는 16k Cell 사용
  → 또는 셀 파티션으로 각 셀을 전용으로 설정
```

---

## ME Chest vs ME Drive

| 항목 | ME Chest | ME Drive |
|------|----------|----------|
| 셀 수용 | 1개 | 최대 10개 |
| 채널 | 1채널 | 1채널 |
| 용도 | 임시 저장, 빠른 접근 | 주요 저장소 |
| 특징 | 셀 내용 직접 GUI로 확인 가능 | 네트워크 통합 저장 |

초반엔 ME Chest로 시작해도 되지만,  
본격적인 저장 시스템은 ME Drive를 여러 개 구성하는 것이 효율적입니다.

---

## 자주 묻는 질문

**Q: 채널이 계속 부족한데 어떻게 해야 하나요?**  
A: Dense 케이블을 메인 간선으로 사용하고, 기능별로 서브네트워크를 분리하세요.

**Q: Autocrafting이 중간에 멈춰요.**  
A: 중간 재료가 부족하거나 처리 기계에 문제가 있는 경우입니다.  
Crafting Monitor에서 현재 작업 상태와 오류를 확인하세요.

**Q: ME Terminal에서 아이템이 보이지 않아요.**  
A: Storage Cell이 ME Drive에 삽입되어 있는지, 에너지가 연결되어 있는지 확인하세요.  
채널 부족으로 ME Drive가 비활성화됐을 수도 있습니다.
