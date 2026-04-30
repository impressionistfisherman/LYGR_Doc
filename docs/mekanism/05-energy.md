---
title: 에너지 발전 시스템
sidebar_label: 에너지 발전
sidebar_position: 5
description: Mekanism의 발전기 종류와 에너지 효율적으로 관리하는 방법을 이해합니다.
tags: [mekanism, 에너지, 발전기, fe]
---

# 에너지 발전 시스템

Mekanism의 모든 기계는 **FE(Forge Energy)** 로 작동합니다.
진행 단계에 맞는 발전기를 구축해야 기계들이 원활하게 돌아갑니다.

---

## 발전기 종류와 비교

아래 수치는 일반적인 기본 설정 기준입니다. 모드팩 설정이나 Mekanism 버전에 따라 발전량과 전송량이 달라질 수 있으므로, 실제 값은 기계 툴팁과 JEI를 우선해서 확인하세요.

| 발전기 | 발전량 | 연료 | 권장 단계 |
|--------|--------|------|-----------|
| **Heat Generator** | 최대 800 FE/t | 용암 (무한) | 초반 |
| **Wind Generator** | 최대 480 FE/t | 없음 | 초반\~중반 |
| **Solar Generator** | 최대 120 FE/t | 없음 | 초반 보조 |
| **Advanced Solar Generator** | 최대 1,200 FE/t | 없음 | 중반 |
| **Gas-Burning Generator** | 최대 20,000 FE/t | 수소/에탄 등 | 중반\~후반 |
| **Bio-Generator** | 최대 4,800 FE/t | 바이오 연료 | 중반 보조 |
| **Fission Reactor** | 수십만 FE/t | 우라늄 | 후반 (위험) |
| **Fusion Reactor** | 수백만 FE/t | 중수소 | 최종 |

---

## 발전기 상세

### Heat Generator (열 발전기)

**초반 가장 쉬운 발전원입니다.**

```
설치 방법:
  1. Heat Generator 설치
  2. 6면 중 최대한 많은 면을 용암으로 채우기
     (용암 버킷을 주변 블록에 배치)
  3. Configurator로 각 면을 Heat 모드 설정

발전량: 용암이 닿는 면 수에 비례
최대: 6면 모두 용암 = 약 800 FE/t
```

---

### Wind Generator (풍력 발전기)

**연료 없이 무한 발전하는 초반 주력 발전기입니다.**

```
발전량 = 설치 높이에 비례
Y=192 이상 = 최대 480 FE/t

설치 팁:
  - 가능한 높은 곳에 설치
  - 여러 개 설치해 합산 (스택 가능)
  - 3\~4개면 초반 기계 여러 대를 돌리기 충분
```

---

### Gas-Burning Generator (가스 연소 발전기)

**중반 이후 주력 발전원입니다.**

```
연료: 수소(Hydrogen), 에탄(Ethane) 등 가스

수소를 연료로 사용하는 방법:
  1. Electric Pump + Electrolytic Separator로 물 → 수소 생산
  2. 수소를 Gas Tank에 저장
  3. Gas-Burning Generator에 수소 파이프 연결
  4. 최대 10,000\~20,000 FE/t 발전
```

Tier 2 광석 처리 시스템의 수소 부산물을 여기에 연결하면
에너지를 일부 자급할 수 있습니다.

---

### Advanced Solar Generator (고급 태양 발전기)

```
발전량: 최대 1,200 FE/t (낮, 맑은 날씨)
장점: 연료 없음, 관리 불필요
단점: 날씨/시간 영향 (비/밤에는 발전 안 됨)

권장: 8\~10개 설치하면 낮 시간 기본 에너지 자급 가능
     Energy Cube에 낮에 충전 → 밤에 사용
```

---

## 에너지 저장 및 관리

### Energy Cube (에너지 큐브)

에너지를 저장하는 배터리입니다.
표의 용량과 입출력 속도는 기본 설정 기준입니다.

| 티어 | 저장 용량 | 입출력 속도 |
|------|-----------|------------|
| **Basic** | 1,600,000 FE | 256 FE/t |
| **Advanced** | 8,000,000 FE | 1,280 FE/t |
| **Elite** | 40,000,000 FE | 6,400 FE/t |
| **Ultimate** | 200,000,000 FE | 32,000 FE/t |

> **참고: 에너지 버퍼 필수**
>
> 발전기가 간헐적으로 발전(태양광, 풍력 등)하는 경우
> Energy Cube를 버퍼로 배치해 에너지를 안정적으로 공급하세요.

### Induction Matrix (유도 행렬)

후반 대용량 에너지 저장을 위한 멀티블록입니다.

```
구축:
  최소 3×3×3 박스 형태
  외벽: Induction Casing
  내부: Induction Provider (발전/저장 추가 셀)

용량: 설치한 셀 종류와 개수에 따라 증가
     최대 수조 FE 저장 가능
```

---

## 에너지 케이블 티어

기계 간 에너지 전달 케이블도 티어가 있습니다.
표의 전송량은 기본 설정 기준입니다.

| 케이블 | 최대 전송량 | 특징 |
|--------|------------|------|
| **Basic** | 256 FE/t | 초반 충분 |
| **Advanced** | 1,280 FE/t | 중반 |
| **Elite** | 6,400 FE/t | 후반 |
| **Ultimate** | 무제한 | 최종 |

고출력 발전기를 사용할 때 케이블 용량이 부족하면
에너지 손실이 발생하거나 전송이 막힐 수 있습니다.
발전기 출력에 맞는 케이블 티어를 사용하세요.

---

## 단계별 에너지 목표

```
초반 (Tier 1\~2 광석 처리):
  목표: 5,000\~10,000 FE/t
  방법: Wind Generator 3\~5개 + Heat Generator 1개

중반 (Tier 2\~3 광석 처리):
  목표: 20,000\~50,000 FE/t
  방법: Gas-Burning Generator (수소) + Advanced Solar

후반 (Tier 4 광석 처리 + Digital Miner):
  목표: 100,000 FE/t 이상
  방법: Gas-Burning Generator 다수 + Induction Matrix

최종 (전체 자동화):
  목표: 500,000+ FE/t
  방법: Fission/Fusion Reactor (또는 모드팩 타 발전원)
```
