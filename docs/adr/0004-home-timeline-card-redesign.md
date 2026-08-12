# ADR 0004: Home View Timeline Card Redesign & Mobile Micro-Ruler

- **Status**: Approved
- **Date**: 2026-08-12
- **Deciders**: User, Antigravity AI

---

## 1. Context & Problem Statement (맥락 및 문제)

개요 화면(`HomeView`)의 타임라인 요약 섹션에서:
1. 상단 연대 라벨이 `기원전 3400 BCE` 등 중복 수식어로 되어 있어 375px~500px 모바일 화면에서 3줄로 지저분하게 꺾이는 문제가 있었습니다.
2. 문명별 타임라인 바(`height: 20px`, `position: absolute`)의 내부 설명 텍스트가 모바일 1열 스택 시 20px 박스 밖으로 탈출하여 아래 문명 카드와 겹치거나 찌그러지는 가독성 결함이 있었습니다.

---

## 2. Decision Drivers (결정 요인)

1. **텍스트-바 분리 카드 구조(Text-Bar Separated Mobile Card)**: `position: absolute` 및 고정 높이 20px 제한을 제거하고, 문명 배지 → 비주얼 연대 프로그레스 바 → 유물 및 연대 텍스트 설명이 수직으로 자연스럽게 흐르는 독립 카드로 변환.
2. **간결한 연도 칩 표기 (Micro-Ruler Chips)**: "기원전" 중복 문구를 떼고 `3400 BCE`, `2500 BCE`, `1500 BCE`, `800 BCE`, `300 BCE`의 1줄 뱃지 라인을 확보.
3. **완벽한 가독성 보장**: 소형 모바일(375px)부터 대형 모니터까지 텍스트 겹침이나 이탈이 0%가 되도록 보장.

---

## 3. Decision (결정 내용)

### 3.1. 모바일 반응형 타임라인 카드 컴포넌트 (`.home-timeline-card`)
- `HomeView.tsx` 내 문명별 레인을 `.home-timeline-card`로 교체한다.
- 상단: 문명 고유 컬러 배지 + 연대 범위 태그
- 중간: 비주얼 타임라인 연대 프로그레스 바 (`.home-timeline-bar-track`, `.home-timeline-bar-fill`)
- 하단: 주요 유물 및 텍스트 서사 설명 문구 (`.home-timeline-desc`)

### 3.2. 마이크로 룰러 라벨 간소화 (`.home-ruler-chips`)
- 상단 룰러 라벨을 `3400 BCE`, `2500 BCE`, `1500 BCE`, `800 BCE`, `300 BCE` 1줄 칩 형태로 정돈한다.

---

## 4. Consequences (결과 및 이점)

- **긍정적 영향**:
  - 개요 화면 타임라인 요약 카드 가독성 200% 향상.
  - 모바일에서 텍스트 겹침 및 20px 바 이탈 현상 완벽 방지.
  - 시각적 디자인 품질 및 현대적 브랜드 감성 극대화.
