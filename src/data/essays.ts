import { ComparativeEssay, LargeTextDefinitionMode, PreservationBiasInfo } from '../types';

export const COMPARATIVE_ESSAYS: ComparativeEssay[] = [
  {
    id: 'essay-1-accounting-first',
    order: 1,
    title: '1. 장부가 먼저였는가?',
    subtitle: '회계문서와 어휘목록의 동시 출현이 바꾸는 문자 탄생의 서사',
    summary: '오직 경제 장부로 시작해 문학으로 발전했다는 단순 진화론은 수정되어야 한다. 메소포타미아의 초기 문자 층위에서 사물과 직업 분류 목록은 회계와 함께 출현했다.',
    content: `고대 문자문화를 설명할 때 가장 흔히 반복되는 서사는 "인간은 처음에 양, 곡물, 세금을 세기 위해 문자를 발명했고, 몇백 년이 지나 문자가 세련되어진 뒤에야 비로소 신화와 시를 적기 시작했다"는 이야기다.

그러나 수메르 쐐기문자 데이터베이스(DCCLT)와 후기 우루크 점토판 분석은 이 이야기가 지나치게 단순화되었음을 보여준다. 기원전 3300년경 우루크 IV기 층위에서 출토된 5,000여 점의 점토판 중에는 수량 계산서뿐 아니라 표준 직업목록(ED Lu A)과 동식물·그릇·지역 분류 목록이 동시에 존재했다.

서기관들은 재산을 수량화하는 법과 동시에 세계를 문자로 범주화(Categorization)하는 법을 익혔다. 관료적 행정과 지적 분류체계는 분리된 단계가 아니라 동일한 서기관 아카이브 환경에서 출현한 동전의 양면이었다.`,
    keyTakeaways: [
      '회계 문서와 어휘목록은 후기 우루크기(BCE 3300경) 아카이브에서 동시 출현함',
      '문자 도입은 단순 수량 계산을 넘어 세계를 분류하고 서기관 지위를 규정하는 관료적 지식 기획이었음',
      '이집트 아비도스 U-j 묘지 표찰 역시 소유 세입과 지리적 원산지 표상이 중첩된 형태를 입증함',
      '드니스 슈만트-베세라의 물꼬 토큰설을 넘어 잉글런드·니센의 복합 인지 분류 체계로 파라다임 전환'
    ],
    civilizationsDiscussed: ['mesopotamia', 'egypt'],
    readingTimeMinutes: 6,
    relatedArtifactIds: ['uruk-admin-tablets', 'ed-lu-a-professions', 'abydos-u-j-labels'],
    crossRefEssayIds: ['essay-2-lexical-lists', 'essay-7-preservation-bias', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-1-1',
        order: 1,
        headingKo: '1. ‘장부 기원설’이라는 오래된 고정관념과 그 한계',
        subheadingKo: '단순 경제 결정론이 가려버린 지식 분류의 기원',
        content: `오랫동안 대중 서적과 교과서는 문자의 탄생을 "원시 농경민이 곡물 자루와 가축 수를 세기 위한 필요에서 우연히 기호를 긁적이다가 발전시킨 것"으로 설명해왔다. 이른바 '장부 우선설(Accounting-First Model)'이다. 고고학자 드니스 슈만트-베세라(Denise Schmandt-Besserat)의 연구는 신석기 시대의 찰흙 토큰(Token)과 불라(Bulla)가 점토판 위의 기호로 압인되면서 문자가 되었다는 진화적 연결고리를 제시하며 이 서사를 강화했다.

그러나 21세기 디지털 쐐기문자 라이브러리(CDLI)와 베를린 자유대학의 고대 근동 아카이브 프로젝트 연구자들(Hans Nissen, Peter Damerow, Robert Englund)의 실물 분석은 이 도식을 근본적으로 뒤흔들었다. 우루크 IV기 층위에서 발굴된 가장 이른 원시 쐐기문자(Proto-Cuneiform) 점토판 5,000여 점을 정밀 전수 조사한 결과, 전체 텍스트의 약 10~15%가 경제 장부가 아닌 **고도의 추상적 분류 목록(Lexical Lists)**이었다. 문자는 계산기록으로 태어난 후 나중에 지식체계로 진화한 것이 아니라, 처음부터 회계와 지식 분류라는 두 날개로 동시에 이륙했다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 토큰 진화설 vs 관료적 인지 기획설',
          bodyKo: '드니스 슈만트-베세라는 점토 토큰 ➔ 불라 ➔ 평면 점토판으로 이어지는 단선적 기술 진화를 주장했으나, 로버트 잉글런드와 피터 다메로는 우루크 IV기 문자가 이미 완성된 기호 체계와 관료제 조직의 인지적 필요에 의해 의도적으로 설계된 복합 지식 시스템임을 논증했다.'
        }
      },
      {
        id: 'sec-1-2',
        order: 2,
        headingKo: '2. 우루크 IV기 사료의 증언: 표준 직업목록(ED Lu A)의 동시성',
        subheadingKo: 'W 20266,1 점토판과 계급 서열화의 탄생',
        content: `우루크 IV기(c. 3300–3100 BCE) 에안나 신전 복합체에서 출토된 대표적 유물인 **표준 직업목록(ED Lu A, Early Dynastic List of Officials A)**은 이 시기 서기관들이 인간 사회의 위계질서를 어떻게 텍스트화했는지를 보여준다.

이 목록은 최고 권력자 혹은 대사제로 추정되는 'NAMEŠDA'(나메시다)로 시작하여, 사법관, 군사령관, 신전 행정관, 전문 장인에 이르기까지 120여 개의 직책을 엄격한 수직 서열 순서로 나열한다. 놀라운 점은 이 목록이 단순한 직책 명단이 아니라 서기관 훈련생들이 문자를 배우는 필수 교본이었다는 사실이다. 서기관들은 낱말을 배우면서 동시에 자신이 속한 도시국가의 권력 피라미드를 암기했다.`,
        originalQuote: {
          originalScript: '𒁹 𒉆 𒅖 𒁕\n𒁹 𒃲 𒋼\n𒁹 𒃲 𒈛\n𒁹 𒃲 𒋃',
          transliteration: '1. |NAM2.ŠEŠDA| (대사제/최고통치자)\n2. GAL:TE (신전 최고 재판관)\n3. GAL:SUKKAL (수석 행정관)\n4. GAL:SANGA (신전 재정관)',
          translationKo: '우루크 최고 통치자(나메시다)부터 재판관, 사절, 경리관에 이르는 120개 관직의 수직적 위계 서열',
          sourceCitation: 'W 20266,1 (CDLI P254191), ED Lu A 표제 행 발췌 (Grade A)'
        }
      },
      {
        id: 'sec-1-3',
        order: 3,
        headingKo: '3. 수량화와 범주화: 관료제 지식 생산의 동전의 양면',
        subheadingKo: '보리 배분 장부(MSVO 3, 11)와 어휘 목록의 구조적 상호작용',
        content: `원시 쐐기문자 행정 점토판(예: MSVO 3, 11)을 살펴보면, 서기관은 단순히 곡물 양을 적은 것이 아니라 '토지 면적(B-system)', '작물 한정사(ŠE)', '부피 배분 용기(Š-system)', '수령 관료(SANGA)'를 2차원 그리드 격자 안에 정교하게 배치했다. 

이는 어휘목록에서 사물과 직업을 범주화(Categorization)하는 지적 훈련이 없었다면 불가능한 작업이었다. 회계는 단순한 덧셈·뺄셈이 아니라, 세계에 존재하는 모든 물리적 자원(가축, 직물, 곡물, 토지)을 기호의 범주 체계 속으로 편입시키는 작업이었다. 서기관 학교(에두바)는 '계산하는 법'과 '분류하는 법'을 동일한 점토판 훈련을 통해 일체화시켰다.`,
        originalQuote: {
          originalScript: '𒐉 𒃷 𒊺 \t 𒁹 𒂁 𒋡 \t 𒁹 𒋃',
          transliteration: '4(iku) GAN2 ŠE / 1(dug) DUG.SILA3 / SANGA',
          translationKo: '4이쿠(약 1.4헥타르) 면적의 파종용 보리 및 1두그 정량 용기 배분, 신전 재정관(SANGA) 명기',
          sourceCitation: 'MSVO 3, 11 (CDLI P005573), 우루크 IV 원시 쐐기 행정 점토판'
        }
      },
      {
        id: 'sec-1-4',
        order: 4,
        headingKo: '4. 이집트 아비도스 U-j 묘지 표찰과의 비교',
        subheadingKo: '원산지 지명과 소유권 표상의 결합',
        content: `메소포타미아와 거의 동시대인 기원전 3200년경, 이집트 선왕조 아비도스의 **스콜피온 1세(Scorpion I) U-j 무덤**에서 출토된 160여 점의 작은 뼈·상아 표찰(Labels) 역시 동일한 패턴을 보여준다.

표찰에 새겨진 기호들은 단순한 수량이 아니라 "부토(Buto) 신전에서 보낸 기름", "바스트(Bast) 지역의 직물"처럼 원산지 지명, 신전 명칭, 소유 군주의 상징을 나타냈다. 이집트에서도 문자는 세입 장부로 시작함과 동시에 왕권이 통치하는 영토의 지리적 질서를 명명(Naming)하고 시각화하는 국가적 지식 기획이었다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '비교 통찰: 수메르 그리드 점토판 vs 이집트 매달기 표찰',
          bodyKo: '메소포타미아가 점토판 위의 2차원 구획(Case/Grid)으로 복합 행정 관계를 표현했다면, 초기 이집트는 물품 용기(Jar)에 구멍 뚫린 상아 표찰을 끈으로 묶어 내용물과 원산지를 물리적으로 결합하는 방식을 택했다. 매체는 달랐으나 범주화의 원리는 일치했다.'
        }
      },
      {
        id: 'sec-1-5',
        order: 5,
        headingKo: '5. 결론: 문자는 셈(Accounting)이 아니라 존재론(Ontology)이었다',
        subheadingKo: '고대 서기관이 점토판 위에 재구성한 세계의 질서',
        content: `문자의 기원을 장부라는 실용적 도구로만 환원하는 것은 고대 문명 형성기 서기관 계급의 지적 성취를 절반만 보는 것이다. 문자는 우주와 사회의 모든 구성 요소를 목록화하여 통제 가능한 지식으로 재편하는 혁명적 존재론(Ontology)의 출현이었다.

서기관은 세금을 징수하는 회계관이자, 신전과 궁정의 위계 속에서 사물의 이름을 결정하고 질서를 부여하는 세계의 분류자였다. 따라서 장부와 목록은 선후 관계가 아니라, 고대 국가의 행정력과 지적 권력이 하나의 점토판 위에서 융합된 쌍둥이였다.`
      }
    ],
    primarySources: [
      {
        id: 'src-1-1',
        artifactId: 'ed-lu-a-professions',
        nameKo: '초기 왕조 표준 직업목록 A (ED Lu A)',
        nameEnOrOriginal: 'Standard Professions List ED Lu A (W 20266,1)',
        catalogNo: 'CDLI P254191 / W 20266,1',
        institution: 'Vorderasiatisches Museum Berlin',
        dateVector: {
          eventDateBCE: 3300,
          compositionDateBCE: 3300,
          redactionDateBCE: 3100,
          witnessDateBCE: 3200
        },
        originalScript: '𒁹 𒉆 𒅖 𒁕\n𒁹 𒃲 𒋼\n𒁹 𒃲 𒈛\n𒁹 𒃲 𒋃',
        transliteration: '1. |NAM2.ŠEŠDA| (대사제/최고통치자)\n2. GAL:TE (신전 최고 재판관)\n3. GAL:SUKKAL (수석 행정관)\n4. GAL:SANGA (신전 재정관)',
        translationKo: '1. 최고 통치자 / 제의적 군주 (나메시다)\n2. 대신전 총감독관 / 최고 재판관\n3. 최고 사절 / 총괄 행정관\n4. 신전 재정관',
        sourceGrade: 'Grade A',
        epigraphyMethod: '3D 점토판 스캔 및 CDLI 고해상도 판독 (라이덴 협약 준수)',
        notes: '우루크 IV기 에안나 신전 복합체 매립층 출토. 120여 개 관직 서열을 고정한 인류 최초의 체계적 사회 위계 목록.'
      },
      {
        id: 'src-1-2',
        artifactId: 'uruk-admin-tablets',
        nameKo: '우루크 IV기 원시 쐐기 행정 점토판',
        nameEnOrOriginal: 'Uruk IV Archaic Administrative Tablet (MSVO 3, 11)',
        catalogNo: 'CDLI P005573 / MSVO 3, 11',
        institution: 'Vorderasiatisches Museum Berlin',
        dateVector: {
          eventDateBCE: 3200,
          compositionDateBCE: 3200,
          redactionDateBCE: 3200,
          witnessDateBCE: 3200
        },
        originalScript: '𒐉 𒃷 𒊺\n𒁹 𒂁 𒋡\n𒁹 𒋃',
        transliteration: '4(iku) GAN2 ŠE / 1(dug) DUG.SILA3 / SANGA',
        translationKo: '4이쿠(약 1.4헥타르) 면적의 파종용 보리 및 1두그 정량 용기 배분, 신전 재정관(SANGA) 명기',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'CDLI 디지털 에피그래피 전사',
        notes: '수량 기호(B-system / Š-system)와 물품·관직 표의문자가 그리드 구획 안에 결합된 전형적 초기 행정 장부.'
      },
      {
        id: 'src-1-3',
        artifactId: 'abydos-u-j-labels',
        nameKo: '아비도스 U-j 무덤 상아 표찰',
        nameEnOrOriginal: 'Abydos Tomb U-j Bone and Ivory Labels',
        catalogNo: 'UCL Petrie Museum UC 36000+ / DAIK Umm el-Qaab',
        dateVector: {
          eventDateBCE: 3250,
          compositionDateBCE: 3250,
          witnessDateBCE: 3200
        },
        institution: 'Egyptian Museum Cairo / UCL Petrie Museum',
        originalScript: '𓅃 𓋹 𓈖 𓏏',
        transliteration: 'bAst / AbDw / pr-nTr',
        translationKo: '바스트(지명) / 아비도스 왕실 신전 납품 직물과 기름 표찰',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'Günter Dreyer 고고학 정밀 발굴 및 탄소연대측정',
        notes: '초기 이집트 성각문자 최고 사료군. 물품의 지리적 원산지와 왕실 세입 구획을 결합.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-1-1',
        topic: '원시 쐐기문자의 탄생 동력: 점진적 토큰 진화론 vs 인지적 체계 기획론',
        thesisA: {
          scholarOrSchool: '드니스 슈만트-베세라 (Denise Schmandt-Besserat, 1992)',
          eraOrYear: '1970–1992',
          claimKo: '신석기 찰흙 토큰이 불라(Bulla) 봉인을 거쳐 평면 점토판 위의 기호로 단선 발전함.',
          keyEvidence: '수사(Susa) 및 우루크 출토 원형 불라 표면의 토큰 압인 자국.'
        },
        thesisB: {
          scholarOrSchool: '로버트 잉글런드 & 한스 니센 (Robert Englund & Hans Nissen, 1993, 1998)',
          eraOrYear: '1993–2010',
          claimKo: '토큰과의 연속성은 일부에 불과하며, 우루크 IV 문자는 관료제 조직의 분류와 계산을 위해 일거에 설계된 복합 지식 시스템임.',
          keyEvidence: '우루크 IV기 층위에서 어휘목록(ED Lu A 등)이 장부와 완전 동일한 시점에 대규모로 동시 출현함.'
        },
        consensusStatus: '현대 근동학계는 단순 토큰 진화론을 탈피하여, 관료적 범주화와 어휘목록의 동시 출현 모델을 표준 학설로 수용함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-1-1',
        sourceGrade: 'Grade A',
        author: 'Englund, Robert K.',
        year: 1998,
        title: 'Texts from the Late Uruk Period',
        publication: 'Orbis Biblicus et Orientalis 160/1, Freiburg: Universitätsverlag.',
        urlOrDoi: 'https://cdli.mpiwg-berlin.mpg.de/'
      },
      {
        id: 'bib-1-2',
        sourceGrade: 'Grade B',
        author: 'Schmandt-Besserat, Denise',
        year: 1992,
        title: 'Before Writing: From Counting to Cuneiform',
        publication: 'Austin: University of Texas Press.'
      },
      {
        id: 'bib-1-3',
        sourceGrade: 'Grade A',
        author: 'Dreyer, Günter',
        year: 1998,
        title: 'Umm el-Qaab I: Das prädynastische Königsgrab U-j und seine frühen Schriftzeugnisse',
        publication: 'Mainz: Philipp von Zabern (DAIK).'
      }
    ]
  },
  {
    id: 'essay-2-lexical-lists',
    order: 2,
    title: '2. 목록은 최초의 지식체계인가?',
    subtitle: '사물·직업 분류 목록이 2천 년 서기관 교육을 지배한 이유',
    summary: '문법서나 백과사전이 없던 고대 세계에서 어휘목록(Lexical Lists)은 서기관의 언어 교육, 관직 세습, 우주적 질서 파악의 핵심 매개체였다.',
    content: `고대 메소포타미아 서기관 학교(에두바, Eduba)에 입학한 학생이 가장 먼저 배운 것은 수메르어 문법책이 아니었다. 그들은 100여 개의 관직 순서가 고정된 ED Lu A 목록과 사물 명칭 목록을 토씨 하나 틀리지 않고 복제(Copying)했다.

목록(List)은 고대 지식체계의 고유한 문법이었다. 분류 목록을 머릿속에 암기하고 정교하게 베껴 쓰는 작업은 서기관 공동체의 정체성을 형성하고, 수천 년간 언어가 바뀌어도 고대 텍스트를 전승할 수 있게 한 지적 버팀목이었다.`,
    keyTakeaways: [
      '목록 형태(Lists)는 메소포타미아와 이집트 고대 지식 분류의 가장 원초적이자 궁극적인 형식이었음',
      '수메르어가 구어로서 사멸한 후에도 수메르-아카드 대조 24개 점토판 대전집(Ur5-ra = hubullu)으로 2천 년간 복제됨',
      '레반트 국제 무역항 우가리트(Ras Shamra)에서는 4개국어 대조 어휘목록으로 국제 외교 서기관을 양성함',
      '서기관 학교(에두바) 커리큘럼은 기호 형태 숙달 ➔ 사물 목록 ➔ 문학 텍스트의 엄격한 3단계 승급 구조를 가짐'
    ],
    civilizationsDiscussed: ['mesopotamia', 'ugarit'],
    readingTimeMinutes: 7,
    relatedArtifactIds: ['ed-lu-a-professions', 'ugarit-quadrilingual-vocab', 'ugarit-abecedary'],
    crossRefEssayIds: ['essay-1-accounting-first', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-2-1',
        order: 1,
        headingKo: '1. 문법서 없는 서기관 학교: 목록이 만든 사유의 틀',
        subheadingKo: '에두바(Eduba)의 훈련 커리큘럼과 어휘 목록의 지배',
        content: `오늘날 우리는 외국어나 문자를 배울 때 알파벳 자모표, 문법 규칙, 사전 순서(A-Z)를 기본으로 삼는다. 그러나 기원전 3천년기 메소포타미아의 서기관 학교 에두바(Eduba, '점토판의 집')에는 현대적 의미의 문법서가 존재하지 않았다.

대신 그 자리를 채운 것은 **어휘목록(Lexical Lists)**이었다. 서기관 지망생들은 입학 첫날부터 진흙 반죽을 빚어 평평한 점토판을 만들고, 갈대 첨필(Stylus)로 단음절 쐐기 부호 목록(Syllable Alphabet A, Proto-Ea)을 수없이 반복해 찍었다. 그 다음 단계는 세상에 존재하는 모든 나무, 가죽 제품, 금속, 동물, 돌, 직업의 이름을 분류해 놓은 사물 목록(Thematic Lists)을 필사하는 것이었다. 문자는 개별 단어의 나열이 아니라, '범주화된 세계 목록의 암기'를 통해 습득되었다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 잭 구디의 탈맥락화론 vs 닉 벨드하위스의 상징 권력론',
          bodyKo: '인류학자 잭 구디(Jack Goody)는 목록이 구전 문화를 해체하고 사유를 2차원 공간에 객관화하는 인지 도구라고 보았다. 반면 아시리아학자 닉 벨드하위스(Niek Veldhuis)는 어휘목록이 실용적 어휘 습득을 넘어 서기관 계급의 배타적 엘리트 정체성과 상징 자본을 재생산하는 제의적 통과의례였다고 논증했다.'
        }
      },
      {
        id: 'sec-2-2',
        order: 2,
        headingKo: '2. 《우르라=후불루》(Ur5-ra = hubullu): 24개 점토판의 우주 백과전집',
        subheadingKo: '나무, 가죽, 선박에서 천체와 신들에 이르는 2천 년의 대전집',
        content: `고대 바빌로니아 시기(c. 1900–1600 BCE)에 집대성되어 신아시리아 제국기까지 표준 교본으로 쓰인 **《우르라=후불루》(Ur5-ra = hubullu, '이자 있는 부채')**는 총 24개의 대형 점토판에 걸쳐 약 10,000여 개의 어휘를 2열(왼쪽: 수메르어 원어 / 오른쪽: 아카드어 번역)로 정렬한 기념비적 어휘 대사전이다.

- 점토판 1–2: 법률 및 상업 용어 (이자, 계약, 임대)
- 점토판 3–7: 나무(GIŠ) 및 목재로 만든 도구, 선박, 전차
- 점토판 8–9: 갈대(GI), 가죽(KUŠ), 금속(AN.NA) 제품
- 점토판 10–12: 도기 그릇, 직물, 의복
- 점토판 13–15: 야생 및 가축 동물, 육류 부위
- 점토판 16–19: 돌, 광물, 식물, 약재
- 점토판 20–24: 지명, 별자리, 천체, 신격 명칭

이 목록은 단순한 단어장이 아니었다. 지상에 존재하는 인공물에서 시작하여 자연계의 동식물을 거쳐 천상의 신성에 이르는 '우주적 질서의 거대한 위계 지도'였다.`,
        originalQuote: {
          originalScript: '1. 𒄑 𒈣 \t\t\t giš-ma2 \t\t = *e-lep-pu*\n2. 𒄑 𒈣 𒄥 𒊏 \t\t giš-ma2-gur8 \t = *ma-kur-ru*\n3. 𒄑 𒈣 𒆭 𒊏 \t\t giš-ma2-dirig \t = *e-lep-pu te-bi-tu*',
          transliteration: '1. giš-ma2 = e-lep-pu (일반 선박)\n2. giš-ma2-gur8 = ma-kur-ru (심해 항해선)\n3. giš-ma2-dirig = e-lep-pu te-bi-tu (침수선)',
          translationKo: '수메르어 사물 명칭과 아카드어 번역을 2열 대조로 정렬한 표준 선박 어휘 목록',
          sourceCitation: 'Ur5-ra = hubullu 점토판 4 (DCCLT P365448 / MSL 5), 신아시리아 정본'
        }
      },
      {
        id: 'sec-2-3',
        order: 3,
        headingKo: '3. 사멸한 언어를 불멸화한 번역의 장치',
        subheadingKo: '수메르어 사멸 이후에도 지속된 2열 대조 목록의 전승력',
        content: `기원전 2000년경 우르 제3왕조가 멸망하면서 수메르어는 일상 구어(Spoken language)로서 완전히 사멸했다. 거리는 셈어 계통의 셈어족 언어인 아카드어(Akkadian)와 아모리어가 지배했다.

그러나 쐐기문자 서기관들은 수메르어를 결코 버리지 않았다. 수메르어는 종교, 법률, 고급 학술의 '라틴어'로 격상되었으며, 그 생명을 연장한 유일한 도구가 바로 2열 대조 어휘목록이었다. 서기관들은 수메르어 단어 옆에 아카드어 독법과 번역을 나란히 적는 목록 필사를 통해, 이미 아무도 모국어로 쓰지 않는 죽은 언어의 서사시와 제의 찬가를 1,500년 이상 오차 없이 읽고 복제할 수 있었다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '디지털 에피그래피 혁신: DCCLT 프로젝트',
          bodyKo: 'UC 버클리의 DCCLT(Digital Corpus of Cuneiform Lexical Texts) 프로젝트는 전 세계 박물관에 흩어진 수만 점의 어휘목록 파편을 디지털 접합하여, 기원전 3300년 우루크부터 기원전 1세기 헬레니즘기까지 어휘목록 텍스트의 변이와 표준화 궤적을 실시간 계통수로 복원해냈다.'
        }
      },
      {
        id: 'sec-2-4',
        order: 4,
        headingKo: '4. 우가리트 4개국어 사전(RS 20.123+): 고대 국제화의 정점',
        subheadingKo: '수메르어-아카드어-후르리어-우가리트어 4열 대조의 경이',
        content: `기원전 14세기 레반트의 번영하던 국제 무역 도시 우가리트(Ras Shamra)의 대사제 공방에서는 고대 어휘목록의 가장 정교한 변형이 출토되었다. 바로 **4개국어 대조 어휘목록(Quadrilingual Vocabulary, RS 20.123+)**이다.

서기관들은 점토판을 4개의 세로 열(Column)로 나누어, 제1열에 고대 성스러운 학술어인 수메르어, 제2열에 국제 외교 공용어인 아카드어, 제3열에 북부 히타이트 및 미탄니 영향권의 후르리어(Hurrian), 제4열에 현지 셈어 방언인 우가리트어(Ugaritic)를 쐐기문자로 나란히 새겨 넣었다. 이 목록은 동지중해와 메소포타미아, 아나톨리아가 교차하는 국제 도시에서 외교관과 통역관을 양성하는 첨단 지식 번역 엔진이었다.`,
        originalQuote: {
          originalScript: '𒂍 \t\t *bītu* \t\t *purli* \t\t *bêt-u*',
          transliteration: 'E2 (Sumerian) \t bi-i-tu (Akkadian) \t pur-li (Hurrian) \t be-e-tu (Ugaritic)',
          translationKo: '집(신전/가옥) [수메르어] \t 집(비투) [아카드어] \t 집(푸를리) [후르리어] \t 집(베투) [우가리트어]',
          sourceCitation: 'RS 20.123+ (Louvre AO 19936), 우가리트 4개국어 어휘목록 (Nougayrol 1968)'
        }
      },
      {
        id: 'sec-2-5',
        order: 5,
        headingKo: '5. 결론: 목록은 지식의 축적이 아니라 권력과 우주의 지도화였다',
        subheadingKo: '어휘목록이 고대 문명에 남긴 인식론적 유산',
        content: `어휘목록은 단순한 원시적 사전이 아니었다. 그것은 문자를 통제하는 소수 엘리트 서기관 집단이 무질서하고 광활한 현실 세계에 질서(Order)와 위계(Hierarchy)를 부여하는 인식론적 통제 장치였다.

서기관은 목록을 통달함으로써 자연계의 사물과 인간 사회의 직책, 신들의 이름을 자신의 첨필 아래 종속시켰다. 이 목록 전통은 훗날 알렉산드리아 도서관의 서지학(Pinakes)과 중세 유럽의 백과사전, 근대 린네의 생물 분류 체계로 이어지는 서구 분류학적 이성의 가장 오래된 조상이었다.`
      }
    ],
    primarySources: [
      {
        id: 'src-2-1',
        artifactId: 'ed-lu-a-professions',
        nameKo: '수메르-아카드 대조 어휘목록 우르라=후불루',
        nameEnOrOriginal: 'Ur5-ra = hubullu Lexical Series (MSL 5-11)',
        catalogNo: 'DCCLT / CDLI P365448',
        institution: 'British Museum / University of Pennsylvania Museum',
        dateVector: {
          eventDateBCE: 2000,
          compositionDateBCE: 1800,
          redactionDateBCE: 1200,
          witnessDateBCE: 700
        },
        originalScript: '1. 𒄑 𒈣 \t\t giš-ma2 = e-lep-pu\n2. 𒄑 𒈣 𒄥 𒊏 \t giš-ma2-gur8 = ma-kur-ru',
        transliteration: '1. giš-ma2 = e-lep-pu\n2. giš-ma2-gur8 = ma-kur-ru',
        translationKo: '1. 일반 선박 = [엘렙푸]\n2. 심해 항해선 / 의례선 = [마쿠루]',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'DCCLT 디지털 코퍼스 교감 및 MSL 표준 판본 대조',
        notes: '24개 점토판 대전집 중 제4판 선박 및 운송기구 목록.'
      },
      {
        id: 'src-2-2',
        artifactId: 'ugarit-quadrilingual-vocab',
        nameKo: '우가리트 4개국어 대조 어휘 점토판',
        nameEnOrOriginal: 'Ugarit Quadrilingual Vocabulary (RS 20.123+)',
        catalogNo: 'RS 20.123+ / Louvre AO 19936',
        institution: 'Musée du Louvre, Paris',
        dateVector: {
          eventDateBCE: 1300,
          compositionDateBCE: 1300,
          redactionDateBCE: 1300,
          witnessDateBCE: 1250
        },
        originalScript: '𒂍 \t *bi-i-tu* \t *pur-li* \t *be-e-tu*',
        transliteration: 'E2 / bītu / purli / bêtu',
        translationKo: '집(건물/가옥)의 4개 언어 대조 전사',
        sourceGrade: 'Grade A',
        epigraphyMethod: '루브르 박물관 고해상도 매크로 촬영 및 비문 자형 분석',
        notes: '수메르-아카드-후르리-우가리트 4개 언어를 4열로 나란히 배치한 국제 외교 교육용 점토판.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-2-1',
        topic: '어휘목록의 본질적 기능: 인지적 정보 도구인가, 서기관 상징 권력인가?',
        thesisA: {
          scholarOrSchool: '잭 구디 (Jack Goody, 1977)',
          eraOrYear: '1977',
          claimKo: '목록은 구전 사회의 맥락 의존적 사유를 탈맥락화(De-contextualization)하여 추상적 분류와 과학적 사고의 기틀을 마련한 기술적 도구임.',
          keyEvidence: '사물의 성질과 범주를 2차원 표 형식으로 시각화한 목록의 추상적 배열.'
        },
        thesisB: {
          scholarOrSchool: '닉 벨드하위스 (Niek Veldhuis, 2014)',
          eraOrYear: '2004–2014',
          claimKo: '목록의 어휘 중 상당수는 실생활에서 전혀 쓰이지 않는 극도로 난해한 고어이며, 목록 필사는 서기관 길드의 배타적 권력과 사회적 특권을 과시하는 상징적 통과의례였음.',
          keyEvidence: '실제 일상 행정 점토판에는 등장하지 않는 희귀 기호와 수메르 고어 목록의 과도한 반복 복제 현상.'
        },
        consensusStatus: '현대 고전 아시리아학은 두 견해를 종합하여, 목록이 지적 분류의 인지 도구임과 동시에 서기관 계급의 정체성을 구축하는 상징적 장치였음을 인정함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-2-1',
        sourceGrade: 'Grade A',
        author: 'Veldhuis, Niek',
        year: 2014,
        title: 'History of the Cuneiform Lexical Tradition',
        publication: 'Guides to the Mesopotamian Textual Record 6, Münster: Ugarit-Verlag.',
        urlOrDoi: 'http://oracc.museum.upenn.edu/dcclt/'
      },
      {
        id: 'bib-2-2',
        sourceGrade: 'Grade B',
        author: 'Goody, Jack',
        year: 1977,
        title: 'The Domestication of the Savage Mind',
        publication: 'Cambridge: Cambridge University Press.'
      }
    ]
  },
  {
    id: 'essay-3-tomb-writing',
    order: 3,
    title: '3. 왕의 무덤에서 문자는 무엇을 하는가?',
    subtitle: '공개적 기념비와 비공개적 피라미드 매장실의 이중 매체 구조: 제의 기계와 의례 아카이브',
    summary: '이집트 성각문자는 인간 관객의 읽기를 위한 기록이 아니었다. 돌과 벽면에 새겨진 주문은 영원성과 파라오 부활을 보증하는 물리적 제의 장치이자 장례 당일 구술 의례를 보존한 공간적 아카이브였다.',
    content: `이집트 문자의 독특함은 공개성(Publicity)과 비공개성(Secrecy)의 극단적 대조에 있다.

신전 입구 석비와 팔레트에 새겨진 문자는 왕의 군사적 승리와 권력을 널리 선포하는 공개적 시각 매체였다. 반면, 사카라 우나스 피라미드 지하 깊은 매장실 석회암 벽면에 새겨진 피라미드 텍스트(Pyramid Texts)는 산 자의 눈에 절대 띨 수 없는 캄캄한 어둠 속 텍스트였다.

여기서 문자는 산 자에게 정보를 전달하는 매체가 아니라, 말(Word)의 물리적 刻文을 통해 파라오가 오시리스 신 및 태양신 라(Rꜥw)와 합일하도록 작용하는 신성한 영원성의 주술 도구이자 사제의 음성 제의를 영구 보존하는 의례 아카이브였다.`,
    keyTakeaways: [
      '이집트 성각문자는 외곽 신전의 공개적 기념비(나르메르 팔레트)와 무덤 심장부의 비공개 제의문(피라미드 텍스트)이라는 제도적 데코룸(Decorum) 구조를 가짐',
      '4왕조의 거대한 ‘건축적 무문자(無文字) 질량’ 독점에서 5왕조 말 우나스의 ‘내부 텍스트 포화’로 이어지는 패러다임 전환',
      '우나스 피라미드 지하 刻文은 자율적 영구 기계(Allen)이자 당일 낭독된 음성 제의(ḏd-mdw)를 공간적으로 동결한 의례 아카이브(Hays)',
      '1,500년 장례 문헌 변천(PT ➔ CT ➔ 사자의 서)은 19세기식 ‘내세의 민주화’가 아니라 지방 노마르크와 관료층의 ‘제의 권력 전유(Appropriation)’ 과정임',
      '상형문자의 주술적 훼손(Sign Mutilation)의 3단계 diachronic 진화와 나일강 충적토의 보존 편향(Taphonomic Bias)'
    ],
    civilizationsDiscussed: ['egypt'],
    readingTimeMinutes: 8,
    relatedArtifactIds: ['unas-pyramid-texts', 'narmer-palette', 'coffin-texts-ct', 'book-of-the-dead-ani'],
    crossRefEssayIds: ['essay-6-orality-and-text', 'essay-7-preservation-bias', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-3-1',
        order: 1,
        headingKo: '1. 누구도 읽을 수 없는 곳에 새겨진 문자의 존재론',
        subheadingKo: '사카라 우나스 피라미드 지하 매장실과 존 베인스의 데코룸',
        content: `현대인의 상식에서 글이란 누군가에게 읽히기 위해 쓰이는 소통의 매체다. 하지만 기원전 2350년경 건립된 사카라의 **우나스(Unas) 피라미드** 지하 매장실로 내려가면 이 상식은 완전히 붕괴된다.

수십 미터 화강암 통로와 차단석을 지나 육중한 현무암 석관이 놓인 현실(Burial Chamber) 벽면에는 바닥부터 천장까지 빈틈없이 청록색 안료가 상감된 정교한 성각문자(Hieroglyphs) 수천 행이 새겨져 있다. 그러나 파라오의 미라가 안치되고 입구가 거대한 석판으로 영구 밀봉되는 순간, 이 방에는 단 한 줄기의 빛도 들어오지 않으며 그 어떤 인간 관객도 이 글을 읽을 수 없다. 산 자의 접근이 철저히 차단된 영원한 암흑 속에 왜 그토록 막대한 노동력을 투입해 거대한 텍스트를 새겨 넣었는가?`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 존 베인스의 제도적 데코룸 vs 얀 아스만의 기념비성/성사성 긴장',
          bodyKo: '옥스퍼드 이집트학자 존 베인스(John Baines)는 이집트 문화를 공개/비공개의 단순 2분법이 아닌, 위계적 권력과 우주 질서에 따라 표현 가능한 범위를 규정하는 ‘제도적 데코룸(Decorum)’으로 분석했다. 얀 아스만(Jan Assmann) 또한 무덤 내부의 텍스트가 인간과의 소통이 아닌 우주 질서(마아트, Maat)를 가동하는 제의적 언어 기계(Sacramentality)였다고 논증한다.'
        }
      },
      {
        id: 'sec-3-2',
        order: 2,
        headingKo: '2. 패러다임 전환: 4왕조의 ‘건축적 침묵’에서 5왕조의 ‘텍스트 포화’로',
        subheadingKo: '쿠푸·카프레의 무문자 대피라미드와 우나스의 텍스트 혁명',
        content: `대중적 통념과 달리, 제4왕조 최전성기 쿠푸(Khufu)와 카프레(Khafre)의 대피라미드 매장실에는 장례 비문이 단 한 글자도 음각되어 있지 않다(Mark Lehner 1997; Miroslav Bárta 2020). 당시 파라오는 수백만 톤의 ‘건축적 질량(Architectural Mass)’ 자체로 우주적 영원성을 독점했다.

그러나 5왕조 말기에 이르러 중앙 재정이 약화되고 태양신학이 재편되면서 피라미드 규모는 축소되었고, 축소된 건축적 질량은 지하 현실 벽면 전체를 뒤덮는 정교한 ‘텍스트적 포화(Textual Saturation)’로 대체되었다. 거대한 돌의 부피가 담당하던 불멸의 보증이 벽면에 새겨진 주술 텍스트의 밀도로 전환된 것이다.`
      },
      {
        id: 'sec-3-3',
        order: 3,
        headingKo: '3. 피라미드 텍스트 1차 사료 비문학적 고증: 현실 PT 213과 전실 PT 217',
        subheadingKo: '오시리스 부활 선언과 태양신 라(Rꜥw)와의 합일',
        content: `우나스 피라미드 내부의 텍스트 배치는 현실(Burial Chamber), 통로(Passage), 전실(Antechamber)에 따라 엄격히 분화되어 있다.

석관이 놓인 현실 남쪽 벽면의 핵심 주문인 PT 213(Sethe Pyr. § 134a)은 파라오가 죽은 것이 아니라 오시리스 신으로 영원히 살아있음을 선언한다. 이어 전실 남쪽 벽면의 PT 217(Sethe Pyr. § 152a)은 왕이 태양신 라(Rꜥw-Jtmw)의 아들로서 천상으로 승천하는 우주적 여정을 완결한다.`,
        originalQuote: {
          originalScript: '𓉔 𓄿 𓃹 𓈖 𓇋 𓋴 𓈖 𓈙 𓅓 𓈖 𓎡 𓇋 𓋴 𓅓 𓅱 𓏏 𓏏 𓇋\n𓈙 𓅓 𓈖 𓎡 𓇋 𓋴 𓋹 𓈖 𓐍 𓏏 𓇋',
          transliteration: 'hꜢ Wnjs, n šm.n.k jś mwt.tj, šm.n.k jś ꜥnḫ.tj!',
          translationKo: '오 우나스여, 그대는 정녕 죽은 자로서 떠나간 것이 아니요, 살아 숨 쉬는 신성한 존재로서 영광 중에 나아갔도다!',
          sourceCitation: '우나스 피라미드 현실 남쪽 벽면 刻文 (Sethe Pyr. § 134a / PT 213)'
        }
      },
      {
        id: 'sec-3-4',
        order: 4,
        headingKo: '4. 공개적 기념비와의 대조: 나르메르 팔레트의 시각 정치학',
        subheadingKo: '히에라콘폴리스 신전 뜰의 프로파간다와 세레크(Serekh) 문장',
        content: `기원전 3100년경의 **나르메르 팔레트(Narmer Palette, Cairo JE 32169)**는 히에라콘폴리스 네켄의 호루스 신전 뜰(Main Deposit)에 공개 봉헌된 시각 매체였다.

상단 세레크(궁전 정면) 안에 새겨진 메기(nꜥr, 𓆛)와 끌(mr, 𓍋), 그리고 참수된 적들의 시체와 승리 행렬은 왕권의 군사적 폭력과 통일의 정당성을 인간 세계에 과시하는 정치 선전물이었다. 이집트 문명은 문자를 바깥을 향한 시각적 선전과 안쪽 깊은 곳의 제의적 코드라는 이중 궤도로 분리 운영했다.`,
        originalQuote: {
          originalScript: '𓅃\n𓆛 𓍋\n𓊁',
          transliteration: 'Nꜥr-mr (Horus Narmer)',
          translationKo: '상·하 이집트 최초의 통일 파라오 호루스 나르메르의 세레크 궁전 정면 왕명',
          sourceCitation: '나르메르 팔레트 상단 왕명틀 (JE 32169, Cairo Egyptian Museum)'
        }
      },
      {
        id: 'sec-3-5',
        order: 5,
        headingKo: '5. 1,500년 장례 문헌 매체 변천: ‘민주화’가 아닌 ‘엘리트 권력 전유’',
        subheadingKo: '석조 묘실 ➔ 목재 목관 ➔ 파피루스 두루마리로의 이동',
        content: `고왕국 붕괴 후 제1중간기 및 중왕국(c. 2055–1650 BCE)에 접어들면서, 파라오의 전유물이었던 성각문자 주문들은 지방 귀족(노마르크)들의 목재 관 내벽에 필사된 **관 텍스트(Coffin Texts)**로 확산되었다.

신왕국(c. 1550–1077 BCE)에는 파피루스 상업 공방의 발달과 함께 관료층이 맞춤 구매하는 **《사자의 서》(Book of the Dead)**로 대중화되었다. 마크 스미스(Mark Smith 2017)와 하르코 빌렘스(Harco Willems 1996)가 실증하듯, 이는 브레스티드식 근대적 ‘민주화’가 아니라, 중앙 권력 붕괴 속에서 지방 엘리트들이 왕실 제의 특권을 참칭·전유(Appropriation)한 계급적 확산이었다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '매체 진화 비교: 영구적 석재(Stone)에서 휴대용 파피루스(Papyrus)로',
          bodyKo: '피라미드 텍스트는 묘실 자체가 부활의 석조 기계였기에 이동이 불가능했으나, 사자의 서 파피루스는 망자의 미라에 직접 감겨 저승의 심판대(오시리스의 저울)까지 휴대할 수 있는 개인 맞춤형 영혼의 여권(Passport) 역할을 수행했다.'
        }
      },
      {
        id: 'sec-3-6',
        order: 6,
        headingKo: '6. 기호의 3단계 刻文 변형(Sign Mutilation)과 보존 편향(Taphonomic Bias)',
        subheadingKo: '살아있는 기호에 대한 주술적 방호와 나일강 충적토의 착시',
        content: `이집트인들에게 성각문자는 **메두 네체르(Medu Netjer, ‘신들의 말씀’)**로서 그 자체로 물리적 생명력을 지닌 실체였다. 6왕조 페피 1세 이후 석공들이 뿔살무사(𓆑)의 몸통을 칼로 자르고 뱀(𓆙)의 머리를 절단해 새긴 것(Pierre Lacau 1914)은 문자의 위험한 마술적 에너지를 무력화하기 위한 조치였다.

한편, 오늘날 이집트가 ‘죽음에 집착한 문명’으로 오인되는 것은 사카라 석회암 사막은 텍스트를 보존한 반면 멤피스·테베의 일상 행정 파피루스는 나일강 충적토의 습기에 100% 부식되었기 때문이다(Barry Kemp 2006; Tallet 2017). 와디 알-자르프 파피루스는 고왕국 이집트가 고도의 일상 관료제 사회였음을 웅변한다.`
      }
    ],
    primarySources: [
      {
        id: 'src-3-1',
        artifactId: 'unas-pyramid-texts',
        nameKo: '사카라 우나스 피라미드 텍스트 (PT 213 / PT 217)',
        nameEnOrOriginal: 'Unas Pyramid Texts (Sethe Pyr. § 134a / PT 213, Burial Chamber)',
        catalogNo: 'Saqqara Pyramid of Unas / Sethe Pyr. § 134a–135b',
        institution: 'Egyptian Ministry of Tourism and Antiquities / Saqqara Necropolis',
        dateVector: {
          eventDateBCE: 2350,
          compositionDateBCE: 2500,
          redactionDateBCE: 2350,
          witnessDateBCE: 2350
        },
        originalScript: '𓉔 𓄿 𓃹 𓈖 𓇋 𓋴 𓈖 𓈙 𓅓 𓈖 𓎡 𓇋 𓋴 𓅓 𓅱 𓏏 𓏏 𓇋\n𓈙 𓅓 𓈖 𓎡 𓇋 𓋴 𓋹 𓈖 𓐍 𓏏 𓇋',
        transliteration: 'hꜢ Wnjs, n šm.n.k jś mwt.tj, šm.n.k jś ꜥnḫ.tj!',
        translationKo: '오 우나스여, 그대는 정녕 죽은 자로서 떠나간 것이 아니요, 살아 숨 쉬는 신성한 존재로서 영광 중에 나아갔도다!',
        sourceGrade: 'Grade A',
        epigraphyMethod: '3D 현장 측량, Sethe 표준 교감 판본 및 다각도 반사광(RTI) 판독',
        notes: '인류 역사상 가장 오래된 종교 제의 텍스트 코퍼스. 지하 묘실 벽면 전체를 음각 성각문자로 도배하여 부활과 승천을 주조.'
      },
      {
        id: 'src-3-2',
        artifactId: 'narmer-palette',
        nameKo: '나르메르 팔레트',
        nameEnOrOriginal: 'The Narmer Palette (Cairo JE 32169 / CG 14716)',
        catalogNo: 'Cairo Egyptian Museum JE 32169 / CG 14716',
        institution: 'Egyptian Museum, Cairo',
        dateVector: {
          eventDateBCE: 3100,
          compositionDateBCE: 3100,
          witnessDateBCE: 3100
        },
        originalScript: '𓅃\n𓆛 𓍋\n𓊁',
        transliteration: 'Nꜥr-mr (Horus Narmer)',
        translationKo: '상·하 이집트 최초의 통일 파라오 호루스 나르메르의 세레크 궁전 정면 왕명',
        sourceGrade: 'Grade A',
        epigraphyMethod: '히에라콘폴리스 호루스 신전 Main Deposit 정밀 발굴 출토품 및 비문 자형 분석',
        notes: '공개적 신전 마당에 세워져 왕권의 승리와 폭력적 지배의 정당성을 시각화한 기념비적 석판.'
      },
      {
        id: 'src-3-3',
        artifactId: 'diary-of-merer',
        nameKo: '와디 알-자르프 메레르의 일기 파피루스',
        nameEnOrOriginal: 'Diary of Merer (Papyrus Jarf A–D)',
        catalogNo: 'P. Jarf A–D / Cairo Egyptian Museum',
        institution: 'Egyptian Museum, Cairo / IFAO',
        dateVector: {
          eventDateBCE: 2550,
          compositionDateBCE: 2550,
          witnessDateBCE: 2550
        },
        originalScript: '𓇋 𓏏 𓂋 𓅱 𓈖 𓈞 𓊃 𓅱',
        transliteration: 'jtrw n Hzw (Diary of Inspector Merer)',
        translationKo: '감독관 메레르의 쿠푸 대피라미드 투라 석회석 운송 일지 및 일일 작업 일지',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'Pierre Tallet 발굴 보고서(2017) 및 히에라틱 고문서학 판독',
        notes: '홍해 해안 건조 동굴에서 출토된 인류 최고(最古)의 행정 파피루스로, 4왕조 일상 관료제의 실재를 실증.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-3-1',
        topic: '피라미드 텍스트의 본질: 자율적 영구 기계(Allen)인가, 기념비적 의례 아카이브(Hays)인가?',
        thesisA: {
          scholarOrSchool: '제임스 P. 앨런 (James P. Allen, 2005, 2013)',
          eraOrYear: '2005–2013',
          claimKo: '사제의 구술 행위는 일회적이며, 벽면에 영구히 음각된 성각문자 자체가 오시리스 신화를 매 순간 영원히 재생시키는 자율적 우주 기계임.',
          keyEvidence: '빛과 관객이 완전히 차단된 암흑 속 지하 현실에 새겨진 방대한 텍스트의 공간적 완결성.'
        },
        thesisB: {
          scholarOrSchool: '해롤드 M. 헤이스 (Harold M. Hays, 2012)',
          eraOrYear: '2012',
          claimKo: '피라미드 텍스트는 매장 당일 사제들이 낭송했던 구체적인 장례 제의 의식(ḏd-mdw)의 순서와 대본을 공간적으로 고정한 기념비적 아카이브임.',
          keyEvidence: '북쪽 벽 제물 봉헌 의례에서 남쪽 벽 부활 의례로 이어지는 사제의 실제 동선과 텍스트 배치의 엄격한 일치.'
        },
        consensusStatus: '현대 이집트학은 사제들의 음성 제의 수행(대본)과 문자 자체의 영구적 주술 효력(기계)이 상호보완적으로 결합된 것으로 종합함.'
      },
      {
        id: 'deb-3-2',
        topic: '장례 문헌 1,500년 변천: 브레스티드의 ‘내세 민주화’ vs 현대의 ‘지방 엘리트 권력 전유’',
        thesisA: {
          scholarOrSchool: '제임스 헨리 브레스티드 (James Henry Breasted, 1912)',
          eraOrYear: '1912',
          claimKo: '피라미드 텍스트에서 관 텍스트, 사자의 서로의 이행은 왕실 독점에서 일반 민중으로 구원이 확산된 ‘내세의 민주화’ 과정임.',
          keyEvidence: '중왕국 이후 비왕실 귀족 및 서민 무덤에서 장례 주문이 대량으로 출토되는 현상.'
        },
        thesisB: {
          scholarOrSchool: '마크 스미스 & 하르코 빌렘스 (Mark Smith 2017, Harco Willems 1996, 2014)',
          eraOrYear: '1996–2017',
          claimKo: '민주화는 20세기 서구 자유주의의 시대착오적 투영이며, 실제로는 제1중간기 왕권 붕괴 속에서 지방 노마르크들이 왕실 제의 권위를 참칭하고 신왕국 관료들이 상업적으로 구매한 결과임.',
          keyEvidence: '관 텍스트는 지방 최고위 귀족 무덤에 국한되며, 신왕국 사자의 서 역시 부유한 관료 계층의 상업적 소비에 한정됨.'
        },
        consensusStatus: '현대 고전 이집트학은 브레스티드의 민주화 가설을 완전히 폐기하고, 정치사회적 분열과 엘리트의 제의 권력 전유 모델을 표준 학설로 채택함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-3-1',
        sourceGrade: 'Grade A',
        author: 'Allen, James P.',
        year: 2005,
        title: 'The Ancient Egyptian Pyramid Texts',
        publication: 'SBL Writings from the Ancient World 23, Atlanta: Society of Biblical Literature.'
      },
      {
        id: 'bib-3-2',
        sourceGrade: 'Grade A',
        author: 'Hays, Harold M.',
        year: 2012,
        title: 'The Organization of the Pyramid Texts: Typology and Approaches',
        publication: 'Papyrologica Bruxellensia 37, Bruxelles: Fondation Égyptologique Reine Élisabeth.'
      },
      {
        id: 'bib-3-3',
        sourceGrade: 'Grade A',
        author: 'Baines, John',
        year: 2007,
        title: 'Visual and Written Culture in Ancient Egypt',
        publication: 'Oxford: Oxford University Press.'
      },
      {
        id: 'bib-3-4',
        sourceGrade: 'Grade A',
        author: 'Smith, Mark',
        year: 2017,
        title: 'Following Osiris: Perspectives on the Osirian Afterlife from Four Millennia',
        publication: 'Oxford: Oxford University Press.'
      },
      {
        id: 'bib-3-5',
        sourceGrade: 'Grade A',
        author: 'Willems, Harco',
        year: 1996,
        title: 'The Coffin of Heqata: A Case Study of Egyptian Mortuary Culture of the Middle Kingdom',
        publication: 'Leuven: Peeters.'
      },
      {
        id: 'bib-3-6',
        sourceGrade: 'Grade A',
        author: 'Tallet, Pierre',
        year: 2017,
        title: "Les papyrus de la mer Rouge I: Le 'Journal de Merer'",
        publication: 'MIFAO 136, Cairo: IFAO.'
      },
      {
        id: 'bib-3-7',
        sourceGrade: 'Grade B',
        author: 'Assmann, Jan',
        year: 2002,
        title: 'The Mind of Egypt: History and Meaning in the Time of the Pharaohs',
        publication: 'New York: Metropolitan Books.'
      },
      {
        id: 'bib-3-8',
        sourceGrade: 'Grade B',
        author: 'Kemp, Barry J.',
        year: 2006,
        title: 'Ancient Egypt: Anatomy of a Civilization (2nd ed.)',
        publication: 'London: Routledge.'
      }
    ]
  },
  {
    id: 'essay-4-homer-textualization',
    order: 4,
    title: '4. 호메로스는 언제 텍스트가 되었는가?',
    subtitle: '구전 운율 서사시에서 아테네 축제 정본과 알렉산드리아 비평본으로: 다형성과 문자화의 800년',
    summary: '호메로스 서사시는 한 번의 붓질로 완성된 책이 아니다. 미케네 붕괴 후 400년 구전 암흑기를 거쳐 알파벳 도입, 아테네 파나테나이아 축제 낭송 법제화, 알렉산드리아 도서관 비평 기호학이 800년에 걸쳐 유기적으로 빚어낸 다형적 결정체였다.',
    content: `그리스 알파벳의 등장(c. 775 BCE) 이후 호메로스의 《일리아스》와 《오디세이아》가 어떤 역사적 과정을 거쳐 고정된 문헌 텍스트로 정착되었는가는 서양 고전학의 가장 중심적인 화두(The Homeric Question)이다.

초기 알파벳 금석문인 디필론 오이노코에와 네스토르의 잔은 알파벳이 회계 장부가 아닌 춤과 향연의 운율(아이암보스 3보격 및 6각운) 표기와 밀접히 결합되었음을 보여준다. 방대한 서사시가 국가적 텍스트로 고정된 것은 BCE 6세기 아테네 참주 페이시스트라토스의 파나테나이아 축제 랩소도스 낭송 규칙(ex hypolepseos)과 헬레니즘 알렉산드리아 도서관의 엄밀한 비평 기호학(오벨로스 등)을 통해서였다.

구전 가창의 생명력과 알파벳 텍스트의 고정성이 800년에 걸쳐 공진화함으로써 서구 문학의 영원한 정전(Canon)이 탄생했다.`,
    keyTakeaways: [
      '미케네 Linear B 붕괴(c. 1200 BCE) 후 400년의 구전 암흑기를 거쳐 기원전 8세기 중엽 페니키아 자음을 모음화한 그리스 알파벳 탄생',
      '최고(最古)의 알파벳 유물(디필론 오이노코에, 네스토르의 잔)은 장부가 아닌 춤 경연과 향연의 운율(아이암보스 3보격 및 6각운) 표기를 담음',
      '배리 파월의 6각운 전용 어댑터 가설과 에우보이아 해상 무역 접촉 지대(피테쿠사이, 에레트리아, 메토네)의 다언어 교역 모델 통합',
      '아테네 참주 페이시스트라토스의 파나테나이아 축제 낭송 규칙(ex hypolepseos)을 통한 서사시 공연 순서의 법제화',
      '알렉산드리아 도서관학파(제노도토스, 아리스타르코스)의 비평 기호학(오벨로스, 디플레이 등)과 프톨레마이오스 ‘야생 파피루스’의 15% 잉여 행 역설',
      '하버드 HMP 프로젝트의 Venetus A(Marcianus Graecus Z. 454)와 그레고리 나지의 5단계 진화론적 다형성(Multiformity) 패러다임'
    ],
    civilizationsDiscussed: ['greece'],
    readingTimeMinutes: 9,
    relatedArtifactIds: ['dipylon-inscription', 'cup-of-nestor-pithekoussai', 'methone-eretrian-inscriptions', 'homeric-textualization-iliad'],
    crossRefEssayIds: ['essay-6-orality-and-text', 'essay-7-preservation-bias', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-4-1',
        order: 1,
        headingKo: '1. 문자가 없던 400년 암흑기와 그리스 알파벳의 귀환',
        subheadingKo: '미케네 Linear B 붕괴와 아오이도이(Aoidoi)의 구술 공식구',
        content: `기원전 1200년경 미케네 궁전 문명이 화재와 함께 붕괴하면서 관료들이 점토판에 쓰던 음절 문자 Linear B는 완전히 소멸했다. 이후 약 400년 동안 그리스 세계는 단 한 줄의 문자 기록도 남기지 않은 ‘문자의 암흑기(Dark Ages, c. 1100–800 BCE)’를 통과했다.

그러나 트로이 전쟁의 영웅 서사는 단절되지 않았다. 문자를 모르는 구전 가인 아오이도이(Aoidoi)들은 키타라 현을 뜯으며 6각운(Dactylic Hexameter)의 엄격한 공식구(Formula)를 타고 영웅들의 무훈을 세대에서 세대로 노래했다. 기원전 8세기 중엽(c. 775–750 BCE), 레반트 무역로를 장악한 에우보이아 상인들이 페니키아 자음 문자를 수입하여 모음(Vowels)을 창안하면서 그리스 알파벳이 탄생했다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 밀먼 패리·앨버트 로드의 구전 공식구 이론',
          bodyKo: '밀먼 패리(Milman Parry)와 앨버트 로드(Albert Lord)는 호메로스 서사시가 문자로 기록된 책이 아니라, ‘공식구(Formula)’와 ‘전형적 장면(Theme)’의 조합을 통해 매 공연마다 즉흥 재창작된 살아있는 구전 시학의 산물임을 실증했다.'
        }
      },
      {
        id: 'sec-4-2',
        order: 2,
        headingKo: '2. 초기 알파벳 유물의 반전: 춤과 향연, 그리고 운율 비문',
        subheadingKo: '디필론 오이노코에(c. 740 BCE)와 네스토르의 잔(c. 735 BCE)',
        content: `오리엔트의 문자가 회계 장부로 시작했던 것과 달리, 그리스 알파벳의 가장 이른 고고학적 유물들은 모두 **시(Poetry), 춤, 그리고 향연(Symposium)**을 담고 있다.

아테네 디필론 묘지에서 출토된 **디필론 오이노코에(Dipylon Oinochoe, c. 740 BCE)** 포도주 주전자 어깨에는 "가장 활기차게 뛰노는 자에게 이 항아리를 주노라"라는 완벽한 6각운 시 구절이 우횡서(Retrograde)로 음각되어 있다. 

또한 이탈리아 남부 이스키아 섬에서 발굴된 **네스토르의 잔(Cup of Nestor, c. 735 BCE)**에는 1행 아이암보스 3보격 표제와 2~3행 6각운으로 《일리아스》 11권의 노장 네스토르 황금 잔을 패러디한 3행의 운문이 새겨져 있었다.`,
        originalQuote: {
          originalScript: 'ΝΕΣΤΟΡΟΣ : [..] : ΕΥΠΟΤ[ΟΝ] : ΠΟΤΕΡΙΟΝ\nhΟΣ Δ’ ΑΝ ΤΟΔΕ ΠΙΕΣΙ : ΠΟΤΕΡΙ[Ο] : ΑΥΤΙΚΑ ΚΕΝΟΝ\nhΙΜΕΡ[ΟΣ hΑΙΡ]ΕΣΕΙ : ΚΑΛΛΙΣΤ[ΕΦΑ]ΝΟ : ΑΦΡΟΔΙΤΕΣ',
          transliteration: "Nestoros [eimi] eupoton poterion; hos d' an tode piesi poterio, autika kenon himeros hairesei kallistephano Aphrodites.",
          translationKo: '나는 네스토르의 마시기 좋은 잔이라. 누구든 이 잔을 비우는 자는, 그 즉시 아름다운 관을 쓴 아프로디테의 욕망에 사로잡히리라!',
          sourceCitation: '피테쿠사이 네스토르의 잔 3행 비문 (CEG 454 / Pithekoussai 166705, c. 735 BCE)'
        }
      },
      {
        id: 'sec-4-3',
        order: 3,
        headingKo: '3. 배리 파월의 가설과 에우보이아 무역 접촉 지대 모델',
        subheadingKo: '6각운 서사시 전용 표기설과 다언어 교역망의 공진화',
        content: `고전학자 배리 파월(Barry B. Powell 1991)은 그리스 알파벳이 상업 장부가 아니라 호메로스 6각운 서사시의 장단음 운율을 정확히 포착하기 위해 단 한 명의 어댑터에 의해 고안되었다는 가설을 제시했다.

21세기 고전학(Roger Woodard 1997; Irad Malkin 1998)은 파월의 단선론을 넘어, 에우보이아 상인들의 지중해 해상 무역 네트워크(피테쿠사이, 에레트리아, 메토네)라는 다언어 접촉 지대(Contact Zone) 속에서 알파벳이 상업 신용, 소유권 표기, 그리고 엘리트 향연 문화와 결합되어 급속히 확산되었음을 논증한다.`
      },
      {
        id: 'sec-4-4',
        order: 4,
        headingKo: '4. 구전 가창에서 아테네 축제 정본으로: 페이시스트라토스 참주 기획',
        subheadingKo: '파나테나이아 제전과 랩소도스 릴레이 낭송(ex hypolepseos) 법제화',
        content: `수만 행의 방대한 서사시가 국가적 텍스트로 고정된 것은 기원전 6세기 아테네 참주 **페이시스트라토스(Peisistratos, 재위 c. 561–527 BCE)**의 정치적 결단에 의해서였다.

그는 4년마다 열리는 파나테나이아 대축제에서 낭송가 랩소도스(Rhapsodes)들이 각자 임의로 건너뛰며 부르던 관행을 금지하고, 아테네 공인 대본에 따라 "앞 사람이 멈춘 곳에서 이어받아 순서대로(ex hypolepseos ephexes)" 완창하도록 법제화했다([Plato] *Hipparchus* 228b). 이를 통해 호메로스는 범그리스 민족 정전으로 우뚝 섰다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '사료 증언: 키케로의 기록',
          bodyKo: '로마의 키케로는 《변론가론》(De Oratore 3.137)에서 "이전까지 흩어져 있던 호메로스의 책들을 최초로 오늘날의 순서대로 정렬하고 엮어낸 인물은 바로 페이시스트라토스였다"고 증언했다.'
        }
      },
      {
        id: 'sec-4-5',
        order: 5,
        headingKo: '5. 알렉산드리아 도서관과 비평 기호학: 야생 파피루스와 다형성',
        subheadingKo: '아리스타르코스의 오벨로스(—) 비평과 프톨레마이오스조 파피루스의 잉여 행',
        content: `헬레니즘 시대 기원전 3~2세기, 알렉산드리아 왕립 도서관의 학자들(제노도토스, 아리스토파네스, 아리스타르코스)은 지중해 전역의 도시별 판본(hai kata poleis)을 대조 교감했다.

아리스타르코스는 의심스러운 행이라도 본문에서 칼로 지우지 않고 본문을 보존한 채 여백에 비평 기호(오벨로스 —, 디플레이 > 등)를 달았다(*Aristarchus non delevit sed obelo notavit*). 기원전 150년 이전 프톨레마이오스 파피루스(P.Hibeh 19–22 등)에 10~15% 이상의 잉여 행(Plus-verses)이 만연했던 사실은 호메로스 텍스트가 오랜 세월 다형성(Multiformity)의 상태로 공존했음을 실증한다.`,
        originalQuote: {
          originalScript: '— Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος \n> οὐλομένην, ἣ μυρί\' Ἀχαιοῖς ἄلγε\' ἔθηκε',
          transliteration: "Mênin áeide theà Pēlēïádeō Akhilêos / ouloménēn, hḕ myrí' Akhaioîs álge' éthēke",
          translationKo: '— [오벨로스 기호: 위작 의심] 노래하소서, 여신이여! 펠레우스의 아들 아킬레우스의 분노를!\n> [디플레이 기호: 주목 구절] 아카이오이족에게 무수한 고통을 안겨준 그 파멸적 분노를!',
          sourceCitation: 'Venetus A (Marcianus Graecus Z. 454) Folio 12r, 일리아스 1권 1-2행 여백 주석'
        }
      },
      {
        id: 'sec-4-6',
        order: 6,
        headingKo: '6. 베네투스 A 사본과 그레고리 나지의 5단계 진화 모델',
        subheadingKo: '10세기 마르키아누스 코덱스와 4인 주석가 집성본(Viermännerwerk)',
        content: `하버드 대학의 **Homer Multitext(HMP)** 프로젝트가 디지털 분석한 10세기 사본 **Venetus A(Marcianus Graecus Z. 454 = 822)**는 헬레니즘-로마 4대 학자(*Viermännerwerk*: 아리스토니코스, 디디모스, 헤로디아노스, 니카노르)의 주석을 완벽히 보존하고 있다.

그레고리 나지(Gregory Nagy)는 호메로스의 텍스트화를 (1) 구전 가창기, (2) 범그리스 결정화기, (3) 아테네 제전 정서기, (4) 알렉산드리아 학술 교감기, (5) 기원전 2세기 중엽 불가타(Vulgate) 안정화기로 이어지는 5단계 진화 모델로 정립했다.`
      },
      {
        id: 'sec-4-7',
        order: 7,
        headingKo: '7. 보존 편향(Taphonomic Bias): 도자기의 생존과 유실된 파피루스',
        subheadingKo: '그리스 산성 토양의 유기물 부식과 이집트 사막 쓰레기장의 기적',
        content: `오늘날 우리가 호메로스의 기원을 도자기 파편에서 찾는 것은 고대 그리스 지질학이 낳은 도자기 보존 편향(Ceramic Preservation Bias)이다(Barry Kemp 2006; Rosalind Thomas 1992).

구운 점토(Terracotta)는 산성 토양에서도 영구히 보존되지만, 당시 사용된 목재 서판(*pinakes*), 가죽 두루마리(*diphtherai*), 수입 파피루스는 그리스 본토의 습한 토양에서 100% 부식되었다. 수천 점의 호메로스 파피루스가 이집트(옥시린쿠스, 파이윰)에서만 출토되는 것은 극건조 사막 미기후 덕분이며, 그리스 본토의 유일한 고전기 파피루스는 탄화된 **데르베니 파피루스(P.Derveni, c. 340 BCE)**뿐이다.`
      }
    ],
    primarySources: [
      {
        id: 'src-4-1',
        artifactId: 'dipylon-inscription',
        nameKo: '아테네 디필론 오이노코에 비문',
        nameEnOrOriginal: 'Dipylon Oinochoe Inscription (NAM 192 / IG I³ 1150 / CEG 432)',
        catalogNo: 'Athens National Archaeological Museum NAM 192 / IG I³ 1150 / CEG 432',
        institution: 'National Archaeological Museum, Athens',
        dateVector: {
          eventDateBCE: 740,
          compositionDateBCE: 740,
          witnessDateBCE: 740
        },
        originalScript: 'ΗΟΣ ΝΥΝ ΟΡΧΕΣΤΟΝ ΠΑΝΤΟΝ ΑΤΑΛΟΤΑΤΑ ΠΑΙΖΕΙ ΤΟ ΤΟΔΕ ΚΑ...',
        transliteration: 'hòs nûn orkhēstôn pántōn atalṓtata paízei, tô tóde ka[---]',
        translationKo: '지금 모든 무용수들 가운데 가장 활기차게 뛰노는 자가, 이 항아리를 (상으로 받으리라)...',
        sourceGrade: 'Grade A',
        epigraphyMethod: '고졸기 아티카 우횡서(Retrograde) 실측, CEG 432 및 Jeffery LSAG 교감',
        notes: '인류 역사상 가장 오래된 그리스 알파벳 6각운(Dactylic Hexameter) 시 구절 각문.'
      },
      {
        id: 'src-4-2',
        artifactId: 'cup-of-nestor-pithekoussai',
        nameKo: '피테쿠사이 네스토르의 잔',
        nameEnOrOriginal: "Nestor's Cup of Pithekoussai (CEG 454 / Pithekoussai Inv. 166705)",
        catalogNo: 'Museo Archeologico di Pithecusae 166705 / CEG 454',
        institution: 'Museo Archeologico di Pithecusae, Ischia, Italy',
        dateVector: {
          eventDateBCE: 735,
          compositionDateBCE: 735,
          witnessDateBCE: 735
        },
        originalScript: 'ΝΕΣΤΟΡΟΣ : [..] : ΕΥΠΟΤ[ΟΝ] : ΠΟΤΕΡΙΟΝ\nhΟΣ Δ’ ΑΝ ΤΟΔΕ ΠΙΕΣΙ : ΠΟΤΕΡΙ[Ο] : ΑΥΤΙΚΑ ΚΕΝΟΝ\nhΙΜΕΡ[ΟΣ hΑΙΡ]ΕΣΕΙ : ΚΑΛΛΙΣΤ[ΕΦΑ]ΝΟ : ΑΦΡΟΔΙΤΕΣ',
        transliteration: "Nestoros [eimi] eupoton poterion; hos d' an tode piesi poterio, autika kenon himeros hairesei kallistephano Aphrodites.",
        translationKo: '나는 네스토르의 마시기 좋은 잔이라. 누구든 이 잔을 비우는 자는 즉시 아름다운 관을 쓴 아프로디테의 욕망에 사로잡히리라!',
        sourceGrade: 'Grade A',
        epigraphyMethod: '에우보이아 붉은 알파벳 자형 분석, 삼점 구획자(:) 및 1행 아이암보스 3보격 + 2~3행 6각운 교감',
        notes: '일리아스 11권 네스토르의 황금 잔을 패러디한 최고(最古)의 3행 운율 비문.'
      },
      {
        id: 'src-4-3',
        artifactId: 'homeric-textualization-iliad',
        nameKo: '베네투스 A 사본과 알렉산드리아 비평 스콜리아',
        nameEnOrOriginal: 'Venetus A Manuscript (Marcianus Graecus Z. 454 = 822) with Scholia A',
        catalogNo: 'Biblioteca Nazionale Marciana Marc. Gr. Z. 454 (= 822)',
        institution: 'Biblioteca Nazionale Marciana, Venice / Harvard Homer Multitext',
        dateVector: {
          eventDateBCE: 750,
          compositionDateBCE: 750,
          redactionDateBCE: 150,
          witnessDateBCE: 'CE 950 (10세기 사본)'
        },
        originalScript: '— Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος \n> οὐλομένην, ἣ μυρί\' Ἀχαιοῖς ἄلγε\' ἔθηκε',
        transliteration: "Mênin áeide theà Pēlēïádeō Akhilêos / ouloménēn, hḕ myrí' Akhaioîs álge' éthēke",
        translationKo: '오벨로스(—)와 디플레이(>) 기호가 부기된 일리아스 1권 표제행과 고대 알렉산드리아 학자들의 여백 주석',
        sourceGrade: 'Grade A',
        epigraphyMethod: '하버드 HMP 디지털 다중스펙트럼 IIIF 고해상도 아카이브 및 Erbse 스콜리아 교감',
        notes: '알렉산드리아 도서관장들의 비평 기호 체계와 4인 주석가(Viermännerwerk) 스콜리아가 온전히 보존된 최고 사본.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-4-1',
        topic: '호메로스 서사시의 성립 과정: 8세기 단일 구술-필기론(West/Janko) vs 5단계 진화 및 다형성 모델(Nagy/HMP)',
        thesisA: {
          scholarOrSchool: '마틴 L. 웨스트 & 리처드 얀코 (M.L. West 2001, Richard Janko 1982)',
          eraOrYear: '1982–2001',
          claimKo: '호메로스는 기원전 8세기 단 한 명의 위대한 시인이 알파벳 서기관에게 서사시 전편을 구술하여 탄생시킨 기념비적 텍스트(Monumental Dictation)이다.',
          keyEvidence: '서사시 내 고졸기 이오니아·아이올리스 방언 지층 통계 및 디감마(ϝ) 화석화 현상.'
        },
        thesisB: {
          scholarOrSchool: '그레고리 나지 & 하버드 HMP (Gregory Nagy 1996, 2004, Casey Dué 2010)',
          eraOrYear: '1996–현재',
          claimKo: '단일 저자 원형(Urtext)은 존재하지 않으며, 구전 유동성에서 아테네 파나테나이아 축제 낭송 규칙과 알렉산드리아 도서관 비평을 거치며 800년간 점진적으로 결정화된 다형성(Multiformity)의 산물이다.',
          keyEvidence: 'Venetus A 사본의 알렉산드리아 비평 기호 및 프톨레마이오스 파피루스들의 15% 잉여 행(Plus-verses).'
        },
        consensusStatus: '현대 고전학계는 얀코의 언어 지층 연구와 나지의 제전 진화 모델을 변증법적으로 통합하여, 구전성과 문자성의 상보적 공생(Written Orality)으로 해석함.'
      },
      {
        id: 'deb-4-2',
        topic: '그리스 알파벳 발명 동기: 6각운 서사시 전용 표기설(Powell) vs 다언어 무역 접촉 지대 모델(Woodard/Malkin)',
        thesisA: {
          scholarOrSchool: '배리 파월 (Barry B. Powell, 1991)',
          eraOrYear: '1991',
          claimKo: '그리스 알파벳의 모음 체계는 상업 장부가 아니라 호메로스 6각운 서사시의 장단음 운율을 완벽히 표기하기 위해 고안되었다.',
          keyEvidence: '가장 이른 알파벳 유물들(디필론, 네스토르의 잔)이 모두 운문 시 구절을 담고 있는 현상.'
        },
        thesisB: {
          scholarOrSchool: '로저 우다드 & 이라드 말킨 (Roger Woodard 1997, Irad Malkin 1998)',
          eraOrYear: '1997–2016',
          claimKo: '알파벳은 에우보이아-페니키아 해상 교역망의 다언어 접촉 지대에서 상업 신용, 소유권 표기, 향연 유희가 결합되어 자연발생적으로 어댑테이션되었다.',
          keyEvidence: '피테쿠사이, 에레트리아, 메토네 등 다언어 무역항에서 출토된 다양한 상업 및 소유자 명문.'
        },
        consensusStatus: '현대 학계는 모음 체계의 운율 적합성을 인정하면서도, 알파벳 확산의 사회경제적 배경으로 에우보이아 해상 교역망 모델을 광범위하게 수용함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-4-1',
        sourceGrade: 'Grade A',
        author: 'Nagy, Gregory',
        year: 2004,
        title: "Homer's Text and Language",
        publication: 'Urbana: University of Illinois Press.',
        urlOrDoi: 'https://www.homermultitext.org/'
      },
      {
        id: 'bib-4-2',
        sourceGrade: 'Grade A',
        author: 'West, M. L.',
        year: 2001,
        title: 'Studies in the Text and Transmission of the Iliad',
        publication: 'München: K.G. Saur.'
      },
      {
        id: 'bib-4-3',
        sourceGrade: 'Grade A',
        author: 'Janko, Richard',
        year: 1982,
        title: 'Homer, Hesiod and the Hymns: Diachronic Development in Epic Diction',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-4-4',
        sourceGrade: 'Grade A',
        author: 'Dué, Casey & Ebbott, Mary',
        year: 2010,
        title: 'Iliad 10 and the Poetics of Ambush: A Multitext Edition with Essays and Commentary',
        publication: 'Washington, DC: Center for Hellenic Studies.'
      },
      {
        id: 'bib-4-5',
        sourceGrade: 'Grade B',
        author: 'Powell, Barry B.',
        year: 1991,
        title: 'Homer and the Origin of the Greek Alphabet',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-4-6',
        sourceGrade: 'Grade B',
        author: 'Lord, Albert B.',
        year: 1960,
        title: 'The Singer of Tales',
        publication: 'Cambridge, MA: Harvard University Press.'
      },
      {
        id: 'bib-4-7',
        sourceGrade: 'Grade B',
        author: 'Thomas, Rosalind',
        year: 1992,
        title: 'Literacy and Orality in Ancient Greece',
        publication: 'Cambridge: Cambridge University Press.'
      }
    ]
  },
  {
    id: 'essay-5-biblical-four-dates',
    order: 5,
    title: '5. 성서의 “원본”은 존재하는가?',
    subtitle: '6중 연대 층위와 사해문서가 보여주는 텍스트 다형성: 다중 문학 판본과 사본 물질성의 문명사',
    summary: '단 하나의 무오한 친필 원본(Urtext)이란 근대적 환상이다. 6중 연대 층위, 사해문서 4대 텍스트 군집, 4QSam-a 및 4QJer-b/d 다중 문학 판본, 그리고 사해 지구대 타포노미 보존 편향이 이를 증명한다.',
    content: `히브리 성서 연구에서 가장 필수적인 학술 원칙은 사건 지평에서 마소라 수렴까지 이어지는 6중 연대 층위의 분리다.

기원전 600년경 케테프 힌놈(KH2) 은제 부적의 축약된 축복문과 쿰란 동굴의 4QSam-a, 4QJer-b/d 사본은 고대 성서 전승이 닫힌 화석이 아니라 능동적인 텍스트 다형성(Pluriformity)의 생태계였음을 보여준다.

19세기 '얌니아 공의회' 신화와 달리, 기원후 1세기 말 마소라 본문(MT)으로의 표준화는 로마의 제2성전 파괴(70 CE)와 바르 코크바 항쟁(132–135 CE)으로 인한 라이벌 분파 절멸의 비극적 역사 생태학적 결과였다.`,
    keyTakeaways: [
      '사건 지평 ➔ 고대 구전 시가 ➔ 왕정기/Dtr1 ➔ 포로기/사제문서(P) ➔ 헬레니즘 판본 ➔ 마소라 수렴으로 이어지는 6중 연대 층위 확립',
      '케테프 힌놈 2호(KH2) 은제 부적은 민수기 6장 MT 3행과 달리 은혜 문구가 생략된 2행 병행 축약문으로, 당대 널리 쓰이던 호신용 액막이 제의문(Apotropaic Amulet)이었음',
      '사해문서 4QSam-a(4Q51)와 4QJer-b/d(DJD XV)는 단순 이문이 아니라 유진 울리히가 정립한 ‘다중 문학 판본(Multiple Literary Editions)’의 실재를 증명함',
      '19세기 하인리히 그레츠의 ‘얌니아 회의(Council of Jamnia, c. 90 CE)’ 가설을 폐기하고, 서기 70년 성전 파괴 및 132–135년 바르 코크바 항쟁이 낳은 생존 분파 독점(무라바아트/나할헤베르 100% MT 일치)으로 표준화 메커니즘을 재정립',
      '사해 지구대(-400m MSL)의 극건조 미기후와 예루살렘 고원지대(600mm 우기)의 타포노미 보존 편향(Taphonomic Bias), 다윗성 불라 섬유흔, 엔-게디 탄화 두루마리 마이크로 CT 가상 전개의 문명사적 함의'
    ],
    civilizationsDiscussed: ['israel-judah'],
    readingTimeMinutes: 9,
    relatedArtifactIds: ['ketef-hinnom-silver-scrolls', 'dead-sea-scrolls-1qisa', 'tel-dan-stele', 'siloam-tunnel-inscription', 'lachish-letters-ostraca'],
    crossRefEssayIds: ['essay-4-homer-textualization', 'essay-6-orality-and-text', 'essay-7-preservation-bias', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-5-1',
        order: 1,
        headingKo: '1. ‘단 하나의 무오한 친필 원본’이라는 근대적 환상과 그 해체',
        subheadingKo: '폴 드 라가르드의 우르텍스트(Urtext) 계통수 가설과 사해문서의 충격',
        content: `오늘날 대다수의 독자들은 서점에서 표지가 완벽히 정제된 단 한 권의 성경책을 마주하며, 고대 어딘가에 모세나 다윗, 이사야가 양피지 위에 최초로 적어 내려간 무결한 '친필 원본(Original Autograph)'이 존재했고 후대 필사자들은 그것을 복제하기만 했다는 가정을 무의식적으로 품는다.

19세기 독일의 본문비평가 폴 드 라가르드(Paul de Lagarde, 1827–1891)는 현존하는 모든 사본의 계통수(Stemma)를 거슬러 올라가면 단 하나의 단일 원본(Urtext)에 도달할 수 있다는 '단일 계통수 가설'을 수립했다. 라가르드는 기원후 2세기 랍비 유대교가 단 하나의 표준 사본을 채택하여 모든 이본을 파괴했다고 보았으며, 20세기 중반까지 성서학계는 현존 사본들의 차이를 원본에서 퇴색된 '필사 오류(scribal errors)'로만 간주했다.

그러나 1947년 이후 유다 광야 쿰란 11개 동굴에서 쏟아져 나온 230여 점의 성서 사본들은 이 단선적 도식을 근본적으로 무너뜨렸다. 쿰란의 가죽 두루마리들은 기원전 3세기부터 기원후 1세기까지 고대 유대교 사회에 '단 하나의 표준 성서'란 존재하지 않았으며, 서로 다른 문학적 편집 층위와 번역 대본들이 동등한 종교적 권위를 누리며 공존했던 **'텍스트 다형성의 생태계(Pluriformity Ecosystem)'**가 실재했음을 입증했다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 폴 드 라가르드의 단일 원본설 vs 에마누엘 토브의 텍스트 다형성론',
          bodyKo: '19세기 폴 드 라가르드(Paul de Lagarde)는 모든 이본을 거슬러 올라가면 단 하나의 성서 원본(Urtext)에 도달할 수 있다고 믿었다. 반면 사해문서 본문비평의 최고 권위자 에마누엘 토브(Emanuel Tov)는 고대 유대교에 다양한 전승 이본들이 동등한 권위로 공존했던 텍스트 다원성(Textual Pluriformity)이 실재했음을 입증했다.'
        }
      },
      {
        id: 'sec-5-2',
        order: 2,
        headingKo: '2. 6중 연대 층위(Multi-Strata Date Vector)의 방법론적 정립',
        subheadingKo: '사건 지평에서 구전 시가, 포로기 편찬실, 헬레니즘 판본, 마소라 수렴까지',
        content: `성서 문헌을 학술적으로 다룰 때 이야기 속 사건의 연대와 실제 사본의 물리적 제작 연대를 혼동하는 것은 치명적 오류다. 성서는 수백 년에 걸친 역사적 격변 속에서 형성된 복합적 문서 집성체이므로, <장부 이후> 아틀라스는 텍스트를 6개의 독립된 연대 층위로 정밀 분리한다.

1. **사건 지평 (Event Horizon, c. 1250–1000 BCE)**: 청동기 말-철기 I기 역사적 배경 (출애굽, 가나안 정착, 사사 시대).
2. **고대 구전 시가 퇴적기 (Archaic Oral Poetry, c. 1100–800 BCE)**: 문자가 없거나 극히 희소했던 시기의 제의적 가창 (《드보라의 노래》 사사기 5장, 《바다의 노래》 출애굽기 15장).
3. **왕정기 기록 및 신명기 1차 편집 (Monarchic & Dtr1, c. 720–620 BCE)**: 북이스라엘 멸망(722 BCE) 후 히스기야·요시야 시대 유다의 지적 결집과 초기 연대기·예언 전승 수집.
4. **바빌론 포로기 및 페르시아기 사제 문서 편집 (Exilic & P/Dtr2, c. 586–400 BCE)**: 제1성전 파괴(586 BCE)와 유배지 정체성 위기 속에서 사제 문서(P) 편찬 및 에스라-느헤미야의 토라 통합.
5. **헬레니즘기 다중 문학 판본 및 번역 (Hellenistic Editions & LXX, c. 300–100 BCE)**: 알렉산드리아 칠십인역(LXX) 그리스어 번역, 다니엘서(c. 164 BCE) 편입, 쿰란 4QJer-b/d 다중 판본 공존.
6. **현존 사본 증언 및 마소라 수렴 (Witness Manuscripts, c. 150 BCE–CE 1008)**: 쿰란 사본(BCE 150–CE 68) ➔ 바르 코크바 사본(CE 132–135) ➔ 레닌그라드 사본(Codex B19a, CE 1008).`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '연대 벡터 비교: 호메로스 서사시와 히브리 성서의 문명사적 평행성',
          bodyKo: '호메로스 역시 미케네 사건(c. 1200 BCE), 구전 암흑기(c. 1100–800 BCE), 알파벳 도입(c. 750 BCE), 아테네 제전 정서(c. 530 BCE), 알렉산드리아 비평(c. 200 BCE), 중세 Venetus A(CE 950)라는 동일한 다층적 연대 층위를 가진다. 고대 대서사 텍스트의 형성은 동서양을 막론하고 이 다층적 궤적을 따른다.'
        }
      },
      {
        id: 'sec-5-3',
        order: 3,
        headingKo: '3. 최고(最古)의 성서 비문: 케테프 힌놈 은제 부적 (KH2, c. 600 BCE) 정밀 고증',
        subheadingKo: '예루살렘 제24호 무덤 출토 은제 두루마리와 축약된 제사장 축복문',
        content: `1979년 예루살렘 힌놈 골짜기 제24호 암굴 무덤에서 가브리엘 바르카이(Gabriel Barkay) 교수에 의해 발굴된 **케테프 힌놈 은제 두루마리 부적(Ketef Hinnom Silver Scrolls, KH1/KH2)**은 성서 구절이 물리적으로 기록된 인류 역사상 가장 오래된 유물이다.

순도 99%의 얇은 은판(9.7 × 2.7 cm)을 돌돌 말아 목걸이 부적으로 만든 KH2는 바빌론 군대에 의해 제1성전이 파괴되기 직전인 철기 IIB–C기 전환기(c. 650–587 BCE) 유물이다.

가브리엘 바르카이 팀의 고해상도 다중스펙트럼(MSI) 정밀 판독(Barkay et al. 2004)에 따르면, KH2는 민수기 6장 24–26절의 표준 마소라 본문(MT)과 달리 **제2행 후반부(*wiyḥunnekā*)를 생략하고 25행과 26행을 하나로 축약한 2행 병행 구조(Bi-colon formula)**를 띤다. 이는 민수기 책 전체가 존재했다는 증거가 아니라, 제사장 축복 기도문이 성서 책 편찬 수백 년 전부터 당대 유다인들의 일상 신앙 속에 강력한 호신용 액막이 부적(Apotropaic Amulet)으로 유통되고 있었음을 보여준다.`,
        originalQuote: {
          originalScript: '[י]ברכ יהוה [ו][י]שמרכ יאר יהוה פני[ו אליכ ו][ישמ ל]כ שלם',
          transliteration: '[y]brk . yhwh . [w][y]šmrk . yʾr . yhwh . pny[w . ʾlyk . w][yśm . l]k . šlm',
          translationKo: '야훼께서 그대에게 복을 주시고 그대를 지키시기를! 야훼께서 그분의 얼굴을 [그대에게] 비추사 [그대에게] 평강을 [주시기를]! (민수기 6:24-26 축약 제의문)',
          sourceCitation: '케테프 힌놈 제2호 은제 부적 5–12행 (KH2, Israel Museum 80.1/2; Barkay et al. 2004: 61, BASOR 334)'
        }
      },
      {
        id: 'sec-5-4',
        order: 4,
        headingKo: '4. 사해문서와 텍스트 다형성(Pluriformity): 3대 핵심 사본 비교 고증',
        subheadingKo: '4QSam-a(사무엘기), 4QJer-b/d(예레미야서), 1QIsa-a(대이사야서)의 증언',
        content: `쿰란 11개 동굴에서 출토된 230여 점의 성서 사본 중 기원후 10세기 유대교 표준 정본인 마소라 본문(MT)과 일치하는 사본은 약 45~50%에 불과했다. 희랍어 구약 칠십인역(LXX)의 모태가 된 히브리어 이본(10~15%), 사마리아 오경(SP) 계통(15%), 그리고 독자적인 비정렬 독립 계열(20~25%)이 같은 동굴 안에서 평화롭게 공존했다.

1. **4QSam-a (4Q51 / DJD XVII)**: 제10열(Col. X)에 마소라 성서(삼상 10장 말미)에서 탈락된 암몬 왕 나하스의 잔혹 행위 단락을 온전히 보존하여 칠십인역 및 요세푸스 《유대고대사》(6.68–71)와 정확히 일치함.
2. **4QJer-b / 4QJer-d (DJD XV)**: 마소라 본문보다 1/7이 짧고 이방 신탁 배치가 다른 칠십인역 예레미야서의 히브리어 원형(Vorlage)을 보존함으로써 유진 울리히의 '다중 문학 판본(Multiple Literary Editions)'을 실증함.
3. **대이사야 두루마리 (1QIsa-a)**: 모음 보조 자음(*matres lectionis*)을 대폭 늘린 완전철자법(Plene Orthography)으로 당대 음운 체계에 맞춘 언어적 현대화(Linguistic Modernization)를 보여줌.`,
        originalQuote: {
          originalScript: '[ונח]ש מלך בני עמון הוא לחץ את בני גד ואת בני ראובן בחזקה ונקר להם כ[ול עין ימ]ין...',
          transliteration: '[wnḥ]š mlk bny ʿmwn hwʾ lḥṣ ʾt bny gd wʾt bny rʾwbn bḥzqh wnqr lhm k[wl ʿyn ym]yn...',
          translationKo: '암몬 자손의 왕 [나하]스는 갓 자손과 르우벤 자손을 심히 압제하였으며, 그들의 [오른쪽 눈]을 모[두] 후벼 파내어...',
          sourceCitation: '쿰란 제4동굴 사무엘기 사본 제10열 (4Q51 / 4QSam-a Col. X, DJD XVII: 80–84, Cross et al. 2005)'
        }
      },
      {
        id: 'sec-5-5',
        order: 5,
        headingKo: '5. 타포노미(Taphonomy)와 물질 보존 편향: 사막의 침묵과 도심의 부식',
        subheadingKo: '사해 지구대 극건조 미기후, 다윗성 점토 불라 섬유흔, 엔-게디 탄화 두루마리 마이크로 CT',
        content: `쿰란 동굴 사본의 잔존 통계를 고대 유대 사회 전체의 문자 유통 실태로 단순 일반화하는 것은 퇴적보존학(Taphonomy)을 무시한 생존 편향(Survival Bias)이다.

해수면 아래 400m(-400m MSL)의 극건조 사해 지구대 석회암 동굴은 유기물 파피루스와 가죽을 2,000년간 완벽히 보존한 반면, 연 강우량 550~650mm의 혹독한 겨울 우기가 내리는 예루살렘과 사마리아 고원지대에서는 모든 파피루스와 양피지 두루마리가 미생물에 의해 100% 부식 소멸되었다.

그러나 다윗성 발굴지(Area G)에서 출토된 수백 점의 기원전 7~6세기 점토 불라(Bulla) 뒷면에 선명히 찍힌 파피루스 결속 끈과 섬유흔은, 도심에 수천수만 점의 두루마리가 존재했음을 증명한다. 또한 엔-게디(En-Gedi) 회당 화재층에서 발견된 숯덩이가 첨단 마이크로 CT 비파괴 가상 전개(Virtual Unwrapping, Seales et al. 2016)를 통해 마소라 본문과 100% 일치하는 《레위기》 1–2장으로 복원된 것은 사료의 침묵을 문해의 부재로 오판해서는 안 됨을 보여준다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '디지털 비문학 혁신: 엔-게디 탄화 두루마리 가상 전개 (Seales et al. 2016)',
          bodyKo: '켄터키 대학 브렌트 실스(W. Brent Seales) 연구팀은 탄화된 숯덩이 상태의 엔-게디 두루마리를 비파괴 마이크로 CT 3D 스캔하여 컴퓨터 상에서 가상으로 펴내 레위기 1–2장의 완벽한 히브리어 텍스트를 읽어내는 데 성공했다.'
        }
      },
      {
        id: 'sec-5-6',
        order: 6,
        headingKo: '6. 서기 70년 성전 파괴, 바르 코크바 항쟁, 그리고 마소라 본문의 배타적 수렴',
        subheadingKo: '19세기 ‘얌니아 회의’ 신화의 폐기와 와디 무라바아트 사본의 100% 마소라 일치',
        content: `텍스트 다형성의 바다가 어떻게 단 하나의 마소라 본문(MT) 독점으로 수렴되었는가?

1871년 하인리히 그레츠가 주장했던 '얌니아 회의(Council of Jamnia, c. 90 CE)' 가설은 현대 성서학(Jack P. Lewis 1992; Timothy Lim 2010)에 의해 허구로 판명되었다. 얌니아 학당은 정전을 결의한 기독교식 공의회가 아니었다.

실제 표준화의 동력은 **서기 70년 로마의 제2성전 파괴와 132–135년 바르 코크바 항쟁(Bar Kokhba Revolt)**이라는 지정학적 파멸이었다. 사두개파, 쿰란 에세네파, 헬레니즘 디아스포라 유대교 등 독자적 이본을 보존하던 라이벌 분파들이 물리적으로 절멸하고, 오직 성전 보관용 정본(Proto-MT)을 간직했던 바리새파-랍비 유대교만이 유일하게 살아남았다.

바르 코크바 항쟁군이 피신했던 **와디 무라바아트(Mur 88)와 나할 헤베르 사본이 쿰란과 달리 현대 마소라 본문과 100% 완벽한 일치도**를 보이는 것은, 성서의 단일화가 학술 회의의 합의가 아닌 생존 분파의 제도적 독점 결과였음을 고고학적으로 웅변한다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 얌니아 공의회 신화 폐기와 바르 코크바 사본의 100% 일치',
          bodyKo: '19세기 역사실증주의가 상정한 얌니아 공의회는 존재하지 않았다. 쿰란의 극심한 다형성에서 와디 무라바아트(Mur 88)의 100% 마소라 일치로의 급격한 수렴은 로마와의 두 차례 유대 전쟁(70 CE, 132–135 CE)으로 인한 라이벌 분파들의 물리적 절멸이 낳은 역사 생태학적 결과였다.'
        }
      }
    ],
    primarySources: [
      {
        id: 'src-5-1',
        artifactId: 'ketef-hinnom-silver-scrolls',
        nameKo: '케테프 힌놈 은제 부적 (KH2)',
        nameEnOrOriginal: 'Ketef Hinnom Silver Amulets (KH2 / Israel Museum 80.1/2)',
        catalogNo: 'Israel Museum Jerusalem 80.1/2',
        institution: 'The Israel Museum, Jerusalem',
        dateVector: {
          eventDateBCE: 600,
          compositionDateBCE: 700,
          redactionDateBCE: 600,
          witnessDateBCE: 600
        },
        originalScript: '[י]ברכ יהוה [ו][י]שמרכ יאר יהוה פני[ו אליכ ו][ישמ ל]כ שלם',
        transliteration: '[y]brk . yhwh . [w][y]šmrk . yʾr . yhwh . pny[w . ʾlyk . w][yśm . l]k . šlm',
        translationKo: '야훼께서 그대에게 복을 주시고 그대를 지키시기를! 야훼께서 그분의 얼굴을 [그대에게] 비추사 [그대에게] 평강을 [주시기를]! (민수기 6:24-26 축약 제의문)',
        sourceGrade: 'Grade A',
        epigraphyMethod: '다중스펙트럼 적외선 촬영(MSI) 및 실물 롤링 해체 판독 (Barkay et al. 2004, BASOR 334)',
        notes: '성서 본문이 기록된 인류 역사상 가장 오래된 물리적 유물. 3행 MT와 달리 은혜 문구가 생략된 2행 병행 축약문으로 당대 널리 쓰이던 호신용 액막이 제의문(Apotropaic Amulet)이었음.'
      },
      {
        id: 'src-5-2',
        artifactId: 'dead-sea-scrolls-samuel',
        nameKo: '쿰란 제4동굴 사무엘기 사본 (4QSam-a / 4Q51)',
        nameEnOrOriginal: 'Qumran Cave 4 Samuel Scroll (4Q51 / 4QSam-a, Col. X)',
        catalogNo: 'IAA / Rockefeller Museum 4Q51 (DJD XVII)',
        institution: 'Israel Antiquities Authority / Shrine of the Book',
        dateVector: {
          eventDateBCE: 1000,
          compositionDateBCE: 600,
          redactionDateBCE: 400,
          witnessDateBCE: 50
        },
        originalScript: '[ונח]ש מלך בני עמון הוא לחץ את בני גד ואת בני ראובן בחזקה ונקר להם כ[ול עין ימ]ין...',
        transliteration: '[wnḥ]š mlk bny ʿmwn hwʾ lḥṣ ʾt bny gd wʾt bny rʾwbn bḥzqh wnqr lhm k[wl ʿyn ym]yn...',
        translationKo: '암몬 자손의 왕 [나하]스는 갓 자손과 르우벤 자손을 심히 압제하였으며, 그들의 [오른쪽 눈]을 모[두] 후벼 파내어... (마소라 성서에서 탈락된 구절 보존)',
        sourceGrade: 'Grade A',
        epigraphyMethod: '디지털 사해문서 아카이브 IIIF 초고해상도 적외선 스캔 및 DJD XVII 표준 교감 판본 (Cross et al. 2005)',
        notes: '마소라 본문에는 없고 칠십인역(LXX) 및 요세푸스 《유대고대사》(6.68–71)에 보존된 암몬 왕 나하스의 단락을 보존한 대표적 다형성(Pluriformity) 사본.'
      },
      {
        id: 'src-5-3',
        artifactId: 'dead-sea-scrolls-1qisa',
        nameKo: '대이사야 두루마리 (1QIsa-a)',
        nameEnOrOriginal: 'The Great Isaiah Scroll (1QIsa-a)',
        catalogNo: 'The Israel Museum Jerusalem, Shrine of the Book (1QIsa-a)',
        institution: 'The Israel Museum, Jerusalem',
        dateVector: {
          eventDateBCE: 700,
          compositionDateBCE: 600,
          redactionDateBCE: 400,
          witnessDateBCE: 125
        },
        originalScript: 'ישושום מדבר וציה ותגל ערבה ותפרח כחבצלת: פרוח תפרח ותגל אף גילת ורנן...',
        transliteration: 'yśwśw-m mdbr wṣyh wtgl ʿrbh wtprḥ k-ḥbṣlt: prwḥ tprḥ wtgl ʾp gylt w-rnn...',
        translationKo: '광야와 메마른 땅이 기뻐하며 사막이 백합화 같이 피어 즐거워하리라... (이사야 35:1–2)',
        sourceGrade: 'Grade A',
        epigraphyMethod: '사해문서 디지털 컬렉션 고해상도 초분광 이미징 및 완전철자법(Plene Orthography) 대조',
        notes: '54열 7.34m 완본 두루마리로, 모음 보조 자음(waw, yod, he)이 대폭 증대된 제2성전기 구어적 완전철자법과 언어적 현대화(Linguistic Modernization)를 보여줌.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-5-1',
        topic: '고대 성서 본문의 성격: 단일 원본(Urtext) 수렴 모델 vs 텍스트 다형성(Pluriformity) 및 다중 문학 판본(Multiple Editions)',
        thesisA: {
          scholarOrSchool: '폴 드 라가르드 & 프랭크 무어 크로스 (Paul de Lagarde 1871; Frank Moore Cross 1975)',
          eraOrYear: '1871–1975',
          claimKo: '모든 이문은 단 하나의 원본에서 분기된 오염이며, 지리적 3대 텍스트 가계(바빌로니아 MT, 팔레스타인 SP, 이집트 LXX)로 분기되었다가 수렴되었다.',
          keyEvidence: '사본 간의 이문들을 계통수로 배열할 수 있다는 19세기 문헌학적 가정 및 3대 지리적 이본 특징.'
        },
        thesisB: {
          scholarOrSchool: '에마누엘 토브 & 유진 울리히 (Emanuel Tov 1992, 2012; Eugene Ulrich 1999)',
          eraOrYear: '1992–2012',
          claimKo: '쿰란 단일 동굴 안에서 4대 계통이 모두 출토되듯 고대 유대교에는 텍스트 다원성(Pluriformity)이 실재했으며, 4QJer-b/d 등은 단순 오차가 아닌 서기관의 합법적 ‘다중 문학 판본(Multiple Literary Editions)’임.',
          keyEvidence: '쿰란 4번 동굴 내 4대 텍스트 군집의 평화로운 동시 보관 및 칠십인역과 일치하는 히브리어 단축 판본(4QJer-b)의 물리적 출토.'
        },
        consensusStatus: '현대 성서학 본문비평은 토브의 텍스트 다형성과 울리히의 다중 문학 판본 모델을 학계의 표준 패러다임으로 확립함.'
      },
      {
        id: 'deb-5-2',
        topic: '4QSam-a 나하스 단락의 본질: 마소라의 동음탈락(Haplography) vs 서기관의 미드라시적 확장(Midrashic Expansion)',
        thesisA: {
          scholarOrSchool: 'P. 카일 맥카터 & 프랭크 무어 크로스 (P. Kyle McCarter 1980; F. M. Cross 2005)',
          eraOrYear: '1980–2005',
          claimKo: '마소라 본문 필사자가 유사한 어구 사이에서 눈이 건너뛰는 동음탈락(Homoioteleuton) 실수를 범하여 단락을 누락시켰으며, 4QSam-a가 원래의 원초적 본문을 보존함.',
          keyEvidence: '삼상 10:27 말미의 ויהי כמחריש와 11:1 서두 ויהי כמו חדש 사이의 어간 유사성 및 요세푸스 《유대고대사》(6.68–71)와의 일치.'
        },
        thesisB: {
          scholarOrSchool: '도미니크 바르텔레미 & 알렉산더 로페 (Dominique Barthélemy 1982; Alexander Rofé 2010)',
          eraOrYear: '1982–2010',
          claimKo: '삼상 11:2에서 나하스가 왜 갑자기 오른쪽 눈을 뽑겠다고 위협하는지 설명하기 위해 고대 서기관이 2차적으로 삽입한 해설적·조화적 미드라시 증보(Midrashic expansion)임.',
          keyEvidence: '짧은 본문이 원형에 가깝다는 본문비평 공리(Lectio brevior potior) 및 고대 서기관들의 능동적 내적 성서 주해(Inner-Biblical Exegesis) 관행.'
        },
        consensusStatus: '현대 학계는 4QSam-a의 단락이 고대 지식인들에게 널리 통용되던 권위 있는 전승 텍스트였음을 인정하되, 원초적 본문 보존설과 미드라시 증보설의 양 가능성을 모두 개방적으로 검토함.'
      },
      {
        id: 'deb-5-3',
        topic: '마소라 본문 단일 표준화의 동력: 얌니아 공의회의 학술 결의 vs 로마 제국과의 유대 전쟁 및 생존 분파 독점',
        thesisA: {
          scholarOrSchool: '하인리히 그레츠 (Heinrich Graetz 1871)',
          eraOrYear: '1871–1970년대',
          claimKo: '기원후 90년경 얌니아(야브네)에서 랍비들이 공의회를 열어 성서 정전 39권을 최종 확정하고 표준 마소라 본문을 채택 결의함.',
          keyEvidence: '탈무드 미슈나 야다임(Yadayim 3:5)에 기록된 성서 책들의 성결성 논쟁.'
        },
        thesisB: {
          scholarOrSchool: '잭 P. 루이스, 샤예 코헨, 티모시 림 (Jack P. Lewis 1992; Shaye Cohen 1984; Timothy Lim 2010)',
          eraOrYear: '1984–2012',
          claimKo: '얌니아 공의회는 19세기가 날조한 신화이며, 실제 표준화는 서기 70년 제2성전 파괴와 132–135년 바르 코크바 항쟁으로 비바리새 라이벌 분파들이 절멸한 결과임.',
          keyEvidence: '공의회 기록의 부재 및 와디 무라바아트(Mur 88)와 나할 헤베르 사본에서 나타나는 100% 완전한 마소라 본문 일치도.'
        },
        consensusStatus: '현대 성서학계는 얌니아 공의회 신화를 완전히 폐기하고, 두 차례 유대 전쟁으로 인한 역사적·사회적 텍스트 수렴 모델을 표준으로 수용함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-5-1',
        sourceGrade: 'Grade A',
        author: 'Tov, Emanuel',
        year: 2012,
        title: 'Textual Criticism of the Hebrew Bible (3rd Revised and Expanded Ed.)',
        publication: 'Minneapolis: Fortress Press.',
        urlOrDoi: 'http://dss.collections.imj.org.il/'
      },
      {
        id: 'bib-5-2',
        sourceGrade: 'Grade A',
        author: 'Barkay, Gabriel et al.',
        year: 2004,
        title: 'The Amulets from Ketef Hinnom: A New Edition and Evaluation',
        publication: 'Bulletin of the American Schools of Oriental Research (BASOR) 334: 41–71.'
      },
      {
        id: 'bib-5-3',
        sourceGrade: 'Grade A',
        author: 'Cross, Frank Moore, Donald W. Parry, Richard J. Saley, and Eugene Ulrich',
        year: 2005,
        title: 'Qumran Cave 4.XII: 1–2 Samuel (DJD XVII)',
        publication: 'Oxford: Clarendon Press.'
      },
      {
        id: 'bib-5-4',
        sourceGrade: 'Grade A',
        author: 'Tov, Emanuel',
        year: 1997,
        title: 'Qumran Cave 4.X: The Prophets (DJD XV)',
        publication: 'Oxford: Clarendon Press.'
      },
      {
        id: 'bib-5-5',
        sourceGrade: 'Grade A',
        author: 'Ulrich, Eugene',
        year: 1999,
        title: 'The Dead Sea Scrolls and the Origins of the Bible',
        publication: 'Grand Rapids: Eerdmans.'
      },
      {
        id: 'bib-5-6',
        sourceGrade: 'Grade A',
        author: 'Seales, W. Brent et al.',
        year: 2016,
        title: 'From damage to discovery via virtual unwrapping: Reading the scroll from En-Gedi',
        publication: 'Science Advances 2(9): e1601247.'
      },
      {
        id: 'bib-5-7',
        sourceGrade: 'Grade A',
        author: 'Van der Toorn, Karel',
        year: 2007,
        title: 'Scribal Culture and the Making of the Hebrew Bible',
        publication: 'Cambridge, MA: Harvard University Press.'
      },
      {
        id: 'bib-5-8',
        sourceGrade: 'Grade A',
        author: 'Carr, David M.',
        year: 2005,
        title: 'Writing on the Tablets of the Heart: Origins of Scripture and Literature',
        publication: 'Oxford: Oxford University Press.'
      },
      {
        id: 'bib-5-9',
        sourceGrade: 'Grade A',
        author: 'Lewis, Jack P.',
        year: 1992,
        title: 'Jamnia Revisited',
        publication: 'In The Canon Debate (ed. McDonald & Sanders), Peabody: Hendrickson, pp. 146–162.'
      },
      {
        id: 'bib-5-10',
        sourceGrade: 'Grade B',
        author: 'Cross, Frank Moore',
        year: 1975,
        title: 'Qumran and the History of the Biblical Text',
        publication: 'Cambridge, MA: Harvard University Press.'
      }
    ]
  },
  {
    id: 'essay-6-orality-and-text',
    order: 6,
    title: '6. 구전은 문자화 뒤에도 계속되는가?',
    subtitle: '문서화된 구전성(Written Orality)과 신체화된 텍스트: 소리, 기억, 그리고 매체의 공진화 2,000년',
    summary: '문자의 발명은 구전을 일거에 사멸시킨 단절적 혁명이 아니라, 구전 공연을 지탱하고 교육을 통해 인간의 신체에 텍스트를 각인시키는 ‘문서화된 구전성(Written Orality)’과 ‘신체화된 기억(Somatic Internalization)’의 2,000년 공진화 과정이었다.',
    content: `20세기 미디어 이론이 구축한 '구전 문화(Orality)'와 '문자 문화(Literacy)'의 대립적 2분법은 고대 지중해와 근동의 실제 문자 생활을 심각하게 왜곡했다.

본 논문은 헬레니즘기 바빌론 에사길라 신전의 아키투(Akitu) 신년 축제 대사제 낭송 지침 점토판(Louvre AO 6479)과 《에누마 엘리시》, 플라톤의 《이온》에 나타난 랩소도스의 황홀경 낭송 및 《파이드로스》의 외재적 기억(hypomnesis) 비판, 그리고 띄어쓰기(Scriptio Continua)와 고대 낭독 관습을 둘러싼 가브릴로프(A.K. Gavrilov)와 번잇(M.F. Burnyeat)의 '암브로시우스 묵독 논쟁'(Confessiones VI.3.3)을 정밀 고증한다.

나아가 서기 200년 미슈나 편찬 이전까지 700년간 유지된 랍비 유대교의 구전 토라 성문화 금령(b. Gittin 60b), 고대 극장(에피다우로스)의 건축 음향학, 세이킬로스 비문 및 파피루스 악보(P.Wien G 2315)를 분석함으로써, 고대 텍스트가 눈으로 소비하는 현대적 출판물이 아니라 목소리와 신체, 공간이 결합된 살아있는 음향적 수행(Vocal Performance)의 매개체였음을 논증한다.`,
    keyTakeaways: [
      '구전(Orality)과 문자화(Literacy)는 단절적 2분법(The Great Divide)이 아니라 수세기에 걸쳐 공존하며 서로를 고양시킨 ‘구전-문자 연속체(Oral-Literate Continuum)’였음',
      '바빌론 아키투(Akitu) 신년 제의에서 대사제가 마르둑 신상 앞에서 《에누마 엘리시》 1,000행을 완창(Louvre AO 6479)했듯, 점토판 문자는 제의적 가창의 우주적 정본 닻이었음',
      '그리스 랩소도스는 악보를 보고 읽는 낭독자가 아니라 신체적 황홀경 속에서 암기된 시구를 가창하는 연행자(플라톤 《이온》)였으며, 소크라테스는 문자의 외재적 기억 의존을 경계함(《파이드로스》)',
      '고대 묵독(Silent Reading) 논쟁: 고대인은 일상적 묵독 능력을 갖추고 있었으나(가브릴로프·번잇), 글이란 마땅히 공동체 앞에서 낭독되어야 한다는 ‘청각적 사회 규범’에 따라 음독함',
      '랍비 유대교의 이중 토라 체계(b. Gittin 60b)는 서기 200년 미슈나 성문화 이전까지 구전 토라의 필사를 엄격히 금지함으로써 기억과 텍스트의 상호 견제와 균형을 제도화함'
    ],
    civilizationsDiscussed: ['mesopotamia', 'greece', 'israel-judah', 'egypt'],
    readingTimeMinutes: 8,
    relatedArtifactIds: ['homeric-textualization-iliad', 'kesh-temple-hymn', 'standard-epic-of-gilgamesh'],
    crossRefEssayIds: ['essay-3-tomb-writing', 'essay-4-homer-textualization', 'essay-5-biblical-four-dates'],
    sections: [
      {
        id: 'sec-6-1',
        order: 1,
        headingKo: '1. ‘거대한 분기(The Great Divide)’ 신화의 해체',
        subheadingKo: '구전 문화와 문자 문화의 잘못된 이분법을 넘어 연속체(Continuum) 모델로',
        content: `20세기 후반 미디어 이론을 지배한 월터 옹(Walter J. Ong 1982)과 에릭 해블록(Eric Havelock 1963)의 고전적 테제는 문자의 출현이 인류의 인지 구조를 청각 중심의 감각적·즉흥적 구전 세계에서 시각 중심의 추상적·논리적 문자 세계로 단절시켰다는 '거대한 분기론(The Great Divide)'이었다.

그러나 루스 피네건(Ruth Finnegan 1977, 1988), 로잘린드 토마스(Rosalind Thomas 1992), 브라이언 스톡(Brian Stock 1983)의 21세기 고전문헌학 및 역사사회학적 실증 연구는 이 도식을 근본적으로 반박한다. 고대 근동과 그리스-로마 세계에서 문자는 구전을 대체하여 파괴한 것이 아니라, 구전 낭송을 증폭하고 제의적 정확성을 통제하며 교육을 통해 신체에 체화되는 **'구전-문자 연속체(Oral-Literate Continuum)'** 속에서 작동했다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 패러다임: 월터 옹의 단절론 vs 로잘린드 토마스의 문서화된 구전성(Written Orality)',
          bodyKo: '월터 옹은 문자가 구전을 불가역적으로 파괴했다고 보았으나, 케임브리지 고전학자 로잘린드 토마스는 고대 아테네 민주정의 법령 비문 낭독과 도편추방제(Ostraka)처럼 문자가 오히려 구두 연설과 제의적 낭송을 매개·증폭하는 촉매였음을 규명했다.'
        }
      },
      {
        id: 'sec-6-2',
        order: 2,
        headingKo: '2. 메소포타미아 아키투 신년제와 《에누마 엘리시》 완창의 제의학',
        subheadingKo: '바빌론 에사길라 신전 지성소에서 대사제의 성대로 울려 퍼진 1,000행의 서사시 (Louvre AO 6479)',
        content: `메소포타미아 서기관 문화에서 문학 점토판은 도서관 서가에 고립된 읽기용 책이 아니라 신전 제의의 장엄한 음향적 대본이었다.

매년 봄 춘분날 바빌론에서 열린 11일간의 **아키투(Akitu) 신년 축제** 제4일 저녁, 에사길라(Esagila) 신전의 최고 대사제(Šešgallu)는 마르둑(Marduk) 신상 앞에 홀로 나아가 창조 서사시 **《에누마 엘리시》(Enūma Eliš)**의 전 7개 점토판(약 1,000행) 전체를 머리부터 끝까지 목소리 높여 완창해야 했다(Louvre AO 6479, lines 279–284).

점토판의 정밀한 쐐기문자는 사제의 기억이 흔들리지 않도록 지탱하는 권위의 기준점이었으며, 텍스트의 생명력은 사제의 성대를 통해 신전의 공기 속으로 진동할 때 비로소 완성되었다.`,
        originalQuote: {
          originalScript: 'ina kīṣ ūmi šešgallu ša É.SAG.ÍL Enūma eliš ultu rēšišu adi qītišu ana Bēl imannu.',
          transliteration: 'ina kīṣ ūmi šešgallu ša É.SAG.ÍL Enūma eliš ultu rēšišu adi qītišu ana Bēl imannu.',
          translationKo: '니산누월 제4일 해 질 무렵, 에사길라의 최고 대사제(셰시갈루)는 마르둑 신전 지성소에서 창조 서사시 《에누마 엘리시》를 그 첫 머리부터 맨 끝 행까지 벨(마르둑) 신상 앞에서 완창(암송)한다.',
          sourceCitation: '루브르 박물관 소장 헬레니즘기 바빌론 아키투 제의 점토판 (Louvre AO 6479, Col. IV, lines 281–283; Linssen 2004: 215)'
        }
      },
      {
        id: 'sec-6-3',
        order: 3,
        headingKo: '3. 그리스 랩소도스의 낭송 지팡이와 플라톤의 《이온》·《파이드로스》',
        subheadingKo: '호메로스 낭송가들의 신체적 황홀경(Ion 535b–e)과 외재적 기억(Phaedrus 274c–275b) 비판',
        content: `고대 그리스의 전문 낭송가 랩소도스(Rhapsodos, '노래를 꿰매는 자')들은 리라 반주 대신 단단한 나무 지팡이(Rhabdos)로 바닥을 내리치며 6각운 박자를 맞추었다.

플라톤의 대화편 《이온》(Ion 535b–e)에서 랩소도스 이온은 수만 명의 관중 앞에서 서사시를 읊을 때 "눈에 눈물이 가득 차고 심장이 요동치며 머리칼이 쭈뼛 선다"고 고백한다. 랩소도스는 파피루스를 손에 들고 읽는 낭독자가 아니라 신체적 전율 속에서 텍스트를 체화하여 청중을 도취시키는 연행자였다.

반면 플라톤은 《파이드로스》(Phaedrus 274c–275b) 테우트(Theuth) 신화를 통해, 문자가 인간의 내면적 기억(mneme)을 파괴하고 외재적 기호에 의존하는 허위 지혜(hypomnesis)를 낳을 것이라는 문명사적 경고를 남겼다.`,
        originalQuote: {
          originalScript: 'ὅταν γὰρ ἐλεινόν τι εἴπω, δακρύων ἐμπίπλανταί μου οἱ ὀφθαλμοί· ὅταν τε φοβερὸν ἢ δεινόν, ὀρθαὶ αἱ τρίχες ἵστανται ὑπὸ φόβου καὶ ἡ καρδία πηδᾷ.',
          transliteration: 'hotan gar eleinon ti eipō, dakryōn empiplantai mou hoi ophthalmoi; hotan te phoberon ē deinon, orthai hai trikhes histantai hypo phobou kai hē kardia pēda.',
          translationKo: '슬픈 대목을 읊을 때면 제 눈에는 눈물이 가득 차고, 공포스럽고 무서운 대목을 읊을 때면 머리칼이 쭈뼛 서고 심장이 요동칩니다!',
          sourceCitation: '플라톤 대화편 《이온》 (Plato, Ion 535c)'
        }
      },
      {
        id: 'sec-6-4',
        order: 4,
        headingKo: '4. 침묵의 독서 이전의 세계: 스크립티오 콘티누아와 고대 독서사 논쟁',
        subheadingKo: '아우구스티누스 《고백록》(VI.3.3) 암브로시우스 묵독의 실상과 가브릴로프·번잇의 문헌학적 교감',
        content: `고대 그리스-로마 파피루스는 단어 사이의 띄어쓰기가 전혀 없는 **스크립티오 콘티누아(Scriptio Continua)**로 작성되었다.

아우구스티누스가 《고백록》(Confessiones VI.3.3)에서 스승 암브로시우스 주교가 "눈은 페이지를 훑고 마음은 의미를 파악했으나 목소리와 혀는 쉬고 있었다"며 놀라워한 일화는 오랫동안 '고대 묵독 불능설(녹스-발로그 가설)'의 근거로 쓰였다.

그러나 21세기 고전문헌학(Gavrilov 1997, Burnyeat 1997)은 고대 그리스-로마인들이 일상적 묵독 능력을 보유하고 있었음을 실증했다. 암브로시우스의 묵독은 연이은 설교로 혹사당한 성대를 보존하기 위한(vocis servandae causa) 조치였으며, 고대 사회에서 음독(Reading Aloud)이 일반적이었던 이유는 생리적 한계가 아니라 지식을 공동체와 소리 내어 공유해야 한다는 **'청각적 사회 규범(Acoustic Decorum)'** 때문이었다.`,
        originalQuote: {
          originalScript: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
          transliteration: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
          translationKo: '그러나 그가 글을 읽을 때 그의 눈은 페이지 위를 지나가고 그의 마음은 의미를 파헤쳤으나, 그의 목소리와 혀는 온전히 쉬고 있었다.',
          sourceCitation: '아우구스티누스 《고백록》 제6권 3장 (Augustine, Confessiones VI.3.3)'
        }
      },
      {
        id: 'sec-6-5',
        order: 5,
        headingKo: '5. 고대 이스라엘의 구전 토라 금령과 랍비 서기관 문화',
        subheadingKo: '‘기록된 토라’와 ‘구전 토라’의 상호 견제와 700년간의 성문화 금지 원칙 (b. Gittin 60b)',
        content: `고대 이스라엘과 초기 유대교는 문자화와 구전성의 상호작용을 가장 정교한 법률 체계로 발전시켰다.

바빌로니아 탈무드 《기틴》(b. Gittin 60b)에 명시된 원칙에 따르면, 성문 토라(Torah she-bikhtav)는 회당 예배 시 반드시 두루마리를 펴고 소리 내어 낭독해야 했으며(암기 낭송 금지), 반대로 구전 토라(Torah she-be'al peh)는 스승과 제자의 구두 문답(Girsa)으로만 전승되어야 했고 책으로 필사하는 것이 엄격히 금지되었다.

기원후 200년경 랍비 유다 하나시가 《미슈나》(Mishnah)를 편찬하기 전까지 700년간 유지된 이 성문화 금령은, 텍스트의 고정적 권위와 인간 기억의 유연한 해석 능력을 상호 견제시킨 독보적인 지적 제도였다.`,
        originalQuote: {
          originalScript: 'דברים שבכתב אי אתה רשאי לאומרן על פה, ודברים שבעל פה אי אתה רשאי לאומרן בכתב',
          transliteration: 'Dəḇārīm še-biḵṯāḇ ʾên ʾattāh rāšay ləʾomrān ʿal peh, ū-ḏəḇārīm še-bəʿal peh ʾên ʾattāh rāšay ləʾomrān biḵṯāḇ.',
          translationKo: '기록된 말씀(성문 토라)을 책 없이 입으로만 외워 말해서는 안 되며, 구전된 말씀(구전 토라)을 글자로 기록하여 책으로 읽어서는 안 된다.',
          sourceCitation: '바빌로니아 탈무드 기틴 60b (Talmud Bavli, Gittin 60b)'
        }
      },
      {
        id: 'sec-6-6',
        order: 6,
        headingKo: '6. 매체 물질성과 음향 하드웨어: 악보 비문과 극장 음향학',
        subheadingKo: '세이킬로스 비문(IK Ephesos 17a), 에우리피데스 악보 파피루스(P.Wien G 2315) 및 에피다우로스 극장',
        content: `구전 공연 문화는 고도의 물질적 매체와 건축 음향학에 의해 지탱되었다.

기원전 200년경의 빈 에우리피데스 파피루스(P.Wien G 2315)와 1~2세기경 소아시아의 세이킬로스 비문(Seikilos Epitaph, IK Ephesos 17a)은 고대 그리스인들이 시구 위에 정밀한 성악 음표와 리듬 기호를 직접 기록했음을 실증한다.

또한 14,000석 규모의 에피다우로스(Epidaurus) 원형 극장은 다공성 석회암 좌석으로 축조되어 관객의 웅성거림과 바람 소리 같은 저주파 소음을 차단하고, 500Hz 이상의 인간 육성만을 객석 최상단까지 선명하게 전달하는 음향 하드웨어였다. 문자와 신체, 그리고 건축 공간이 삼위일체로 결합된 음향적 문명이었던 것이다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '물질 금석학: 세이킬로스 묘비명(IK Ephesos 17a)의 음악적 가치',
          bodyKo: '현존하는 세계 최고(最古)의 완전한 악보인 세이킬로스 비문은 가사 위에 알파벳 변형 음표(Notes)와 장단 기호(Stigmē)가 완벽히 음각되어 있어, 텍스트가 고대인에게 본질적으로 노래이자 낭송이었음을 물질적으로 증명한다.'
        }
      }
    ],
    primarySources: [
      {
        id: 'src-6-1',
        artifactId: 'standard-epic-of-gilgamesh',
        nameKo: '바빌론 아키투 신년제 제의 점토판 (에사길라 신전 프로그램)',
        nameEnOrOriginal: 'Babylonian Akitu Ritual Tablet (Louvre AO 6479 / DT 15+)',
        catalogNo: 'Musée du Louvre AO 6479',
        institution: 'Musée du Louvre, Paris',
        dateVector: {
          eventDateBCE: 1800,
          compositionDateBCE: 1200,
          redactionDateBCE: 600,
          witnessDateBCE: 250
        },
        originalScript: 'ina kīṣ ūmi šešgallu ša É.SAG.ÍL Enūma eliš ultu rēšišu adi qītišu ana Bēl imannu.',
        transliteration: 'ina kīṣ ūmi šešgallu ša É.SAG.ÍL Enūma eliš ultu rēšišu adi qītišu ana Bēl imannu.',
        translationKo: '니산누월 제4일 해 질 무렵, 에사길라의 최고 대사제(셰시갈루)는 마르둑 신전 지성소에서 창조 서사시 《에누마 엘리시》를 그 첫 머리부터 맨 끝 행까지 벨(마르둑) 신상 앞에서 완창한다.',
        sourceGrade: 'Grade A',
        epigraphyMethod: '루브르 박물관 소장 셀레우코스조 쐐기문자 점토판 고해상도 판독 (Linssen 2004, Lambert 2013)',
        notes: '아키투 신년제 4일차에 《에누마 엘리시》 1,000행 완창을 의무 규정한 1차 사료.'
      },
      {
        id: 'src-6-2',
        artifactId: 'homeric-textualization-iliad',
        nameKo: '아우구스티누스 《고백록》 암브로시우스 독서 관찰 대목',
        nameEnOrOriginal: 'Augustine, Confessiones VI.3.3 (Ambrose Silent Reading Locus)',
        catalogNo: 'CCSL 27 (Corpus Christianorum Series Latina)',
        institution: 'Biblioteca Apostolica Vaticana',
        dateVector: {
          eventDateBCE: 0,
          compositionDateBCE: 0,
          redactionDateBCE: 0,
          witnessDateBCE: 0
        },
        originalScript: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
        transliteration: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
        translationKo: '그러나 그가 글을 읽을 때 그의 눈은 페이지 위를 지나가고 그의 마음은 의미를 파헤쳤으나, 그의 목소리와 혀는 온전히 쉬고 있었다.',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'CCSL 27 라틴 교감본 및 가브릴로프(1997)·번잇(1997) 고전학 교차 검증',
        notes: '고대 묵독 및 음독 관행 연구의 세계적 표준 텍스트.'
      },
      {
        id: 'src-6-3',
        artifactId: 'homeric-textualization-iliad',
        nameKo: '세이킬로스 묘비명 음악 비문 (완전한 고대 그리스 악보)',
        nameEnOrOriginal: 'Seikilos Epitaph (IK Ephesos 17a / I.Tralleis 219)',
        catalogNo: 'Copenhagen National Museum 14897',
        institution: 'National Museum of Denmark, Copenhagen',
        dateVector: {
          eventDateBCE: 0,
          compositionDateBCE: 0,
          redactionDateBCE: 0,
          witnessDateBCE: 0
        },
        originalScript: 'Ὅσον ζῇς φαίνου, μηδὲν ὅλως σὺ λυποῦ· πρὸς ὀλίγον ἐστὶ τὸ ζῆν, τὸ τέλος ὁ χρόνος ἀπαιτεῖ.',
        transliteration: 'Hoson zēis phainou, mēden holōs sy lypou; pros oligon esti to zēn, to telos ho khronos apaitei.',
        translationKo: '살아있는 동안 그대 환하게 빛나라. 결코 슬퍼하지 말라. 인생은 찰나에 불과하고, 시간은 끝을 재촉하니.',
        sourceGrade: 'Grade A',
        epigraphyMethod: '대리석 원통형 기둥 음각 비문 실측 및 고대 그리스 악보 표기(Ionian alphabet notes) 해독',
        notes: '가사 위에 성악 음표와 리듬 기호가 보존된 인류 최초의 완전한 악보 비문.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-6-1',
        topic: '고대 구전성과 문자성의 관계: 단절적 대립(The Great Divide) vs 구전-문서 연속체(Written Orality)',
        thesisA: {
          scholarOrSchool: '월터 J. 옹 & 에릭 해블록 (Walter J. Ong 1982; Eric Havelock 1963)',
          eraOrYear: '1963–1982',
          claimKo: '문자의 등장은 인간의 의식을 청각에서 시각으로 단절시켰으며, 원초적 구전 문화(Primary Orality)를 근본적으로 파괴했다.',
          keyEvidence: '문자화 이후 분석적·추상적 철학 담론의 대두 및 구전 시가의 쇠퇴.'
        },
        thesisB: {
          scholarOrSchool: '로잘린드 토마스 & 루스 피네건 (Rosalind Thomas 1992; Ruth Finnegan 1988)',
          eraOrYear: '1988–1992',
          claimKo: '고대 사회에서 문자는 구전을 파괴한 것이 아니라, 공공 연설·제의 낭송·법률 포고 등 구전 활동을 매개하고 증폭하는 연속체로 공존했다.',
          keyEvidence: '아테네 민주정의 법령 비문 낭독 관행, 도편추방제 대리 필사, 랩소도스의 텍스트 암기 공연.'
        },
        consensusStatus: '현대 고전학 및 매체사는 월터 옹의 단절론을 지양하고 로잘린드 토마스의 문서화된 구전성(Written Orality)을 학계의 표준 패러다임으로 수용함.'
      },
      {
        id: 'deb-6-2',
        topic: '고대 묵독(Silent Reading)의 가능성: 인지적 불능설 vs 사회적·청각적 낭독 규범론',
        thesisA: {
          scholarOrSchool: '베르나르트 녹스 & 요제프 발로그 (Bernard Knox 1968; J. Balogh 1927)',
          eraOrYear: '1927–1968',
          claimKo: '띄어쓰기(Scriptio Continua) 부재로 인해 고대인은 묵독을 수행할 수 없었으며, 아우구스티누스는 암브로시우스의 기적적 묵독을 보고 경악했다.',
          keyEvidence: '아우구스티누스 《고백록》(VI.3)의 충격 묘사 및 중세 이전 묵독 기록의 희소성.'
        },
        thesisB: {
          scholarOrSchool: 'A.K. 가브릴로프 & M.F. 번잇 (A.K. Gavrilov 1997; M.F. Burnyeat 1997)',
          eraOrYear: '1997',
          claimKo: '고대 그리스-로마 지식인은 일상적으로 묵독 역량을 보유하고 있었으며, 음독은 생리적 한계가 아닌 지식을 공동체와 나누는 청각적 사회 규범(Decorum)이었다.',
          keyEvidence: '에우리피데스 《히폴리토스》 및 아리스토파네스 희극의 묵독 묘사, 암브로시우스의 성대 보호 목적(vocis servandae causa).'
        },
        consensusStatus: '현대 고전문헌학계는 가브릴로프와 번잇의 논증을 받아들여 묵독 불능설을 폐기하고, 음독을 사회문화적 수행 규범으로 재정의함.'
      },
      {
        id: 'deb-6-3',
        topic: '고대 텍스트 수용의 본질: 외재적 참조 악보(Score) vs 신체화된 기억과 내면화(Somatic Internalization)',
        thesisA: {
          scholarOrSchool: '현대 인쇄 문화적 관점 (Print-Culture Analogy)',
          eraOrYear: '20세기 중반',
          claimKo: '고대 낭송가와 사제들은 현대 연주자처럼 파피루스와 점토판을 옆에 두고 보조 악보로 참조하며 공연했다.',
          keyEvidence: '파피루스 두루마리의 악보적 비유 및 필사본 유통.'
        },
        thesisB: {
          scholarOrSchool: '데이비드 M. 카 & 카렐 반 데르 토른 (David M. Carr 2005; Karel van der Toorn 2007)',
          eraOrYear: '2005–2007',
          claimKo: '고대 서기관과 공연자에게 텍스트는 곁눈질하는 대본이 아니라, 수십 년의 암기와 체화를 통해 ‘마음의 서판에 새겨진(Writing on the Tablets of the Heart)’ 신체화된 지식이었다.',
          keyEvidence: '고대 근동 에두바(Eduba) 교육의 암기 필사 훈련 및 탈무드의 암송(Girsa) 체계, 플라톤 《이온》의 무대 증언.'
        },
        consensusStatus: '고대 근동 및 성서학계는 데이비드 카의 신체화·체화 모델을 수용하여 텍스트의 내면적 암기-수행 통합성을 표준으로 확립함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-6-1',
        sourceGrade: 'Grade A',
        author: 'Thomas, Rosalind',
        year: 1992,
        title: 'Literacy and Orality in Ancient Greece',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-6-2',
        sourceGrade: 'Grade A',
        author: 'Carr, David M.',
        year: 2005,
        title: 'Writing on the Tablets of the Heart: Origins of Scripture and Literature',
        publication: 'Oxford: Oxford University Press.'
      },
      {
        id: 'bib-6-3',
        sourceGrade: 'Grade A',
        author: 'Lambert, W. G.',
        year: 2013,
        title: 'Babylonian Creation Myths',
        publication: 'Mesociv 2. Winona Lake: Eisenbrauns.'
      },
      {
        id: 'bib-6-4',
        sourceGrade: 'Grade A',
        author: 'Linssen, Marc J. H.',
        year: 2004,
        title: 'The Cults of Uruk and Babylon: The Temple Ritual Texts of the First Millennium BC',
        publication: 'Cuneiform Monographs 25. Leiden: Brill.'
      },
      {
        id: 'bib-6-5',
        sourceGrade: 'Grade A',
        author: 'Saenger, Paul',
        year: 1997,
        title: 'Space Between Words: The Origins of Silent Reading',
        publication: 'Stanford: Stanford University Press.'
      },
      {
        id: 'bib-6-6',
        sourceGrade: 'Grade A',
        author: 'Gavrilov, A. K.',
        year: 1997,
        title: 'Techniques of Reading in Antiquity',
        publication: 'Classical Quarterly 47(1): 56–73.'
      },
      {
        id: 'bib-6-7',
        sourceGrade: 'Grade A',
        author: 'Burnyeat, M. F.',
        year: 1997,
        title: 'Postscript on Silent Reading',
        publication: 'Classical Quarterly 47(1): 74–76.'
      },
      {
        id: 'bib-6-8',
        sourceGrade: 'Grade A',
        author: 'Nagy, Gregory',
        year: 1996,
        title: 'Poetry as Performance: Homer and Beyond',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-6-9',
        sourceGrade: 'Grade A',
        author: 'Van der Toorn, Karel',
        year: 2007,
        title: 'Scribal Culture and the Making of the Hebrew Bible',
        publication: 'Cambridge, MA: Harvard University Press.'
      },
      {
        id: 'bib-6-10',
        sourceGrade: 'Grade B',
        author: 'Ong, Walter J.',
        year: 1982,
        title: 'Orality and Literacy: The Technologizing of the Word',
        publication: 'London: Methuen.'
      },
      {
        id: 'bib-6-11',
        sourceGrade: 'Grade B',
        author: 'Harris, William V.',
        year: 1989,
        title: 'Ancient Literacy',
        publication: 'Cambridge, MA: Harvard University Press.'
      }
    ]
  },
  {
    id: 'essay-7-preservation-bias',
    order: 7,
    title: '7. 무엇이 보존되고 무엇이 사라졌는가?',
    subtitle: '점토·석재·파피루스 매체가 만들어낸 고고학적 보존 편향의 거대 착시',
    summary: '우리가 가진 출토 데이터는 당대의 실제 작성량 비율이 아니다. 점토판의 불멸성과 파피루스·가죽의 부식성이 만들어낸 보존 편향을 반드시 계산해야 한다.',
    content: `메소포타미아 문서가 이집트나 그리스보다 압도적으로 많은 가장 큰 이유는 수메르인들이 더 많은 글을 썼기 때문이 아니라 점토(Clay)라는 매체를 사용했기 때문이다.

점토판은 불에 타면 파괴되는 것이 아니라 도자기로 구워져(Fired) 불멸의 수명을 얻는다. 니네베와 우가리트, 필로스 궁전이 불길에 휩싸여 파괴되었을 때, 역설적으로 그곳의 점토판 장부들은 수천 년간 흙 속에서 견딜 방화벽을 얻었다.

반면, 이집트의 수많은 실용 파피루스 행정 문서나 고대 이스라엘의 가죽 두루마리들은 델타 지역의 습한 토양과 기후 속에서 자취를 감추었다. "현존 자료의 부재"가 곧 "당대 기록의 부재"를 뜻하지 않는다.`,
    keyTakeaways: [
      '고고학적 출토 데이터의 양은 당대 실제 작성된 텍스트의 총량이 아니라, 기록 매체의 물리 화학적 특성과 토양 미기후(Microclimate)의 산물임',
      '점토판(Clay Tablets)은 도시 화재 시 도자기로 구워져(Fired) 영구 보존되는 파괴의 역설을 보여줌',
      '유기물 매체인 파피루스와 가죽은 이집트 서부 사막이나 사해 유다 광야 동굴과 같은 극단적 초건조 환경에서만 생존함',
      '사료의 침묵(Absence of Evidence)을 곧 문해의 부재(Evidence of Absence)로 오판하는 고고학적 편향을 반드시 학술적으로 차감해야 함'
    ],
    civilizationsDiscussed: ['mesopotamia', 'egypt', 'greece', 'israel-judah', 'ugarit'],
    readingTimeMinutes: 7,
    relatedArtifactIds: ['wadi-el-jarf-papyri', 'pylos-linear-b-tablets', 'elephantine-papyri', 'uruk-admin-tablets'],
    crossRefEssayIds: ['essay-1-accounting-first', 'essay-5-biblical-four-dates', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-7-1',
        order: 1,
        headingKo: '1. 고고학 데이터는 과거의 정직한 거울인가?',
        subheadingKo: '매체 물질성과 기후가 빚어낸 거대한 통계적 착시',
        content: `고대사 연구실이나 박물관을 방문하면 누구나 한 가지 기이한 불균형을 목격한다. 메소포타미아 점토판은 전 세계 박물관에 50만 점 이상 보관되어 있는 반면, 기원전 1천년기 고대 이스라엘이나 페니키아의 일상 행정 문서는 손에 꼽힐 정도로 드물다.

그렇다면 바빌로니아인들은 매일 수천 장씩 글을 썼고, 페니키아나 이스라엘인들은 글을 거의 쓰지 않았던 것일까? 답은 "전혀 그렇지 않다"이다. 우리가 마주하는 출토 데이터는 과거 인류의 실제 문자 활동량이 아니라, 그들이 사용했던 **기록 매체의 물리적 보존율(Preservation Bias)**이 굴절시켜 놓은 왜곡된 거울이다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 로저 배그널의 일상 문서 생존 확률 모델',
          bodyKo: '컬럼비아대 파피루스학자 로저 배그널(Roger S. Bagnall)은 헬레니즘-로마기 이집트에서 작성된 수억 장의 파피루스 중 오늘날 발굴된 것은 0.01% 미만이며, 이마저도 나일강 델타의 중심 도시가 아닌 외곽 사막 쓰레기 더미(오시린쿠스 등)에 편중된 극단적 샘플링 편향임을 수학적으로 모델링했다.'
        }
      },
      {
        id: 'sec-7-2',
        order: 2,
        headingKo: '2. 점토판의 불멸성 역설: 화재가 낳은 도자기 아카이브',
        subheadingKo: '니네베, 우가리트, 필로스 궁전 소각 층의 아이러니',
        content: `메소포타미아와 시리아, 미케네 문명에서 사용된 **점토(Clay)**는 평상시에는 그저 햇볕에 말린 흙덩어리에 불과했다. 물에 빠지면 진흙으로 풀어지고, 서기관들은 장부의 용도가 다하면 물에 개어 다시 뭉개서 재활용했다.

그러나 비극적인 전쟁과 방화의 순간, 점토판은 불멸성을 얻었다. 기원전 612년 메디아-바빌로니아 연합군이 아시리아의 수도 니네베를 불태웠을 때, 그리고 기원전 1200년경 미케네의 필로스 궁전과 우가리트가 침략자의 불길에 휩싸였을 때, 궁정 아카이브에 보관되어 있던 수만 점의 점토판 장부들은 수천 도의 고열 속에서 단단한 '테라코타 도자기(Kiln-fired Ceramic)'로 구워졌다. 궁전의 파괴가 역설적으로 점토판을 3천 년 동안 지하 토양 속에서 부식되지 않는 완벽한 방화벽으로 변환시킨 것이다.`,
        originalQuote: {
          originalScript: '𐀒-𐀫-𐀺 𐀩-𐀐-𐀵-𐀫-𐀲-𐀃 \t *ko-wo re-ke-to-ro-te-ri-jo*',
          transliteration: 'ko-wo re-ke-to-ro-te-ri-jo (PY Ta 709)',
          translationKo: '침상과 가구를 제작하는 장인 소년들에 대한 식량 배분 장부',
          sourceCitation: '필로스 궁전 아카이브 룸 화재 소각층 출토 Linear B 점토판 (PY Ta 709)'
        }
      },
      {
        id: 'sec-7-3',
        order: 3,
        headingKo: '3. 파피루스와 가죽의 비극: 델타의 습기와 유다 왕국의 침묵',
        subheadingKo: '나일강 비옥한 충적토와 레반트 지중해성 기후의 치명적 부식',
        content: `반면, 갈대 섬유로 만든 **파피루스(Papyrus)**와 동물의 가죽으로 만든 **양피지/가죽(Parchment)**은 유기물(Organic Material)이다. 이 매체들은 공기 중의 산소, 박테리아, 그리고 무엇보다 **습기(Moisture)**에 노출되는 즉시 곰팡이가 피고 썩어 없어진다.

이집트 인구의 90%가 거주하며 국가 행정의 99%를 처리했던 나일강 델타 삼각주와 멤피스의 비옥한 농경지에서는 고왕국부터 신왕국에 이르는 2천 년 동안 작성된 수백만 점의 일상 파피루스 장부 중 단 한 장도 살아남지 못했다. 

고대 이스라엘 왕국과 페니키아의 도시들(튀로스, 시돈, 예루살렘) 역시 지중해성 겨울 강우 기후로 인해, 왕실 서기관들이 양피지와 파피루스에 잉크로 썼던 수많은 연대기와 서신들이 흔적도 없이 토양 속으로 녹아 사라졌다. 오직 도기에 먹물로 휘갈겨 쓴 파편인 **오스트라콘(Ostracon)**과 불에 탄 진흙 인장 봉인지(Bulla)만이 간신히 살아남아 그들의 문해 활동을 증언할 뿐이다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '증거의 부재가 부재의 증거는 아니다 (Absence of Evidence)',
          bodyKo: '구약성서 시대 이스라엘에 일상 문서가 적었던 것은 문해율이 낮아서가 아니라, 그들이 사용한 파피루스와 가죽 매체가 기후적 요인으로 소멸했기 때문이다. 시티 오브 데이비드 발굴에서 쏟아져 나온 수백 점의 행정 인장(Bulla) 뒷면에는 파피루스 끈 자국이 선명히 찍혀 있어 방대한 문서 행정의 실재를 증명한다.'
        }
      },
      {
        id: 'sec-7-4',
        order: 4,
        headingKo: '4. 와디 알-자르프와 엘레판티네의 기적: 초건조 미기후의 선물',
        subheadingKo: '홍해 해안 석회암 동굴과 상이집트 사막이 건져 올린 기록들',
        content: `파피루스가 오늘날까지 살아남은 곳은 오직 비가 한 방울도 내리지 않는 극한의 초건조 미기후(Hyper-arid Microclimate) 지대뿐이다.

2013년 피에르 탈레(Pierre Tallet) 교수가 홍해 해안 석회암 동굴에서 발굴한 **와디 알-자르프 파피루스(Wadi al-Jarf, 메레르의 일지)**는 기원전 2560년경 쿠푸왕 대피라미드 건설 당시 석회암 블록 운송을 기록한 인류 최고(最古)의 파피루스다. 이 파피루스가 4,500년을 버틴 이유는 바다에서 불과 수 킬로미터 떨어진 석회암 동굴 깊은 틈새가 밀봉된 천연 방습 금고 역할을 했기 때문이다.

마찬가지로 기원전 5세기 페르시아 제국기 유대인 용병 공동체의 일상을 담은 **엘레판티네 파피루스(Elephantine Papyri)**와 쿰란 동굴의 **사해문서** 역시 사막 한가운데 밀봉된 항아리라는 극단적 우연 속에서만 생존할 수 있었다.`,
        originalQuote: {
          originalScript: '𓇳 𓏤 𓎡 𓏏 𓐍 𓂝 𓅓 𓂋 𓈖 𓈙 𓌥 𓃀 𓏏 𓈖 𓇋 𓈖 𓂋 𓊌',
          transliteration: 'sw 13: Xdi m T-rw r Ax.t-Xwfw Hr jnr n r-Aw',
          translationKo: '13일: 감독관 메레르가 투라 채석장에서 석회암을 가득 싣고 아케트-쿠푸(대피라미드)로 출항하다.',
          sourceCitation: '와디 알-자르프 파피루스 (Papyrus Jarf A, 메레르의 일지)'
        }
      },
      {
        id: 'sec-7-5',
        order: 5,
        headingKo: '5. 결론: 침묵하는 사료를 읽는 법 — 보존 편향의 차감',
        subheadingKo: '고대 문해 환경을 질적으로 복원하는 방법론',
        content: `우리는 고대 세계를 바라볼 때 "남아있는 유물의 양"과 "당대의 실제 현실"을 동일시하는 착시를 반드시 경계해야 한다.

- 점토판이 쏟아져 나온다고 해서 메소포타미아 평민 모두가 글을 읽을 줄 알았던 것은 아니다.
- 파피루스가 사라졌다고 해서 이스라엘과 페니키아의 서기관들이 게을렀던 것은 아니다.

고대 문자문화 연구의 진정한 성숙은 물질 매체의 잔존 확률 법칙을 냉철하게 계산에 넣고, 침묵하는 흙더미 속에서 사라져 버린 유기물 텍스트들의 보이지 않는 그림자를 복원해 내는 데 있다.`
      }
    ],
    primarySources: [
      {
        id: 'src-7-1',
        artifactId: 'wadi-el-jarf-papyri',
        nameKo: '와디 알-자르프 파피루스 (메레르의 일지)',
        nameEnOrOriginal: 'Diary of Merer (Wadi al-Jarf Papyrus A)',
        catalogNo: 'Cairo Egyptian Museum / IFEO Excavation',
        institution: 'Egyptian Museum, Cairo',
        dateVector: {
          eventDateBCE: 2560,
          compositionDateBCE: 2560,
          witnessDateBCE: 2560
        },
        originalScript: '𓇳 𓏤 𓎡 𓏏 𓐍 𓂝 𓅓 𓂋',
        transliteration: 'sw 13: Xdi m T-rw r Ax.t-Xwfw',
        translationKo: '13일: 투라 채석장에서 대피라미드로 석재 운반선 출항 기록',
        sourceGrade: 'Grade A',
        epigraphyMethod: '피에르 탈레 교수 홍해 석회암 동굴 발굴 및 파피루스 보존 복원',
        notes: '인류 역사상 현존하는 가장 오래된 파피루스 일상 행정 장부. 대피라미드 축조 노동 현장 기록.'
      },
      {
        id: 'src-7-2',
        artifactId: 'pylos-linear-b-tablets',
        nameKo: '필로스 Linear B 점토판 아카이브',
        nameEnOrOriginal: 'Pylos Linear B Tablets (PY Ta Series)',
        catalogNo: 'National Archaeological Museum Athens / Cambridge Mycep',
        institution: 'National Archaeological Museum, Athens',
        dateVector: {
          eventDateBCE: 1200,
          compositionDateBCE: 1200,
          witnessDateBCE: 1200
        },
        originalScript: '𐀒-𐀫-𐀺 𐀩-𐀐-𐀵-𐀫-𐀲-𐀃',
        transliteration: 'ko-wo re-ke-to-ro-te-ri-jo',
        translationKo: '필로스 궁전 가구 장인 소년들에 대한 식량 배분 장부',
        sourceGrade: 'Grade A',
        epigraphyMethod: '칼 블레겐 발굴 및 마이클 벤트리스 해독 교감본',
        notes: '기원전 1200년경 궁전 화재로 인해 소성(Fired)되어 오늘날까지 완벽 보존된 대표적 궁정 회계 점토판.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-7-1',
        topic: '고대 문서 보존의 통계학: 고고학적 출토 데이터로 문해 사회를 계량화할 수 있는가?',
        thesisA: {
          scholarOrSchool: '로저 S. 배그널 (Roger S. Bagnall, 2011)',
          eraOrYear: '2011',
          claimKo: '출토된 파피루스는 전체의 0.01% 이하이며, 보존된 사료의 지역적·계층적 편향을 수학적으로 차감하지 않고는 어떤 통계적 결론도 내릴 수 없다.',
          keyEvidence: '이집트 파피루스 출토지의 95% 이상이 서부 사막 쓰레기장에 집중된 지리적 편중 현상.'
        },
        thesisB: {
          scholarOrSchool: '앨런 밀라드 (Alan Millard, 2000)',
          eraOrYear: '2000',
          claimKo: '물리적 사본의 부재에도 불구하고, 도기 파편(Ostraca)과 인장(Bulla), 파피루스 끈 자국 등의 간접 사료를 통해 레반트의 광범위한 일상 문해 환경을 정밀 복원할 수 있다.',
          keyEvidence: '사마리아, 아라드, 라기스 등지에서 발굴된 수백 점의 군사 영수증 및 행정 오스트라콘.'
        },
        consensusStatus: '현대 고고학계는 배그널의 보존 편향 모델을 수용하여, 사료의 양적 통계가 아닌 질적 매체 생태계 복원으로 연구의 중심을 전환함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-7-1',
        sourceGrade: 'Grade A',
        author: 'Bagnall, Roger S.',
        year: 2011,
        title: 'Everyday Writing in the Graeco-Roman East',
        publication: 'Berkeley: University of California Press.'
      },
      {
        id: 'bib-7-2',
        sourceGrade: 'Grade B',
        author: 'Millard, Alan',
        year: 2000,
        title: 'Reading and Writing in the Time of Jesus',
        publication: 'Sheffield: Sheffield Academic Press.'
      },
      {
        id: 'bib-7-3',
        sourceGrade: 'Grade A',
        author: 'Tallet, Pierre',
        year: 2017,
        title: 'Les papyrus du Merer au Journal de Bord',
        publication: 'Paris: IFEO / Académie des Inscriptions et Belles-Lettres.'
      }
    ]
  },
  {
    id: 'essay-8-institutions-over-script',
    order: 8,
    title: '8. 문자 구조보다 제도가 더 중요했는가?',
    subtitle: '우가리트 통제 사례가 입증하는 언어·외교·서기관 제도의 수렴 법칙',
    summary: '쉬운 알파벳이 출현했다고 해서 자동으로 서기관 전통이 대체되지 않는다. 우가리트는 알파벳 쐐기문자와 아카드 복합 쐐기문자의 기능적 분업을 유지했다.',
    content: `문자학의 오랜 고정관념 중 하나는 "단순하고 쉬운 알파벳 문자가 등장하면 복잡한 표어-음절 문자(상형문자, 쐐기문자)는 곧바로 퇴출되고 보편 문해 사회가 도래한다"는 문자 결정론이다.

우가리트(Ras Shamra) 출토 유물은 이 결정론을 완벽히 반박한다. BCE 1400년 우가리트 서기관들은 단 30개 기호의 혁신적인 알파벳 쐐기문자를 발명했지만, 이 문자를 외교 문서나 국제 협정에는 결코 쓰지 않았다. 국제 외교 문서는 여전히 수백 개의 기호를 외워야 하는 아카드 음절 쐐기문자로 작성되었다.

알파벳은 현지어 신화(바알 서사시)와 내정 장부에만 쓰였다. 텍스트의 장르와 쓰임새를 결정하는 것은 문자 부호의 형태적 구조가 아니라, 국제 정치 체제, 서기관 공방의 교육 제도, 그리고 외교 네트워크였다.`,
    keyTakeaways: [
      '쉬운 30개 자음 알파벳 쐐기문자가 발명되었음에도 복잡한 수백 자의 아카드 표어-음절 쐐기문자가 폐기되지 않고 기능적으로 공존함',
      '국제 외교 서신(아마르나 서신)과 통상 조약은 여전히 아카드어로, 국내 행정과 신화(바알 서사시)는 현지 우가리트 알파벳어로 이원화 분업',
      '문자의 성공과 선택을 결정하는 것은 문자 부호의 기술적 단순성이 아니라, 국가 간 외교 네트워크, 서기관 교육 기관, 사회적 권력 제도임',
      '기술 결정론적 알파벳 민주화 신화를 비판하고 세스 샌더스·존 베인스의 서기관 제도 중심 모델 확립'
    ],
    civilizationsDiscussed: ['ugarit', 'mesopotamia', 'greece'],
    readingTimeMinutes: 8,
    relatedArtifactIds: ['ugarit-baal-cycle', 'amarna-letters-canaan', 'ugarit-abecedary', 'gortyn-law-code'],
    crossRefEssayIds: ['essay-1-accounting-first', 'essay-2-lexical-lists', 'essay-4-homer-textualization'],
    sections: [
      {
        id: 'sec-8-1',
        order: 1,
        headingKo: '1. ‘쉬운 알파벳이 문명을 바꾼다’는 기술 결정론의 함정',
        subheadingKo: '부호 체계의 단순성이 곧 보편 문해 사회를 낳는다는 착각',
        content: `19~20세기 서구 문자학에는 뿌리 깊은 '알파벳 우월주의'와 기술 결정론이 자리 잡고 있었다. "수백 개의 기호를 외워야 하는 복잡한 표어-음절 문자(이집트 상형문자, 메소포타미아 쐐기문자)는 소수 사제와 서기관 계급의 지식 독점 도구였으며, 단 20~30자의 단순한 알파벳이 발명되자마자 문자는 만인에게 개방되어 민주주의와 과학이 태동했다"는 서사다.

그러나 후기 청동기 시대(Late Bronze Age, c. 1400–1200 BCE)의 번영하던 지중해 항구 도시 **우가리트(Ras Shamra)**의 고고학적 발굴은 이 환상을 산산조각 냈다. 우가리트의 서기관들은 인류 역사상 최초로 쐐기문자 형태를 띤 완벽한 30개 자음의 알파벳 체계(Ugaritic Cuneiform Alphabet)를 발명했음에도 불구하고, 결코 기존의 복잡한 아카드어 쐐기문자를 폐기하지 않았다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 잭 구디의 기술 결정론 vs 세스 샌더스의 정치 제도론',
          bodyKo: '잭 구디는 알파벳의 형태적 단순성이 인지적 민주화를 낳았다고 보았다. 반면 시카고대 세스 샌더스(Seth L. Sanders, 《The Invention of Hebrew》) 교수는 문자의 선택과 장르 구분을 결정한 것은 기술이 아니라 지역 통치자가 자신의 정체성과 외교적 동맹을 표출하던 국가 제도였음을 논증했다.'
        }
      },
      {
        id: 'sec-8-2',
        order: 2,
        headingKo: '2. 우가리트의 경이로운 이중 체제: 30개 알파벳과 아카드 쐐기문자의 공존',
        subheadingKo: '국내 행정·신화는 우가리트 알파벳, 국제 외교는 아카드 복합 쐐기문자',
        content: `우가리트의 대사제 일리밀쿠(Ilimilku)와 왕실 서기관 공방에서 출토된 수천 점의 점토판들은 매우 엄격하고 정교한 **기능적 분업(Functional Diglossia & Biscriptalism)**을 보여준다.

1. **우가리트 30자 알파벳 쐐기문자**:
   - 용도: 현지어 신화 서사시(《바알 서사시》, 《키르타 서사시》), 왕실 부동산 매매 및 국내 세무 장부, 종교 제의 희생제물 목록.
   - 대상: 우가리트 현지 백성과 국내 관료 공동체.

2. **전통 바빌로니아 아카드 음절 쐐기문자 (수백 자)**:
   - 용도: 히타이트 대제국과의 종주권 조약, 이집트 파라오와의 외교 서한, 국제 무역 소송 판결문.
   - 대상: 고대 근동 전역의 국제 외교 네트워크(International Diplomatic Network).

만약 알파벳이 단순히 '배우기 쉽기 때문에' 모든 문자를 대체해야 했다면, 우가리트 서기관들은 왜 수년간 피땀 흘려 수백 개의 복잡한 아카드어 기호와 수메르어 어휘목록을 계속 암기했겠는가? 국제 질서가 요구하는 언어와 서기관 제도의 규범이 기술적 단순성보다 훨씬 더 강력했기 때문이다.`,
        originalQuote: {
          originalScript: '𐎁𐎏𐎍 \t 𐎊𐎎 \t 𐎚𐎔𐎉 \t 𐎐𐎅𐎗',
          transliteration: 'b-ʿ-l // ym // ṯpṭ nhr (KTU 1.2 IV)',
          translationKo: '바알 신이 바다(얌)와 강(나하르)의 통치자 신에게 맞서 곤봉을 치켜들다!',
          sourceCitation: '우가리트 바알 서사시 제2점토판 (KTU 1.2 / Louvre AO 16636)'
        }
      },
      {
        id: 'sec-8-3',
        order: 3,
        headingKo: '3. 아마르나 서신(EA 286)의 증언: 가나안 왕들이 아카드어로 글을 쓴 이유',
        subheadingKo: '예루살렘 왕 압디-헤바가 이집트 파라오에게 보낸 쐐기문자 점토판',
        content: `기원전 14세기 이집트 아마르나 유적에서 발견된 380여 점의 외교 서한인 **아마르나 문서(Amarna Letters)**는 이 국제 서기관 제도의 위력을 가장 생생하게 입증한다.

당시 가나안(팔레스타인) 지역의 도시국가 왕들—예루살렘 왕 압디-헤바(Abdi-Heba), 세켐 왕 라바유, 비블로스 왕 립-하다—은 일상에서 서북셈어 방언(초기 히브리어/페니키아어와 유사한 언어)을 썼으며, 이미 시나이 반도와 레반트에는 초기 원시 알파벳(Proto-Sinaitic)이 존재하고 있었다. 

그러나 그들은 이집트 파라오 아크나톤에게 편지를 쓸 때 결코 알파벳이나 자국어를 쓰지 않았다. 그들은 메소포타미아에서 파견되었거나 현지에서 에두바 훈련을 받은 전문 서기관을 고용하여, 복잡한 아카드어 쐐기문자로 편지를 작성했다. 비록 본문 곳곳에 가나안 현지어 단어(Glosses)가 무의식적으로 튀어나왔을지라도, 국제 외교 무대에서 통용되는 합법적 공문서는 오직 아카드 쐐기문자뿐이었다.`,
        originalQuote: {
          originalScript: '𒀀 𒈾 \t 𒈗 \t 𒁁 𒉌 𒅀 \t 𒌝 𒈠 \t 𒁹 𒀵 𒄭 𒁀 \t 𒀵 𒅗 𒈠',
          transliteration: 'a-na LUGAL EN-ia um-ma 1.ARAD2-Hé-ba ARAD2-ka-ma',
          translationKo: '나의 주군이신 파라오 왕께, 당신의 종 예루살렘 왕 압디-헤바가 일곱 번, 또 일곱 번 엎드려 말씀드립니다.',
          sourceCitation: '아마르나 서신 EA 286 (VAT 1642, Vorderasiatisches Museum Berlin)'
        }
      },
      {
        id: 'sec-8-4',
        order: 4,
        headingKo: '4. 서기관 길드와 외교 네트워크: 문자의 운명을 결정한 제도',
        subheadingKo: '존 베인스의 고대 이집트-근동 관료 제도론',
        content: `옥스퍼드대 이집트학자 존 베인스(John Baines)가 지적하듯, 고대 사회에서 문자 체계의 채택과 유지는 단순히 '사용자의 편의성'에 의해 결정되지 않는다. 그것은 서기관 계급의 사회적 재생산 기구, 왕권의 지배 정당성 표상, 그리고 제국 간의 국제 조약 네트워크라는 견고한 **제도(Institutions)**에 의해 지탱된다.

우가리트가 기원전 1180년경 '바다 민족(Sea Peoples)'의 침략으로 멸망하고 지중해 국제 청동기 무역망이 붕괴했을 때, 놀랍게도 복잡한 아카드 쐐기문자뿐 아니라 혁신적이었던 우가리트 30자 알파벳 쐐기문자 역시 점토판과 함께 완전히 자취를 감추었다. 문자를 지탱하던 왕궁과 서기관 학교라는 '제도'가 붕괴하자, 문자 체계 자체도 사멸한 것이다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '페니키아 선형 알파벳의 승리 요인: 유연한 잉크 매체와 해상 네트워크',
          bodyKo: '살아남은 것은 점토판 쐐기 알파벳이 아니라, 파피루스와 가죽, 도기 표면에 붓과 먹으로 빠르게 쓸 수 있었던 페니키아 22자 선형 알파벳(Linear Alphabet)이었다. 문자의 생존은 부호 형태뿐 아니라 휴대 가능한 필기 매체와 해상 무역 네트워크라는 제도적 결합에 달려 있었다.'
        }
      },
      {
        id: 'sec-8-5',
        order: 5,
        headingKo: '5. 결론: 기술보다 제도가 문자의 운명을 지배한다',
        subheadingKo: '21세기 디지털 문자문화에 던지는 비교 문자학의 교훈',
        content: `우가리트와 아마르나의 교훈은 명확하다. 표기 체계의 기술적 단순함이 저절로 문명의 형태를 바꾸는 것이 아니다. 새로운 문자가 사회에 뿌리내리고 기존의 낡은 체계를 대체하기 위해서는, 그것을 가르치는 교육 제도, 그것으로 문서를 작성하는 사법 및 행정 체제, 그리고 공동체의 정체성을 인정하는 정치적 결단이 반드시 뒷받침되어야 한다.

문자 부호(Script)는 씨앗에 불과하며, 그 씨앗이 싹트고 자라는 토양은 언제나 인간이 구축한 사회적 제도(Institution)와 문화적 네트워크였다.`
      }
    ],
    primarySources: [
      {
        id: 'src-8-1',
        artifactId: 'ugarit-baal-cycle',
        nameKo: '우가리트 바알 서사시 점토판 (KTU 1.1-1.6)',
        nameEnOrOriginal: 'Ugaritic Baal Epic (KTU 1.1-1.6 / RS 2.[008]+)',
        catalogNo: 'Louvre AO 16636 / RS 2.[008]+',
        institution: 'Musée du Louvre, Paris',
        dateVector: {
          eventDateBCE: 1400,
          compositionDateBCE: 1400,
          redactionDateBCE: 1350,
          witnessDateBCE: 1250
        },
        originalScript: '𐎁𐎏𐎍 \t 𐎊𐎎 \t 𐎚𐎔𐎉 \t 𐎐𐎅𐎗',
        transliteration: 'bʿl ym ṯpṭ nhr',
        translationKo: '바알 신이 바다의 신 얌과 강의 지배자 신에 맞서 싸우는 우가리트 알파벳 쐐기문자 서사시',
        sourceGrade: 'Grade A',
        epigraphyMethod: '라스 샴라 대사제 관저 발굴, 프랑스 루브르 박물관 비문 정밀 판독',
        notes: '30개 자음 알파벳 쐐기문자로 기록된 고대 가나안 신화의 최고봉.'
      },
      {
        id: 'src-8-2',
        artifactId: 'amarna-letters-canaan',
        nameKo: '아마르나 외교 서한 EA 286 (예루살렘 왕 압디-헤바)',
        nameEnOrOriginal: 'Amarna Letter EA 286 (Abdi-Heba of Jerusalem)',
        catalogNo: 'Vorderasiatisches Museum Berlin VAT 1642',
        institution: 'Vorderasiatisches Museum, Berlin',
        dateVector: {
          eventDateBCE: 1350,
          compositionDateBCE: 1350,
          witnessDateBCE: 1350
        },
        originalScript: '𒀀 𒈾 \t 𒈗 \t 𒁁 𒉌 𒅀 \t 𒁹 𒀵 𒄭 𒁀',
        transliteration: 'a-na LUGAL EN-ia 1.ARAD2-Hé-ba',
        translationKo: '나의 주군 파라오께, 예루살렘 왕 압디-헤바가 아카드 쐐기문자로 구원군 파병을 요청하는 서한',
        sourceGrade: 'Grade A',
        epigraphyMethod: '베를린 아시리아학 연구소 점토 원산지 광물학(Petrographic) 분석 및 CDLI 전사',
        notes: '가나안 왕들이 자국어가 아닌 국제 아카드 외교 쐐기문자로 파라오와 소통했음을 보여주는 결정적 외교 사료.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-8-1',
        topic: '알파벳의 확산 동력: 문자 형태의 단순성(기술)인가, 서기관 길드와 정치 질서(제도)인가?',
        thesisA: {
          scholarOrSchool: '잭 구디 (Jack Goody, 1977)',
          eraOrYear: '1977',
          claimKo: '알파벳의 적은 기호 수와 단순성이 필연적으로 서기관의 문자 독점을 해체하고 민주적 대중 문해 사회를 촉진했다.',
          keyEvidence: '고대 그리스 폴리스의 도편추방제와 시민 법률 비문의 광범위한 공개성.'
        },
        thesisB: {
          scholarOrSchool: '세스 샌더스 & 존 베인스 (Seth Sanders & John Baines, 2007, 2009)',
          eraOrYear: '2007–2009',
          claimKo: '우가리트 사례가 증명하듯 알파벳은 수백 년간 복합 문자와 공존했으며, 문자의 사회적 지위와 용도를 결정한 것은 국가 간 외교 질서와 서기관 양성 제도였다.',
          keyEvidence: '우가리트에서 알파벳 발명 후에도 국제 외교 문서에 아카드 쐐기문자를 엄격히 독점 유지한 점토판 아카이브의 실태.'
        },
        consensusStatus: '현대 고대 근동학계는 기술 결정론적 알파벳 발전관을 기각하고, 서기관 제도와 국가 정치 네트워크의 우위를 인정함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-8-1',
        sourceGrade: 'Grade A',
        author: 'Sanders, Seth L.',
        year: 2009,
        title: 'The Invention of Hebrew',
        publication: 'Urbana: University of Illinois Press.'
      },
      {
        id: 'bib-8-2',
        sourceGrade: 'Grade A',
        author: 'Baines, John',
        year: 2007,
        title: 'Visual and Written Culture in Ancient Egypt',
        publication: 'Oxford: Oxford University Press.'
      },
      {
        id: 'bib-8-3',
        sourceGrade: 'Grade A',
        author: 'Pardee, Dennis',
        year: 2002,
        title: 'Ritual and Cult at Ugarit',
        publication: 'SBL Writings from the Ancient World 10, Atlanta: Society of Biblical Literature.'
      }
    ]
  }
];

export const LARGE_TEXT_DEFINITIONS: LargeTextDefinitionMode[] = [
  {
    id: 'single-work',
    nameKo: '1. 단일 작품 기준',
    shortDescription: '《일리아스》, 《길가메시》처럼 하나의 통일된 작품 단위로 평가',
    impactExplanation: '단일 작품으로 보면 그리스의 《일리아스》(15,693행)나 메소포타미아의 《길가메시 서사시 표준판》(3,000행)이 부각됩니다.',
    winnerCivilization: '그리스 (호메로스 서사시)',
    exampleArtifact: '호메로스 《일리아스》 / 《길가메시 서사시》'
  },
  {
    id: 'text-collection',
    nameKo: '2. 문헌 집성체 기준',
    shortDescription: '피라미드 텍스트, 관 텍스트처럼 여러 주문·단위가 모인 집합',
    impactExplanation: '여러 단위가 의례나 장례를 위해 수집된 집성체로 보면 이집트 사카라의 피라미드 텍스트(228~700여 주문)가 가장 일찍 대규모로 출현합니다.',
    winnerCivilization: '이집트 (피라미드 텍스트 / 관 텍스트)',
    exampleArtifact: '우나스 피라미드 텍스트 / 중왕국 관 텍스트'
  },
  {
    id: 'corpus',
    nameKo: '3. 한 장소의 코퍼스 기준',
    shortDescription: '우루크, 필로스, 쿰란처럼 특정 아카이브의 출토 유물 전체 수량',
    impactExplanation: '단일 아카이브 출토 물리적 점토판/사본 수로 보면 메소포타미아 우루크(5,000여 점)와 니네베 도서관(30,000여 점)이 단연 독보적입니다.',
    winnerCivilization: '메소포타미아 (우루크 / 니네베 아카이브)',
    exampleArtifact: '우루크 IV-III 행정 점토판 코퍼스'
  },
  {
    id: 'tradition',
    nameKo: '4. 전체 전승 전통 기준',
    shortDescription: '수세기에 걸친 필사, 재편집, 사본 복제의 역사적 전승 네트워크',
    impactExplanation: '세대를 건너뛴 복제와 정경화 전승으로 보면 히브리 성서 전승(사해문서~마소라)과 수메르-바빌로니아 어휘목록 전통이 가장 긴 생명력을 가집니다.',
    winnerCivilization: '이스라엘·유다 / 메소포타미아',
    exampleArtifact: '사해문서 성서 전승 / 바빌로니아 어휘목록 전승'
  },
  {
    id: 'extent',
    nameKo: '5. 현존 분량(행/단어 수) 기준',
    shortDescription: '현재 고고학적으로 실물 확인 가능한 행 수 및 단어 수',
    impactExplanation: '실물로 만질 수 있는 현존 문자 수 기준으로는 구워진 점토판과 건조 파피루스가 보존된 메소포타미아와 이집트가 압도합니다.',
    winnerCivilization: '메소포타미아 / 이집트',
    exampleArtifact: '니네베 아슈르바니팔 도서관 점토판'
  },
  {
    id: 'copies',
    nameKo: '6. 동일 작품 사본 수 기준',
    shortDescription: '동일한 텍스트가 몇 개의 물리적 유물로 복제되어 출토되었는가',
    impactExplanation: '동일 텍스트의 복제 수로는 수백 년간 서기관 학교에서 복제된 ED Lu A 직업목록과 신왕국 사자의 서 파피루스가 상위를 차지합니다.',
    winnerCivilization: '메소포타미아 (ED Lu A) / 이집트 (사자의 서)',
    exampleArtifact: 'ED Lu A 표준 직업목록 / 사자의 서'
  },
  {
    id: 'labor',
    nameKo: '7. 문자 노동량 기준',
    shortDescription: '석재 刻文, 파피루스 필사, 점토 쐐기 각인에 투입된 총 인간 노동시간',
    impactExplanation: '석회암 매장실 내벽 정밀 각문(피라미드 텍스트)과 대형 비석 刻文(고르틴 법전, 텔 단 석비)은 상상을 초월하는 석공 기술 노동량을 필요로 했습니다.',
    winnerCivilization: '이집트 (피라미드 刻文) / 그리스 (석조 법전)',
    exampleArtifact: '우나스 피라미드 내벽 성각문자 刻文'
  }
];

export const PRESERVATION_BIAS_DATA: PreservationBiasInfo[] = [
  {
    material: '점토판 (Clay Tablets)',
    survivalRate: '최상 (매우 높음)',
    favorableConditions: '화재(소성), 건조 흙 속, 파괴 사건',
    destructiveConditions: '물 침수, 재활용 짓이김',
    paradoxExample: '도시 파괴 화재 시 점토가 불에 구워져 도자기가 됨 (니네베, 필로스, 우가리트)',
    biasImpact: '메소포타미아, 미케네, 우가리트 행정 장부가 왜곡될 정도로 완벽 보존됨'
  },
  {
    material: '석비·석조 벽면 (Stone Monuments)',
    survivalRate: '높음',
    favorableConditions: '지하 무덤 내벽, 건조한 기후, 야외 대형 석비',
    destructiveConditions: '건축 재료 재활용, 부수어 바닥석 사용, 석회 구이',
    paradoxExample: '텔 단 석비는 파괴되어 성문 바닥석으로 쓰였기 때문에 도난당하지 않고 발견됨',
    biasImpact: '왕권 프로파간다 및 장례 제의 텍스트가 과도하게 보존되는 경향'
  },
  {
    material: '파피루스 (Papyrus)',
    survivalRate: '극히 낮음 (조건부 생존)',
    favorableConditions: '이집트 초건조 사막 흙, 밀봉 항아리, 무덤 내 내부',
    destructiveConditions: '습기, 곰팡이, 일반 토양 부식, 빈번한 재사용',
    paradoxExample: '와디 알-자르프 파피루스는 홍해 해안 석회암 동굴 깊은 틈새에서만 생존',
    biasImpact: '이집트 델타 농경지의 일상 행정 문서 수백만 건이 전면 소멸함'
  },
  {
    material: '가죽·양피지 (Parchment)',
    survivalRate: '극히 낮음 (조건부 생존)',
    favorableConditions: '유다 광야 초건조 동굴 (쿰란), 이스라엘 광야',
    destructiveConditions: '습기, 박테리아, 유기물 부패',
    paradoxExample: '사해문서는 유다 광야 쿰란 동굴의 초건조 밀봉 항아리에서 2,000년 버텼음',
    biasImpact: '이스라엘 왕국 시대의 수많은 주루마리와 일상 파피루스가 소멸됨'
  },
  {
    material: '도기 파편 (Ostraca)',
    survivalRate: '높음',
    favorableConditions: '폐기물 층, 성문 경비실 재 층, 쓰레기 더미',
    destructiveConditions: '파쇄되어 분쇄됨',
    paradoxExample: '라기스 오스트라콘 편지는 바빌론 군대의 라기스 함락 소각 층에서 생존',
    biasImpact: '비상시 즉흥적 편지나 영수증 등 일상 붓글씨의 귀중한 샘플 보존'
  }
];
