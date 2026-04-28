---
title: 채널 시스템 완전 이해
sidebar_label: 채널 시스템
sidebar_position: 3
description: AE2에서 가장 헷갈리는 채널(Channel) 시스템의 작동 원리와 올바른 네트워크 설계 방법을 완전히 이해합니다.
tags: [ae2, 채널, channel, me컨트롤러, 케이블]
---

# 채널 시스템 완전 이해

채널은 AE2에서 가장 헷갈리는 개념입니다.  
USB 케이블에 비유하면 이해하기 쉽습니다.

---

## 채널이란?

```
비유:
  ME Controller = 컴퓨터 본체
  ME 케이블     = USB 허브
  채널          = USB 포트 1개
  AE2 기기      = USB 기기 (마우스, 키보드 등)

USB 포트가 8개인 허브에
9번째 기기를 꽂으면 인식이 안 되듯이,
채널이 부족한 케이블에 연결된 기기는 작동하지 않습니다.
```

---

## 채널 용량

| 케이블/기기 | 채널 전달 용량 |
|------------|---------------|
| 일반 케이블 (Glass, Covered, Smart) | **8채널** |
| Dense 케이블 (Covered Dense, Smart Dense) | **32채널** |
| Full Block 기기 (ME Drive, Interface 등) | **8채널** (일반 케이블과 동일) |
| ME P2P Tunnel | **32채널** |
| Quantum Network Bridge | **32채널** |

---

## ME Controller

채널의 원천입니다.

```
ME Controller 1개:
  각 면 6개 × 32채널 = 최대 192채널 공급

ME Controller 여러 개 연결:
  멀티블록 형태로 확장 가능
  → 면이 늘어날수록 공급 채널 증가
```

### ME Controller 설치 방법

```
1. ME Controller 블록 하나 이상 설치
2. Energy Acceptor 또는 Controller 자체에 에너지 연결
   (Controller는 에너지 Acceptor 역할도 겸함)
3. Controller에서 케이블 연장
4. 기기들을 케이블에 연결
```

:::tip ME Controller를 언제 추가하나요?
Ad-Hoc 네트워크에 기기가 **8개를 초과**하기 전에 추가하세요.  
또는 처음부터 Controller와 함께 시작해도 됩니다.
:::

---

## 채널 분배 원리

채널은 **ME Controller에서 가장 가까운 경로**로 배분됩니다.

```
예시:
  Controller ── [케이블 8채널]
                    ├── ME Drive (1채널 사용, 남은 7채널)
                    ├── ME Terminal (1채널 사용, 남은 6채널)
                    ├── Import Bus (1채널 사용, 남은 5채널)
                    ├── Export Bus (1채널 사용, 남은 4채널)
                    └── ...
```

### 채널 부족 시 증상

- 기기 앞에 **빨간 X 표시** → 해당 기기 채널 없음
- Smart Cable의 선이 **빨간색** → 채널 부족

### 채널 부족 해결법

```
방법 1: Dense 케이블로 교체
  일반 케이블 8채널 → Dense 케이블 32채널

방법 2: ME Controller 추가
  더 많은 면 = 더 많은 채널 공급

방법 3: 네트워크 트리 구조 최적화
  케이블을 분기해서 각 가지에 채널 여유 확보
```

---

## 올바른 네트워크 설계

### 트리(Tree) 구조 권장

AE2 공식 가이드는 **트리 구조**를 권장합니다.

```
✅ 올바른 구조 (트리):
  Controller
     ├─── [Dense Cable] ─── 저장 구역 (Drive × 5)
     ├─── [Dense Cable] ─── 접근 구역 (Terminal, Wireless)
     └─── [Dense Cable] ─── 자동화 구역 (Bus × 여러개)

❌ 잘못된 구조 (루프):
  Controller ─── [Cable] ─── Machine A ─── [Cable] ─── Controller
  (루프가 생기면 채널 경로가 예측 불가능해짐)
```

### Dense 케이블을 간선으로 사용

```
Controller ── [Dense Cable, 32채널] ── 분기점
                                         ├── [일반 Cable, 8채널] ── 기기들 (8개 이하)
                                         ├── [일반 Cable, 8채널] ── 기기들 (8개 이하)
                                         └── [일반 Cable, 8채널] ── 기기들 (8개 이하)
```

---

## Smart Cable로 채널 모니터링

Smart Cable은 케이블 측면에 **현재 채널 사용량**을 표시합니다.

```
Smart Cable 색상 표시:
  파란 선 1개 = 채널 1개 사용 중
  선이 많아질수록 채널 사용량 증가
  빨간 표시 = 채널 초과 (오류)
```

네트워크 설계 중 Smart Cable을 사용하면 병목 구간을 쉽게 파악할 수 있습니다.

---

## 채널 없이 에너지만 전달 — Quartz Fiber

특정 상황에서는 에너지만 전달하고 채널은 분리하고 싶을 때가 있습니다.

```
Quartz Fiber:
  에너지는 전달하지만 채널(네트워크)은 연결하지 않음
  → 서브네트워크를 독립적으로 운용할 때 유용
  → 두 네트워크 간 에너지 공유에 활용
```

---

## P2P Tunnel — 채널 무선 전송

P2P Tunnel은 채널을 물리적 거리를 뛰어넘어 전달합니다.

```
사용 방법:
  1. P2P Tunnel 2개 제작
  2. ME Wrench로 한 쪽을 다른 쪽에 연결 (페어링)
  3. 한 쪽에서 32채널 입력 → 다른 쪽에서 32채널 출력

활용:
  멀리 떨어진 저장 공간을 메인 네트워크에 연결
  층과 층 사이 채널 전달 (케이블 없이)
```
