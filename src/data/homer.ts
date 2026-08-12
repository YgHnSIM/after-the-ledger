import { HomericBookSummary, HomericCharacter, HomericConcept, ComparativeEpicMatrixItem } from '../types';

export const HOMERIC_CONCEPTS: HomericConcept[] = [
  {
    id: 'kleos',
    termGreek: 'κλέος',
    termTransliteration: 'Kleos',
    termKo: '불멸의 영광 (Kleos Aphthiton)',
    definition: '죽음을 뛰어넘어 구전과 시(Poetry)를 통해 영원히 후세의 입에 오르내리는 불멸의 이름과 영예.',
    exampleInHomer: '아킬레우스는 요절하더라도 불멸의 영광(Kleos Aphthiton)을 얻는 길과, 오래 살되 잊혀지는 길 중 전자(전사로서의 불멸)를 선택한다. (일리아스 9권)'
  },
  {
    id: 'nostos',
    termGreek: 'νόστος',
    termTransliteration: 'Nostos',
    termKo: '고향으로의 귀환 (Nostos)',
    definition: '전쟁의 파괴와 바다의 방랑을 이겨내고 자신의 잃어버린 자아, 가문, 왕국(아이타케)으로 복귀하는 귀환 여행.',
    exampleInHomer: '오뒷세우스는 칼립소 여신이 제시한 "죽지 않는 신성"의 유혹을 거절하고, 죽을 운명의 인간으로서 고향 이타케와 아내 페넬로페에게 돌아가는 귀환(Nostos)을 선택한다. (오뒷세이아 5권)'
  },
  {
    id: 'xenia',
    termGreek: 'ξενία',
    termTransliteration: 'Xenia',
    termKo: '손님 환대 제의 (Xenia)',
    definition: '제우스 크세니오스(Zeus Xenios) 신의 이름으로 이방인과 나그네를 환대하고 선물을 교환하는 고대 지중해 신성 규범.',
    exampleInHomer: '트로이 전쟁의 발화점이 파리스의 손님 환대 규범(Xenia) 위반이었으며, 오뒷세이아는 외눈박이 거인 퀴클롭스의 문명적 환대 거부와 구혼자들의 가문 환대 침해에 대한 징벌이다.'
  },
  {
    id: 'time',
    termGreek: 'τιμή',
    termTransliteration: 'Timē',
    termKo: '사회적 명예 및 전리품 보상 (Timē)',
    definition: '동료 전사들과 공동체로부터 공식적으로 인정받는 명예와 눈에 보이는 물질적 전리품(Geras).',
    exampleInHomer: '아가멤논이 아킬레우스의 전리품 여인 브리세이스를 빼앗은 것은 단순한 재물 손실이 아니라 아킬레우스의 전사적 명예(Timē)를 짓밟은 행위였기에 거룩한 분노(Mēnis)가 폭발한다. (일리아스 1권)'
  },
  {
    id: 'metis',
    termGreek: 'μῆτις',
    termTransliteration: 'Mētis',
    termKo: '꾀, 지혜, 임기응변 (Mētis)',
    definition: '단순한 물리적 힘(Biē)에 대비되는 꾀, 지혜, 변장술, 상황 대응 및 딜레마 극복 능력.',
    exampleInHomer: '오뒷세우스는 자신을 "아무도 아닌 자(Outis)"라고 칭하여 퀴클롭스를 속이고, 목마(Wooden Horse) 기략을 발명하여 트로이를 함락시킨다.'
  },
  {
    id: 'menis',
    termGreek: 'μῆνις',
    termTransliteration: 'Mēnis',
    termKo: '신성한 거룩한 분노 (Mēnis)',
    definition: '인간의 단순한 화가 아니라 신이나 반신 영웅만이 가질 수 있는 우주적이고 파괴적인 거룩한 파괴적 분노.',
    exampleInHomer: '《일리아스》 1권 첫 글자 "μῆνιν(Mēnin)"으로 선언되며, 파트로클로스의 죽음 이후 헥토르를 도살하고 시신을 끌고 다니는 아킬레우스의 광기적 분노의 동력이다.'
  },
  {
    id: 'ate',
    termGreek: 'ἄτη',
    termTransliteration: 'Atē',
    termKo: '정신의 눈멂 / 파멸적 착오 (Atē)',
    definition: '신들에 의해 눈이 멀어 도덕적·이성적 판단력을 잃고 파멸적 행동을 저지르는 상태.',
    exampleInHomer: '아가멤논은 19권에서 아킬레우스와 화해하며 자신이 아킬레우스의 전리품을 빼앗은 오만은 신 제우스와 아테가 내린 눈멂(Atē) 때문이었다고 시인한다.'
  },
  {
    id: 'moira',
    termGreek: 'μοῖρα',
    termTransliteration: 'Moira',
    termKo: '할당된 운명과 몫 (Moira)',
    definition: '신들조차 임의로 변경할 수 없는 인간 각자에게 할당된 수명과 운명의 경계.',
    exampleInHomer: '제우스는 자신이 사랑하는 아들 사르페돈이 죽을 운명(Moira)에 처했을 때 그를 살리고 싶어 하지만, 헤라의 경고를 듣고 운명의 섭리를 꺾지 못한다. (일리아스 16권)'
  },
  {
    id: 'hubris',
    termGreek: 'ὕβρις',
    termTransliteration: 'Hubris',
    termKo: '신성과 경계를 넘어서는 오만 (Hubris)',
    definition: '자신의 인간적 한계를 잊고 신성을 침범하거나 타인의 존엄을 짓밟는 과도한 오만.',
    exampleInHomer: '오뒷세우스가 퀴클롭스를 이긴 후 오만하게 자신의 진짜 이름을 외쳤다가 포세이돈의 저주를 받게 되며, 이타케의 구혼자들은 구혼자 오만(Hubris)으로 사형 판결을 받는다.'
  },
  {
    id: 'aristeia',
    termGreek: 'ἀριστεία',
    termTransliteration: 'Aristeia',
    termKo: '영웅의 무공 절정 순간 (Aristeia)',
    definition: '전장에서 개별 전사가 신의 가호와 빛을 받아 적진을 홀로 괴멸시키는 영웅적 무공의 최고조.',
    exampleInHomer: '일리아스 5권 디오메데스의 무공 절정(Aristeia)과 21권 아킬레우스가 크산토스 강물을 핏빛으로 물들이는 전율적인 무공 순간.'
  }
];

export const HOMERIC_CHARACTERS: HomericCharacter[] = [
  {
    id: 'achilles',
    nameKo: '아킬레우스',
    nameGreek: 'Ἀχιλλεύς',
    epithet: '발이 빠른 아킬레우스 (ποδάρκης δῖος Ἀχιλλεύς / Podarkes dios Achilleus)',
    side: 'achaean',
    role: '아카이오이(그리스) 최고의 전사, 바다의 여신 테티스와 펠레우스의 아들',
    description: '삶의 짧음과 불멸의 영광(Kleos) 사이에서 갈등하며, 친구 파트로클로스의 죽음으로 복수귀가 되었다가, 24권에서 프리아모스 왕과 함께 눈물을 흘리며 비극적 인간성을 완성함.'
  },
  {
    id: 'hector',
    nameKo: '헥토르',
    nameGreek: 'Ἕκτωρ',
    epithet: '투구를 번득이는 헥토르 (κορυθαίολος Ἕκτωρ / Korythaiolos Hektor)',
    side: 'trojan',
    role: '트로이의 왕자, 도시의 방어자, 프리아모스 왕의 장남',
    description: '아내 안드로마케와 아들 아스티아낙스를 사랑하는 고결한 가장이자 조국 트로이를 수호하기 위해 아킬레우스와의 비극적 죽음을 직면하는 가슴 아픈 영웅.'
  },
  {
    id: 'odysseus',
    nameKo: '오뒷세우스',
    nameGreek: 'Ὀδυσσεύς',
    epithet: '잔꾀가 많은 슬기로운 오뒷세우스 (πολύτροπος Ὀδυσσεύς / Polytropos Odysseus)',
    side: 'odyssey-hero',
    role: '이타케의 국왕, 트로이 목마의 발명자, 10년의 방랑을 이겨낸 귀환의 영웅',
    description: '물리적 힘(Biē)보다 꾀와 지혜(Mētis)로 고난을 극복하며, 신들의 시험과 마녀, 거인, 저승 방문을 거쳐 고향 이타케로 귀환하여 왕국을 회복함.'
  },
  {
    id: 'patroclus',
    nameKo: '파트로클로스',
    nameGreek: 'Πάτροκλος',
    epithet: '말 탄 전사 파트로클로스 (ἱπποκέλευθος Πάτροκλος / Hippokeleuthos Patroklos)',
    side: 'achaean',
    role: '아킬레우스의 가장 친한 전우이자 분신',
    description: '위기에 빠진 그리스군을 구하기 위해 아킬레우스의 갑옷을 입고 출전했다가 헥토르의 손에 전사함. 그의 죽음은 아킬레우스의 전장 복귀와 분노의 폭발을 야기함.'
  },
  {
    id: 'priam',
    nameKo: '프리아모스',
    nameGreek: 'Πρίαμος',
    epithet: '신과 같은 프리아모스 왕 (Πρίαμος θεοειδής / Priamos theoeidēs)',
    side: 'trojan',
    role: '트로이의 늙은 국왕, 헥토르와 파리스의 아버지',
    description: '아들 헥토르의 시신을 되찾기 위해 적진 한가운데 아킬레우스의 텐트로 밤중에 홀로 들어가 아들의 원수 손에 키스하는 비극적 아버지의 상징.'
  },
  {
    id: 'telemachus',
    nameKo: '텔레마코스',
    nameGreek: 'Τηλέμαχος',
    epithet: '사려 깊은 텔레마코스 (πεπνυμένος Τηλέμαχος / Pepnymenos Telemachos)',
    side: 'odyssey-hero',
    role: '오뒷세우스와 페넬로페의 아들',
    description: '아버지가 없는 이타케에서 구혼자들의 압박을 받으며 성장하여, 필로스와 스파르타로 아버지를 찾는 여정을 떠나 마침내 귀환한 아버지와 함께 구혼자들을 응징함.'
  },
  {
    id: 'penelope',
    nameKo: '페넬로페',
    nameGreek: 'Πηνελόπεια',
    epithet: '현명한 페넬로페 (περίφρων Πηνελόπεια / Periphron Penelopeia)',
    side: 'odyssey-hero',
    role: '이타케의 왕비, 오뒷세우스의 충절스러운 아내',
    description: '20년간 남편의 귀환을 기다리며, 낮에는 수의를 짜고 밤에는 푸는 지혜(Mētis)로 108명의 구혼자들의 압박을 물리친 절개와 지혜의 상징.'
  },
  {
    id: 'circe',
    nameKo: '키르케',
    nameGreek: 'Κίρκη',
    epithet: '땋은 머리의 아름다운 여신 키르케 (ἐϋπλόκαμος Κίρκη / Euplokamos Kirke)',
    side: 'odyssey-monster',
    role: '아이아이에 섬의 마녀 여신',
    description: '오뒷세우스의 선원들을 돼지로 변하게 만들었으나, 오뒷세우스의 지혜(몰리 풀)에 가복되어 1년간 환대하고 저승 방문(Nekyia) 길을 안내해줌.'
  }
];

export const COMPARATIVE_EPIC_MATRIX: ComparativeEpicMatrixItem[] = [
  {
    id: 'theme-kleos-vs-gilgamesh',
    theme: '영웅의 불멸 추구와 죽음의 비극성 (Immortal Glory vs Mortality)',
    greekEpicConcept: '클레오스 (Kleos Aphthiton) — 요절하더라도 시(Poetry)와 노래를 통해 영원히 기억되는 전투의 영광',
    iliadOdysseyManifestation: '아킬레우스는 장수하되 잊혀지는 평범한 삶 대신, 트로이에서 요절하되 영원한 영광을 얻는 운명을 선택한다. (일리아스 9권)',
    nearEasternParallel: '메소포타미아 《길가메시 서사시》 — 엔키두의 죽음 이후 불로초를 찾아 영생을 구하지만 실패하고, 시파르의 주모 시두리(Siduri)로부터 "인간의 운명인 죽음을 받아들이고 현재의 삶을 누리라"는 조언을 받음.',
    comparativeInsight: '호메로스는 "문학적 불멸(Kleos)"을 통해 죽음을 극복하려 한 반면, 길가메시는 "성벽과 도시라는 물리적 유산" 및 인간 한계 수용을 통해 성숙에 이름.'
  },
  {
    id: 'theme-nostos-vs-sinuhe',
    theme: '고향으로의 귀환과 방랑 모티브 (Nostos & Exile Journey)',
    greekEpicConcept: '노스토스 (Nostos) — 바다의 고난과 신성의 유혹을 물리치고 정체성을 회복하는 귀환',
    iliadOdysseyManifestation: '오뒷세우스는 영생을 약속하는 칼립소의 유혹을 거절하고, 죽을 운명의 인간으로서 고향 이타케로 돌아가 정체성과 왕국을 회복함. (오뒷세이아 5-13권)',
    nearEasternParallel: '이집트 《사누헤 이야기 (Story of Sinuhe)》 — 정치적 망명으로 레반트에서 성공을 거두었으나, 이집트 고향으로 돌아가 파라오의 용서를 받고 전통 무덤에 묻히기를 갈망하는 이집트적 귀환.',
    comparativeInsight: '두 전통 모두 외국/이방 지대에서의 성공보다 "고향 문화권으로의 복귀"를 인간 완성의 최고 가치로 규정함.'
  },
  {
    id: 'theme-xenia-vs-ugarit',
    theme: '손님 환대 제의와 신성 규범 (Hospitality Code & Divine Order)',
    greekEpicConcept: '크세니아 (Xenia) — 제우스 크세니오스 신의 이름으로 구속되는 이방인 환대 규범',
    iliadOdysseyManifestation: '파리스의 크세니아 위반이 트로이 전쟁을 야기했으며, 오뒷세이아에서는 퀴클롭스의 식인 행위와 구혼자들의 침탈이 크세니아 파기로 징벌받음.',
    nearEasternParallel: '우가리트 《바알 서사시》 & 《아크하트 서사시》 — 나그네와 신들을 위해 가축을 잡고 발을 씻겨주며 7일간 잔치를 베푸는 레반트의 손님 환대 제의.',
    comparativeInsight: '동지중해 전체에서 손님 환대는 단순한 친절이 아니라, 법과 제국이 없는 무법 지대에서 이방인의 생명을 보증하는 신성 제의적 안전망이었음.'
  },
  {
    id: 'theme-katabasis-vs-descent',
    theme: '저승 방문과 이승과 저승의 경계 (Katabasis - Journey to Underworld)',
    greekEpicConcept: '카타바시스 (Katabasis) — 예언을 듣고 영혼들을 만나기 위해 산 자로서 저승을 방문함',
    iliadOdysseyManifestation: '오뒷세우스는 예언자 테이레시아스 및 어머니의 영혼, 아킬레우스, 아가멤논을 만나기 위해 오케아노스 끝 저승 림보로 내려감. (오뒷세이아 11권 Nekyia)',
    nearEasternParallel: '메소포타미아 《이슈타르의 하계 하강》 & 《길가메시 서사시 12점토판 (엔키두의 하계 하강)》 — 저승의 7개 문을 지나며 권능을 빼앗기는 여신의 하강.',
    comparativeInsight: '그리스 카타바시스는 산 자의 지혜 획득과 귀환을 위한 과정인 반면, 메소포타미아 하강은 저승의 돌이킬 수 없는 어둠과 비극성을 강조함.'
  }
];

// FULL 48 BOOKS DATASET (ILIAD 1-24 & ODYSSEY 1-24)
export const HOMERIC_BOOKS: HomericBookSummary[] = [
  // ILIAD 1 to 24
  {
    bookNumber: 1,
    epic: 'iliad',
    titleKo: '일리아스 1권: 역병과 아킬레우스의 분노',
    titleGreek: 'Ἰλιάς Α: Λοιμός. Μῆνις',
    summary: '아폴론 사제의 딸 크리세이스 반환 문제로 총사령관 아가멤논과 최고 전사 아킬레우스가 충돌한다. 아가멤논이 아킬레우스의 전리품 여인 브리세이스를 빼앗자, 아킬레우스는 분노하며 참전을 거부한다.',
    keyEvents: ['아폴론의 역병 화살 발사', '아킬레우스와 아가멤논의 언쟁', '아킬레우스의 참전 거부 및 테티스 호소', '제우스의 패배 약속'],
    iconicLines: [{ greek: 'Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος / οὐλομένην...', transliteration: 'Mēnin aeide thea Pēlēïadeō Achilēos / oulomenēn...', korean: '분노를 노래하소서, 여신이여! 펠레우스의 아들 아킬레우스의 그 파멸적 분노를!' }],
    keyCharacters: ['achilles', 'agamemnon', 'athena']
  },
  {
    bookNumber: 2,
    epic: 'iliad',
    titleKo: '일리아스 2권: 시험하는 꿈과 함선들의 목록',
    titleGreek: 'Ἰλιάς Β: Ὄνειρος. Διάπειρα. Βοιωτία ἢ Κατάλογος νεῶν',
    summary: '제우스가 거짓 꿈을 보내 아가멤논을 기만한다. 아가멤논은 군대를 시험하려 철수를 제안하나 혼란에 빠지고, 오뒷세우스가 기동을 저지한다. 뒤이어 그리스 군 함선 1,186척과 트로이 연합군의 거대한 목록(Catalogue of Ships)이 열거된다.',
    keyEvents: ['제우스의 거짓 꿈 파견', '아가멤논의 군대 시험과 철수 파동', '테르시테스의 비판과 오뒷세우스의 매질', '함선 목록(Catalogue of Ships) 서사시적 열거'],
    iconicLines: [{ greek: 'Ἔσπετε νῦν μοι Μοῦσαι Ὀλύμπια δώματ\' ἔχουσαι...', transliteration: 'Espete nyn moi Mousai Olympia dōmat\' echousai...', korean: '이제 제게 들려주소서, 올림포스에 거주하시는 무사 여신들이여! 당시 트로이에 온 자들은 누구누구였나이까!' }],
    keyCharacters: ['agamemnon', 'odysseus']
  },
  {
    bookNumber: 3,
    epic: 'iliad',
    titleKo: '일리아스 3권: 파리스와 메넬라오스의 단독 결투',
    titleGreek: 'Ἰλιάς Γ: Ὅρκια. Τειχοσκοπία. Πάριδος καὶ Μενελάου μονομαχία',
    summary: '양군이 맞붙기 직전, 전쟁의 원인이 된 파리스와 메넬라오스가 단독 결투로 전쟁을 끝내기로 합의한다. 트로이 성벽 위에서 헬레네가 영웅들을 프리아모스 왕에게 설명하며, 아프로디테 여신이 위험에 처한 파리스를 구출한다.',
    keyEvents: ['성벽 위의 헬레네 영웅 소개 (Teichoskopia)', '메넬라오스 vs 파리스 1:1 결투', '아프로디테의 파리스 구출'],
    iconicLines: [{ greek: 'οὐ νέμεσις Τρῶας καὶ ἐϋκνήμιδας Ἀχαιοὺς / τοιῇδ\' ἀμφὶ γυναικὶ...', transliteration: 'ou nemesis Trōas kai eyknēmidas Achaious...', korean: '저토록 아름다운 여인을 위해 오랜 세월 고통받는 것은 탓할 일이 아니로다!' }],
    keyCharacters: ['priam', 'hector']
  },
  {
    bookNumber: 4,
    epic: 'iliad',
    titleKo: '일리아스 4권: 맹약의 파기와 전면전 개막',
    titleGreek: 'Ἰλιάς Δ: Ὁρκίων σύγχυσις. Ἀγαμέμνονος ἐπιπώλησις',
    summary: '올림포스 신들의 회의에서 헤라의 요구로 트로이 전쟁 계속이 결정된다. 아테나의 부추김으로 트로이의 궁수 판다로스가 화살을 쏘아 휴전 맹약을 파기하고 전면전이 개막한다.',
    keyEvents: ['신들의 회의와 아테나의 공작', '판다로스의 화살 발사와 휴전 파기', '아가멤논의 장수 격려 점검', '양군의 전면 충돌 시작'],
    iconicLines: [{ greek: 'ὡς δ\' ὅτε κύματα πολλά... ὣς τότε Τρώων καὶ Ἀχαιῶν...', transliteration: 'hōs d\' hote kymata polla...', korean: '바다 파도가 바위에 부딪쳐 부서지듯, 그리스군과 트로이군이 소리치며 맞붙었도다!' }],
    keyCharacters: ['agamemnon', 'athena']
  },
  {
    bookNumber: 5,
    epic: 'iliad',
    titleKo: '일리아스 5권: 디오메데스의 무공 절정 (Aristeia)',
    titleGreek: 'Ἰλιάς Ε: Διομήδους ἀριστεία',
    summary: '아테나의 가호를 받은 디오메데스가 무공 절정(Aristeia)에 올라 전장을 지배한다. 인간임에도 유혈 전투 속에서 여신 아프로디테와 군신 아레스에게 부상을 입히는 경이로운 무공을 발휘한다.',
    keyEvents: ['디오메데스의 아리스테이아 발현', '아네이아스 구출 시도 아프로디테 부상', '군신 아레스에게 창을 찔러 부상 입힘'],
    iconicLines: [{ greek: 'γινώσκεις δ\' ὅτ\' ἄριστος Ἀχαιῶν εὔχεαι εἶναι...', transliteration: 'ginōskeis d\' hot\' aristos Achaiōn eucheai einai...', korean: '너는 자신이 아카이오이 군 최고의 전사(Aristos)임을 증명하였도다!' }],
    keyCharacters: ['athena']
  },
  {
    bookNumber: 6,
    epic: 'iliad',
    titleKo: '일리아스 6권: 헥토르와 안드로마케의 작별',
    titleGreek: 'Ἰλιάς Ζ: Ἕκτορος καὶ Ἀνδρομάχης ὁμιλία',
    summary: '성 안으로 들어온 헥토르가 아내 안드로마케와 어린 아들 아스티아낙스를 만나 작별 인사를 건넨다. 디오메데스와 글라우코스는 조상간 크세니아를 확인하고 무구를 교환한다.',
    keyEvents: ['디오메데스와 글라우코스의 무구 교환', '헥토르의 안드로마케 및 아스티아낙스 작별', '전장 복귀하는 헥토르'],
    iconicLines: [{ greek: 'αἰὲν ἀριστεύειν καὶ ὑπείροχον ἔμμεναι ἄλλων', transliteration: 'aien aristeuein kai hypeirochon emmenai allōn', korean: '언제나 누구보다 뛰어난 용사(Aristeia)가 되고 타인 위에 우뚝 서라!' }],
    keyCharacters: ['hector', 'achilles']
  },
  {
    bookNumber: 7,
    epic: 'iliad',
    titleKo: '일리아스 7권: 큰 아야스와 헥토르의 단독 결투',
    titleGreek: 'Ἰλιάς Η: Αἴαντος καὶ Ἕκτορος μονομαχία. Νεκρῶν ἀναίρεσις',
    summary: '큰 아야스(Telamonian Ajax)와 헥토르가 밤이 올 때까지 장렬한 1:1 결투를 벌인 후 선물을 교환하고 헤어진다. 양군은 전사자 시신 휴전을 맺고 그리스군은 함선 방어 성벽을 구축한다.',
    keyEvents: ['큰 아야스 vs 헥토르 1:1 대결', '결투 중단 및 무구 선물 교환', '전사자 화장 휴전 및 그리스군 방어 성벽 건설'],
    iconicLines: [{ greek: 'νὺξ δ\' ἤδη τελέθει· ἀγαθὸν καὶ νυκτὶ πιθέσθαι', transliteration: 'nyx d\' ēdē telethei; agathon kai nykti pithesthai', korean: '이제 밤이 찾아왔으니, 밤의 명에 따르는 것이 좋도다!' }],
    keyCharacters: ['hector']
  },
  {
    bookNumber: 8,
    epic: 'iliad',
    titleKo: '일리아스 8권: 꺾인 그리스군과 제우스의 벼락',
    titleGreek: 'Ἰλιάς Θ: Κόλος μάχη',
    summary: '제우스가 올림포스 신들에게 트로이 전쟁 개입 금지령을 내리고 이다 산에서 황금 저울로 운명을 잰다. 제우스의 벼락 지원을 받은 헥토르가 그리스군을 함선 근처까지 후퇴시킨다.',
    keyEvents: ['제우스의 신 개입 금지령', '황금 저울(Kerostasia) 운명 측정', '제우스의 벼락과 그리스군 함선 후퇴'],
    iconicLines: [{ greek: 'αἰεὶ δ\' ἑξείης αἶσα βαρύνεται Ἀχαιῶν...', transliteration: 'aiei d\' hexeiēs aisa barynetai Achaiōn...', korean: '그리스 군의 운명이 저울 아래로 기우니 그 고통이 가중되었도다!' }],
    keyCharacters: ['hector', 'agamemnon']
  },
  {
    bookNumber: 9,
    epic: 'iliad',
    titleKo: '일리아스 9권: 사절단과 아킬레우스의 선택',
    titleGreek: 'Ἰλιάς Ι: Πρεσβεία πρὸς Ἀχιλλέα. Λιταί',
    summary: '그리스군이 패배하자 아가멤논이 사과 보상 사절단(오뒷세우스, 아야스, 포이닉스)을 아킬레우스에게 파견한다. 아킬레우스는 두 가지 운명 중 불멸의 영광(Kleos Aphthiton)을 되새기며 복귀를 거절한다.',
    keyEvents: ['아가멤논의 보상 사절단 파견', '오뒷세우스의 설득과 아킬레우스의 거절', '두 가지 운명(Kleos vs Nostos) 선언'],
    iconicLines: [{ greek: 'ὤλετο μέν μοι νόστος, ἀτὰρ κλέος ἄφθιτον ἔσται', transliteration: 'ōleto men moi nostos, atar kleos aphthiton estai', korean: '나의 귀환(Nostos)은 사라졌으나, 나의 영광은 영원히 불멸하리라(Kleos Aphthiton)!' }],
    keyCharacters: ['achilles', 'odysseus', 'agamemnon']
  },
  {
    bookNumber: 10,
    epic: 'iliad',
    titleKo: '일리아스 10권: 돌론 정찰 기습 (Doloneia)',
    titleGreek: 'Ἰλιάς Κ: Δολώνεια',
    summary: '오뒷세우스와 디오메데스가 밤중에 트로이 진영으로 정찰을 나가 트로이의 스파이 돌론을 포획하고, 트라키아의 레소스 왕을 기습하여 신성한 백마를 탈취한다.',
    keyEvents: ['오뒷세우스 & 디오메데스 야간 정찰', '스파이 돌론 포획 및 심문', '레소스 왕 기습 및 백마 탈취'],
    iconicLines: [{ greek: 'νὺξ ἄμβροτος... ἔρχεται ἠὼς ἐγγύθι', transliteration: 'nyx ambrotos... erchetai ēōs engythi', korean: '신성한 밤이 깊어지고, 새벽이 멀지 않았도다!' }],
    keyCharacters: ['odysseus']
  },
  {
    bookNumber: 11,
    epic: 'iliad',
    titleKo: '일리아스 11권: 그리스 장수들의 부상과 위기',
    titleGreek: 'Ἰλιάς Λ: Ἀγαμέμνονος ἀριστεία',
    summary: '아가멤논, 디오메데스, 오뒷세우스가 차례로 전장에서 부상을 입고 후퇴한다. 함선 근처에서 이를 바라보던 아킬레우스가 파트로클로스를 보내 전황을 정찰하게 한다.',
    keyEvents: ['아가멤논, 디오메데스, 오뒷세우스 부상', '파트로클로스 정찰 파견', '네스토르의 파트로클로스 설득 (아킬레우스 갑옷 착용 제안)'],
    iconicLines: [{ greek: 'νῦν οἴω περὶ γούνατ\' ἐμὰ στήσεσθαι Ἀχαιοὺς / λισσομένους...', transliteration: 'nyn oīō peri gounat\' ema stēsesthai Achaious...', korean: '이제 아카이오이 군이 내 무릎을 잡고 탄원하게 되리라!' }],
    keyCharacters: ['achilles', 'patroclus', 'agamemnon']
  },
  {
    bookNumber: 12,
    epic: 'iliad',
    titleKo: '일리아스 12권: 방어 성벽 돌파',
    titleGreek: 'Ἰλιάς Μ: Τειχομαχία',
    summary: '헥토르가 거대한 돌을 던져 그리스군 방어 성벽 목책 문을 부수고, 트로이군이 그리스 함선 진영 안으로 폭풍처럼 돌진한다.',
    keyEvents: ['폴리다마스의 독수리 뱀 징조 경고 거부', '헥토르의 거석 투척 및 성문 파괴', '그리스군 함선 진영 침투'],
    iconicLines: [{ greek: 'εἷς οἰωνὸς ἄριστος ἀμύνεσθαι περὶ πάτρης', transliteration: 'heis oiōnos aristos amynesthai peri patrēs', korean: '조국을 위해 싸우는 것이야말로 최고의 길조(Signs)이니라!' }],
    keyCharacters: ['hector']
  },
  {
    bookNumber: 13,
    epic: 'iliad',
    titleKo: '일리아스 13권: 포세이돈의 가호와 함선 공방전',
    titleGreek: 'Ἰλιάς Ν: Μάχη ἐπὶ ταῖς ναυσίν',
    summary: '제우스가 시선을 딴 데로 돌린 사이, 바다의 신 포세이돈이 예언자 칼카스로 변장하여 두 아야스 형제를 격려하고 그리스군의 함선 방어선을 강화한다.',
    keyEvents: ['포세이돈의 은밀한 개입', '두 아야스 전사의 맹렬한 저항', '이도메네우스의 무공'],
    iconicLines: [{ greek: 'εἷς ἄνεμος καὶ θυμὸς ἐν Ἀμφιτρίτης θαλάμοις...', transliteration: 'heis anemos kai thymos...', korean: '바다의 궁전에서 바람이 거세지듯 전사들의 기개가 타올랐도다!' }],
    keyCharacters: ['hector']
  },
  {
    bookNumber: 14,
    epic: 'iliad',
    titleKo: '일리아스 14권: 제우스의 속임수 (Dios Apate)',
    titleGreek: 'Ἰλιάς Ξ: Διὸς ἀπάτη',
    summary: '헤라 여신이 아프로디테의 마법 띠를 빌려 제우스의 사랑을 유혹하고 잠의 신 힙노스를 시켜 제우스를 잠들게 한다. 신의 눈을 피해 포세이돈이 그리스군을 대대적으로 반격시킨다.',
    keyEvents: ['헤라의 유혹 연출 (Dios Apate)', '제우스의 잠듦', '포세이돈의 그리스군 대반격 및 헥토르 부상'],
    iconicLines: [{ greek: 'Ἥρη δ\' εἰσεῖδε χρυσόθρονος ὀφθαλμοῖσιν...', transliteration: 'Hērē d\' eiseide chrysothronos ophthalmoisin...', korean: '황금 보좌의 헤라 여신이 지상에서 펼쳐지는 그리스군의 구원을 내려다보았도다!' }],
    keyCharacters: ['hector', 'athena']
  },
  {
    bookNumber: 15,
    epic: 'iliad',
    titleKo: '일리아스 15권: 함선에 붙은 불과 제우스의 분노',
    titleGreek: 'Ἰλιάς Ο: Παλίωξις παρὰ τῶν νεῶν',
    summary: '잠에서 깨어난 제우스가 헤라의 기만에 분노하고 아폴론을 파견하여 헥토르를 치료시킨다. 트로이군이 다시 그리스 함선 앞까지 진격하여 마침내 첫 함선에 불을 지른다.',
    keyEvents: ['제우스의 깨어남과 분노', '아폴론의 헥토르 치유 및 힘 주입', '그리스 함선 불지르기 직전 분공'],
    iconicLines: [{ greek: 'Ἕκτωρ δὲ πρύμνης λάβετο... ἴσχετο χερσίν', transliteration: 'Hektor de prymnēs labeto... ischeto chersin', korean: '헥토르가 그리스 함선 뱃머리를 틀어잡고 불을 지르라 고함쳤도다!' }],
    keyCharacters: ['hector', 'patroclus']
  },
  {
    bookNumber: 16,
    epic: 'iliad',
    titleKo: '일리아스 16권: 파트로클로스의 전사',
    titleGreek: 'Ἰλιάς Π: Πατρόκλεια',
    summary: '함선이 불타자 파트로클로스가 아킬레우스의 갑옷을 입고 출전하여 트로이군을 격퇴하지만, 아폴론의 기만과 헥토르의 창에 맞아 비극적으로 전사한다.',
    keyEvents: ['파트로클로스의 출전', '사르페돈 전사', '아폴론의 방어 해제와 헥토르의 파트로클로스 전사'],
    iconicLines: [{ greek: 'ἤδη γάρ τοι σχεδὸν ἕστηκεν θάνατος καὶ μοῖρα κραταιή', transliteration: 'ēdē gar toi schedon hestēken thanatos kai moira krataiē', korean: '너 또한 오래 살지 못하리라! 위대한 아킬레우스 손에 죽을 운명(Moira)이 바짝 다가왔느니라!' }],
    keyCharacters: ['patroclus', 'hector', 'achilles']
  },
  {
    bookNumber: 17,
    epic: 'iliad',
    titleKo: '일리아스 17권: 파트로클로스 시신 쟁탈전',
    titleGreek: 'Ἰλιάς Ρ: Μενελάου ἀριστεία',
    summary: '파트로클로스의 시신을 차지하기 위해 양군이 처절한 쟁탈전을 벌인다. 헥토르가 아킬레우스의 신성한 갑옷을 빼앗아 입고, 그리스 전사들이 시신을 지켜낸다.',
    keyEvents: ['메넬라오스와 큰 아야스의 시신 수호', '헥토르의 아킬레우스 갑옷 착용', '파트로클로스 시신 운구 후퇴'],
    iconicLines: [{ greek: 'ἀμφὶ δὲ νεκρῷ βῆ... ὡς περί μήτηρ', transliteration: 'amphi de nekrō bē... hōs peri mētēr', korean: '새끼를 지키는 암소처럼 메넬라오스가 파트로클로스 시신을 지켜섰도다!' }],
    keyCharacters: ['patroclus', 'hector', 'achilles']
  },
  {
    bookNumber: 18,
    epic: 'iliad',
    titleKo: '일리아스 18권: 통곡과 헤파이토스의 방패',
    titleGreek: 'Ἰλιάς Σ: Ὁπλοποιΐα',
    summary: '파트로클로스의 죽음을 들은 아킬레우스가 절규한다. 어머니 테티스가 대장장이 신 헤파이토스에게 부탁하여 우주와 인간 사회가 새겨진 신성 방패(Shield of Achilles)를 제작한다.',
    keyEvents: ['아킬레우스의 절규와 분노', '테티스의 헤파이토스 방문', '아킬레우스 신성 방패 제작'],
    iconicLines: [{ greek: 'ἐν δ\' ἐτίθει γαῖαν, ἐν δ\' οὐρανόν, ἐν δὲ θάλασσαν', transliteration: 'en d\' etithei gaian, en d\' ouranon, en de thalassan', korean: '그 방패 위에 신은 땅과 하늘과 바다와 달을 새겨 넣으셨도다!' }],
    keyCharacters: ['achilles', 'hector']
  },
  {
    bookNumber: 19,
    epic: 'iliad',
    titleKo: '일리아스 19권: 화해와 출전 준비',
    titleGreek: 'Ἰλιάς Τ: Μῆνιν ἀπόρρησις',
    summary: '아킬레우스와 아가멤논이 집회에서 공식 화해하고 전리품을 반환받는다. 크산토스 말이 아킬레우스의 비극적 죽음을 예언하지만 아킬레우스는 전장으로 나간다.',
    keyEvents: ['아킬레우스 & 아가멤논 공식 화해', '브리세이스 반환 및 선물 전달', '말 크산토스의 아킬레우스 죽음 예언'],
    iconicLines: [{ greek: 'γινώσκω δ\' εὖ αὐτὸς ὅ μοι μόρος ἐνθάδ\' ὀλέσθαι', transliteration: 'ginōskō d\' eu autos ho moi moros enthad\' olesthai', korean: '나 또한 이곳 트로이에서 죽을 운명임을 잘 알고 있노라!' }],
    keyCharacters: ['achilles', 'agamemnon']
  },
  {
    bookNumber: 20,
    epic: 'iliad',
    titleKo: '일리아스 20권: 신들의 참전과 아킬레우스의 도살',
    titleGreek: 'Ἰλιάς Υ: Θεομαχία',
    summary: '제우스가 신들에게 자율 참전을 허용한다 (Theomachia). 복수귀가 된 아킬레우스가 아네이아스, 헥토르와 맞붙으며 트로이군을 참혹하게 도살한다.',
    keyEvents: ['신들의 전면 개입 (Theomachia)', '아킬레우스 vs 아네이아스 대결 (포세이돈 구출)', '아킬레우스의 무차별 학살'],
    iconicLines: [{ greek: 'ὣς Ἀχιλεὺς ὄρεος ἐξ ἄσπετον ἔσθεεν ἵπποις...', transliteration: 'hōs Achileus oreos ex aspeton estheen hippois...', korean: '불길이 산림을 태우듯 아킬레우스의 전차가 전장을 휩쓸었도다!' }],
    keyCharacters: ['achilles', 'hector', 'athena']
  },
  {
    bookNumber: 21,
    epic: 'iliad',
    titleKo: '일리아스 21권: 강에서의 전투 (Machē Parapotamios)',
    titleGreek: 'Ἰλιάς Φ: Μάχη παραποτάμιος',
    summary: '아킬레우스가 크산토스 강(스카만드로스)을 전사자 시신과 피로 물들인다. 분노한 강신 크산토스가 아킬레우스의 목숨을 위협하지만 헤파이토스의 신성한 불길이 강물을 끓인다.',
    keyEvents: ['크산토스 강의 시신 피물들임', '강신 크산토스 vs 아킬레우스', '헤파이토스의 불길 대결'],
    iconicLines: [{ greek: 'πλῆτο ῥέεθρα νεκρῶν, οὐδέ τι πῃ δύνατο προρέειν...', transliteration: 'plēto rheethra nekrōn...', korean: '강물이 전사자 시신으로 가득 차 바다로 흘러가지 못하였도다!' }],
    keyCharacters: ['achilles', 'hector']
  },
  {
    bookNumber: 22,
    epic: 'iliad',
    titleKo: '일리아스 22권: 헥토르의 죽음',
    titleGreek: 'Ἰλιάς Χ: Ἕκτορος ἀναίρεσις',
    summary: '트로이 성벽 밖에서 홀로 남은 헥토르가 아킬레우스와 1:1 결투를 벌여 전사한다. 아킬레우스는 헥토르의 시신을 전차 뒤에 매달아 끌고 다니며 모독한다.',
    keyEvents: ['성벽 밖 헥토르의 고독한 결단', '아킬레우스의 추격전 및 아테나의 기만', '헥토르의 전사와 시신 모독'],
    iconicLines: [{ greek: 'μὴ μὲν ἀσπουδί γε καὶ ἀκλειῶς ἀπολοίμην', transliteration: 'mē men aspoudi ge kai akleiōs apoloimēn', korean: '싸우지도 않고 불명예스럽게(Akleios) 죽지 않으리라!' }],
    keyCharacters: ['achilles', 'hector', 'athena']
  },
  {
    bookNumber: 23,
    epic: 'iliad',
    titleKo: '일리아스 23권: 파트로클로스의 장례 경기',
    titleGreek: 'Ἰλιάς Ψ: Ἄθλα ἐπὶ Πατρόκλῳ',
    summary: '아킬레우스가 파트로클로스의 화장식을 거행하고, 전사들의 격렬한 장례 추모 경기(전차 경주, 권투, 레슬링, 달리기)를 개최하여 분노를 누그러뜨린다.',
    keyEvents: ['파트로클로스 화장식과 포로 희생', '장례 추모 경기 개최 (Athla)', '아킬레우스의 전사 재물 하사'],
    iconicLines: [{ greek: 'χαῖρέ μοι ὦ Πάτροκλε καὶ εἰν Ἀΐδαο δόμοισι', transliteration: 'chaire moi ō Patrokle kai ein Aïdao domoisi', korean: '저승의 집에서도 평안하라, 나의 파트로클로스여!' }],
    keyCharacters: ['achilles', 'patroclus', 'agamemnon']
  },
  {
    bookNumber: 24,
    epic: 'iliad',
    titleKo: '일리아스 24권: 프리아모스와 아킬레우스의 눈물',
    titleGreek: 'Ἰλιάς Ω: Ἕκτορος λύτρα',
    summary: '늙은 트로이 왕 프리아모스가 밤중에 홀로 아킬레우스 텐트로 찾아와 아들의 시신을 돌려달라며 그의 손에 키스한다. 두 사람은 인간 비극 앞에 함께 눈물을 흘리며 서사시가 종결된다.',
    keyEvents: ['프리아모스의 텐트 야간 방문', '아버지 언급 탄원과 손 키스', '두 영웅의 공동 눈물과 헥토르 장례식'],
    iconicLines: [{ greek: 'ἔτλην δ\' οἷ\' οὔ πώ τις ἐπιχθόνιος βροτὸς ἄλλος...', transliteration: 'etlēn d\' hoi\' ou pō tis epichthonios brotos allos...', korean: '내 아들을 죽인 사람의 손에 입을 대었노라!' }],
    keyCharacters: ['achilles', 'hector', 'priam']
  },

  // ODYSSEY 1 to 24
  {
    bookNumber: 1,
    epic: 'odyssey',
    titleKo: '오뒷세이아 1권: 신들의 회의와 텔레마코스',
    titleGreek: 'Ὀδύσσεια α: Θεῶν σύνοδος. Ἀθηνᾶς παstatement',
    summary: '트로이 함락 후 10년이 지나도록 고향으로 돌아가지 못한 오뒷세우스. 신들의 회의에서 아테나가 그의 귀환을 도모하고 텔레마코스를 찾아가 탐색 길을 격려한다.',
    keyEvents: ['신들의 회의와 제우스의 소회', '아테나의 이타케 방문', '구혼자들의 침탈과 텔레마코스의 결단'],
    iconicLines: [{ greek: 'Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον...', transliteration: 'Andra moi ennepe, Mousa, polytropon...', korean: '들려주소서, 무사 여신이여! 그 임기응변에 능한(Polytropos) 남자의 이야기를!' }],
    keyCharacters: ['odysseus', 'athena', 'penelope', 'telemachus']
  },
  {
    bookNumber: 2,
    epic: 'odyssey',
    titleKo: '오뒷세이아 2권: 이타케 민회와 텔레마코스의 출발',
    titleGreek: 'Ὀδύσσεια β: Ἰθακησίων ἐκκλησία. Τηλεμάχου ἀποδημία',
    summary: '텔레마코스가 이타케 시민 민회를 소집하여 구혼자들의 침탈을 규탄하나 거부당한다. 아테나 여신의 도움으로 배를 구해 밤중에 아버지를 찾아 필로스로 항해한다.',
    keyEvents: ['이타케 민회 소집', '구혼자 안티노오스의 반박', '텔레마코스의 야간 출항'],
    iconicLines: [{ greek: 'μῆτερ ἐμή, μνηστῆρες ὑπερφιάλως ὑβρίζουσι...', transliteration: 'mēter emē, mnēstēres hyperphialōs hybrizousi...', korean: '구혼자들이 오만함(Hubris)으로 우리 가문을 짓밟나이다!' }],
    keyCharacters: ['telemachus', 'athena', 'penelope']
  },
  {
    bookNumber: 3,
    epic: 'odyssey',
    titleKo: '오뒷세이아 3권: 필로스에서의 네스토르 방문',
    titleGreek: 'Ὀδύσσεια γ: Τὰ ἐν Πύλῳ',
    summary: '필로스에 도착한 텔레마코스가 늙은 왕 네스토르를 만난다. 네스토르는 트로이 함락 후 그리스 장수들의 귀환 소식을 전하고 스파르타의 메넬라오스에게 가보라고 권한다.',
    keyEvents: ['필로스 제의 참관', '네스토르 왕의 귀환 회상', '스파르타 여정 시작'],
    iconicLines: [{ greek: 'ὦ Νέστορ Νηληϊάδη, μέγα κῦδος Ἀχαιῶν...', transliteration: 'ō Nestor Nēlēïadē, mega kydos Achaiōn...', korean: '네스토르 왕이시여, 그리스 군의 위대한 영광이시여!' }],
    keyCharacters: ['telemachus', 'athena']
  },
  {
    bookNumber: 4,
    epic: 'odyssey',
    titleKo: '오뒷세이아 4권: 스파르타에서의 메넬라오스와 헬레네',
    titleGreek: 'Ὀδύσσεια δ: Τὰ ἐν Λακεδαίμονι',
    summary: '스파르타를 방문한 텔레마코스가 메넬라오스와 헬레네를 만난다. 메넬라오스는 이집트 바다의 노인 프로테우스로부터 "오뒷세우스가 칼립소의 섬에 갇혀 살아있다"는 소식을 들었다고 밝힌다.',
    keyEvents: ['메넬라오스 & 헬레네의 환대', '이집트 프로테우스 예언 회상', '구혼자들의 텔레마코스 매복 암살 모의'],
    iconicLines: [{ greek: 'αἰεί τοι περίκειται ἀνήρ... Καλυψοῦς ἐν μεγάροισι', transliteration: 'aiei toi perikeitai anēr... Kalypsous en megaroisi', korean: '그 남자는 칼립소 여신의 섬에 갇혀 눈물지으며 살아가고 있도다!' }],
    keyCharacters: ['telemachus', 'penelope']
  },
  {
    bookNumber: 5,
    epic: 'odyssey',
    titleKo: '오뒷세이아 5권: 칼립소의 섬과 뗏목 항해',
    titleGreek: 'Ὀδύσσεια ε: Καλυψοῦς ἄντρον. Ὀδυσσέως σχεδία',
    summary: '헤르메스의 전갈을 받은 칼립소가 영생 약속을 거절한 오뒷세우스의 귀환(Nostos)을 허락한다. 오뒷세우스는 뗏목을 만들어 항해하다 포세이돈의 폭풍우를 만나 파이아케스 왕국에 표류한다.',
    keyEvents: ['칼립소의 영생 약속 거절', '뗏목 제작 및 출항', '포세이돈의 폭풍우와 파이아케스 표류'],
    iconicLines: [{ greek: 'ἤματα δ\' ἐν πέτρῃσι... δάκρυσι καὶ στοναχῇσι...', transliteration: 'ēmata d\' en petrēsi...', korean: '그는 해변에 앉아 고향을 바라보며 눈물과 탄식으로 바다를 내려다보았도다!' }],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 6,
    epic: 'odyssey',
    titleKo: '오뒷세이아 6권: 나우시카아 공주와의 만남',
    titleGreek: 'Ὀδύσσεια ζ: Ὀδυσσέως ἄφιξις εἰς Φαίακας',
    summary: '파이아케스 해변에서 잠에서 깬 오뒷세우스가 빨래를 하러 온 나우시카아 공주를 만난다. 오뒷세우스는 품위 있는 지혜(Metis) 언변으로 공주의 도움을 받아 궁전으로 안내받는다.',
    keyEvents: ['나우시카아 공주의 해변 빨래', '오뒷세우스의 품위 있는 세련된 탄원', '파이아케스 궁전 가이드'],
    iconicLines: [{ greek: 'θεός νύ τίς ἐσσι, ἢ βροτός; εἰ δέ τίς ἐσσι βροτῶν...', transliteration: 'theos ny tis essi, ē brotos?...', korean: '당신은 여신이시옵니까, 죽을 운명의 인간이시옵니까?' }],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 7,
    epic: 'odyssey',
    titleKo: '오뒷세이아 7권: 파이아케스 궁전 환대',
    titleGreek: 'Ὀδύσσεια η: Ὀδυσσέως εἴσοδος πρὸς Ἀλκίνοον',
    summary: '아테나 여신의 안개 보호를 받으며 알키노오스 왕과 아레테 왕비의 궁전에 들어간 오뒷세우스가 이방인 환대(Xenia)를 받는다.',
    keyEvents: ['알키노오스 왕 궁전 입성', '아레테 왕비 앞에서의 무릎 꿇기 탄원', '파이아케스 환대 승인'],
    iconicLines: [{ greek: 'Ἀλκίνοε, ἄλλο τί τοι φρεσὶ μελέτω...', transliteration: 'Alkinoe, allo ti toi phresi meletō...', korean: '알키노오스 왕이시여, 나그네를 환대함은 신성의 법이옵니다!' }],
    keyCharacters: ['odysseus']
  },
  {
    bookNumber: 8,
    epic: 'odyssey',
    titleKo: '오뒷세이아 8권: 데모도코스의 노래와 스포츠 경기',
    titleGreek: 'Ὀδύσσεια θ: Ὀδυσσέως σύστασις πρὸς Φαίακας',
    summary: '파이아케스 왕국에서 시인 데모도코스가 트로이 목마와 아킬레우스의 대결을 노래하자 오뒷세우스가 눈물을 숨긴다. 알키노오스 왕의 질문에 마침내 정체를 드러낸다.',
    keyEvents: ['시인 데모도코스의 서사시 노래', '오뒷세우스의 감추어진 눈물', '알키노오스 왕의 정체 질의'],
    iconicLines: [{ greek: 'αὐτὰρ Ὀδυσσεὺς φᾶρος ἑλὼν μέγα πnative...', transliteration: 'autar Odysseus pharos helōn mega...', korean: '오뒷세우스는 자주색 겉옷을 잡아당겨 얼굴을 가리고 눈물을 흘렸도다!' }],
    keyCharacters: ['odysseus']
  },
  {
    bookNumber: 9,
    epic: 'odyssey',
    titleKo: '오뒷세이아 9권: 퀴클롭스와 "아무도 아닌 자"',
    titleGreek: 'Ὀδύσσεια ι: Ἀλκίνου ἀπόλογοι. Κυκλώπεια',
    summary: '오뒷세우스가 자신의 모험을 고백한다. 로토스 먹는 자들의 땅을 지나 식인 거인 퀴클롭스 폴뤼페모스의 동굴에서 자신을 "아무도 아닌 자(Outis)"라 속이고 탈출한다.',
    keyEvents: ['로토스 먹는 자들의 땅', '퀴클롭스 폴뤼페모스 동굴 갇힘', '"아무도 아닌 자(Outis)" 지혜와 눈 찌르기 탈출'],
    iconicLines: [{ greek: 'Οὖτις ἐμοί γ\' ὄνομα· Οὖτιν δέ με κικλήσκουσι', transliteration: 'Outis emoi g\' onoma; Outin de me kiklēskousi', korean: '내 이름은 "아무도 아닌 자(Outis)"요!' }],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 10,
    epic: 'odyssey',
    titleKo: '오뒷세이아 10권: 키르케의 섬과 마법 약초',
    titleGreek: 'Ὀδύσσεια κ: Τὰ περὶ Αἴολον καὶ Κίρκην',
    summary: '아이올로스 바람 주머니 실패 후 키르케의 섬에 도착한다. 마법으로 선원들이 돼지로 변하지만 헤르메스가 준 약초 몰리(Moly)로 극복하고 1년간 머문다.',
    keyEvents: ['아이올로스 바람 주머니 실패', '키르케 마법과 선원 돼지 변신', '몰리(Moly) 약초 복용 및 승리'],
    iconicLines: [{ greek: 'μῶλυ δέ μιν καλέουσι θεοί...', transliteration: 'mōly de min kaleousi theoi...', korean: '신들은 그 마법 방어 약초를 "몰리(Moly)"라 부르니라!' }],
    keyCharacters: ['odysseus', 'circe']
  },
  {
    bookNumber: 11,
    epic: 'odyssey',
    titleKo: '오뒷세이아 11권: 저승 방문 (Nekyia)',
    titleGreek: 'Ὀδύσσεια λ: Νέκυια',
    summary: '오뒷세우스가 세상 끝 저승으로 내려가 테이레시아스의 귀환 예언을 듣고, 어머니 안티클레이아, 전우 아킬레우스, 아가멤논의 영혼을 만난다.',
    keyEvents: ['저승 피 희생 의례', '테이레시아스 귀환 예언', '아킬레우스 영혼과의 대화'],
    iconicLines: [{ greek: 'βουλοίμην κ\' ἐπάρουρος ἐὼν θητευέμεν ἄλλῳ...', transliteration: 'bouloimēn k\' eparouros eōn...', korean: '저승의 왕이 되느니 지상의 가난한 머슴이 되겠소!' }],
    keyCharacters: ['odysseus', 'achilles', 'agamemnon']
  },
  {
    bookNumber: 12,
    epic: 'odyssey',
    titleKo: '오뒷세이아 12권: 세이렌과 스킬라, 헬리오스의 소',
    titleGreek: 'Ὀδύσσεια μ: Σειρῆνες. Σκύλλα. Χάρυβδις. Βόες Ἠλίου',
    summary: '세이렌의 유혹 노래를 귀에 돛대에 묶여 견디고, 스킬라와 카리브디스 좁은 바다를 지난다. 스키나키아 섬에서 헬리오스 신의 소를 잡은 죄로 모든 선원이 수중 매장당한다.',
    keyEvents: ['세이렌 노래 돛대 묶임 통과', '스킬라 괴물 선원 6명 포식', '헬리오스 금기 소 도살과 전선 파선'],
    iconicLines: [{ greek: 'Δεῦρ\' ἄγ\' ἰών, πολύαιν\' Ὀδυσεῦ, μέγα κῦδος Ἀχαιοῶν...', transliteration: 'Deur\' ag\' iōn, polyain\' Odyseu...', korean: '이리로 오소서, 칭송받는 오뒷세우스여, 그리스 군의 거대한 영광이시여!' }],
    keyCharacters: ['odysseus']
  },
  {
    bookNumber: 13,
    epic: 'odyssey',
    titleKo: '오뒷세이아 13권: 이타케 귀환과 아테나의 변장',
    titleGreek: 'Ὀδύσσεια ν: Ὀδυσσέως ἀπόπλους παρὰ Φαιάκων καὶ ἄφιξις εἰς Ἰθάκην',
    summary: '파이아케스 배를 타고 마침내 고향 이타케 해변에 잠든 채 내린 오뒷세우스. 아테나 여신이 나타나 지혜(Metis) 작전을 세우고 오뒷세우스의 모습을 늙은 거지로 변장시킨다.',
    keyEvents: ['파이아케스 보물과 이타케 상륙', '아테나 여신과의 만남 및 계획 수립', '늙은 거지 변장'],
    iconicLines: [{ greek: 'αἰεί τοι τοιοῦτον ἐνὶ στήθεσσι νόημα...', transliteration: 'aiei toi toiouton eni stēthessi noēma...', korean: '네 가슴속에는 언제나 깊은 지혜(Metis)가 숨쉬고 있도다!' }],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 14,
    epic: 'odyssey',
    titleKo: '오뒷세이아 14권: 돼지치기 에우마이오스와의 만남',
    titleGreek: 'Ὀδύσσεια ξ: Ὀδυσσέως πρὸς Εὔμαιον ὁμιλία',
    summary: '거지로 변장한 오뒷세우스가 오두막에서 돼지치기 에우마이오스를 만난다. 에우마이오스는 충성스러운 Xenia 환대를 베풀고 오뒷세우스는 크레타 전사 거짓 이야기로 정체를 숨긴다.',
    keyEvents: ['돼지치기 에우마이오스 오두막 환대', '크레타 전사 거짓 이야기', '주인 오뒷세우스 충절 확인'],
    iconicLines: [{ greek: 'ξεῖν\', οὔ μοι θέμις ἔστ\'... ξένον ἀτιμῆσαι', transliteration: 'xein\', ou moi themis est\'...', korean: '나그네여, 이방인을 몰대함은 내게 허용되지 않는 법이오!' }],
    keyCharacters: ['odysseus']
  },
  {
    bookNumber: 15,
    epic: 'odyssey',
    titleKo: '오뒷세이아 15권: 텔레마코스의 이타케 복귀',
    titleGreek: 'Ὀδύσσεια ο: Τηλεμάχου ἐπάνοδος',
    summary: '아테나의 독촉으로 스파르타를 떠난 텔레마코스가 구혼자들의 암살 매복을 피하여 밤중에 이타케 해변에 무사히 도착한다.',
    keyEvents: ['텔레마코스의 스파르타 출발', '예언자 테오클뤼메노스 동승', '이타케 매복 피하기 성공'],
    iconicLines: [{ greek: 'αἰεὶ δ\' ἄλλοτε ἄλλος ἐπιχθονίων ἄνθρωπος...', transliteration: 'aiei d\' allote allos...', korean: '인간의 삶에는 신이 주신 운명이 항상 바뀌느니라!' }],
    keyCharacters: ['telemachus', 'athena']
  },
  {
    bookNumber: 16,
    epic: 'odyssey',
    titleKo: '오뒷세이아 16권: 부자의 비밀 재회',
    titleGreek: 'Ὀδύσσεια π: Τηλεμάχου ἀναγνωρισμὸς Ὀδυσσέως',
    summary: '에우마이오스의 오두막에서 아테나가 변장을 일시 해제한다. 오뒷세우스와 아들 텔레마코스가 20년 만에 서로를 알아보며 눈물을 흘리고 구혼자 응징 작전을 모의한다.',
    keyEvents: ['부자의 오두막 만남', '아테나의 변장 해제 및 아버지 입증', '구혼자 108명 응징 작전 모의'],
    iconicLines: [{ greek: 'οὔ τίς τοι θεός εἰμι... ἀλλὰ πατὴρ τεός εἰμι', transliteration: 'ou tis toi theos eimi... alla patēr teos eimi', korean: '나는 신이 아니라, 네가 그토록 그리워하던 네 아버지니라!' }],
    keyCharacters: ['odysseus', 'telemachus', 'athena']
  },
  {
    bookNumber: 17,
    epic: 'odyssey',
    titleKo: '오뒷세이아 17권: 이타케 궁전 모독과 늙은 개 아르고스',
    titleGreek: 'Ὀδύσσεια ρ: Τηλεμάχου ἐπάνοδος εἰς Ἰθάκην',
    summary: '거지로 변장한 오뒷세우스가 이타케 궁전에 입성한다. 20년을 기다린 늙은 개 아르고스가 주인을 알아보고 꼬리를 치다 숨을 거두며, 구혼자 안티노오스가 거지를 모독한다.',
    keyEvents: ['늙은 개 아르고스의 알아봄과 감동적 죽음', '궁전 구혼자들의 모독과 모욕', '페넬로페의 거지 접견 요청'],
    iconicLines: [{ greek: 'Ἄργος δ\' ὧδε κύων... ἄνευθεν ἄνακτος', transliteration: 'Argos d\' hōde kyōn...', korean: '늙은 개 아르고스는 20년 만에 주인을 알아보고 꼬리를 흔들고는 숨을 거두었도다!' }],
    keyCharacters: ['odysseus', 'penelope', 'telemachus']
  },
  {
    bookNumber: 18,
    epic: 'odyssey',
    titleKo: '오뒷세이아 18권: 거지 이로스와의 권투 대결',
    titleGreek: 'Ὀδύσσεια σ: Ὀδυσσέως καὶ Ἴρου πυγμαχία',
    summary: '진짜 거지 이로스가 오뒷세우스를 시기하여 싸움을 시비 건다. 오뒷세우스가 펀치 한 번으로 이로스의 턱뼈를 부수고 승리하자 구혼자들이 환호한다.',
    keyEvents: ['거지 이로스의 시비', '오뒷세우스의 강력한 한 펀치 KO', '페넬로페의 구혼자 앞 등판'],
    iconicLines: [{ greek: 'οὐδὲν ἀκιδνότερον γαῖα τρέφει ἀνθρώποιο...', transliteration: 'ouden akidnoteron gaia trephei anthrōpoio...', korean: '지상에서 숨 쉬는 피조물 중 인간보다 더 약한 존재는 없도다!' }],
    keyCharacters: ['odysseus', 'penelope']
  },
  {
    bookNumber: 19,
    epic: 'odyssey',
    titleKo: '오뒷세이아 19권: 흉터와 늙은 유모 유클레이아',
    titleGreek: 'Ὀδύσσεια τ: Ὀδυσσέως καὶ Πηνελόπης ὁμιλία. Τὰ νίπτρα',
    summary: '오뒷세우스가 페넬로페와 대화하며 남편의 귀환을 예언한다. 발을 씻겨주던 늙은 유모 유클레이아가 어릴 적 멧돼지 송곳니 흉터를 알아보자 입을 막아 비밀을 유지한다.',
    keyEvents: ['페넬로페와의 야간 면담', '유모 유클레이아의 멧돼지 흉터 알아봄', '12개 도끼 구멍 활 쏘기 시험 제안'],
    iconicLines: [{ greek: 'οὐλήν, τήν ποτέ μιν σῦς ἤλασε λευκῷ ὀδόντι', transliteration: 'oulēn, tēn pote min sys ēlase leukō odonti', korean: '유모는 흰 송곳니 멧돼지가 그에게 남긴 그 흉터를 즉시 알아보았도다!' }],
    keyCharacters: ['odysseus', 'penelope']
  },
  {
    bookNumber: 20,
    epic: 'odyssey',
    titleKo: '오뒷세이아 20권: 징조와 구혼자들의 비극적 광기',
    titleGreek: 'Ὀδύσσεια υ: Τὰ πρὸ τῆς μνηστηροφονίας',
    summary: '잠들지 못하는 오뒷세우스를 아테나가 안심시킨다. 제우스의 벼락 징조가 내리고, 예언자 테오클뤼메노스가 구혼자들의 피로 물든 벽과 저승의 환영을 보고 멸망을 예언한다.',
    keyEvents: ['아테나의 밤중 격려', '제우스의 벼락 징조', '예언자의 피 칠갑 환영 예언과 구혼자들의 비웃음'],
    iconicLines: [{ greek: 'ἆ δειλοί, τί κακὸν τόδε πάσχετε; νυκτὶ μὲν ὑμέων / εἰλύαται κεφαλαί...', transliteration: 'ā deiloi, ti kakon tode paschete?...', korean: '비참한 자들아, 어찌 이토록 피로 머리와 얼굴이 가려졌느냐! 저승의 어둠이 다가왔도다!' }],
    keyCharacters: ['odysseus', 'telemachus']
  },
  {
    bookNumber: 21,
    epic: 'odyssey',
    titleKo: '오뒷세이아 21권: 활 쏘기 시험',
    titleGreek: 'Ὀδύσσεια φ: Τόξου θέσις',
    summary: '페넬로페가 오뒷세우스의 강철 활을 꺼내어 12개 도끼 구멍 통과 시험을 선언한다. 구혼자들이 모두 실패하나, 거지로 변장한 오뒷세우스가 거문고 줄 치듯 가볍게 성공한다.',
    keyEvents: ['강철 활 꺼내기', '구혼자들의 줄 매기 잇따른 실패', '오뒷세우스의 가벼운 활시위 통과'],
    iconicLines: [{ greek: 'ὡς ὅτ\' ἀνὴρ φόρμιγγος ἐπιστάμενος... ῥηϊδίως ἐτάνυσσε...', transliteration: 'hōs hot\' anēr phormingos epistamenos...', korean: '수금 가수가 새 줄을 매듯 오뒷세우스는 거대한 활시위를 가볍게 당겼도다!' }],
    keyCharacters: ['odysseus', 'penelope', 'telemachus']
  },
  {
    bookNumber: 22,
    epic: 'odyssey',
    titleKo: '오뒷세이아 22권: 구혼자 소탕 (Mnestērophonia)',
    titleGreek: 'Ὀδύσσεια χ: Μνηστηροφονία',
    summary: '거지 누더기를 벗은 오뒷세우스가 아들 텔레마코스, 충성스러운 하수인들과 함께 이타케 궁전 문을 잠그고 108명 구혼자들을 피의 도살로 응징한다.',
    keyEvents: ['안티노오스의 목 관통 첫 단죄', '궁전 문 봉쇄와 피의 심판', '배신자 시녀들의 교수형 정벌'],
    iconicLines: [{ greek: 'ὦ κύνες, οὔ μ\' ἔτ\' ἐφάσκεθ\' ὑπότροπον οἴκαδ\' ἱκέσθαι', transliteration: 'ō kynes, ou m\' et\' ephasketh\' hypotropon oikad\' ikesthai', korean: '개 같은 자들아! 너희는 내가 결코 고향으로 돌아오지 못할 줄 알았느냐!' }],
    keyCharacters: ['odysseus', 'telemachus', 'athena']
  },
  {
    bookNumber: 23,
    epic: 'odyssey',
    titleKo: '오뒷세이아 23권: 올리브 나무 침대의 비밀',
    titleGreek: 'Ὀδύσσεια ψ: Ὀδυσσέως ὑπὸ Πηνελόπης ἀναγνωρισμός',
    summary: '구혼자 소탕 후 페넬로페가 살아있는 올리브 나무 뿌리로 새긴 이동 불가 침대 비밀을 질문한다. 오뒷세우스가 침대의 세부 비밀을 말하자 20년 만의 눈물 재회가 성사된다.',
    keyEvents: ['페넬로페의 조심스러운 올리브 침대 질문', '오뒷세우스의 비밀 증명', '20년 만의 눈물 재회와 신들의 길어진 밤'],
    iconicLines: [{ greek: 'ὤ ποπαὶ ἦ μάλα δή σε θεοὶ Ὀλύμπια δώματ\' ἔχοντες...', transliteration: 'ō popai ē mala dē se theoi...', korean: '올림포스 신들께서 참으로 당신에게 굳건한 마음을 주셨구려!' }],
    keyCharacters: ['odysseus', 'penelope', 'athena']
  },
  {
    bookNumber: 24,
    epic: 'odyssey',
    titleKo: '오뒷세이아 24권: 아버지 라에르테스와 평화 맹약',
    titleGreek: 'Ὀδύσσεια ω: Σπονδαί',
    summary: '구혼자 영혼들이 저승으로 내려가고, 오뒷세우스가 과수원에서 늙은 아버지 라에르테스를 만난다. 구혼자 유족들의 복수 민란이 일어날 때 아테나가 개입하여 영구 평화 맹약을 맺는다.',
    keyEvents: ['저승의 구혼자 영혼들과 아킬레우스 대화', '과수원 아버지 라에르테스 감동 재회', '아테나 여신의 중재와 이타케 영구 평화 맹약'],
    iconicLines: [{ greek: 'ἴσχεσθε πτολέμου, Ἰθακήσιοι, ἀργαλέοιο...', transliteration: 'ischesthe ptolemou, Ithakēsioi, argaleoio...', korean: '이타케인들아, 비극적인 전쟁을 당장 멈추어라! 피흘리지 말고 화평을 맺으라!' }],
    keyCharacters: ['odysseus', 'athena', 'telemachus']
  }
];
