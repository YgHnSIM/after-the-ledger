import { HomericScholarshipRecord, NearEasternParallel, LinearBComparison } from '../types';

export const HOMERIC_SCHOLARSHIP_RECORDS: HomericScholarshipRecord[] = [
  {
    id: 'parry-lord-oral-theory',
    category: 'oral-formulaic',
    categoryLabel: '구전 공식설 (Oral-Formulaic)',
    titleKo: '파리-로드의 구전 공식설 (Milman Parry & Albert Lord)',
    scholarName: '밀먼 파리 (Milman Parry) & 알버트 로드 (Albert Lord)',
    yearOrEra: '1930년 ~ 1954년',
    coreThesis: '호메로스 서사시는 문자로 쓴 문학이 아니라, 구전 랩소도스(Rhapsode)들이 고유한 운율(운율적 6보격)과 "고정 수식어(Formulaic Epithet)"라는 기억 연상 장치를 활용하여 즉흥 연주(Improvisation) 방식으로 가창·전승한 구전 시이다.',
    evidenceDescription: '발칸반도 남슬라브(보스니아·세르비아) 문맹 구전 가창자(Guslar)들의 현장 필록 및 운율적 수식어(e.g. "발이 빠른 아킬레우스", "투구를 번득이는 헥토르", "장미빛 손가락의 여명") 수백 개 통계 분석.',
    citation: 'Milman Parry, "The Making of Homeric Verse" (Oxford, 1971) / Albert Lord, "The Singer of Tales" (Harvard, 1960)',
    impactOnHomer: '200년간 지속된 문명적 문필 문학 시각을 뒤엎고, 청동기-철기 암흑기 지중해의 구전 음악성과 집단 기억 전승 시스템을 과학적으로 증명함.'
  },
  {
    id: 'wolf-homeric-question',
    category: 'homeric-question',
    categoryLabel: '호메로스 문제 (Homeric Question)',
    titleKo: '프리드리히 아우구스트 볼프의 분석파 이론 (F.A. Wolf)',
    scholarName: '프리드리히 아우구스트 볼프 (Friedrich August Wolf)',
    yearOrEra: '1795년',
    coreThesis: '단일 인물 호메로스는 존재하지 않거나 초기 단편의 가창자일 뿐이며, 현재의 《일리아스》와 《오뒷세이아》는 수백 년간 각기 전승되던 짧은 서사 단편 가창들을 기원전 6세기 아테네 참주 페이시스트라토스(Peisistratos) 시대에 사제 편집자들이 집성하여 하나로 기워 붙인 종합 텍스트이다.',
    evidenceDescription: '기원전 8세기 페니키아 음설 알파벳 수용 초기 문자 매체의 희소성(가죽·파피루스의 물리적 한계) 및 사법적 텍스트 불일치(Venetus A 스콜리아) 분석.',
    citation: 'F.A. Wolf, "Prolegomena ad Homerum" (Halle, 1795)',
    impactOnHomer: '현대 고전문필학 및 성서 비평학(문서설/EDJPs)의 직접적 근간이 되었으며, 분석파(Analysts) 대 통일파(Unitarians)의 100년 대학쟁을 촉발함.'
  },
  {
    id: 'neoanalysis-pestalozzi',
    category: 'neoanalysis',
    categoryLabel: '신분석학 (Neoanalysis)',
    titleKo: '신분석학 및 호메로스 이전 서사 전승 (Neoanalysis)',
    scholarName: '하인리히 페스탈로치 (H. Pestalozzi) & 볼프강 쿨만 (W. Kullmann)',
    yearOrEra: '1945년 ~ 1980년대',
    coreThesis: '호메로스는 완전히 무(無)에서 일리아스를 창작한 것도, 단순한 단편의 수집가도 아니다. 호메로스는 당대 이미 존재하던 서사시 순환군(Epic Cycle - 멤논의 죽음을 다룬 《아이티오피스》 등)의 서사 구조를 의도적으로 변형하여 아킬레우스와 파트로클로스의 관계에 변용·정경화시켰다.',
    evidenceDescription: '아킬레우스가 파트로클로스의 죽음에 분노하여 헥토르를 잡는 구도가, 멤논이 안틸로코스를 죽이자 아킬레우스가 멤논을 복수하는 《아이티오피스》 구도와 1:1 대칭을 이룸.',
    citation: 'W. Kullmann, "Die Quellen der Ilias" (Wiesbaden, 1960) / H. Pestalozzi (1945)',
    impactOnHomer: '구전 전통의 기계적 반복론과 단일 천재 창작론 사이의 거대한 다리를 놓았으며, 서사시 상호텍스트성(Intertextuality) 연구의 지평을 엶.'
  },
  {
    id: 'alexandrian-textual-criticism',
    category: 'textual-criticism',
    categoryLabel: '알렉산드리아 비평 (Textual Criticism)',
    titleKo: '알렉산드리아 도서관의 오벨로스 비평과 정본화',
    scholarName: '제노도토스 (Zenodotus), 비잔티움의 아리스토파네스, 아리스타르코스 (Aristarchus of Samothrace)',
    yearOrEra: 'c. 280 ~ 150 BCE',
    coreThesis: '알렉산드리아 도서관학자들은 지중해 전역에서 수집된 수많은 호메로스 필사본(파피루스)의 이독(Variant readings)을 대조하여, 후대에 삽입된 위작 구절에 오벨로스(―, Obelos) 검은 작대기 표시를 남기고 정본(Standard Recension) 24권을 확정했다.',
    evidenceDescription: '베네투스 A (Codex Venetus A, BM Marcianus 454) 마진에 기록된 알렉산드리아 학자들의 주석 스콜리아(Scholia) 사료.',
    citation: 'M. van der Valk, "Researches on the Text and Scholia of the Iliad" (Leiden, 1963-1964)',
    impactOnHomer: '사해문서(Dead Sea Scrolls)의 히브리 성서 정경 편집 과정과 동일한 형태의 고대 지중해 학술 정본화(Canonization) 메커니즘을 보여줌.'
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
