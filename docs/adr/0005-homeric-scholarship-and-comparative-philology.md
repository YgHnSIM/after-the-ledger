# ADR 0005: Homeric Scholarship & Comparative Near-Eastern Philology Architecture

- **Status**: Approved
- **Date**: 2026-08-13
- **Deciders**: User, Antigravity AI (Prometheus)

---

## 1. Context & Problem Statement (맥락 및 문제)

<장부 이후 — 고대 문자문화 비교 연구 아틀라스>의 호메로스 서사시 모듈(`HomericEpicView.tsx`)에 단순히 문학적 요약뿐만 아니라, **18세기 이 이래의 서양고전학(Classical Philology) 학쟁 성과, 파리-로드(Parry-Lord) 구전 공식설, M.L. West의 동·서 지중해 근동 비교학, 미케네 Linear B 고고학 대조, 알렉산드리아 오벨로스 비평**을 전세계 언어 사료 체계로 통합할 아키텍처가 필요합니다.

---

## 2. Decision Drivers (결정 요인)

1. **4대 연구 영역 체계화 (4-Tier Scholarship Structure)**:
   - **Tier 1**: 호메로스 문제(Homeric Question) 분석파 vs 통일파 & 구전 공식설(Oral-Formulaic Theory)
   - **Tier 2**: 근동 서사시(길가메시, 아트라하시스, 우가리트 바알) 병렬 비교 매트릭스
   - **Tier 3**: 청동기 미케네 Linear B 점토판 어휘(Wa-na-ka vs Anax) 대조
   - **Tier 4**: 알렉산드리아 도서관(아리스탈코스, 제노도토스) 텍스트 비평 & 파피루스 사본학
2. **학술 사료 출처 명시 (Academic Citations)**: 학자명(Milman Parry, Albert Lord, Martin L. West, Gregory Nagy, F.A. Wolf 등)과 출판 연도, 학술 DOI 및 사료 명칭을 필수로 명시.
3. **인터랙티브 학술 탭 UI (4-Subtab Layout)**: `HomericEpicView.tsx` 내에 4개 서브 탭을 신설하여 학술 깊이감과 정교한 탐색 환경 제공.

---

## 3. Decision (결정 내용)

### 3.1. TypeScript 인터페이스 확장 (`src/types/index.ts`)
- `HomericScholarshipRecord`: 학설 쟁점, 학자명, 연도, 주요 명제, 근거.
- `NearEasternParallel`: 근동 서사시(길가메시 등) 모티브, 일리아스/오뒷세이아 대응 구절, 학술 해설.
- `LinearBComparison`: 미케네 그리스어 어휘(Wa-na-ka, Qa-si-re-u), 호메로스 그리스어 대응, 의미 변천.

### 3.2. 전문 학술 데이터셋 신설 (`src/data/homerScholarship.ts`)
- 전세계 서양고전학 및 비교문학 연구 성과 데이터베이스 작성.

### 3.3. UI 컴포넌트 탭 확장 (`src/components/HomericEpicView.tsx`)
- 4개 연구 영역별 인터랙티브 서브 탭 렌더링 모듈 추가.

---

## 4. Consequences (결과 및 이점)

- **긍정적 영향**:
  - 디지털 아틀라스의 호메로스 서사시 탭이 세계 최고 수준의 서양고전학·비교문학 전문성을 확보.
  - 구전 가창부터 알렉산드리아 정전화에 이르는 텍스트 비평 역사가 완벽히 시각화됨.
