---
sidebar_position: 2
title: 성능 최적화 — 렉 줄이기
---

# 성능 최적화 — 렉 줄이기

> 모드가 178개라 기본 설정으로는 렉이 걸릴 수 있어.  
> 이 설정들만 해줘도 체감이 확 달라져!

---

## 먼저 확인할 것 — RAM 할당량

**가장 중요한 설정이야. 이것부터 해!**

모드팩은 RAM을 많이 먹어. 기본값으론 턱없이 부족해.

### CurseForge에서 RAM 늘리는 법

```
CurseForge 앱 → 모드팩 우클릭 → Profile Options
→ Java Settings 탭
→ Allocated Memory 슬라이더 조정
```

| 내 PC RAM | 권장 할당량 |
|-----------|------------|
| 12GB | 6~7GB (6144~7168MB) |
| 16GB | 8~10GB (8192~10240MB) |
| 32GB | 12GB (12288MB) |

> ⚠️ PC 전체 RAM의 절반 이상은 주지 마. 운영체제도 RAM이 필요해.

---

## 게임 내 그래픽 설정

게임 켜고 `ESC → Options → Video Settings` 로 들어가.

### 기본 최적화 설정

| 설정 항목 | 렉 심할 때 | 어느 정도 돌아갈 때 |
|-----------|-----------|-------------------|
| **Render Distance** | 6~8 청크 | 10~12 청크 |
| **Simulation Distance** | 5~6 청크 | 8~10 청크 |
| **Graphics** | Fast | Fancy |
| **Smooth Lighting** | Off | On |
| **Clouds** | Off | Fast |
| **Particles** | Minimal | Decreased |
| **Entity Distance** | 75% | 100% |
| **Chunk Updates** | 1 | 3 |

> 💡 **Render Distance가 가장 큰 영향을 줘.**  
> 8 청크만 해도 대부분 환경에서 쾌적하게 돌아가.

### Sodium / Iris 설정 (모드팩 포함 여부 확인)

이 모드팩에 Sodium이 포함되어 있으면 추가 설정 가능해.

```
Video Settings → Quality 탭
→ Chunk Occlusion: On
→ Use Block Face Culling: On
→ Use Fog Occlusion: On
→ Translucency Sorting: Off (렉 심하면)
```

---

## FPS 낮을 때 체크리스트

게임이 버벅거리면 순서대로 확인해봐.

### 1단계: RAM 부족 확인
```
F3 눌러서 디버그 창 열기
오른쪽 위에 메모리 사용량 표시됨

예시: 7412MB / 8192MB (91%)
→ 90% 이상이면 RAM 부족! 할당량 늘리기
```

### 2단계: Render Distance 낮추기
```
ESC → Options → Video Settings
→ Render Distance를 6으로 낮추기
→ FPS 올라가는지 확인
```

### 3단계: 백그라운드 프로그램 종료
```
마인크래프트 실행 중에는:
→ 크롬 탭 최소화 or 종료
→ Discord 오버레이 끄기 (Discord → 설정 → 게임 오버레이 끄기)
→ 불필요한 프로그램 Task Manager에서 종료
```

### 4단계: Java 인수 최적화

CurseForge → 모드팩 → Java Settings → Additional Java Arguments 에 아래 복붙:

```
-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1
```

> 💡 이 설정은 가비지 컬렉션(메모리 정리)을 최적화해줘.  
> 특히 **주기적으로 멈추는 렉(프리징)**이 줄어들어.

### 5단계: 셰이더 끄기

셰이더가 켜져 있으면 성능을 엄청 잡아먹어.

```
Video Settings → Shader Packs
→ (none) 선택 → 셰이더 끄기
```

---

## 렉의 종류별 해결책

### 🔴 FPS가 계속 낮아 (15~30 FPS)
→ Render Distance 낮추기, RAM 늘리기, 셰이더 끄기

### 🟡 갑자기 멈췄다가 돌아와 (프리징)
→ Java 인수 최적화, RAM 늘리기 (GC 문제)

### 🟠 특정 지역에서만 렉
→ 그 지역에 복잡한 모드 기계가 있을 가능성 높음  
→ Create/Mekanism 대형 기계 근처에서 흔한 현상

### 🟣 서버(멀티) 렉
→ 서버 호스트 PC 사양 문제일 가능성 높음  
→ 호스트 PC RAM 할당량 확인

---

## 그래픽 카드별 추가 팁

### NVIDIA GPU
```
NVIDIA 제어판 → 프로그램 설정 → Java 추가
→ 전원 관리 모드: 최대 성능 선호
→ 수직 동기화: 끄기
```

### AMD GPU
```
AMD Software → 게임 → Java 추가
→ Radeon 부스트: 끄기 (오히려 렉 유발 가능)
→ 수직 동기화: 끄기
```

---

## 권장 사양별 설정 프리셋

### 🔴 낮은 사양 (RAM 12GB, GTX 1060 이하)
```
Render Distance: 6
Simulation Distance: 5
Graphics: Fast
Smooth Lighting: Off
Clouds: Off
Particles: Minimal
셰이더: 끄기
```

### 🟡 중간 사양 (RAM 16GB, GTX 1660 ~ RTX 2060)
```
Render Distance: 10
Simulation Distance: 8
Graphics: Fancy
Smooth Lighting: On
Clouds: Fast
Particles: Decreased
셰이더: 가벼운 것만 (Complementary Unbound Lite 등)
```

### 🟢 높은 사양 (RAM 32GB, RTX 3070 이상)
```
Render Distance: 16
Simulation Distance: 12
Graphics: Fancy
Smooth Lighting: On
Clouds: Fancy
Particles: All
셰이더: 원하는 것 사용 가능
```
