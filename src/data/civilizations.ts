import { CivilizationInfo } from '../types';

export const CIVILIZATIONS: Record<string, CivilizationInfo> = {
  mesopotamia: {
    id: 'mesopotamia',
    nameKo: '메소포타미아',
    nameEn: 'Mesopotamia',
    accentColor: '#c85a24',
    colorClass: 'civ-mesopotamia',
    scriptEmergenceBCE: 3300,
    scriptName: '쐐기문자 (Cuneiform)',
    primaryMedia: '점토판 (Clay Tablets)',
    oneSentenceSummary: '회계문서와 사물·직업 어휘목록이 동시 출현하여 수천 년 서기관 교육과 관료적 지식 분류체계로 발전함',
    keyQuestion: '왜 회계와 사물 분류는 같은 서기관 환경에서 함께 등장하였는가?',
    differentiator: '점토라는 불멸의 매체와 회계-어휘목록의 동시 결합',
    stages: [
      { stage: 1, title: '문자 출현·도입', description: '물꼬표(token)와 봉인(bulla)에서 후기 우루크 IV 계수용 상형 쐐기문자로 이행 (c. 3300 BCE)', bcePeriod: 'c. 3300 BCE' },
      { stage: 2, title: '일상적 행정 사용', description: '곡물, 가축, 노동 분배를 기록하는 우루크 III-IV 행정 점토판 대량 제작 (c. 3100 BCE)', bcePeriod: 'c. 3100 BCE' },
      { stage: 3, title: '비경제적 기록 확대', description: 'ED Lu A(직업목록), 동물·사물 어휘목록(DCCLT) 및 왕실 전승 기록 (c. 2700 BCE)', bcePeriod: 'c. 2700 BCE' },
      { stage: 4, title: '장문·대규모 문헌', description: '아부 살라비크·파라 신화 및 찬가, 엔헤두안나 신전 찬가, 길가메시 서사시 원형 (c. 2400-2100 BCE)', bcePeriod: 'c. 2300 BCE' },
      { stage: 5, title: '복제·교육·정전화', description: '우르 제3왕조와 신바빌로니아 서기관 학교(에두바)의 텍스트 복제 및 표준 어휘목록 전승', bcePeriod: 'c. 1800 BCE 이후' },
    ],
    overviewNarrative: `메소포타미아 문자의 발생에 대한 전통적 통념은 "오직 경제 장부로 시작해 수백 년 뒤에야 비로소 문학이나 종교 기록으로 확장되었다"는 것이다. 그러나 Digital Corpus of Cuneiform Lexical Texts (DCCLT)와 후기 우루크 점토판 분석은 회계 문서와 어휘목록(Lexical Lists)이 사실상 동일한 서기관 환경에서 함께 출현했음을 증명한다.

직업목록(ED Lu A)과 사물 분류 목록은 순수한 재산 기록을 넘어 세계를 분류하고 관료제를 구조화하는 최초의 지적 기획이었다. 점토라는 물리적 매체는 화재를 통해 굳어짐으로써 인류 역사상 가장 정밀한 행정 및 교육 아카이브를 오늘날까지 남겨주었다.`,
    keyDiscoveries: [
      '우루크 IV기 행정 점토판 5,000 여 점 출토 (CDLI)',
      'ED Lu A (Standard Professions List): 129개 직위 계급 분류',
      '엔헤두안나(Enheduanna) 서명이 남은 최초의 인명 저술 신전 찬가 (c. 2300 BCE)',
      'DCCLT 데이터베이스에 기록된 2천 년간 지속된 어휘목록 복제 전통'
    ]
  },
  egypt: {
    id: 'egypt',
    nameKo: '이집트',
    nameEn: 'Egypt',
    accentColor: '#107e84',
    colorClass: 'civ-egypt',
    scriptEmergenceBCE: 3250,
    scriptName: '성각문자(Hieroglyphs) & 신관문자(Hieratic)',
    primaryMedia: '석회암 벽면 & 파피루스 (Papyrus)',
    oneSentenceSummary: '왕권 표상, 소유 상징, 장례 제의의 효력이 결합한 문자로, 석비의 공개성과 피라미드 무덤 내부의 비공개성이 대비됨',
    keyQuestion: '왕의 무덤 깊은 곳에 칠해진 상형문자는 누구를 향한 기록인가?',
    differentiator: '돌에 새겨진 영원성의 호르몬과 파피루스의 이중 매체 구조',
    stages: [
      { stage: 1, title: '문자 출현·도입', description: '아비도스 U-j 무덤 뼈·상아 표찰에서 왕실 물품 세입 및 지역 표상 기록 (c. 3250 BCE)', bcePeriod: 'c. 3250 BCE' },
      { stage: 2, title: '일상적 행정 사용', description: '왕국 통합과 1-2왕조 세금 징수, 공희 의례, 파피루스 행정 문서 시작 (c. 2900 BCE)', bcePeriod: 'c. 2900 BCE' },
      { stage: 3, title: '비경제적 기록 확대', description: '사카라 고왕국 제5-6왕조 왕의 무덤 내부 매장실 피라미드 텍스트 刻文 (c. 2350 BCE)', bcePeriod: 'c. 2350 BCE' },
      { stage: 4, title: '장문·대규모 문헌', description: '중왕국 사스누헤 이야기, 엘로퀀트 피전트, 관 텍스트(Coffin Texts) 확산 (c. 2000 BCE)', bcePeriod: 'c. 2000 BCE' },
      { stage: 5, title: '복제·교육·정전화', description: '신왕국 사자의 서(Book of the Dead) 파피루스 맞춤 생산 및 장례 대중화 (c. 1550 BCE)', bcePeriod: 'c. 1550 BCE 이후' },
    ],
    overviewNarrative: `초기 이집트 성각문자(Hieroglyphs)는 단순한 행정 회계용 도구가 아니라, 왕의 주권 표상, 지리적 원산지 표시, 제의적 명명 의례가 복합적으로 얽혀 탄생했다.

우나스(Unas) 피라미드 매장실 벽면에 새겨진 피라미드 텍스트는 일반 대중의 읽기를 위한 것이 아니었다. 말(Word)과 문자(Script) 자체가 물리적 파동과 매개체로서 파라오의 영생과 신격화를 보증하는 제의적 상징이었다. 이후 고왕국의 피라미드 텍스트는 중왕국 귀족의 관 텍스트(Coffin Texts)를 거쳐 신왕국 대중용 파피루스 사자의 서(Book of the Dead)로 전승·변용된다.`,
    keyDiscoveries: [
      '아비도스 U-j 묘 출토 상아 표찰 (세금 및 세입 지역 표상)',
      '우나스 피라미드 매장실 피라미드 텍스트 228개 주문 (c. 2350 BCE)',
      '와디 알-자르프 파피루스 아카이브 (대피라미드 건설 행정 일지)',
      '중왕국 사노에 이야기 및 지혜 문학 전승 파피루스'
    ]
  },
  greece: {
    id: 'greece',
    nameKo: '그리스',
    nameEn: 'Greece',
    accentColor: '#1e40af',
    colorClass: 'civ-greece',
    scriptEmergenceBCE: 1400,
    scriptName: 'Linear B (선문자 B) → 그리스 알파벳',
    primaryMedia: '점토판 (궁전 단기용) & 도기·석재·파피루스',
    oneSentenceSummary: '미케네 궁전 행정 붕괴 후 백년의 문자 공백기를 거쳐, 음성학적 알파벳으로 시·유희·개인 기록이 극적으로 반등함',
    keyQuestion: '그리스 알파벳은 호메로스의 서사시를 기록하기 위해 창안되었는가?',
    differentiator: '문자체계 붕괴 후 재출현이라는 유일무이한 이중 문자 역사',
    stages: [
      { stage: 1, title: '문자 출현·도입 (Linear B)', description: '크레타 음절 문자 영향으로 미케네 그리스어 기록용 Linear B 등장 (c. 1400 BCE)', bcePeriod: 'c. 1400 BCE' },
      { stage: 2, title: '일상적 행정 사용 (Linear B)', description: '크노소스·필로스 궁전 아카이브의 올리브, 기름, 노예, 청동 관제 장부 (c. 1200 BCE)', bcePeriod: 'c. 1250 BCE' },
      { stage: 3, title: '문자 붕괴와 암흑기', description: '궁전 체제 붕괴로 Linear B 전면 소멸. 약 400년간 문자 없는 구전 사회 지속', bcePeriod: 'c. 1200-800 BCE' },
      { stage: 4, title: '알파벳 도입과 급속 확산', description: '페니키아 아브자드 수용 및 모음 부호 추가. 메토네, 에레트리아, 디필론 유희 비문 (c. 775-740 BCE)', bcePeriod: 'c. 775 BCE' },
      { stage: 5, title: '장문·대규모 문헌 및 정전', description: '호메로스 서사시 문자화, 아테네 비극·철학·시민 법률 비문 대량 생산 (c. 600 BCE 이후)', bcePeriod: 'c. 650 BCE 이후' },
    ],
    overviewNarrative: `그리스 문자 역사는 문명사에서 매우 희귀한 "문자의 완전한 붕괴와 재창조"라는 이중 구조를 가진다.

청동기 시대 미케네 문명의 Linear B는 오직 궁전 서기관들만의 비공개 회계 장부였으며, BCE 1200년 궁전 붕괴와 함께 완전히 사멸했다. 그러나 BCE 8세기경 페니키아 자음 문자를 도입하여 모음을 덧붙인 그리스 알파벳은 사뭇 다른 양상으로 퍼졌다. 디필론 비문과 네스토르의 잔처럼 초기 알파벳 유물은 장부나 세금 기록이 아니라 시, 노래, 술자리 유희, 개인 소유 표시로 출현했다.`,
    keyDiscoveries: [
      '필로스 및 크노소스 궁전 Linear B 점토판 (마이클 카트리스 해독)',
      '디필론 암포라 비문 (c. 740 BCE) — "가장 흥겁게 춤추는 자에게"',
      '피테쿠사이 네스토르의 잔 (c. 725 BCE) — 아프로디테의 욕망을 노래하는 3행시',
      '메토네·에레트리아 초기 알파벳 도기 파편 비문'
    ]
  },
  'israel-judah': {
    id: 'israel-judah',
    nameKo: '이스라엘·유다',
    nameEn: 'Israel & Judah',
    accentColor: '#6b21a8',
    colorClass: 'civ-israel-judah',
    scriptEmergenceBCE: 950,
    scriptName: '고대 히브리 문자 (Paleo-Hebrew) & 아람 문자',
    primaryMedia: '파피루스, 가죽 두루마리, 도토기 파편 (Ostraca), 은판',
    oneSentenceSummary: '사본 생산 연대, 편집 연대, 구전 연대, 사건 연대의 4중 구조 속에, 텍스트의 유연성과 정경화 과정이 공존함',
    keyQuestion: '사해문서는 오늘날의 성서 원본이라 부를 수 있는가?',
    differentiator: '4가지 연대 벡터(사공편집)와 폐쇄되지 않은 구전-문헌 전승',
    stages: [
      { stage: 1, title: '문자 출현·도입', description: '가나안 알파벳 전통에서 원시 히브리/서북 세무 문자 분화 및 게제르 달력 (c. 950 BCE)', bcePeriod: 'c. 950 BCE' },
      { stage: 2, title: '일상적 행정 사용', description: '사마리아 오스트라카, 라기스 편지, 군사 및 요새 행정 비문 (c. 800-600 BCE)', bcePeriod: 'c. 800 BCE' },
      { stage: 3, title: '비경제적 기록 확대', description: '실로암 터널 비문, 케테프 힌놈 은제 두루마리 제사장 축복문 (c. 700-587 BCE)', bcePeriod: 'c. 700 BCE' },
      { stage: 4, title: '바빌론 포로기와 편집', description: '성전 파괴 후 신명기 사학, 오경 편집 및 예언서 문헌화 집중 진행 (c. 587-400 BCE)', bcePeriod: 'c. 587 BCE' },
      { stage: 5, title: '사본 전승과 복수 정경', description: '쿰란 사해문서(230여 성서 사본) 출현 및 히브리 성서 정경화 완성 (c. 250 BCE - 68 CE)', bcePeriod: 'c. 250 BCE 이후' },
    ],
    overviewNarrative: `히브리 성서 문헌 연구에서 가장 흔한 오류는 현존하는 성서 사본을 사건이 일어난 시대나 성립된 시대와 동일시하는 것이다. 학술 연구는 (1) 사건 연대, (2) 구전·구성 연대, (3) 편집 연대, (4) 현존 사본 제작 연대를 엄격히 분리한다.

케테프 힌놈의 은제 두루마리(c. 600 BCE)는 고대 히브리 문자로 새겨진 가장 이른 성서적 구절(민수기 축복문)을 보여주지만 "성서 전체의 현존 사본"이 아니다. 쿰란에서 발견된 230여 점의 사해문서 사본들은 당시 유다 사회가 단 하나의 고정된 "원본"이 아니라 여러 텍스트 이본(Textual Variants)과 유연한 정경 전승을 가지고 있었음을 입증한다.`,
    keyDiscoveries: [
      '게제르 달력 (Gezer Calendar, c. 925 BCE)',
      '실로암 터널 비문 (Siloam Inscription, c. 701 BCE)',
      '케테프 힌놈 은제 부적 두루마리 2점 (c. 600 BCE)',
      '쿰란 동굴 사해문서 900여 두루마리 (성서 사본 230여 점)'
    ]
  },
  ugarit: {
    id: 'ugarit',
    nameKo: '우가리트 (통제 사례)',
    nameEn: 'Ugarit (Control Case)',
    accentColor: '#d97706',
    colorClass: 'civ-ugarit',
    scriptEmergenceBCE: 1400,
    scriptName: '우가리트 알파벳 쐐기문자 & 아카드 음절 쐐기문자',
    primaryMedia: '점토판 (Clay Tablets)',
    oneSentenceSummary: '동일한 점토 매체에서 알파벳 쐐기문자(현지어/서사)와 음절 쐐기문자(국제 외교)가 명확한 기능 분업을 이룬 연구 통제 사례',
    keyQuestion: '장르와 문해력을 결정하는 것은 문자 구조인가, 언어와 외교 제도인가?',
    differentiator: '매체 동일성 속에서 문자의 기능적 분업을 보여주는 대조군',
    stages: [
      { stage: 1, title: '문자 출현·도입', description: '30개 쐐기 모양 부호로 구성된 고유 알파벳 쐐기문자 발명 (c. 1400 BCE)', bcePeriod: 'c. 1400 BCE' },
      { stage: 2, title: '일상적 행정 및 외교', description: '우가리트어로 현지 행정·시 기록, 아카드 음절문자로 이집트·히타이트 외교 점토판 작성', bcePeriod: 'c. 1350 BCE' },
      { stage: 3, title: '장문 문학·신의 종교 서사', description: '바알 서사시(Baal Cycle), 카르타 서사시, 아크하트 이야기 점토판 刻文', bcePeriod: 'c. 1300 BCE' },
      { stage: 4, title: '해양 민족 침입과 멸망', description: 'BCE 1185년경 도시 파괴와 함께 점토판 아카이브가 불에 타며 완벽 보존됨', bcePeriod: 'c. 1185 BCE' },
      { stage: 5, title: '현대 고고학 발굴', description: '1929년 라스 샤므라 발굴로 레반트 종교와 성서 문학의 비교 연구 일대 혁신', bcePeriod: '1929 CE 발굴' },
    ],
    overviewNarrative: `우가리트(Ras Shamra)는 이 연구의 결론을 검증하는 매우 뛰어난 통제 사례(Control Case)이다.

우가리트 사람들은 점토판이라는 단 하나의 매체 위에서 두 가지 문자체계를 동시에 사용했다. (1) 30개 기호로 이루어진 알파벳 쐐기문자는 우가리트 현지어 문학, 종교 서사(바알 서사시), 징집 장부에 사용된 반면, (2) 복잡한 아카드어 표어·음절 쐐기문자는 국제 외교와 수입 문서에 사용되었다. 이는 특정 텍스트 장르를 결정짓는 것이 단지 문자 부호의 단순함(알파벳 여부)이 아니라, 언어, 외교 네트워크, 서기관 제도의 역할임을 분명히 보여준다.`,
    keyDiscoveries: [
      '바알 서사시 (Baal Cycle) 6개 대형 점토판',
      '우가리트 알파벳 순서(Abagad) 훈련 점토판',
      '우가리트어-아카드어-수메르어-후르리어 4개국어 어휘목록 점토판',
      'BCE 1185년 화마 속에서 구워진 국왕 및 사제 아카이브'
    ]
  },
  china: {
    id: 'china',
    nameKo: '중국 (독립 발명 통제 사례)',
    nameEn: 'China (Shang Dynasty Oracle Bones)',
    accentColor: '#dc2626',
    colorClass: 'civ-china',
    scriptEmergenceBCE: 1250,
    scriptName: '갑골문 (Oracle Bone Script - 契文)',
    primaryMedia: '갑골 (거북 복갑 & 소 어깨뼈)',
    oneSentenceSummary: '신탁 점괘(卜辭)와 조상 제의, 왕권 주권을 우골과 갑각에 칼로 칼각(契刻)한 독립 문자 발명의 대표 사례',
    keyQuestion: '동아시아 독립 문자 발명에서 문자는 누구와의 소통을 위해 출현했는가?',
    differentiator: '청동기 신탁 점괘 및 조상 제의 刻文 중심의 독자적 상형 체계',
    stages: [
      { stage: 1, title: '문자 출현·도입', description: '상나라 제21대 왕 무정(武丁) 대 은허(殷墟)에서 정형화된 갑골문 刻文 (c. 1250 BCE)', bcePeriod: 'c. 1250 BCE' },
      { stage: 2, title: '왕실 신탁 및 제의 기록', description: '날씨, 전쟁, 수확, 조상 제사, 왕비 임신 여부를 점치는 복사(卜辭) 대량 각문', bcePeriod: 'c. 1200 BCE' },
      { stage: 3, title: '청동기 금문(金文) 확장', description: '상-주 교체기 조상 숭배 및 공헌을 칭송하는 청동 례기 비문 刻文 (c. 1046 BCE)', bcePeriod: 'c. 1046 BCE' },
      { stage: 4, title: '서주·춘추전국 서사 확산', description: '죽간(竹簡)과 목독(木牘) 행정 문서 및 《시경》·《서경》 전승 고정', bcePeriod: 'c. 800 BCE' },
      { stage: 5, title: '진시황 소전(小篆) 통일', description: 'BCE 221년 제국 통합과 함께 문자의 국가적 표준화 완성', bcePeriod: 'c. 221 BCE 이후' },
    ],
    overviewNarrative: `중국 은허(殷墟)의 갑골문(Oracle Bone Script)은 지중해나 메소포타미아의 영향 없이 동아시아에서 독자적으로 발명된 문자 체계이다.

갑골문은 주로 거북 배껍질(복갑)이나 소 어깨뼈(견갑골)에 열을 가해 갈라지는 틈을 보고 신의 뜻을 해석한 뒤, 그 신탁 결과(卜辭)를 청동 칼로 새겨 넣은 기록이다. 이는 문자가 단순한 인간 상인 간의 경제 장부를 넘어, 국왕이 신 및 조상과 소통하며 자신의 정치적 통치 정당성을 보증받는 지고의 제의 도구였음을 보여준다.`,
    keyDiscoveries: [
      '안양 은허 출토 15만 여 점의 갑골 파편 (약 4,500여 자)',
      '무정(武丁) 왕대 정인(貞人) 서관 아카이브',
      '왕순 징집 및 농경 기후 신탁 복사(卜辭)',
      '갑골문 ➔ 금문(金文) ➔ 죽간 ➔ 소전(小篆)으로 이어진 한자 한자학(Sinology) 전승'
    ]
  }
};
