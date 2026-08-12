import { HomericScholarshipRecord, NearEasternParallel, LinearBComparison } from '../types';

export const HOMERIC_SCHOLARSHIP_RECORDS: HomericScholarshipRecord[] = [
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
];

export const NEAR_EASTERN_PARALLELS: NearEasternParallel[] = [
  {
    id: 'gilgamesh-patroclus',
    nearEasternWork: '메소포타미아 《길가메시 서사시》 (Epic of Gilgamesh)',
    nearEasternEra: 'c. 2100 ~ 1200 BCE (수메르 단편 및 신아시리아 점토판)',
    homericWork: '그리스 《일리아스》 (Iliad)',
    motifTitle: '가장 친한 전우의 죽음과 영웅의 비극적 분노·통곡 모티브',
    nearEasternEvidence: '길가메시는 둘도 없는 영혼의 동반자 엔키두(Enkidu)가 신들의 저주로 죽자, 며칠 밤낮을 울며 시신에 구더기가 꼬일 때까지 놓아주지 않고 광기 어린 절망에 빠진다. (점토판 8-10권)',
    homericEvidence: '아킬레우스는 영혼의 분신 파트로클로스(Patroclus)가 헥토르에게 전사하자 재를 머리에 뒤집어쓰고 통곡하며, 파트로클로스 시신을 껴안고 헥토르를 도살할 때까지 장례를 미룬다. (일리아스 18-19권)',
    comparativeAnalysis: 'Martin L. West는 고대 지중해 청동기-철기 교섭기(c. 1400-800 BCE) 레반트·북시리아 지대를 통해 메소포타미아 영웅 서사시의 비극적 우정 구조가 아카이아 구전 가창자들에게 전이되었음을 입증함.',
    citation: 'M.L. West, "The East Face of Helicon: West Asiatic Elements in Greek Poetry and Myth" (Clarendon Press, 1997, pp. 334-402)'
  },
  {
    id: 'atrahasis-zeus-council',
    nearEasternWork: '바빌로니아 《아트라하시스 방주 서사시》 & 《에누마 엘리시》',
    nearEasternEra: 'c. 1700 BCE (고바빌로니아 점토판)',
    homericWork: '그리스 《일리아스》 1권 & 《쿠프리아》 (Cypria)',
    motifTitle: '대지의 인구 과잉과 신들의 인구 감축(War/Flood) 결의 모티브',
    nearEasternEvidence: '대지 여신과 신들의 왕 엔릴(Enlil)은 인간들의 소음과 인구 과잉으로 잠을 잘 수 없게 되자, 전염병과 대홍수를 일으켜 인구를 줄이기로 신들의 회의에서 결의함.',
    homericEvidence: '《쿠프리아》 서두 및 《일리아스》 1권에서 제우스는 대지(Gaea)의 무거운 짐(인구 과잉)을 덜어주기 위해 트로이 전쟁을 일으켜 수많은 영웅들을 하데스로 보내는 의지(Will of Zeus)를 실행함.',
    comparativeAnalysis: 'Walter Burkert는 고대 근동의 인구 감축 신화 모티브가 호메로스 서사시 순환군 최고(最古) 신화 프레임의 원형으로 작용했음을 시각화함.',
    citation: 'Walter Burkert, "The Orientalizing Revolution: Near Eastern Influence on Greek Culture in the Early Archaic Age" (Harvard, 1992)'
  },
  {
    id: 'baal-underworld-odysseus',
    nearEasternWork: '우가리트 《바알 서사시》 (Baal Cycle, KTU 1.5-1.6)',
    nearEasternEra: 'c. 1400 ~ 1200 BCE (우가리트 알파벳 점토판)',
    homericWork: '그리스 《오뒷세이아》 11권 (네퀴이아 / Nekyia)',
    motifTitle: '저승(Underworld) 하강과 피의 제의를 통한 신탁 구함 모티브',
    nearEasternEvidence: '바알 신이 죽음의 신 모트(Mot)의 저승으로 내려가기 전 피의 제의와 신성 관문 절차를 거치며, 아나트 여신이 저승의 문을 열고 영혼을 불러냄.',
    homericEvidence: '오뒷세우스는 세상의 끝 키메리오스인들의 땅에서 검은 양의 피를 구덩이에 쏟아 예언자 테이레시아스의 영혼과 어머니 안티클레이아를 불러내어 귀환 신탁을 듣는다.',
    comparativeAnalysis: '동서 지중해 관문 시리아 우가리트의 알파벳 점토판 사본과 호메로스 네퀴이아 저승 하강 제의 절차의 유기적 상호연관성 입증.',
    citation: 'Charles Penglase, "Greek Myths and Mesopotamia: Parallels and Influence in the Homeric Hymns and Hesiod" (Routledge, 1994)'
  }
];

export const LINEAR_B_COMPARISONS: LinearBComparison[] = [
  {
    id: 'wanax-anax',
    linearBTerm: 'wa-na-ka',
    linearBTransliteration: 'Wanax',
    linearBMeaning: '미케네 청동기 궁전 관료제의 절대적 최고 왕/군주 (Pylos Ta 711 점토판)',
    homericTerm: 'ἄναξ (Anax / Wanax)',
    homericMeaning: '신(Zeus) 또는 전사 부족 연합체 최고 지휘관 (아나크스 아가멤논)',
    historicalShift: 'c. 1200 BCE 미케네 궁전 문명 붕괴 이후, 관료제적 절대군주(Wanax) 개념은 사라지고 철기시대 부족장(Basileus) 문화로 재편되었으나, 호메로스 시어에는 500년 전 청동기 절대군주 칭호가 고풍스러운 정서(Archaism)로 잔존함.',
    tabletReference: 'Pylos Un 219, Knossos V 52, Mycenae Oi 701'
  },
  {
    id: 'qasireu-basileus',
    linearBTerm: 'qa-si-re-u',
    linearBTransliteration: 'Gwasileus',
    linearBMeaning: '미케네 청동기 시기 지방 의례/야금 노동자 집단의 말단 감독관 (Pylos Jn 431)',
    homericTerm: 'βασιλεύς (Basileus)',
    homericMeaning: '철기시대 폴리스/부족의 최고 정치적 왕·귀족 전사 (왕들)',
    historicalShift: '청동기 와나크스(Wanax) 중앙집권 왕권이 붕괴되면서, 지방에서 금속 야금과 의례를 감독하던 말단 관리자(Gwasileus)가 철기시대에 새로운 지역 리더인 왕(Basileus)으로 신분상승한 고고학적 어휘 역전 현상.',
    tabletReference: 'Pylos Jn 431, Pylos Jo 438'
  },
  {
    id: 'doero-doulos',
    linearBTerm: 'do-e-ro / do-e-ra',
    linearBTransliteration: 'Doelos / Doela',
    linearBMeaning: '신성 노예 또는 궁전 소속 사전 노동 종사자 (Pylos Ae 110)',
    homericTerm: 'δοῦλος (Doulos) / δμώς (Dmōs)',
    homericMeaning: '가내 노예, 전쟁 포로 노예 (오뒷세이아의 돼지치기 에우마이오스 등)',
    historicalShift: '미케네 신전 소속 노예(Doelos) 제도가 철기시대 가내 포로 노예 제도로 이행하였음을 미케네 문음 언어학을 통해 증명함.',
    tabletReference: 'Pylos Ae 110, Knossos Ai 1037'
  }
];
