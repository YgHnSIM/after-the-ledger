import { ScribalInstitution } from '../types';

export const SCRIBAL_INSTITUTIONS: ScribalInstitution[] = [
  {
    id: 'eduba',
    nameKo: '메소포타미아 에두바 (Eduba - 점토판의 집)',
    nameNative: 'e2-dub-ba-a (e₂-dub-ba-a)',
    civilization: 'mesopotamia',
    periodBCE: 'c. 3000 – 1600 BCE',
    primaryLocation: '니푸르(Nippur), 우르(Ur), 시파르(Sippar), 우루크(Uruk)',
    description: '수메르-아카드 서기관을 양성하던 전문 교육 기관. 어휘목록(ED Lu A, Har-ra = hubullu) 복제와 필사 수련을 통해 신전·궁전 관료 정체성을 공유함.',
    curriculum: [
      '기초 쐐기문자 부호 및 수치 단위 습득',
      '직업목록(ED Lu A) 및 사물 분류 어휘목록 필사',
      '도량형 계산, 토지 측량 및 행정 장부 작성법',
      '수메르어 찬가, 법전, 수수께끼 및 신화 전승 복제'
    ],
    keyArtifacts: [
      'ED Lu A (Standard Professions List)',
      '우르-남무 법전 점토판',
      '수메르 서기관 학창시절 수필 (Schooldays)'
    ],
    historicalImpact: '문자를 개인의 전유물이 아닌 국가·신전 관리 시스템으로 표준화하여 2,000년 쐐기문자 문화권의 지식 정전(Canon)을 보존함.'
  },
  {
    id: 'per-ankh',
    nameKo: '이집트 생명의 집 (Per Ankh - House of Life)',
    nameNative: 'Pr-ʿnḫ (Per-Ankh)',
    civilization: 'egypt',
    periodBCE: 'c. 2600 – 30 BCE',
    primaryLocation: '아비도스, 멤피스, 테베, 헬리오폴리스, 아스완 신전 내부',
    description: '주요 신전에 부속된 신성한 학술·종교 기관. 무덤 벽면 각문, 파피루스 장례 주문(사자의 서), 의학, 천문학 문헌을 제작하고 사후 영생 제의를 관리함.',
    curriculum: [
      '성각문자(Hieroglyphic) 정밀 기각 및 신관문자(Hieratic) 속기',
      '피라미드 텍스트 및 관 텍스트 제의적 수용',
      '천문 관측 및 태양력, 의학 파피루스 필사',
      '파라오 신격화 및 사후 영생 심판 가이드북 제작'
    ],
    keyArtifacts: [
      '우나스 피라미드 텍스트',
      '아니의 사자의 서 파피루스 (Papyrus of Ani)',
      '메레르의 행정 일지 파피루스'
    ],
    historicalImpact: '문자를 국가 주권의 영원한 신성함과 영생 제의의 물리적 효력 발생 매체로 결합시킴.'
  },
  {
    id: 'mycenaean-archives',
    nameKo: '미케네 궁전 아카이브 (Mycenaean Palace Archives)',
    nameNative: 'Mycenaean Scribal Bureau (Palace of Nestor)',
    civilization: 'greece',
    periodBCE: 'c. 1400 – 1200 BCE',
    primaryLocation: '필로스, 크노소스, 미케네, 티린스 궁전 내부',
    description: '궁전 내부에 철저히 격리된 30여 명 미만의 전문 기술 서기관 관료 집단. 일반 대중 교유가 아닌 오직 궁전 물관 및 군사 물자 장부만을 작성함.',
    curriculum: [
      'Linear B 87개 음절 부호 및 100여 개 픽토그램 습득',
      '올리브유, 청동, 노예, 가축 수량 관제 장부 작성',
      '햇볕에 말린 임시 점토판 관리 (연례 회계 후 재사용)'
    ],
    keyArtifacts: [
      '필로스 Tn 316 점토판',
      '크노소스 전차/무기 관제 점토판'
    ],
    historicalImpact: '궁전 경제에 철저히 종속된 비공개 문자 체제였기 때문에, BCE 1200년 궁전 붕괴와 함께 그리스 전역에서 문자가 완전 사멸하는 결과를 낳음.'
  },
  {
    id: 'qumran-scriptorium',
    nameKo: '쿰란 에세네 서기관 공방 (Qumran Scriptorium)',
    nameNative: 'Beth Sefer & Scriptorium at Khirbet Qumran',
    civilization: 'israel-judah',
    periodBCE: 'c. 150 BCE – 68 CE',
    primaryLocation: '유다 광야 쿰란 유적 (Khirbet Qumran Main Building Room 30)',
    description: '예루살렘 성전 제사장층의 부패에 반발하여 광야로 철수한 에세네 묵시 공동체 서기관 공방. 사각 히브리 문자로 성서 사본 및 신학 규율 두루마리를 필사함.',
    curriculum: [
      '정결 예식(미크바) 후 양피지 가죽 필사 작업',
      '이사야, 오경, 시편 성서 이본 필사 및 오탈자 정정',
      '공동체 규율서(1QS), 율법 행위 문서(4QMMT), 빛과 어둠의 전쟁 문서 창작',
      '동굴 항아리 밀봉 보존 기술'
    ],
    keyArtifacts: [
      '대 이사야서 두루마리 (1QIsa^a)',
      '쿰란 율법 행위 문서 (4QMMT)',
      '케테프 힌놈 은제 두루마리 전승'
    ],
    historicalImpact: '히브리 성서 사본 전승의 유연성과 정경화 과정, 제국 포위 속에서도 텍스트를 광야에 보존한 묵시적 전승 공동체 모델을 보여줌.'
  },
  {
    id: 'ugarit-diplomatic-workshop',
    nameKo: '우가리트 왕실 외교 공방 (Ugarit Royal Diplomatic Chancery)',
    nameNative: 'Chancery of Ras Shamra',
    civilization: 'ugarit',
    periodBCE: 'c. 1400 – 1185 BCE',
    primaryLocation: '우가리트 라스 샤므라 왕궁 서편 및 대사제 저택',
    description: '30개 자음 알파벳 쐐기문자(현지어/서사)와 국제 음절 쐐기문자(아카드어/외교)를 동시 운용한 이중 기능 서기관 외교 공방.',
    curriculum: [
      '30개 우가리트 알파벳 순서(Abagad) 자음 교육',
      '아카드어 외교 조약, 국왕 신서 필사',
      '우가리트 신화(바알 서사시) 운문 기록',
      '4개국어(수메르-아카드-우가리트-후르리) 대조 어휘목록 학습'
    ],
    keyArtifacts: [
      '우가리트 바알 서사시 점토판',
      '우가리트 알파벳 순서 점토판 (Abecedary)',
      '4개국어 대조 어휘목록 점토판'
    ],
    historicalImpact: '문자의 복잡성 여부가 아니라 외교 관계와 서기관 제도의 역할이 장르를 결정한다는 문자 사회학의 결정적 증거.'
  },
  {
    id: 'yinxu-divination-bureau',
    nameKo: '중국 은허 복사 서관 (Yinxu Divination Bureau)',
    nameNative: '殷墟卜辭貞人集團',
    civilization: 'china',
    periodBCE: 'c. 1250 – 1046 BCE',
    primaryLocation: '중국 허난성 안양 은허(殷墟) 궁전 종묘 구역',
    description: '상나라 국왕을 모시고 거북 배껍질(복갑)과 소 어깨뼈에 열을 가해 신탁을 해석하고 청동 칼로 복사(卜辭)를 칼각(契刻)하던 왕실 직속 신탁 서관 그룹.',
    curriculum: [
      '갑골 표면 기혈(鑽鑿) 천공 작업 및 열가공 조절',
      '상형 및 청동기 도상과 연동된 갑골문 자형 각문',
      '신탁 질문(전조)-답변(점괘)-결과(응험) 3단 복사 구획 작성',
      '조상 제의 제사 목록 및 왕실 신탁 구구(구덩이) 아카이브'
    ],
    keyArtifacts: [
      '은허 무정 왕대 신탁 갑골문 코퍼스 (YH127 아카이브)',
      '정인(貞人) 각(殼) 신탁 복사'
    ],
    historicalImpact: '동아시아 독자적 문자 발명 사례로, 문자가 국왕의 주권과 조상 제의를 승인받는 지고의 제의 도구로 출발했음을 보여줌.'
  }
];
