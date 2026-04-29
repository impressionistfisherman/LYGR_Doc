---
title: IDAS 개요
sidebar_label: 개요
sidebar_position: 1
description: Integrated Dungeons and Structures(IDAS) 모드의 특징, 다른 던전 모드와의 차이점, 그리고 진행 단계를 이해합니다.
tags: [idas, 던전, 구조물, 탐험]
---

# IDAS 개요

IDAS(Integrated Dungeons and Structures)는 **정교하게 설계된 던전과 구조물**을 세계에 추가하는 모드입니다.  
단순히 건물만 추가하는 것이 아니라 Create의 기계 장치, Alex's Mobs의 몬스터, Quark의 블록들이  
**통합 배치**되어 살아있는 세계를 만들어냅니다.

---

## 다른 구조물 모드와의 차이점

| 항목 | 일반 구조물 모드 | IDAS |
|------|----------------|------|
| 내부 몬스터 | 바닐라 몬스터만 | Alex's Mobs 등 모드 몬스터 통합 |
| 기계 장치 | 없음 | Create 기계 함정/장치 존재 |
| 난이도 | 균일 | 초반\~후반 명확히 구분 |
| 보물 지도 | 없음 | 구조물 간 연결 진행 시스템 |
| 규모 | 소\~중형 | 소형\~대형 (라비린스는 거대) |

---

## IDAS의 핵심 특징

### 🔗 구조물 연계 진행 시스템

초반 구조물에서 **보물 지도**가 드롭되고, 그 지도가 더 큰 구조물로 안내합니다.  
자연스러운 퀘스트처럼 진행이 연결됩니다.

```
Brick House (브릭 하우스)
  → 지도 발견 → Merchant Campsite (상인 야영지)
      → 지도 발견 → 중형 던전
          → 지도 발견 → 대형 엔드게임 던전
```

### ⚙️ Create 기계 함정

Tinker's Workshop, Labyrinth 등 일부 구조물에는  
**Create 모드의 회전 톱날, 컨베이어, 분쇄기** 같은 함정이 실제로 작동합니다.  
무턱대고 돌진하면 즉사할 수 있습니다.

### 🎵 전용 음악

IDAS 전용 음악 디스크가 존재합니다.  
Labyrinth에서 파라오 보스를 처치하거나 특정 구조물을 탐험하면 획득 가능합니다.

---

## 구조물 난이도 단계

IDAS의 구조물은 크게 세 단계로 구분됩니다.

| 단계 | 권장 장비 | 대표 구조물 |
|------|-----------|-------------|
| **초반** | 철 장비 이상 | Brick House, Cottage, Fisherman's Lodge |
| **중반** | 다이아몬드 장비 이상 | Haunted House, Bandit Village, Castle |
| **엔드게임** | 완전한 다이아/네더라이트 + Apotheosis 장비 | Labyrinth, Ancient Mines, Pillager Fortress, Tinker's Workshop |

---

## 구조물 찾는 방법

### 방법 1 — 자연 탐험

세계 곳곳에 자연 생성되므로 탐험하다 보면 발견됩니다.  
Xaero's World Map이 있으면 발견한 구조물 위치를 표시해두세요.

### 방법 2 — /locate 명령어

```
/locate idas:<구조물 이름>

예시:
  /locate idas:labyrinth         → 가장 가까운 라비린스
  /locate idas:pillager_fortress → 가장 가까운 필라저 요새
  /locate idas:ancient_mines     → 가장 가까운 고대 광산
  /locate idas:tinkersworkshop  → 가장 가까운 팅커 작업장

전체 목록 확인:
  채팅에 /locate idas 입력 후 Tab 키
  → 모든 IDAS 구조물 이름 자동완성
```

### 방법 3 — Explorers Compass / Nature's Compass

이 모드팩에 포함된 탐색 나침반 모드로 구조물 위치를 검색할 수 있습니다.

---

## 탐험 준비 체크리스트

던전 탐험 전 준비할 것들입니다.

```
중형 이상 던전 진입 전:
  [ ] 충분한 음식 (배고픔 = 전투 불리)
  [ ] 포션 (회복 포션 최소 5개 이상)
  [ ] Apotheosis Rare 이상 장비 착용
  [ ] 횃불 또는 야간투시 포션
  [ ] 빈 인벤토리 공간 (루팅 공간)
  [ ] Waystones 귀환 포인트 설정

엔드게임 던전 진입 전:
  [ ] Apotheosis Epic 이상 장비
  [ ] 직업 스킬 트리 중반 이상 해금
  [ ] Create/Mekanism 장비 강화
  [ ] 대량 포션 준비
  [ ] 비상 탈출 계획 (텔레포트 주문 등)
```
