# Homeric Epic Scholarship & Global Comparative Philology Plan

- **Goal**: 《일리아스》·《오뒷세이아》 서사시 탭에 18세기 이래 서양고전학(Classical Philology) 핵심 학쟁 성과, 파리-로드(Parry-Lord) 구전 공식설, M.L. West 근동 서사시 비교, 미케네 Linear B 고고학 대조, 알렉산드리아 도서관 파피루스 텍스트 비평 연구 데이터를 전세계 사료 출처와 함께 통합 구축합니다.
- **Plan Slug**: `homeric-epic-scholarship-deepening`
- **Created**: 2026-08-13
- **Author**: Prometheus (ulw-plan)

---

## User Review Required

> [!IMPORTANT]
> - `src/types/index.ts`에 `HomericScholarshipRecord`, `NearEasternParallel`, `LinearBComparison` 타입을 신설합니다.
> - `src/data/homerScholarship.ts` 신규 생성: Parry-Lord 구전 공식설, M.L. West 근동 비교문학(길가메시, 아트라하시스, 우가리트 바알 서사시), 미케네 Linear B 어휘(Wa-na-ka, Qa-si-re-u), 알렉산드리아 오벨로스 텍스트 비평 사료 데이터 작성.
> - `src/components/HomericEpicView.tsx`: 4대 서브 탭(`[학술 쟁점 & 구전 공식설]`, `[동·서 지중해 근동 비교]`, `[미케네 Linear B 대조]`, `[텍스트 비평 & 파피루스]`) 인터랙티브 UI 렌더링.

---

## Proposed Changes

### Documentation & Architecture

#### [NEW] [0005-homeric-scholarship-and-comparative-philology.md](file:///c:/Working/docs/adr/0005-homeric-scholarship-and-comparative-philology.md)
#### [MODIFY] [CONTEXT.md](file:///c:/Working/CONTEXT.md)

---

### Core Data & Types

#### [MODIFY] [src/types/index.ts](file:///c:/Working/src/types/index.ts)
- `HomericScholarshipRecord` (학설 쟁점, 학자명, 연도, 명제, 근거 사료)
- `NearEasternParallel` (근동 서사시 모티브 1:1 대조 및 학술 해설)
- `LinearBComparison` (미케네 점토판 어휘 및 호메로스 그리스어 대조)

#### [NEW] [src/data/homerScholarship.ts](file:///c:/Working/src/data/homerScholarship.ts)
- 고전학 성과 4대 영역별 데이터베이스 파일 생성.

---

### UI Components & Styling

#### [MODIFY] [src/components/HomericEpicView.tsx](file:///c:/Working/src/components/HomericEpicView.tsx)
- 4개 학술 서브 탭 렌더링 및 학자 출처/사료 명시 카드 컴포넌트 추가.

#### [MODIFY] [src/styles/index.css](file:///c:/Working/src/styles/index.css)
- 학술 카드 및 비교 매트릭스 전역 CSS 스타일 세트 추가.

---

## Todos

- [ ] 1. `src/types/index.ts`에 호메로스 연구 성과 및 비교 필놀로지 타입 정의 추가
  - **Acceptance**: `HomericScholarshipRecord`, `NearEasternParallel`, `LinearBComparison` 타입 컴파일 0 errors.
  - **QA**: `npm run build` 실행하여 TypeScript 타입 오류 없음 확인.

- [ ] 2. `src/data/homerScholarship.ts` 신규 생성 및 학술 데이터베이스 작성
  - **Acceptance**: Parry-Lord 구전 공식설, M.L. West 근동 비교문학(길가메시 서사시 등), 미케네 Linear B 어휘(Wa-na-ka 등), 알렉산드리아 오벨로스 비평 데이터 및 출처 명시 포함.
  - **QA**: 데이터 파일 내 구두점 및 인터페이스 매칭 검증.

- [ ] 3. `src/components/HomericEpicView.tsx` 4대 학술 서브 탭 UI 및 비교 뷰어 구현
  - **Acceptance**: `[학술 쟁점 & 구전 공식설]`, `[동·서 지중해 근동 비교]`, `[미케네 Linear B 대조]`, `[텍스트 비평 & 파피루스]` 탭이 모바일/데스크톱 반응형으로 정상 작동.
  - **QA**: 브라우저 서브에이전트로 4개 탭 클릭 및 렌더링 상태 스크린샷 검증.

- [ ] 4. `src/styles/index.css` 학술 카테고리 뱃지 및 매트릭스 스타일 추가
  - **Acceptance**: 학술 카드 및 근동 비교 행틀 스타일링 적용.

- [ ] F1. 전체 빌드 및 모바일 UI 통합 검증
  - **Acceptance**: `npm run build` 성공 및 모바일 브라우저 QA 통과.

---

## Final verification wave

- [ ] F1. Run `npm run build` to verify clean build with 0 TypeScript/Vite compilation errors.
- [ ] F2. Launch browser agent on `http://localhost:3000/` and click on '일리아스' tab to verify all 4 scholarship subtabs and cards render properly at 390x844 mobile resolution.
