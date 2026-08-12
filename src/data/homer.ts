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

export const HOMERIC_BOOKS: HomericBookSummary[] = [
  // ILIAD KEY BOOKS
  {
    bookNumber: 1,
    epic: 'iliad',
    titleKo: '일리아스 1권: 역병과 아킬레우스의 분노',
    titleGreek: 'Ἰλιάς Α: Λοιμός. Μῆνις',
    summary: '아폴론 사제의 딸 크리세이스 반환 문제로 총사령관 아가멤논과 최고 전사 아킬레우스가 충돌한다. 아가멤논이 아킬레우스의 전리품 여인 브리세이스를 빼앗자, 아킬레우스는 분노하며 참전을 거부한다.',
    keyEvents: [
      '아폴론 신의 역병 화살이 아카이오이 진영에 쏟아짐',
      '아킬레우스와 아가멤논의 격렬한 언쟁',
      '아킬레우스의 참전 거부 선언 및 어머니 테티스에게 호소',
      '제우스가 테티스의 청을 받아들여 아카이오이 군에 패배를 약속함'
    ],
    iconicLines: [
      {
        greek: 'Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος / οὐλομένην, ἣ μυρί\' Ἀχαιοῖς ἄλγε\' ἔθηκε',
        transliteration: 'Mēnin aeide thea Pēlēïadeō Achilēos / oulomenēn, hē myri\' Achaiois alge\' ethēke',
        korean: '분노를 노래하소서, 여신이여! 펠레우스의 아들 아킬레우스의 그 파멸적 분노를, 아카이오이족에게 수없는 고통을 가져다준 그 분노를!'
      }
    ],
    keyCharacters: ['achilles', 'agamemnon', 'athena']
  },
  {
    bookNumber: 3,
    epic: 'iliad',
    titleKo: '일리아스 3권: 파리스와 메넬라오스의 단독 결투',
    titleGreek: 'Ἰλιάς Γ: Ὅρκια. Τειχοσκοπία. Πάριδος καὶ Μενελάου μονομαχία',
    summary: '양군이 맞붙기 직전, 전쟁의 원인이 된 파리스와 헬레네의 남편 메넬라오스가 단독 결투로 전쟁을 끝내기로 합의한다. 아프로디테 여신이 위험에 처한 파리스를 구출한다.',
    keyEvents: [
      '트로이 성벽 위에서 헬레네가 프리아모스 왕에게 그리스 영웅들을 소개함 (Teichoskopia)',
      '메넬라오스와 파리스의 1:1 단독 결투',
      '패배 직전 아프로디테 여신이 파리스를 안개 속으로 구출함'
    ],
    iconicLines: [
      {
        greek: 'οὐ νέμεσις Τρῶας καὶ ἐϋκνήμιδας Ἀχαιοὺς / τοιῇδ\' ἀμφὶ γυναικὶ πολὺν χρόνον ἄλγεα πάσχειν',
        transliteration: 'ou nemesis Trōas kai eyknēmidas Achaious / toiēd\' amphi gynarki polyn chronon algea paschein',
        korean: '트로이인들과 그리스인들이 저토록 아름다운 여인을 위해 오랜 세월 고통을 견디는 것은 결코 탓할 일이 아니로다!'
      }
    ],
    keyCharacters: ['priam', 'hector']
  },
  {
    bookNumber: 6,
    epic: 'iliad',
    titleKo: '일리아스 6권: 헥토르와 안드로마케의 작별',
    titleGreek: 'Ἰλιάς Ζ: Ἕκτορος καὶ Ἀνδρομάχης ὁμιλία',
    summary: '치열한 전투 속에서 트로이의 수호자 헥토르가 성 안으로 들어와 아내 안드로마케와 어린 아들 아스티아낙스를 만나 작별 인사를 건넨다. 문학사상 가장 가슴 아픈 가족 작별 장면.',
    keyEvents: [
      '글라우코스와 디오메데스의 가문 크세니아(손님환대) 확인 및 무구 교환',
      '헥토르가 어머니 헤카베와 아내 안드로마케를 만남',
      '아들 아스티아낙스가 투구를 보고 놀라자 헥토르가 투구를 벗고 웃는 장면',
      '조국의 운명과 비극적 죽음을 직면하고 전장으로 나가는 헥토르'
    ],
    iconicLines: [
      {
        greek: 'αἰὲν ἀριστεύειν καὶ ὑπείροχον ἔμμεναι ἄλλων',
        transliteration: 'aien aristeuein kai hypeirochon emmenai allōn',
        korean: '언제나 누구보다 뛰어난 용사(Aristeia)가 되고 타인 위에 우뚝 서라!'
      }
    ],
    keyCharacters: ['hector', 'achilles']
  },
  {
    bookNumber: 9,
    epic: 'iliad',
    titleKo: '일리아스 9권: 사절단과 아킬레우스의 선택',
    titleGreek: 'Ἰλιάς Ι: Πρεσβεία πρὸς Ἀχιλλέα. Λιταί',
    summary: '아카이오이 군이 패배에 휩싸이자, 오뒷세우스, 아야스, 포이닉스가 사절단으로 아킬레우스의 텐트를 찾아가 거대한 보상을 제안하며 복귀를 탄원한다. 아킬레우스는 두 가지 운명 중 요절과 불멸의 영광을 되새기며 거절한다.',
    keyEvents: [
      '아가멤논의 사과 및 엄청난 보상 제안 사절단 파견',
      '오뒷세우스의 설득 연설과 아킬레우스의 단호한 거절',
      '아킬레우스의 두 가지 운명(Kleos vs 평범한 삶) 선언'
    ],
    iconicLines: [
      {
        greek: 'ὤλετο μέν μοι νόστος, ἀτὰρ κλέος ἄφθιτον ἔσται',
        transliteration: 'ōleto men moi nostos, atar kleos aphthiton estai',
        korean: '나의 귀환(Nostos)은 사라졌으나, 나의 영광은 영원히 불멸하리라(Kleos Aphthiton)!'
      }
    ],
    keyCharacters: ['achilles', 'odysseus', 'agamemnon']
  },
  {
    bookNumber: 16,
    epic: 'iliad',
    titleKo: '일리아스 16권: 파트로클로스의 전사',
    titleGreek: 'Ἰλιάς Π: Πατρόκλεια',
    summary: '그리스군 함선이 불타자 파트로클로스가 아킬레우스의 갑옷을 입고 출전하여 트로이군을 격퇴하지만, 아폴론의 기만과 헥토르의 창에 맞아 전사한다.',
    keyEvents: [
      '아킬레우스의 갑옷과 전차를 빌려 출전하는 파트로클로스',
      '제우스의 아들 사르페돈의 비극적 전사',
      '아폴론의 등 타격으로 방어 해제된 파트로클로스를 헥토르가 전사시킴'
    ],
    iconicLines: [
      {
        greek: 'ἤδη γάρ τοι σχεδὸν ἕστηκεν θάνατος καὶ μοῖρα κραταιή',
        transliteration: 'ēdē gar toi schedon hestēken thanatos kai moira krataiē',
        korean: '너 또한 오래 살지 못하리라! 위대한 아킬레우스의 손에 죽을 강력한 운명(Moira)이 이미 네 곁에 다가와 있느니라!'
      }
    ],
    keyCharacters: ['patroclus', 'hector', 'achilles']
  },
  {
    bookNumber: 18,
    epic: 'iliad',
    titleKo: '일리아스 18권: 아킬레우스의 통곡과 헤파이토스의 방패',
    titleGreek: 'Ἰλιάς Σ: Ὁπλοποιΐα',
    summary: '파트로클로스의 죽음을 들은 아킬레우스가 흙을 머리에 뒤집어쓰고 절규한다. 어머니 테티스가 대장장이 신 헤파이토스에게 부탁하여 우주와 인간 사회 전체가 새겨진 신성한 방패를 제작한다.',
    keyEvents: [
      '파트로클로스의 죽음에 대한 아킬레우스의 절규와 분노 폭발',
      '테티스의 헤파이토스 대장간 방문',
      '해, 달, 평화의 도시, 재판, 전쟁, 농경이 새겨진 아킬레우스 신성 방패(Shield of Achilles) 완성'
    ],
    iconicLines: [
      {
        greek: 'ἐν δ\' ἐτίθει γαῖαν, ἐν δ\' οὐρανόν, ἐν δὲ θάλασσαν',
        transliteration: 'en d\' etithei gaian, en d\' ouranon, en de thalassan',
        korean: '그 방패 위에 신은 땅과 하늘과 바다를 새겨 넣으셨고, 쉬지 않는 태양과 둥근 달을 새겨 넣으셨도다!'
      }
    ],
    keyCharacters: ['achilles', 'hector']
  },
  {
    bookNumber: 22,
    epic: 'iliad',
    titleKo: '일리아스 22권: 헥토르의 죽음',
    titleGreek: 'Ἰλιάς Χ: Ἕκτορος ἀναίρεσις',
    summary: '친구 파트로클로스를 잃은 아킬레우스가 전장으로 복귀한다. 트로이 성벽 앞에서 헥토르와 1:1 결투를 벌여 헥토르를 전사시키고, 그의 시신을 전차 뒤에 매달아 끌고 다닌다.',
    keyEvents: [
      '트로이 성벽 밖에서의 헥토르의 고독한 결단',
      '성벽을 세 바퀴 도는 아킬레우스와 헥토르의 추격전',
      '아테나 여신의 기만과 헥토르의 마지막 비극적 결투',
      '헥토르의 전사와 시신 모독'
    ],
    iconicLines: [
      {
        greek: 'μὴ μὲν ἀσπουδί γε καὶ ἀκλειῶς ἀπολοίμην',
        transliteration: 'mē men aspoudi ge kai akleiōs apoloimēn',
        korean: '싸우지도 않고 불명예스럽게(Akleios) 죽지 않으리라! 후세 사람들이 들을 거대한 위업을 이루고 죽으리라!'
      }
    ],
    keyCharacters: ['achilles', 'hector', 'athena']
  },
  {
    bookNumber: 24,
    epic: 'iliad',
    titleKo: '일리아스 24권: 프리아모스와 아킬레우스의 눈물',
    titleGreek: 'Ἰλιάς Ω: Ἕκτορος λύτρα',
    summary: '늙은 트로이 왕 프리아모스가 밤중에 홀로 아킬레우스의 텐트로 찾아와 아들 헥토르의 시신을 돌려달라며 그의 무릎을 꿇고 손에 키스한다. 두 사람은 인간 고통의 비극 앞에 함께 눈물을 흘리며 서사시가 종결된다.',
    keyEvents: [
      '프리아모스 왕의 위험천만한 아킬레우스 텐트 야간 방문',
      '프리아모스가 아킬레우스의 아버지를 언급하며 탄원함',
      '아킬레우스와 프리아모스가 함께 인간 비극을 슬퍼하며 눈물 흘림',
      '헥토르의 장례식과 일리아스 완결'
    ],
    iconicLines: [
      {
        greek: 'ἔτλην δ\' οἷ\' οὔ πώ τις ἐπιχθόνιος βροτὸς ἄλλος / ἀνδρὸς παιδοφόνοιο ποτὶ στόμα χεῖρ\' ὀρέγεσθαι',
        transliteration: 'etlēn d\' hoi\' ou pō tis epichthonios brotos allos / andros paidophonoio poti stoma cheir\' oregesthai',
        korean: '지상에 살아있는 그 어떤 인간도 감히 하지 못한 일을 내가 견뎌내었노라. 내 아들을 죽인 사람의 손을 입에 대었노라!'
      }
    ],
    keyCharacters: ['achilles', 'hector', 'priam']
  },

  // ODYSSEY KEY BOOKS
  {
    bookNumber: 1,
    epic: 'odyssey',
    titleKo: '오뒷세이아 1권: 신들의 회의와 텔레마코스',
    titleGreek: 'Ὀδύσσεια α: Θεῶν σύνοδος. Ἀθηνᾶς παstatement',
    summary: '트로이 함락 후 10년이 지나도록 고향으로 돌아가지 못한 오뒷세우스. 신들의 회의에서 아테나가 그의 귀환을 도모하고, 아들 텔레마코스를 찾아가 아버지 탐색 길을 격려한다.',
    keyEvents: [
      '신들의 회의와 제우스의 인간 책임 논의',
      '아테나 여신의 멘토르(Mentor) 변장과 이타케 방문',
      '구혼자들의 이타케 궁전 침탈 현장',
      '텔레마코스의 아버지 찾기 여정 결단'
    ],
    iconicLines: [
      {
        greek: 'Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ / πλάγχθη',
        transliteration: 'Andra moi ennepe, Mousa, polytropon, hos mala polla / planchthē',
        korean: '들려주소서, 무사 여신이여! 그 임기응변에 능한(Polytropos) 남자의 이야기를! 트로이의 신성한 도성을 무너뜨린 후 수없이 방랑했던 그 사람의 이야기를!'
      }
    ],
    keyCharacters: ['odysseus', 'athena', 'penelope', 'telemachus']
  },
  {
    bookNumber: 5,
    epic: 'odyssey',
    titleKo: '오뒷세이아 5권: 칼립소의 섬과 뗏목 항해',
    titleGreek: 'Ὀδύσσεια ε: Καλυψοῦς ἄντρον. Ὀδυσσέως σχεδία',
    summary: '7년간 칼립소 여신의 섬 오귀기아에 갇혀있던 오뒷세우스. 헤르메스 신의 전갈을 받은 칼립소가 영생의 제안을 물리치고 뗏목을 만들어 고향 이타케로 향하는 오뒷세우스의 귀환(Nostos) 시작.',
    keyEvents: [
      '헤르메스의 오귀기아 섬 방문 및 제우스의 명령 전갈',
      '칼립소의 영생 약속 거절 및 바닷가에서 고향을 향해 눈물 흘리는 오뒷세우스',
      '뗏목 제작과 폭풍우 속 파이아케스 왕국 표류'
    ],
    iconicLines: [
      {
        greek: 'ἤματα δ\' ἐν πέτρῃσι καὶ ἠϊόνεσσι καθίζων / δάκρυσι καὶ στοναχῇσι καὶ ἄλγεσι θυμὸν ἐρέχθων',
        transliteration: 'ēmata d\' en petrēsi kai ēïonessi kathizōn / dakrysi kai stonachēsi kai algesi thymon erechthōn',
        korean: '그는 바윗가와 해변에 앉아 눈물과 탄식과 고통으로 마음을 찢으며 끊임없이 바다를 바라보며 눈물지었노라!'
      }
    ],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 9,
    epic: 'odyssey',
    titleKo: '오뒷세이아 9권: 퀴클롭스와 "아무도 아닌 자"',
    titleGreek: 'Ὀδύσσεια ι: Ἀλκίνου ἀπόλογοι. Κυκλώπεια',
    summary: '오뒷세우스가 파이아케스 왕국에서 자신의 방랑을 회상한다. 식인 거인 퀴클롭스 폴뤼페모스의 동굴에 갇혔을 때 자신을 "아무도 아닌 자(Outis)"라 칭하고 눈을 찔러 탈출한 가장 유명한 꾀(Metis) 이야기.',
    keyEvents: [
      '로토스 먹는 자들의 땅 방문',
      '폴뤼페모스의 동굴 갇힘과 친구들의 희생',
      '"아무도 아닌 자(Outis)" 거짓 이름 지혜',
      '퀴클롭스 눈 지르기와 양 배 아래 붙어 탈출',
      '오뒷세우스의 오만(Hubris)과 포세이돈의 저주'
    ],
    iconicLines: [
      {
        greek: 'Οὖτις ἐμοί γ\' ὄνομα· Οὖτιν δέ με κικλήσκουσι',
        transliteration: 'Outis emoi g\' onoma; Outin de me kiklēskousi',
        korean: '내 이름은 "아무도 아닌 자(Outis)"요. 어머니와 아버지, 나의 모든 동료들이 나를 "아무도 아닌 자"라 부르오!'
      }
    ],
    keyCharacters: ['odysseus', 'athena']
  },
  {
    bookNumber: 10,
    epic: 'odyssey',
    titleKo: '오뒷세이아 10권: 키르케의 섬과 돼지로 변한 선원들',
    titleGreek: 'Ὀδύσσεια κ: Τὰ περὶ Αἴολον καὶ Λαιστρυγόνας καὶ Κίρκην',
    summary: '바람의 신 아이올로스의 주머니 실패와 식인 거인 라이스트뤼고네스족의 공격으로 배 1척만 남은 오뒷세우스. 키르케의 섬에서 선원들이 돼지로 변하지만 몰리(Moly) 풀의 지혜로 극복함.',
    keyEvents: [
      '아이올로스 바람 주머니와 선원들의 시기심',
      '키르케의 마법 마개와 선원들의 돼지 변신',
      '헤르메스가 준 마법 방어 약초 몰리(Moly) 복용',
      '저승 방문(Nekyia) 지시를 받는 오뒷세우스'
    ],
    iconicLines: [
      {
        greek: 'μῶλυ δέ μιν καλέουσι θεοί· χαλεπὸν δέ τ\' ὀρύσσειν / ἀνδράσι γε θνητοῖσι, θεοὶ δέ τε πάντα δύνανται',
        transliteration: 'mōly de min kaleousi theoi; chalepon de t\' oryssein / andrasi ge thnētoisi, theoi de te panta dynantai',
        korean: '신들은 그 약초를 "몰리(Moly)"라 부르니, 죽을 운명의 인간이 캐내기엔 어려우나 신들은 모든 것을 할 수 있느니라!'
      }
    ],
    keyCharacters: ['odysseus', 'circe']
  },
  {
    bookNumber: 11,
    epic: 'odyssey',
    titleKo: '오뒷세이아 11권: 저승 방문 (Nekyia)',
    titleGreek: 'Ὀδύσσεια λ: Νέκυια',
    summary: '오뒷세우스가 귀환 예언을 듣기 위해 세상 끝 오케아노스 저승으로 내려간다. 예언자 테이레시아스, 어머니 안티클레이아, 전우 아킬레우스, 아가멤논의 영혼을 만나 삶과 죽음의 본질을 깨닫는다.',
    keyEvents: [
      '저승 피 희생 의례와 영혼들의 소환',
      '테이레시아스의 귀환 예언과 포세이돈 달래기',
      '어머니 안티클레이아와의 비극적 포옹 시도',
      '아킬레우스의 명언: "저승의 왕보다 지상의 가난한 농부가 낫다"'
    ],
    iconicLines: [
      {
        greek: 'βουλοίμην κ\' ἐπάρουρος ἐὼν θητευέμεν ἄλλῳ... ἢ πᾶσιν νεκύεσσι καταφθιμένοισιν ἀνάσσειν',
        transliteration: 'bouloimēn k\' eparouros eōn thēteuemen allō... ē pasin nekyessi kataphthimenoisin anassein',
        korean: '차라리 지상에서 타인의 머슴이 되어 가난하게 살지언정, 죽은 자들 모두를 통치하는 저승의 왕이 되지는 않겠소!'
      }
    ],
    keyCharacters: ['odysseus', 'achilles', 'agamemnon']
  },
  {
    bookNumber: 21,
    epic: 'odyssey',
    titleKo: '오뒷세이아 21권: 활 쏘기 시험과 변장 해제',
    titleGreek: 'Ὀδύσσεια φ: Τόξου θέσις',
    summary: '페넬로페가 오뒷세우스의 강철 활을 꺼내어 12개의 도끼 자루 구멍을 통과시키는 자에게 시집가겠다고 선언한다. 그 어떤 구혼자도 활시위를 얹지 못하지만, 거지로 변장한 오뒷세우스가 가볍게 활을 쏜다.',
    keyEvents: [
      '페넬로페의 12개 도끼 구멍 활 쏘기 시험 선언',
      '구혼자들의 잇따른 실패와 비웃음',
      '거지 변장 오뒷세우스의 활 쥐기 및 거문고처럼 시위 시위 매기',
      '도끼 구멍 12개를 일직선으로 통과하는 화살'
    ],
    iconicLines: [
      {
        greek: 'ὡς ὅτ\' ἀνὴρ φόρμιγγος ἐπιστάμενος καὶ ἀοιδῆς / ῥηϊδίως ἐτάνυσσε νέῳ περὶ κόλλοπι χορδήν',
        transliteration: 'hōs hot\' anēr phormingos epistamenos kai aoidēs / rhēïdiōs etanysse neō peri kollopi chordēn',
        korean: '수금과 가창에 능숙한 가수가 새 줄을 팽팽하게 쉽게 매듯, 오뒷세우스는 아무런 힘도 들이지 않고 거대한 활시위를 당겼도다!'
      }
    ],
    keyCharacters: ['odysseus', 'penelope', 'telemachus']
  },
  {
    bookNumber: 23,
    epic: 'odyssey',
    titleKo: '오뒷세이아 23권: 침대의 비밀과 재회',
    titleGreek: 'Ὀδύσσεια ψ: Ὀδυσσέως ὑπὸ Πηνελόπης ἀναγνωρισμός',
    summary: '구혼자들을 소탕한 오뒷세우스. 현명한 페넬로페는 살아있는 올리브 나무 뿌리로 만든 그들만의 침대 비밀을 통해 진짜 오뒷세우스임을 확인하고 20년 만에 눈물의 재회를 한다.',
    keyEvents: [
      '구혼자 소탕 후 페넬로페의 조심스러운 시험',
      '올리브 나무 뿌리로 새긴 침대의 움직일 수 없는 비밀',
      '오뒷세우스와 페넬로페의 20년 만의 눈물 재회',
      '신들이 밤을 길게 늘려 두 사람의 이야기를 경청하게 함'
    ],
    iconicLines: [
      {
        greek: 'ὤ ποπαὶ ἦ μάλα δή σε θεοὶ Ὀλύμπια δώματ\' ἔχοντες / ἔσσοσαν',
        transliteration: 'ō popai ē mala dē se theoi Olympia dōmat\' echontes / essosan',
        korean: '아! 올림포스의 신들께서 진정 당신에게 그 누구보다 굳건한 마음을 주셨구려!'
      }
    ],
    keyCharacters: ['odysseus', 'penelope', 'athena']
  }
];
