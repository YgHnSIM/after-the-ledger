import { ClaimRecord } from '../types';

export const CLAIMS: ClaimRecord[] = [
  {
    id: 'claim-accounting-first',
    claimTitle: '회계 우선론',
    claimSentence: '고대 문자는 경제 및 재산 관리를 위한 회계 필요성에서 비롯되었으며, 문학·종교 기록은 수백 년 후 확장되었다.',
    claimType: 'inference',
    status: 'debated',
    statusLabel: '논쟁 중 (수정 필요)',
    civilization: 'mesopotamia',
    supportingEvidence: [
      '우루크 IV기 출토 점토판 약 5,000여 점의 85% 이상이 수량, 배급, 재산 관리를 다루는 행정 장부임',
      '물꼬(Bulla)와 수량 토큰(Token)이 상형 쐐기문자로 발현된 연속적 고고학 증거'
    ],
    counterEvidence: [
      '어휘목록(ED Lu A 등)이 후기 우루크 IV-III 행정 점토판과 동일한 층위에서 동시 출현함 (DCCLT 데이터)',
      '이집트 아비도스 U-j 묘 상아 표찰은 순수한 회계뿐 아니라 왕권 표상 및 제의적 지역 명명이 중첩되어 나타남'
    ],
    alternativeExplanations: [
      '문자는 단순한 수량 계산 도구가 아니라 관료제의 자격, 관직의 분류, 세계를 범주화하는 사물 분류체계(Taxonomy)와 일체로 출현함'
    ],
    keyResearchers: ['Niek Veldhuis (DCCLT)', 'Hans Nissen', 'Robert Englund', 'Günter Dreyer'],
    primarySources: ['Uruk IV-III Tablets', 'ED Lu A Professions List', 'Abydos Tomb U-j Labels'],
    lastReviewed: '2026-08-12'
  },
  {
    id: 'claim-greek-homer-alphabet',
    claimTitle: '호메로스 알파벳 창안설',
    claimSentence: '그리스 알파벳은 호메로스의 웅대한 서사시 《일리아스》와 《오디세이아》를 기록하기 위해 특별히 고안되었다.',
    claimType: 'hypothesis',
    status: 'debated',
    statusLabel: '논쟁 중 (소수 가설)',
    civilization: 'greece',
    supportingEvidence: [
      '가장 이른 그리스 알파벳 비문(디필론 비문, 네스토르의 잔)이 모두 서사시 운률(Dactylic Hexameter)과 관련됨',
      '페니키아 자음 전용 아브자드에 모음 부호를 추가한 발명이 운율 가창의 표기에 적합함 (Wade-Gery, Powell 가설)'
    ],
    counterEvidence: [
      '메토네(Methone) 및 에레트리아(Eretria) 발굴로 BCE 8세기 중반 상인과 선원들의 일상적 소유 표시, 짧은 낙서, 수량 비문 190여 점 출토',
      '단 하나의 서사시를 위해 복잡한 교역망 전체에 문자 체계가 동시에 유포되었다고 보기 어려움'
    ],
    alternativeExplanations: [
      '지중해 교역 항구(피테쿠사이, 메토네, 알-미나)에서 지중해 상인 간의 실용 통신, 식사 향연, 시적 유희가 통합되어 창안·유지됨'
    ],
    keyResearchers: ['H.T. Wade-Gery', 'Barry B. Powell', 'John K. Papadopoulos', 'M.B. Cosby'],
    primarySources: ['Dipylon Amphora (c. 740 BCE)', 'Nestor\'s Cup (c. 725 BCE)', 'Methone Inscriptions'],
    lastReviewed: '2026-08-12'
  },
  {
    id: 'claim-ketef-hinnom-bible',
    claimTitle: '케테프 힌놈 = 최초의 완전한 성서 사본설',
    claimSentence: '케테프 힌놈의 은제 두루마리는 구약 성서가 기원전 7세기에 이미 현재의 형태로 존재했음을 입증하는 최초의 성서 사본이다.',
    claimType: 'inference',
    status: 'unknown',
    statusLabel: '알 수 없음 (오해 경계)',
    civilization: 'israel-judah',
    supportingEvidence: [
      '은제 두루마리에 민수기 6장 24-26절의 제사장 축복문과 일치하는 고대 히브리 비문 구절 포함'
    ],
    counterEvidence: [
      '은제 두루마리는 성서 전체 책이 아니라 개인 사제적 제의 및 보건을 위한 소형 은제 주술 부적(Amulet)임',
      '단일 제사장 구절의 존재가 오경(Torah)이나 역사서 전체의 문헌적 완성 및 정경화를 증명하지는 않음'
    ],
    alternativeExplanations: [
      '성서 문헌 구절은 바빌론 포로기 이전 구전 및 제의문 형태로 이미 사용되었으나, 이를 성서 전집의 사본으로 동의어 처리해서는 안 됨'
    ],
    keyResearchers: ['Gabriel Barkay', 'Ada Yardeni', 'Waaler Erik', 'Karel van der Toorn'],
    primarySources: ['Ketef Hinnom Silver Scrolls KH1 & KH2 (c. 600 BCE)'],
    lastReviewed: '2026-08-12'
  },
  {
    id: 'claim-linear-b-widespread-literacy',
    claimTitle: 'Linear B 보편 문해력설',
    claimSentence: '미케네 문명에서는 Linear B 문자가 일반 주민과 농민층 사이에서도 널리 읽히고 쓰였다.',
    claimType: 'fact',
    status: 'debated',
    statusLabel: '논쟁 중 (반박됨 / 폐기)',
    civilization: 'greece',
    supportingEvidence: [
      '궁전 외 일부 지방 관저 파편에서도 수량 기호가 출토됨'
    ],
    counterEvidence: [
      '출토된 모든 Linear B 점토판은 전적으로 궁전 아카이브 룸 내부에서만 발견됨',
      '비석, 동전, 개인 편지, 묘비 비문, 문학적 흔적이 단 한 건도 출토되지 않음',
      'BCE 1200년 궁전 행정 붕괴 시 Linear B 문해력이 흔적도 없이 전면 소멸함'
    ],
    alternativeExplanations: [
      'Linear B는 궁전 아카이브 룸에 고용된 30여 명 미만의 전문 관료 서기관들만의 극소수 폐쇄적 장부 기술이었음'
    ],
    keyResearchers: ['Michael Ventris', 'John Chadwick', 'Thomas G. Palaima'],
    primarySources: ['Pylos Archives Tablets', 'Knossos Armor Tablets'],
    lastReviewed: '2026-08-12'
  },
  {
    id: 'claim-pyramid-texts-single-book',
    claimTitle: '피라미드 텍스트 = 경전 정본설',
    claimSentence: '사카라의 피라미드 텍스트는 호메로스나 성서처럼 처음부터 하나의 완결된 경전 책(Book)으로 기획되어 새겨졌다.',
    claimType: 'fact',
    status: 'sure',
    statusLabel: '확실 (반박 확립)',
    civilization: 'egypt',
    supportingEvidence: [
      '우나스 왕 매장실에 228개의 주문이 통일된 서체와 청동/청록색 도료로 각문됨'
    ],
    counterEvidence: [
      '피라미드 텍스트는 왕마다 수록된 주문의 조합, 위치, 개수가 크게 다름 (테티, 페피 1세, 메렌레 1세 등)',
      '단일 저자나 정본 경전이 아니라 ancient oral ritual spells (고대 구전 제의 주문들)의 현장 선택적 집성체임'
    ],
    alternativeExplanations: [
      '왕의 영혼 승천을 돕기 위해 사제들이 각 무덤 매장실 구조에 맞게 구성한 부적적 의례 공간 장치'
    ],
    keyResearchers: ['Kurt Sethe', 'James P. Allen', 'Harold M. Hays'],
    primarySources: ['Saqqara Pyramid of Unas', 'Pyramid of Pepi I'],
    lastReviewed: '2026-08-12'
  },
  {
    id: 'claim-ugarit-script-determinism',
    claimTitle: '문자 결정론 (Alphabet Script Determinism)',
    claimSentence: '알파벳 문자 구조는 쉽고 간단하므로 도입되기만 하면 자동으로 문학 발전과 대중 문해력을 촉진한다.',
    claimType: 'hypothesis',
    status: 'debated',
    statusLabel: '논쟁 중 (우가리트 통제 사례로 반박)',
    civilization: 'ugarit',
    supportingEvidence: [
      '우가리트 30개 자음 알파벳 점토판에서 대서사시 바알 신화가 출현함'
    ],
    counterEvidence: [
      '우가리트는 동일한 점토판에서 알파벳(현지어/서사)과 아카드 음절 쐐기문자(외교)를 수백 년간 엄격히 병행함',
      '알파벳 도입 자체가 자동으로 기존 외교·행정 문자를 대체하지 않으며, 제도의 요구와 목적이 더 결정적임'
    ],
    alternativeExplanations: [
      '문자의 구조적 용이성보다 문자를 둘러싼 국가 간 외교 관계, 서기관 전통, 제도가 문자의 쓰임새를 지배함'
    ],
    keyResearchers: ['Silvia Ferrara', 'Philippa M. Steele', 'Dennis Pardee'],
    primarySources: ['Ugarit Baal Cycle (KTU 1.1-1.6)', 'Ugarit Multilingual Lexical Lists'],
    lastReviewed: '2026-08-12'
  }
];
