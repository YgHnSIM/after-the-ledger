# 1. 서기관 제도 및 1차 비문 분석 모듈 스키마 채택 (Institutional & Inscription Data Schema)

- **상태 (Status)**: 승인됨 (Accepted)
- **날짜 (Date)**: 2026-08-12

## 맥락 (Context)

고대 문자문화 비교 웹사이트에서 단순 유물 설명만 제공하는 경우, 단순 개론 수준의 개요에 그쳐 학술적 엄밀성과 깊이가 부족해질 수 있다. 특히 고대 문자의 쓰임새를 결정지은 원인이 단순 부호의 형태적 구조가 아니라 **서기관 제도(Scribal Institutions)**와 **1차 원전 비문(Original Inscriptions)**에 있다는 점을 사용자가 직접 확인하고 대조할 필요가 있다.

## 결정 (Decision)

1. 모든 핵심 유물 레코드(`ArtifactRecord`)에 **공식 박물관 소장 번호(Museum Accession No.)**, **출토 층위(Archaeological Context)** 및 **1차 비문 분석 데이터(`inscriptionBreakdown`)** 필드를 필수 탑재한다.
2. 비문 분석 데이터는 `원전 스크립트 + 라틴어 전사(Transliteration) + 한국어 학술 직역 + 제의/문학적 맥락` 4열 구조로 표준화한다.
3. **서기관 제도(Scribal Institutions)**를 독립 데이터 인터페이스로 정의하고, 메소포타미아 에두바, 이집트 Per Ankh, 쿰란 에세네 공방, 우가리트 외교 공방, 상나라 복사 서관을 비교 조명한다.
4. 추가 통제 사례로 중국 은허 상나라 갑골문(Oracle Bone Script)을 데이터셋에 추가 채택한다.

## 결과 및 효과 (Consequences)

- 단순 박물관 도록을 넘어 1차 학술 비문 코퍼스와 서기관 제도를 정밀 대조할 수 있는 깊이 있는 연구 아틀라스로 격상됨.
- 모든 유물이 A급 소장 번호(e.g., `BM K.3375`, `JE 32169`)와 결합하여 고고학적 신뢰도가 보증됨.
