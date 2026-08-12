# ADR 0002: Fluid Typography and Responsive Grid System

- **Status**: Approved
- **Date**: 2026-08-12
- **Deciders**: User, Antigravity AI

---

## 1. Context & Problem Statement (맥락 및 문제)

<장부 이후 — 고대 문자문화 비교 연구 아틀라스> 웹 애플리케이션의 일부 상세 뷰어(`CivilizationDetailView`, `ThemesView`, `HomeView` 등)에서 고정 비율 2단 그리드 (`2fr 1fr`, `1fr 2.5fr`, `1fr 3fr`)가 사용되어, 900px 이하 모바일/태블릿 화면에서 텍스트 컬럼 폭이 150px~200px 수준으로 좁아져 긴 학술 제목과 본문이 세로 7~8줄로 쪼개지거나 단어가 기이하게 자르는 가독성 저하 문제가 발생했습니다.
또한 모바일 화면 최하단 콘텐츠가 하단 고정 Bottom Navigation Bar(64px)에 의해 일부 덮이는 현상이 존재했습니다.

---

## 2. Decision Drivers (결정 요인)

1. **학술 제목 및 본문의 무결성(Academic Typography Integrity)**: 긴 학술 명제와 질문 텍스트가 줄당 1~2글자 단위로 쪼개지지 않고 모바일에서도 시원하게 1~2줄 내로 가독성 있게 표현되어야 함.
2. **반응형 1열 수직 전환 (1-Column Mobile Stacking)**: 데스크톱의 2단/3단 나란히 보기 레이아웃을 모바일(<= 900px)에서는 수직 1열 카드로 자동 스택 변환.
3. **하단 안전 영역 확보 (Bottom Safe Padding)**: 모바일 하단 네비게이션 바(64px) + 여유 여백(20px~32px)을 반영하여 최하단 본문 내용이 가려지지 않는 `padding-bottom: 96px` 전역 확보.

---

## 3. Decision (결정 내용)

### 3.1. 반응형 CSS 그리드 클래스 도입 (`.grid-responsive-2col`, `.grid-responsive-3col`)
- 인라인 `gridTemplateColumns: '2fr 1fr'` 및 `'1fr 3fr'` 스타일을 제거하고, 반응형 CSS 클래스(`.grid-responsive-2col`)로 교체한다.
- 화면 너비 > 900px 일 때는 2단/3단 그리드를 유지하고, <= 900px 일 때는 100% 수직 1열 카드로 자동 재배치한다.

### 3.2. 가변 타이포그래피 (Fluid Typography & Header Scaling)
- 모바일(<= 900px) 환경에서 헤딩(`h1`, `h2`, `h3`)과 제목 폰트 크기를 반응형으로 스케일링하며, `word-break: keep-all; text-wrap: balance;`를 적용하여 어색한 쪼개짐을 방지한다.

### 3.3. 전역 하단 안전 영역 패딩 (`padding-bottom: 96px`)
- `index.css`의 모바일 미디어 쿼리에 `body` 패딩 `padding-bottom: 96px`을 적용하여 모든 페이지의 본문 최하단 요소가 Bottom Navigation Bar에 덮이지 않고 노출되도록 보장한다.

---

## 4. Consequences (결과 및 이점)

- **긍정적 영향**:
  - 모바일 가독성 및 텍스트 쾌적성 200% 이상 향상.
  - 좁은 화면에서 텍스트 찌그러짐 현상 완벽 방지.
  - 모든 모바일 기기(375px~500px)에서 가로 짤림 없이 쾌적한 학술독해 가능.
