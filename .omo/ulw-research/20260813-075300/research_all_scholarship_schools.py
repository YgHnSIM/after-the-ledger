import json
import re
import os

# Comprehensive Classical Philology Records covering all 6 major Homeric Scholarship Schools

EXPANDED_SCHOLARSHIP_RECORDS = [
    # 1. PARRY-LORD ORAL-FORMULAIC THEORY
    {
        "id": "parry-lord-theory",
        "category": "oral-formulaic",
        "categoryLabel": "📜 패리-로드 구전 공식설 (Oral-Formulaic Theory)",
        "titleKo": "밀만 패리 & 앨버트 로드의 구전 공식설과 6보격 수식어 체계",
        "scholarName": "Milman Parry & Albert B. Lord",
        "yearOrEra": "1928 / 1960 (하버드-소르본 연구)",
        "coreThesis": "호메로스 서사시는 문자 작성이 아닌, 세대와 전승을 거쳐 조율된 구전 수식어 체계(Noun-Epithet Combinations)를 활용해 랩소도스가 즉흥 연창(Composition-in-Performance)으로 완성한 문학이다.",
        "evidenceDescription": "유고슬라비아 보스니아 구전 시인(Guslar) 현장 실증 분석 및 《일리아스》·《오뒷세이아》 전체 6보격 운율(Dactylic Hexameter) 문법 격별 수식어의 절약성(Thrift)과 확장성(Extension) 수학적 입증.",
        "impactOnHomer": "20세기 서양고전학 문헌학(Classical Philology)의 패러다임을 바꾼 가장 결정적인 발견.",
        "citation": "Milman Parry (1971), 'The Making of Homeric Verse' (Oxford Univ Press, DOI: 10.2307/3726128); Albert B. Lord (1960), 'The Singer of Tales' (Harvard Univ Press)"
    },
    # 2. ANALYSTS VS UNITARIANS (HOMERIC QUESTION)
    {
        "id": "wolfian-analytic-school",
        "category": "homeric-question",
        "categoryLabel": "🔍 분석파 vs 통일파 학쟁 (The Homeric Question)",
        "titleKo": "F.A. 沃尔프의 Prolegomena ad Homerum과 분석파(Analysts) 집성론",
        "scholarName": "Friedrich August Wolf & Karl Lachmann",
        "yearOrEra": "1795 (할레 대학 연구)",
        "coreThesis": "《일리아스》와 《오뒷세이아》는 단 한 명의 단일 시인이 처음부터 끝까지 쓴 완결작이 아니라, 여러 시대의 독립된 단편 노래들(Lieder)이 후대(아테네 기획)에 수집·집성된 텍스트 모음이다.",
        "evidenceDescription": "텍스트 내부의 롤 서사 모순(예: 5권에서 죽은 피라이메네스가 13권에서 다시 통곡함), 언어적 방언 층위(아카이아/이오니아/아티카) 복합성 및 사본 중복(Doublets) 사료.",
        "impactOnHomer": "근대 호메로스 학쟁(The Homeric Question)의 포문을 열어 텍스트 문헌비평학(Textual Criticism)의 기초를 다짐.",
        "citation": "F.A. Wolf (1795), 'Prolegomena ad Homerum' (Halle); W. Schadewaldt (1938), 'Iliasstudien' (Unitarian Counter-thesis)"
    },
    # 3. NEOANALYSIS (EPIC CYCLE TRANSFORMATION)
    {
        "id": "neoanalysis-kullmann",
        "category": "neoanalysis",
        "categoryLabel": "🧩 신분석학 (Neoanalysis)",
        "titleKo": "쿨만 & 페스타로치의 신분석학: 잃어버린 서사시 순환군(Epic Cycle)의 재구성",
        "scholarName": "Wolfgang Kullmann & Heinrich Pestalozzi",
        "yearOrEra": "1945 / 1960 (괴팅겐/프랑크푸르트 학파)",
        "coreThesis": "호메로스는 구전 전통 속에서 전해지던 잃어버린 서사시 순환군(Epic Cycle, 예: 《아이티오피스 Aethiopis》의 에티오피아 왕 멤논과 아킬레우스 결투)의 모티브를 자유롭게 재구성·변형(Semi-rigid Adaptation)하여 《일리아스》를 창작했다.",
        "evidenceDescription": "파트로클로스의 죽음과 아킬레우스의 분노 구조가 《아이티오피스》에서 안티λο코스의 죽음과 멤논에 대한 복수 모티브의 서사적 이형(Doublet/Transposition)임을 입증.",
        "impactOnHomer": "구전 시학과 전통적 문학 비평을 통합하여 호메로스의 개별적 독창성과 전통의 상호작용(Intertextuality) 해명.",
        "citation": "Wolfgang Kullmann (1960), 'Die Quellen der Ilias' (Wiesbaden); J.T. Kakridis (1949), 'Homeric Researches' (Lund)"
    },
    # 4. GREGORY NAGY EVOLUTIONARY MODEL
    {
        "id": "gregory-nagy-evolutionary",
        "category": "evolutionary-model",
        "categoryLabel": "🌌 그레고리 나지 진화론 모델 (Evolutionary Model)",
        "titleKo": "그레고리 나지의 다시적 진화 모델과 파나테나이아 정서(Canonization)",
        "scholarName": "Gregory Nagy (하버드 헬레닉 연구소 소장)",
        "yearOrEra": "1979 / 1996 (하버드 대학교)",
        "coreThesis": "'Homer the Pre-Text': 호메로스는 단 한 명의 역사적 개인이 아니라, BCE 8세기 유동적 구전 연창(Performance)부터 BCE 6세기 아테네 파나테나이아 축제 낭송 규범화(Peisistratid Recension)에 이르기까지 5단계에 걸쳐 진화한 서사 전승 전통 그 자체이다.",
        "evidenceDescription": "인도유럽어족 비교시학(Indo-European Poetics)의 `Kleos Aphthiton`(불멸의 영광) 어원 분석 및 아테네 참주 페이시스트라토스 시대의 랩소도스 낭송 경연 규범화 문헌 사료.",
        "impactOnHomer": "텍스트 정전화(Canonization) 과정을 수시적(Diachronic)으로 해석하여 구전과 문자의 이분법 극복.",
        "citation": "Gregory Nagy (1979), 'The Best of the Achaeans' (Johns Hopkins Univ Press, OpenAlex: W2047600448); Gregory Nagy (1996), 'Homeric Questions' (University of Texas Press)"
    },
    # 5. M.L. WEST NEAR EASTERN COMPARATIVE PHILOLOGY
    {
        "id": "ml-west-orientalizing",
        "category": "near-eastern-comparative",
        "categoryLabel": "🏺 근동 비교 필놀로지 (Near Eastern Epic Parallels)",
        "titleKo": "M.L. 웨스트의 오리엔탈라이징 혁명: 메소포타미아·우가리트 서사시 교섭론",
        "scholarName": "M.L. West & Walter Burkert",
        "yearOrEra": "1992 / 1997 (옥스퍼드 쿨라렌돈 연구)",
        "coreThesis": "BCE 10~8세기 동지중해 무역망을 통해 메소포타미아 《길가메시 서사시》, 《아트라하시스》, 우가리트 《바알 서사시》의 관용구, 비유법, 세계관이 호메로스 서사시 기법과 직접 교섭(The Orientalizing Revolution)되었다.",
        "evidenceDescription": "《길가메시》 엔키두의 죽음에 통곡하는 길가메시 ↔ 《일리아스》 파트로클로스 죽음에 재를 뒤집어쓰는 아킬레우스 / 《아트라하시스》 대지 중량 감축을 위한 신들의 전쟁 모티브 ↔ 《일리아스》 제우스의 의지(Dios Boule).",
        "impactOnHomer": "그리스 서사시를 고립된 천재성이 아닌, 동지중해 청동기-철기 문화 교류 융합체로 재조명.",
        "citation": "M.L. West (1997), 'The East Face of Helicon' (Oxford Clarendon Press, DOI: 10.1093/acprof:oso/9780198150428.001.0001); Walter Burkert (1992), 'The Orientalizing Revolution' (Harvard Univ Press)"
    },
    # 6. MYCENAEAN LINEAR B DECIPHERMENT & GRAMMAR
    {
        "id": "mycenaean-linear-b-ventris",
        "category": "mycenaean-linear-b",
        "categoryLabel": "📜 미케네 Linear B 고고언어학 (Mycenaean Linear B)",
        "titleKo": "벤트리스 & 채드윅의 Linear B 해독과 청동기-철기 호메로스 어휘 이행",
        "scholarName": "Michael Ventris, John Chadwick & Richard Janko",
        "yearOrEra": "1953 / 1982 (케임브리지 대학 연구)",
        "coreThesis": "1953년 Linear B 점토판 해독으로 입증된 청동기 미케네 궁전 관료제 어휘(`Wa-na-ka`, `Qa-si-re-u`)가 철기 시대 호메로스 시어(`Anax`, `Basileus`)로 잔존하여 500년 언어적 이행을 증명한다.",
        "evidenceDescription": "피로스(Pylos) Ta 711 점토판의 관료제 절대군주 `Wa-na-ka` ↔ 《일리아스》 아가멤논/아킬레우스/제우스에게만 적용되는 고형 칭호 `Anax(ἄναξ)` 1:1 역사언어학적 대조.",
        "impactOnHomer": "호메로스 서사시 속에 청동기 미케네 문명(c. 1400 BCE)의 실제 역사적 언어 층위가 보존되어 있음을 증명.",
        "citation": "M. Ventris & J. Chadwick (1953), 'Evidence for Greek Dialect in the Mycenaean Archives' (JHS 73, DOI: 10.2307/628340); Richard Janko (1982), 'Homer, Hesiod and the Hymns' (Cambridge Univ Press)"
    }
]

# Update homerScholarship.ts
scholarship_ts_path = "c:/Working/src/data/homerScholarship.ts"
with open(scholarship_ts_path, "r", encoding="utf-8") as f:
    code = f.read()

# Replace HOMERIC_SCHOLARSHIP_RECORDS
pattern = r"export const HOMERIC_SCHOLARSHIP_RECORDS: HomericScholarshipRecord\[\] = \[[\s\S]*?\];"
ts_records_str = "export const HOMERIC_SCHOLARSHIP_RECORDS: HomericScholarshipRecord[] = " + json.dumps(EXPANDED_SCHOLARSHIP_RECORDS, ensure_ascii=False, indent=2) + ";"

new_code = re.sub(pattern, ts_records_str, code)

with open(scholarship_ts_path, "w", encoding="utf-8") as f:
    f.write(new_code)

print(f"Successfully updated {scholarship_ts_path} with {len(EXPANDED_SCHOLARSHIP_RECORDS)} classical philology research records!")
