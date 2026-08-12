export interface DialectComparison {
  id: string;
  phraseConcept: string;
  mycenaeanLinearB: string;
  homericGreek: string;
  archaicClassicalAttic: string;
  hellenisticKoine: string;
  koreanTranslation: string;
  grammaticalNotes: string;
}

export const GREEK_DIALECT_EXAMPLES: DialectComparison[] = [
  {
    id: 'phrase-1',
    phraseConcept: '왕 / 통치자',
    mycenaeanLinearB: 'wa-na-ka (𐀷𐀙𐀏)',
    homericGreek: 'ἄναξ (ánax) / βασιλεύς',
    archaicClassicalAttic: 'βασιλεύς (basileús) / ἄρχων',
    hellenisticKoine: 'βασιλεύς (basileús)',
    koreanTranslation: '주군 / 왕 / 통치자',
    grammaticalNotes: 'Linear B의 wa-na-ka(Wanax)는 궁전의 최고 통치자를 의미했으나, 고전 시대에는 신이나 고대 영웅의 칭호로 격상되고 basileus가 일반 왕을 가리킴.'
  },
  {
    id: 'phrase-2',
    phraseConcept: '말하다 / 노래하다',
    mycenaeanLinearB: 'e-re-u-te-ro (의례/말 표기 기호)',
    homericGreek: 'ἀείδω (aeídō) / μυθέομαι',
    archaicClassicalAttic: 'ᾄδω (ā́idō) / λέγω (légō)',
    hellenisticKoine: 'λαλέω (laléō) / λέγω (légō)',
    koreanTranslation: '노래하다 / 말하다 / 선포하다',
    grammaticalNotes: '호메로스 서사시 시작 단어 "μῆνιν ἄειδε θεά"(여신이여 분노를 노래하소서)의 aeidō가 고전 아티카어에서 축약형 āidō로 변함.'
  },
  {
    id: 'phrase-3',
    phraseConcept: '시민 / 공동체',
    mycenaeanLinearB: 'da-mo (𐀅 vibrates/주민 단락)',
    homericGreek: 'δῆμος (dêmos)',
    archaicClassicalAttic: 'δῆμος (dêmos - 아테네 민회)',
    hellenisticKoine: 'δῆμος (dêmos - 도시 구역)',
    koreanTranslation: '민중 / 행정 구역 / 데모스',
    grammaticalNotes: 'Linear B da-mo는 궁전 외곽 토지 보유 주민 집단을 뜻했으나, 아테네 민주정에서 국가의 주인인 민중(Demos)으로 제도화됨.'
  },
  {
    id: 'phrase-4',
    phraseConcept: '신의 부르심 / 말',
    mycenaeanLinearB: 'te-o (𐀳 Oxide)',
    homericGreek: 'θεός (theós) / ὄσσα',
    archaicClassicalAttic: 'θεός (theós) / λόγος (lógos)',
    hellenisticKoine: 'λόγος (lógos - 요한복음 1:1)',
    koreanTranslation: '신 / 말씀 / 로고스',
    grammaticalNotes: '호메로스의 신적 소리(ossa)가 고전 아티카의 이성적 논리(logos)를 거쳐, 헬레니즘 코이네에서는 창조적 말씀(Logos)으로 변천함.'
  }
];

export const SCRIPT_GENEALOGY = [
  { era: 'c. 1800 BCE', name: '원시 시나이 문자 (Proto-Sinaitic)', type: 'Abjad (자음 상형)', region: '시나이 반도 / 이집트 광산' },
  { era: 'c. 1200 BCE', name: '페니키아 문자 (Phoenician)', type: '22개 자음 Abjad', region: '레반트 지중해 해안' },
  { era: 'c. 800 BCE', name: '고대 그리스 알파벳 (Archaic Greek)', type: '자음 + 모음 Alphabet', region: '에우보이아, 메토네, 아테네' },
  { era: 'c. 700 BCE', name: '에트루리아 / 고 이탈리아 문자', type: 'Old Italic Alphabet', region: '이탈리아 반도' },
  { era: 'c. 600 BCE', name: '라틴 문자 (Latin Alphabet)', type: '로마 알파벳', region: '로마 제국 & 전 유럽' },
  { era: 'c. 400 BCE', name: '고전 아티카 이오니아 알파벳', type: '24자 표준 그리스어', region: '아테네 정전 사본' },
  { era: 'c. 300 BCE', name: '헬레니즘 코이네 (Koine Greek)', type: '보편 그리스어 텍스트', region: '지중해 세계 통용어' }
];
