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
          originalScript: '𒁹 |NAM2.ŠEŠDA|\n𒁹 GAL:TE\n𒁹 GAL:SUKKAL',
          transliteration: '1. |NAM2.ŠEŠDA|\n2. GAL:TE\n3. GAL:SUKKAL',
          translationKo: '1. 최고 통치자/제의적 군주 (나메시다)\n2. 신전 최고 재판관/집행관\n3. 최고 사절/수석 행정관',
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
          originalScript: '[ 4(iku) GAN2 ŠE ]\n[ 1(dug) DUG.SILA3 ]\n[ SANGA ]',
          transliteration: '4(iku) GAN2 ŠE / 1(dug) DUG.SILA3 / SANGA',
          translationKo: '4이쿠(약 1.4헥타르) 면적의 파종용 보리 및 정량 용기 배분, 신전 재정관(SANGA) 명기',
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
        originalScript: '𒁹 |NAM2.ŠEŠDA|\n𒁹 GAL:TE\n𒁹 GAL:SUKKAL',
        transliteration: '1. |NAM2.ŠEŠDA|\n2. GAL:TE\n3. GAL:SUKKAL',
        translationKo: '1. 최고 통치자 / 제의적 군주 (나메시다)\n2. 대신전 총감독관 / 최고 재판관\n3. 최고 사절 / 총괄 행정관',
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
        originalScript: '[ 4(iku) GAN2 ŠE ]\n[ 1(dug) DUG.SILA3 ]\n[ SANGA ]',
        transliteration: '4(iku) GAN2 ŠE / 1(dug) DUG.SILA3 / SANGA',
        translationKo: '4이쿠(약 1.4헥타르) 면적의 파종용 보리 및 정량 용기 배분, 신전 재정관(SANGA) 명기',
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
          originalScript: '𒄑 𒈣 \t\t *e-lep-pu* \n𒄑 𒈣 ٹرز \t\t *e-lep-pu qur-bu* \n𒄑 𒈣 𒆭 𒊏 \t *e-lep-pu šá ma-ḫi-ri*',
          transliteration: 'giš.ma2 = eleppu \ngiš.ma2.dirig = eleppu qurbu \ngiš.ma2.kar.ra = eleppu ša mahīri',
          translationKo: '나무 배(선박) = 아카드어 [엘렙푸]\n항해선 = [엘렙푸 쿠르부]\n시장 운송선 = [엘렙푸 샤 마히리]',
          sourceCitation: 'Ur5-ra = hubullu 점토판 4 (DCCLT P365448), 선박 어휘 목록 발췌'
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
          sourceCitation: 'RS 20.123+ (Louvre AO 19936), 우가리트 4개국어 어휘목록'
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
        nameEnOrOriginal: 'Ur5-ra = hubullu Lexical Series',
        catalogNo: 'DCCLT / CDLI P365448',
        institution: 'British Museum / University of Pennsylvania Museum',
        dateVector: {
          eventDateBCE: 2000,
          compositionDateBCE: 1800,
          redactionDateBCE: 1200,
          witnessDateBCE: 700
        },
        originalScript: '𒄑 𒈣 \t\t *e-lep-pu*',
        transliteration: 'giš.ma2 = e-lep-pu',
        translationKo: '나무 선박 = [엘렙푸]',
        sourceGrade: 'Grade A',
        epigraphyMethod: 'DCCLT 디지털 코퍼스 교감 및 자동 형태소 분석',
        notes: '24개 점토판 대전집 중 제4판 선박 및 전차 목록.'
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
    subtitle: '공개적 기념비와 비공개적 피라미드 매장실의 이중 매체 구조',
    summary: '이집트 성각문자는 인간 관객의 읽기를 위한 기록이 아니었다. 돌과 벽면에 새겨진 주문은 영원성과 파라오 부활을 보증하는 물리적 제의 장치였다.',
    content: `이집트 문자의 독특함은 공개성(Publicity)과 비공개성(Secrecy)의 극단적 대조에 있다.

신전 입구 석비와 팔레트에 새겨진 문자는 왕의 권력과 적에 대한 승리를 널리 선포하는 공개적 시각 매체였다. 반면, 사카라 우나스 피라미드 지하 깊은 매장실 석회암 벽면에 새겨진 피라미드 텍스트(Pyramid Texts)는 산 자의 눈에 절대 띨 수 없는 캄캄한 어둠 속 텍스트였다.

여기서 문자는 산 자에게 정보를 전달하는 매체가 아니라, 말(Word)의 물리적 刻文을 통해 파라오가 오시리스 신과 합일하도록 작용하는 신성한 영원성의 주술 도구였다.`,
    keyTakeaways: [
      '이집트 성각문자는 외곽의 공개적 기념비(나르메르 팔레트)와 무덤 심장부의 비공개 제의문(피라미드 텍스트)이라는 이중 구조를 가짐',
      '우나스 피라미드 지하 매장실의 刻文은 산 자의 독서를 위한 것이 아니라, 사후 파라오의 영혼(Ba/Ka)을 오시리스 신격으로 변환시키는 영구적 주술 장치였음',
      '고왕국 피라미드 텍스트 ➔ 중왕국 관 텍스트 ➔ 신왕국 사자의 서로 이어지는 1,500년 장례 문헌의 매체 이동',
      '문자 자체가 물리적 실체로서 효력을 발휘한다는 이집트 특유의 언어존재론(신성문자 = 메두 네체르, 신들의 말씀)'
    ],
    civilizationsDiscussed: ['egypt'],
    readingTimeMinutes: 7,
    relatedArtifactIds: ['unas-pyramid-texts', 'narmer-palette', 'coffin-texts-ct', 'book-of-the-dead-ani'],
    crossRefEssayIds: ['essay-6-orality-and-text', 'essay-7-preservation-bias'],
    sections: [
      {
        id: 'sec-3-1',
        order: 1,
        headingKo: '1. 누구도 읽을 수 없는 곳에 새겨진 문자',
        subheadingKo: '사카라 우나스 피라미드 지하 매장실의 캄캄한 어둠',
        content: `현대인의 상식에서 글이란 누군가에게 읽히기 위해 쓰이는 소통의 매체다. 하지만 기원전 2350년경 건립된 사카라의 **우나스(Unas) 피라미드** 지하 매장실로 내려가면 이 상식은 완전히 붕괴된다.

수십 미터 화강암 통로를 지나 육중한 석관이 놓인 현실(Burial Chamber) 벽면에는 바닥부터 천장까지 빈틈없이 청록색 안료가 상감된 정교한 성각문자(Hieroglyphs) 수천 행이 새겨져 있다. 그러나 파라오의 미라가 안치되고 입구가 거대한 석판으로 영구 밀봉되는 순간, 이 방에는 단 한 줄기의 빛도 들어오지 않으며 그 어떤 인간 관객도 이 글을 읽을 수 없다. 산 자의 접근이 철저히 차단된 영원한 암흑 속에 왜 그토록 막대한 노동력을 투입해 거대한 텍스트를 새겨 넣었는가?`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 얀 아스만의 기념비성 vs 성스러운 비공개성 이론',
          bodyKo: '이집트학자 얀 아스만(Jan Assmann)은 이집트 문화를 \'기념비적 공공성(Monumentality)\'과 \'신성한 비공개 효력(Sacramentality)\'의 긴장으로 파악했다. 무덤 내부의 문자는 인간을 향한 메시지가 아니라 우주적 질서(마아트, Maat)를 가동하는 제의적 언어 기계였다.'
        }
      },
      {
        id: 'sec-3-2',
        order: 2,
        headingKo: '2. 피라미드 텍스트(PT 217): 파라오를 태양신으로 변환시키는 코드',
        subheadingKo: '말의 발화(Recitation)와 영구 刻文의 합일',
        content: `우나스 피라미드 텍스트 중 제217번 주문(Spruch 217)은 텍스트가 수행하는 마술적 변환(Transfiguration, 삭후/Sakhu)의 본질을 극적으로 보여준다.

벽면에 새겨진 문자는 "우나스는 죽은 것이 아니라 영원히 살아있는 신으로 태어났다"고 선언하며, 파라오가 태양신 라(Ra)와 오시리스(Osiris)의 옥좌로 나아가는 길을 물리적으로 열어준다. 장례식 당일 사제가 현장에서 목소리로 외친 낭송(Recitation)은 시간이 지나면 공중으로 흩어지지만, 단단한 석회암 벽면에 음각된 성각문자는 그 사제의 목소리를 영원토록 멈추지 않는 지속적 주술로 공간에 고정시킨다.`,
        originalQuote: {
          originalScript: '𓇋 𓈖 𓎢 𓅱 𓈖 𓇋 𓋴 𓊪 𓅱 𓊃 𓅮 𓂋 𓏏 𓎟 \n𓈖 𓅓 𓏏 𓈖 𓅱 𓈖 𓇋 𓋴 𓅓 𓏏 𓏏 \n𓋹 𓈖 𓅱 𓈖 𓇋 𓋴 𓋹 𓏏',
          transliteration: 'ink Wnjs pw zA R raw-nb \nn mwt.n Wnjs mwt.t \nAnx Wnjs Anx.t',
          translationKo: '나는 우나스요, 날마다 솟아오르는 태양신 라의 아들이다.\n우나스는 죽은 것이 아니다, 결코 죽지 아니하였다.\n우나스는 영원히 살아있고, 영원히 살아 숨 쉰다!',
          sourceCitation: '우나스 피라미드 서쪽 벽면 성각문자 刻文 (PT 217)'
        }
      },
      {
        id: 'sec-3-3',
        order: 3,
        headingKo: '3. 공개적 기념비와의 대조: 나르메르 팔레트의 시각 정치학',
        subheadingKo: '신전 뜰의 프로파간다와 묘실 내벽의 제의적 텍스트',
        content: `피라미드 텍스트의 극단적 비공개성은 신전 입구에 세워진 공개 기념비(Monuments)와 날카로운 대조를 이룬다.

기원전 3100년경의 **나르메르 팔레트(Narmer Palette)**는 신전 마당에 전시되어 모든 사제와 순례자가 볼 수 있도록 만들어진 시각 매체였다. 여기 새겨진 왕의 이름(메기 '나르' + 끌 '메르')과 패배한 적들의 시체, 승리의 행렬은 왕권의 군사적 폭력과 통일의 정당성을 인간 세계에 과시하는 공개적 정치 선전물이었다. 

이집트 문명은 문자를 '바깥을 향해 권력을 선포하는 시각 표상'과 '안쪽 깊은 곳에서 신성을 가동하는 제의 코드'라는 이중의 궤도로 완벽하게 분리 운영했다.`,
        originalQuote: {
          originalScript: '𓐍 𓂧 𓆑 𓈖 𓂝 𓂋 𓌸 𓂋',
          transliteration: 'NAr-mr (Narmer)',
          translationKo: '메기(NAr)와 끌(mr)로 표상된 상·하 이집트 최초의 통일 군주 나르메르의 세레크(Serekh) 왕명',
          sourceCitation: '나르메르 팔레트 상단 왕명틀 (JE 32169, Cairo Museum)'
        }
      },
      {
        id: 'sec-3-4',
        order: 4,
        headingKo: '4. 매체의 민주화와 전승의 1,500년: 관 텍스트에서 사자의 서로',
        subheadingKo: '석조 묘실 ➔ 목재 목관 ➔ 파피루스 두루마리로의 이동',
        content: `고왕국이 붕괴하고 중왕국(c. 2055–1650 BCE)에 접어들면서, 오직 파라오의 무덤 벽면에만 독점되던 성각문자 주문들은 지방 귀족과 부유층의 목재 관 내벽에 새겨지기 시작했다. 이것이 **관 텍스트(Coffin Texts)**다.

이어 신왕국(c. 1550–1077 BCE)에는 파피루스 제조술의 발전과 함께 누구나 돈을 주고 공방에서 사서 미라 품에 넣을 수 있는 **《사자의 서》(Book of the Dead)** 두루마리로 대중화되었다. 석조 벽면에서 목재, 다시 휴대 가능한 파피루스로의 매체 이동은 내세 영생의 주술 텍스트가 엘리트 왕실 독점에서 시민 계층으로 확산되는 '제의 텍스트의 민주화' 과정이었다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '매체 진화 비교: 영구적 석재(Stone)에서 휴대용 파피루스(Papyrus)로',
          bodyKo: '피라미드 텍스트는 묘실 자체가 부활의 석조 기계였기에 이동이 불가능했으나, 사자의 서 파피루스는 망자의 몸에 직접 감겨 저승의 심판대(오시리스의 저울)까지 휴대할 수 있는 개인 맞춤형 영혼의 여권(Passport) 역할을 수행했다.'
        }
      },
      {
        id: 'sec-3-5',
        order: 5,
        headingKo: '5. 결론: 성각문자(Medu Netjer)는 우주를 작동시키는 코드였다',
        subheadingKo: '소통 매체를 넘어선 물리적 주술 장치로서의 문자',
        content: `이집트인들이 자신의 문자를 가리켜 부른 이름은 **메두 네체르(Medu Netjer, '신들의 말씀')**였다. 그들에게 문자는 인간의 생각을 전달하는 임의적 기호(Sign)가 아니라, 우주 만물의 원형을 담고 있는 살아있는 마술적 실체였다.

무덤 벽면에 새겨진 사자(Lion)나 뱀(Viper) 모양의 상형문자가 혹시라도 살아나 망자의 미라를 해칠까 봐 뱀의 몸통을 칼로 자른 모양(𓆙)으로 刻文을 변형했던 고대 석공들의 행위는, 문자가 가졌던 무시무시한 물리적 실재감을 웅변한다. 왕의 무덤에서 문자는 읽히기 위한 글이 아니라, 영원성을 창조하는 능동적 행위(Performance)였다.`
      }
    ],
    primarySources: [
      {
        id: 'src-3-1',
        artifactId: 'unas-pyramid-texts',
        nameKo: '사카라 우나스 피라미드 텍스트 (PT 213-219)',
        nameEnOrOriginal: 'Unas Pyramid Texts (PT 213-219, Burial Chamber)',
        catalogNo: 'Saqqara Pyramid of Unas / UCL Digital Egypt',
        institution: 'Egyptian Ministry of Tourism and Antiquities / Saqqara Necropolis',
        dateVector: {
          eventDateBCE: 2350,
          compositionDateBCE: 2400,
          redactionDateBCE: 2350,
          witnessDateBCE: 2350
        },
        originalScript: '𓇋 𓈖 𓎢 𓅱 𓈖 𓇋 𓋴 𓊪 𓅱 𓊃 𓅮 𓂋 𓏏 𓎟',
        transliteration: 'ink Wnjs pw zA R raw-nb',
        translationKo: '나는 우나스요, 날마다 솟아오르는 태양신 라의 아들이다.',
        sourceGrade: 'Grade A',
        epigraphyMethod: '3D 현장 측량, 다각도 반사광 합성(RTI) 판독',
        notes: '인류 역사상 가장 오래된 거대한 종교 제의 텍스트 코퍼스. 지하 묘실 벽면 전체를 음각 성각문자로 도배.'
      },
      {
        id: 'src-3-2',
        artifactId: 'narmer-palette',
        nameKo: '나르메르 팔레트',
        nameEnOrOriginal: 'The Narmer Palette (JE 32169)',
        catalogNo: 'Cairo Egyptian Museum JE 32169',
        institution: 'Egyptian Museum, Cairo',
        dateVector: {
          eventDateBCE: 3100,
          compositionDateBCE: 3100,
          witnessDateBCE: 3100
        },
        originalScript: '𓐍 𓂧 𓆑 𓈖 𓂝 𓂋 𓌸 𓂋',
        transliteration: 'NAr-mr (Narmer)',
        translationKo: '상·하 이집트 최초의 통일 파라오 나르메르의 세레크 문장',
        sourceGrade: 'Grade A',
        epigraphyMethod: '히에라콘폴리스 호루스 신전 정밀 발굴 출토품',
        notes: '공개적 신전 마당에 세워져 왕권의 승리와 폭력적 지배를 시각화한 기념비적 석판.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-3-1',
        topic: '피라미드 텍스트의 刻文 성격: 제의의 대본(Script)인가, 영구적 주술 장치(Performative Engine)인가?',
        thesisA: {
          scholarOrSchool: '해롤드 M. 헤이스 (Harold M. Hays, 2012)',
          eraOrYear: '2012',
          claimKo: '피라미드 텍스트는 매장 당일 사제들이 낭송했던 구체적인 장례 제의 의식의 순서와 대본을 기록한 아카이브 성격이다.',
          keyEvidence: '방과 통로의 배치 순서에 따라 제물 바치기 주문과 영혼 승천 주문이 정교하게 공간적으로 일치함.'
        },
        thesisB: {
          scholarOrSchool: '제임스 P. 앨런 (James P. Allen, 2005)',
          eraOrYear: '2005',
          claimKo: '사제의 인간적 행위는 일회적이며, 벽면에 영구히 음각된 글자 자체가 오시리스 신화를 매 순간 영원히 재생시키는 자율적 우주 기계다.',
          keyEvidence: '문자 부호 중 위험한 맹수와 독충 상형문자의 몸통통을 훼손하여 무력화시키는 주술적 방호 조치들의 보편성.'
        },
        consensusStatus: '현대 이집트학은 의식의 공간적 반영(대본)과 문자 자체의 영구적 주술 효력(기계)이라는 두 층위가 결합된 것으로 해석함.'
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
        sourceGrade: 'Grade B',
        author: 'Assmann, Jan',
        year: 2002,
        title: 'The Mind of Egypt: History and Meaning in the Time of the Pharaohs',
        publication: 'New York: Metropolitan Books.'
      }
    ]
  },
  {
    id: 'essay-4-homer-textualization',
    order: 4,
    title: '4. 호메로스는 언제 텍스트가 되었는가?',
    subtitle: '구전 운율 서사시에서 아테네 정본 텍스트로의 전환과 알파벳 가설',
    summary: '호메로스 서사시는 한 번의 붓질로 완성된 책이 아니다. 수백 년 구전 전승이 알파벳 보급 및 아테네 파나테나이아 축제 정본 기획과 만나 비로소 고정되었다.',
    content: `그리스 알파벳의 등장(c. 775 BCE) 이후 호메로스의 《일리아스》와 《오디세이아》가 어떤 과정을 거쳐 문헌 텍스트가 되었는지는 서양 고전학의 가장 뜨거운 논쟁이다.

초기 알파벳 유물인 디필론 암포라와 네스토르의 잔은 알파벳이 초기부터 시적 운율(Hexameter) 및 향연 유희와 깊게 연결되었음을 보여준다. 그러나 수만 행에 달하는 거대한 서사시가 양피지나 파피루스 텍스트로 고정된 것은 BCE 6세기 아테네의 참주 페이시스트라토스 시대의 파나테나이아 국가 축제 낭송 기획과 결합하면서였다.

구전 가창의 유연성과 알파벳 텍스트의 고정성이 만남으로써 비로소 Western Canon의 첫 서사시 정전이 출현했다.`,
    keyTakeaways: [
      '미케네 Linear B 붕괴 후 400년간 이어진 구전 암흑기(Dark Ages)를 거쳐 페니키아 자음 문자를 모음화한 그리스 알파벳 재탄생',
      '최고(最古)의 알파벳 유물(디필론 오이노코에, 네스토르의 잔)은 회계 장부가 아닌 춤 경연과 음주 향연의 6각운(Dactylic Hexameter) 시 구절을 담음',
      '아테네 참주 페이시스트라토스(BCE 6세기)의 파나테나이아 축제 정본 기획을 통해 랩소도스 낭송 순서와 텍스트가 국가적으로 고정됨',
      '하버드 호메로스 멀티텍스트(HMP) 프로젝트와 Venetus A 사본 연구가 밝혀낸 다형성(Multiformity)과 알렉산드리아 도서관의 비평 기호학(오벨로스 등)'
    ],
    civilizationsDiscussed: ['greece'],
    readingTimeMinutes: 8,
    relatedArtifactIds: ['dipylon-inscription', 'cup-of-nestor-pithekoussai', 'methone-eretrian-inscriptions', 'homeric-textualization-iliad'],
    crossRefEssayIds: ['essay-6-orality-and-text', 'essay-8-institutions-over-script'],
    sections: [
      {
        id: 'sec-4-1',
        order: 1,
        headingKo: '1. 문자가 없던 400년 암흑기와 그리스 알파벳의 귀환',
        subheadingKo: '미케네 궁정 Linear B 붕괴와 구전 가인(Aoidoi)의 시대',
        content: `기원전 1200년경 미케네 궁전 문명이 화재와 함께 붕괴하면서, 궁정 관료들이 점토판 장부에 쓰던 음절 문자 Linear B는 흔적도 없이 사라졌다. 이후 약 400년 동안 그리스 세계는 단 한 줄의 문자 기록도 남기지 않은 '문자의 암흑기(Dark Ages)'를 통과했다.

그러나 트로이 전쟁과 영웅들의 이야기는 사라지지 않았다. 아오이도이(Aoidoi)라 불리는 눈먼 구전 시인들은 리라(Kithara) 현을 뜯으며 6각운(Dactylic Hexameter) 운율의 엄격한 공식구(Formula)를 타고 영웅들의 무훈을 노래했다. 그러던 기원전 8세기 중엽(c. 775–750 BCE), 레반트 무역로를 통해 페니키아 자음 문자를 수입한 그리스인들은 인류 최초로 모음(Vowels)을 표기하는 혁신적 알파벳을 완성했다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 배리 파월의 호메로스 알파벳 발명설',
          bodyKo: '고전학자 배리 파월(Barry B. Powell)은 그리스 알파벳이 상업 거래 장부를 적기 위해 도입된 것이 아니라, 호메로스의 6각운(Hexameter) 서사시를 빠짐없이 받아 적기 위해 단 한 명의 천재적 어댑터에 의해 고안되었다는 파격적 가설을 제시했다.'
        }
      },
      {
        id: 'sec-4-2',
        order: 2,
        headingKo: '2. 초기 알파벳 유물의 반전: 춤과 향연, 그리고 6각운 비문',
        subheadingKo: '디필론 오이노코에(c. 740 BCE)와 네스토르의 잔(c. 735 BCE)',
        content: `파월의 가설을 지지하는 가장 강력한 증거는 그리스 땅과 식민지에서 출토된 최초의 알파벳 유물들이다. 오리엔트의 문자가 회계 장부로 시작했던 것과 달리, 그리스 알파벳의 최고(最古) 유물들은 놀랍게도 모두 **시(Poetry)와 향연(Symposium)**에 관한 것이었다.

아테네 디필론 묘지에서 출토된 **디필론 오이노코에(Dipylon Oinochoe, c. 740 BCE)** 포도주 주전자 어깨에는 "가장 활기차게 춤추는 자에게 이 잔을 주노라"라는 완벽한 6각운 시 구절이 좌횡서(Retrograde)로 긁혀 있었다. 

또한 이탈리아 남부 이스키아 섬에서 발굴된 **네스토르의 잔(Cup of Nestor, c. 735 BCE)**에는 《일리아스》 11권에 등장하는 필로스의 왕 네스토르의 황금 잔을 패러디하며 "이 잔을 마시는 자는 아름다운 관을 쓴 아프로디테의 욕망에 사로잡히리라"는 3행의 운문이 새겨져 있었다. 그리스 알파벳은 태생부터 시적 기억을 기록하는 도구였다.`,
        originalQuote: {
          originalScript: 'ΗΟΣ ΝΥΝ ΟΡΧΕΣΤΟΝ ΠΑΝΤΟΝ ΑΤΑΛΟΤΑΤΑ ΠΑΙΖΕΙ ΤΟ ΤΟΔΕ ΚΛΜΙΝ...',
          transliteration: 'hòs nûn orkhēstôn pántōn atalṓtata paízei, tô tóde k[aí mīn...]',
          translationKo: '지금 모든 무용수 중 가장 활기차게 노니는 자가 이 항아리를 차지하리라!',
          sourceCitation: '디필론 오이노코에 비문 (NAM 192, Athens, c. 740 BCE)'
        }
      },
      {
        id: 'sec-4-3',
        order: 3,
        headingKo: '3. 구전 가창에서 아테네 국가 정본으로: 페이시스트라토스 참주 기획',
        subheadingKo: '파나테나이아 국가 대축제와 랩소도스 낭송 규칙의 법제화',
        content: `그러나 수만 행(일리아스 15,693행, 오디세이아 12,110행)에 달하는 방대한 서사시가 술잔의 낙서를 넘어 두꺼운 양피지 두루마리 전집으로 고정된 것은 정치적 국가 기획의 결과였다.

기원전 6세기 중엽, 아테네의 참주 **페이시스트라토스(Peisistratos, 재위 c. 561–527 BCE)**와 그의 아들 히파르코스는 4년마다 열리는 아테네 최대의 국가 축제인 파나테나이아(Panathenaia) 대축제를 개혁했다. 그는 그리스 전역에서 모여든 전문 낭송가 랩소도스(Rhapsodes)들이 각자 자기 식대로 건너뛰며 부르던 서사시를 금지하고, 아테네 국가가 공인한 정본(State Text)에 따라 "한 사람이 멈춘 지점에서 다음 사람이 이어받아 순서대로(ex hypolepseos)" 완창하도록 법제화했다. 이 '페이시스트라토스 정서(Peisistratean Recension)'를 통해 호메로스는 범그리스(Panhellenic) 국가 정전으로 등극했다.`,
        scholarlyCallout: {
          type: 'epigraphic-discovery',
          titleKo: '사료 증언: 키케로와 플라톤의 기록',
          bodyKo: '로마의 철학자 키케로는 《변론가론》(De Oratore)에서 "이전까지 혼란스럽게 흩어져 있던 호메로스의 서사시 책들을 최초로 오늘날의 순서대로 정렬하고 엮어낸 인물은 바로 페이시스트라토스였다"고 명확히 증언했다.'
        }
      },
      {
        id: 'sec-4-4',
        order: 4,
        headingKo: '4. 알렉산드리아 도서관과 비평 기호학: 다형성(Multiformity)의 발견',
        subheadingKo: '제노도토스, 아리스토파네스, 아리스타르코스의 오벨로스(—) 비평',
        content: `헬레니즘 시대 기원전 3~2세기, 이집트 알렉산드리아 왕립 도서관의 총서지관들(제노도토스, 비잔티움의 아리스토파네스, 사모트라케의 아리스타르코스)은 지중해 전역에서 사들인 수백 종의 호메로스 사본(도시별 이본: 마살리아본, 시노페본, 키프로스본 등)을 대조하기 시작했다.

그들은 단 하나의 완벽한 원본이 존재하지 않는다는 사실을 깨닫고, 본문을 함부로 삭제하는 대신 본문 옆 여백(Marginalia)에 **비평 기호(Critical Signs)**를 달았다.
- **오벨로스 (Obelos, —)**: 후대 랩소도스가 삽입한 위작 행 의심 표시
- **아스테리스코스 (Asteriskos, *)**: 올바른 구절이 엉뚱한 자리에 중복된 행
- **디플레이 (Diple, >)**: 언어학적·신화학적 주목 구절

하버드 대학의 **호메로스 멀티텍스트(Homer Multitext, HMP)** 프로젝트는 베네치아 산마르코 도서관의 10세기 사본인 **Venetus A(Marcianus Graecus 454)**를 디지털 분석하여, 호메로스 텍스트가 고정된 모놀리스가 아니라 수세기 동안 공존했던 유기적 변이형들(Multiforms)의 바다였음을 현대에 완벽히 복원해냈다.`,
        originalQuote: {
          originalScript: '— Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος \n> οὐλομένην, ἣ μυρί\' Ἀχαιοῖς ἄλγε\' ἔθηκε',
          transliteration: 'Mênin áeide theà Pēlēïádeō Akhilêos \nouloménēn, hḕ myrí\' Akhaioîs álge\' éthēke',
          translationKo: '— [오벨로스 비평 기호] 노래하소서, 여신이여! 펠레우스의 아들 아킬레우스의 파괴적인 분노를!\n> [디플레이 기호] 아카이오이족에게 무수한 고통을 안겨준 그 거룩한 분노를!',
          sourceCitation: 'Venetus A (Marcianus Graecus 454) Folio 12r, 일리아스 1권 1-2행 여백 주석'
        }
      },
      {
        id: 'sec-4-5',
        order: 5,
        headingKo: '5. 결론: 호메로스는 한 명의 저작이 아니라 노래와 문자의 공진화였다',
        subheadingKo: '구전의 유연성과 문자의 보존성이 낳은 서구 문학의 기원',
        content: `그레고리 나지(Gregory Nagy)의 5단계 진화 모델(Evolutionary Model)이 보여주듯, 호메로스는 한 명의 저자가 책상에 앉아 집필한 책이 아니다.

1. 기원전 2천년기 미케네부터 이어진 '유동적 구전 가창의 시대'
2. 기원전 8세기 알파벳 도입과 '범그리스적 서사시 정형화'
3. 기원전 6세기 아테네 참주정에 의한 '국가 축제 낭송 텍스트 고정'
4. 기원전 3~2세기 알렉산드리아 비평가들의 '교감 정본(Critical Edition) 수립'
5. 중세 비잔티움 필사본을 거쳐 오늘날로 이어지는 '필사 전승'

호메로스는 구전의 살아 숨 쉬는 생명력과 문자의 냉철한 보존성이 수백 년에 걸쳐 서로를 끌어당기며 빚어낸 인류 문명사 최고의 합작품이었다.`
      }
    ],
    primarySources: [
      {
        id: 'src-4-1',
        artifactId: 'dipylon-inscription',
        nameKo: '아테네 디필론 오이노코에 비문',
        nameEnOrOriginal: 'Dipylon Oinochoe Inscription (NAM 192)',
        catalogNo: 'Athens National Archaeological Museum NAM 192 / IG I³ 1150',
        institution: 'National Archaeological Museum, Athens',
        dateVector: {
          eventDateBCE: 740,
          compositionDateBCE: 740,
          witnessDateBCE: 740
        },
        originalScript: 'ΗΟΣ ΝΥΝ ΟΡΧΕΣΤΟΝ ΠΑΝΤΟΝ ΑΤΑΛΟΤΑΤΑ ΠΑΙΖΕΙ...',
        transliteration: 'hòs nûn orkhēstôn pántōn atalṓtata paízei...',
        translationKo: '지금 모든 무용수 중 가장 활기차게 노니는 자가 이 잔을 차지하리라!',
        sourceGrade: 'Grade A',
        epigraphyMethod: '그리스 비문 데이터베이스(PHI Greek Inscriptions) 전사',
        notes: '인류 역사상 가장 오래된 그리스 알파벳 6각운(Dactylic Hexameter) 시 구절 각문.'
      },
      {
        id: 'src-4-2',
        artifactId: 'cup-of-nestor-pithekoussai',
        nameKo: '피테쿠사이 네스토르의 잔',
        nameEnOrOriginal: "Nestor's Cup of Pithekoussai",
        catalogNo: 'Museo Archeologico di Pithecusae 166705 / CEG 454',
        institution: 'Museo Archeologico di Pithecusae, Ischia, Italy',
        dateVector: {
          eventDateBCE: 735,
          compositionDateBCE: 735,
          witnessDateBCE: 735
        },
        originalScript: 'ΝΕΣΤΟΡΟΣ : Ε[ΙΜΙ] : ΕΥΠΟΤ[ΟΝ] : ΠΟΤΕΡΙΟΝ...',
        transliteration: 'Nestoros eimi eupoton poterion...',
        translationKo: '나는 네스토르의 마시기 좋은 잔이라. 이 잔을 비우는 자는 아프로디테의 욕망에 사로잡히리라.',
        sourceGrade: 'Grade A',
        epigraphyMethod: '피테쿠사이 고분 발굴 원문 및 에우보이아 알파벳 자형 분석',
        notes: '호메로스 서사시의 영웅 네스토르를 패러디한 최고(最古)의 3행 시적 비문.'
      },
      {
        id: 'src-4-3',
        artifactId: 'homeric-textualization-iliad',
        nameKo: '베네투스 A 사본과 알렉산드리아 비평 스콜리아',
        nameEnOrOriginal: 'Venetus A Manuscript (Marcianus Graecus 454) with Scholia A',
        catalogNo: 'Biblioteca Nazionale Marciana Marc. Gr. Z. 454 (= 822)',
        institution: 'Biblioteca Nazionale Marciana, Venice / Harvard Homer Multitext',
        dateVector: {
          eventDateBCE: 750,
          compositionDateBCE: 750,
          redactionDateBCE: 150,
          witnessDateBCE: 'CE 950 (10세기 사본)'
        },
        originalScript: '— Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος',
        transliteration: 'Mênin áeide theà Pēlēïádeō Akhilêos',
        translationKo: '오벨로스(—) 기호가 부기된 일리아스 1권 표제행과 고대 알렉산드리아 학자들의 여백 주석',
        sourceGrade: 'Grade A',
        epigraphyMethod: '하버드 HMP 디지털 다중스펙트럼 IIIF 고해상도 아카이브',
        notes: '알렉산드리아 도서관장들의 비평 기호 체계와 고대 스콜리아(주석)가 온전히 보존된 유일무이한 최상급 사본.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-4-1',
        topic: '호메로스 서사시의 성립 과정: 단일 천재 저작설 vs 구전 공식설 vs 5단계 진화 모델',
        thesisA: {
          scholarOrSchool: '밀먼 패리 & 앨버트 로드 (Milman Parry & Albert Lord, 1930–1960)',
          eraOrYear: '1930–1960',
          claimKo: '서사시는 문자가 전혀 없는 순수 구전 가인(Guslar)의 공식구(Formula)와 주제(Theme) 조합에 의해 매 공연마다 즉흥 재창작되었다.',
          keyEvidence: '20세기 유고슬라비아 구전 가창 현장 채록 비교 및 서사시 내 반복 공식구 통계.'
        },
        thesisB: {
          scholarOrSchool: '그레고리 나지 (Gregory Nagy, 1996, 2004)',
          eraOrYear: '1996–현재',
          claimKo: '호메로스는 단일 시점의 받아쓰기가 아니라, 구전 유동성에서 아테네 참주정 국가 축제와 알렉산드리아 도서관 비평을 거치며 점진적으로 결정화(Crystallization)된 다형성(Multiformity)의 산물이다.',
          keyEvidence: 'Venetus A 사본의 알렉산드리아 비평 기호 및 프톨레마이오스 파피루스 이본들의 광범위한 다형성.'
        },
        consensusStatus: '현대 고전학계는 나지의 진화 모델과 하버드 HMP 프로젝트의 다형성 패러다임을 서사시 성립사의 표준 틀로 광범위하게 수용함.'
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
        sourceGrade: 'Grade B',
        author: 'Powell, Barry B.',
        year: 1991,
        title: 'Homer and the Origin of the Greek Alphabet',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-4-3',
        sourceGrade: 'Grade B',
        author: 'Lord, Albert B.',
        year: 1960,
        title: 'The Singer of Tales',
        publication: 'Cambridge, MA: Harvard University Press.'
      }
    ]
  },
  {
    id: 'essay-5-biblical-four-dates',
    order: 5,
    title: '5. 성서의 “원본”은 존재하는가?',
    subtitle: '사공편집 4가지 연대 벡터와 사해문서가 보여주는 유연한 텍스트 전승',
    summary: '히브리 성서는 하나의 시점에 완성된 원본 책이 아니다. 사건 연대, 구전 연대, 편집 연대, 현존 사본 연대의 4중 구조와 사해문서의 다원적 텍스트가 이를 증명한다.',
    content: `히브리 성서 연구에서 가장 필수적인 학술 원칙은 4가지 연대 벡터의 분리다.

1. 사건 연대: 텍스트가 서술하는 역사적 사건의 시대 (e.g. 출애굽, 다윗 왕대)
2. 구성/구전 연대: 시나 전승이 oral tradition으로 읊어지기 시작한 시기
3. 편집 연대: 신명기 사학자나 오경 사제들이 다양한 전승을 편집·합친 시기 (e.g. 바빌론 포로기 BCE 6세기)
4. 현존 사본 연대: 오늘날 우리가 직접 만질 수 있는 물품의 제작 시기 (e.g. 케테프 힌놈 c. 600 BCE, 사해문서 c. 150 BCE)

쿰란 동굴에서 발견된 230여 점의 성서 사본은 오늘날 우리가 가진 마소라 본문(MT) 외에도 칠십인역(LXX) 원형, 삼마리아 오경 계통 등 다양한 텍스트 이본이 평화롭게 공존했음을 입증한다. 고대 이스라엘에서 "단 하나의 고정된 성서 원본"은 존재하지 않았으며, 전승과 재해석의 살아있는 과정이 존재했다.`,
    keyTakeaways: [
      '사건 연대, 구성(구전) 연대, 편집(정본) 연대, 현존 사본 연대의 엄격한 4중 연대 벡터 분리가 필수적임',
      '기원전 600년경 케테프 힌놈 은제 부적(KH2)은 민수기 제사장 축복문을 담은 최고(最古)의 물리적 성서 본문이나, 성서 책 전체의 존재를 뜻하지 않음',
      '사해문서(쿰란 4QSam-a, 1QIsa-a)는 기원전 2~1세기까지 마소라 본문(MT), 칠십인역 희랍어 원본(Vorlage), 사마리아 오경 계통이 자유롭게 공존했던 텍스트 다형성(Pluriformity)을 입증함',
      '단일한 원본(Urtext)이란 후대 종교적 구성물이며, 고대 성서는 신앙 공동체의 끊임없는 재해석과 편집의 살아있는 전승이었음'
    ],
    civilizationsDiscussed: ['israel-judah'],
    readingTimeMinutes: 8,
    relatedArtifactIds: ['ketef-hinnom-silver-scrolls', 'tel-dan-stele', 'siloam-tunnel-inscription', 'dead-sea-scrolls-isaiah', 'dead-sea-scrolls-samuel'],
    crossRefEssayIds: ['essay-4-homer-textualization', 'essay-6-orality-and-text', 'essay-7-preservation-bias'],
    sections: [
      {
        id: 'sec-5-1',
        order: 1,
        headingKo: '1. ‘단 하나의 무오한 원본’이라는 근대적 환상',
        subheadingKo: '인쇄술 이전 고대 필사본 전승의 본질적 조건',
        content: `오늘날 독자들은 서점에 가면 표지가 깔끔하게 인쇄된 단 한 권의 성경책을 마주한다. 이로 인해 많은 이들은 고대 어딘가에 모세나 다윗, 이사야가 양피지 위에 최초로 적어 내려간 '단 하나의 친필 원본(Original Autograph)'이 존재했고, 후대 필사자들은 그것을 오차 없이 베끼기만 했다는 환상을 품기 쉽다.

그러나 20세기 중반 사해문서(Dead Sea Scrolls)의 발견과 현대 본문비평학(Textual Criticism)은 이 관념을 근본적으로 해체했다. 성서는 한 시점에 하늘에서 뚝 떨어진 책이 아니라, 서로 다른 역사적 위기(예루살렘 함락, 바빌론 유배, 제2성전 재건) 속에서 수백 년에 걸쳐 덧붙여지고, 편집되고, 재해석된 '살아있는 문서 집성체'였다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 폴 라가르드의 단일 원본설 vs 에마누엘 토브의 텍스트 다형성론',
          bodyKo: '19세기 폴 드 라가르드(Paul de Lagarde)는 모든 이본을 거슬러 올라가면 단 하나의 성서 원본(Urtext)에 도달할 수 있다고 믿었다. 반면 사해문서 본문비평의 최고 권위자 에마누엘 토브(Emanuel Tov)는 고대 유대교에 다양한 전승 이본들이 동등한 권위로 공존했던 텍스트 다원성(Textual Pluriformity)이 실재했음을 입증했다.'
        }
      },
      {
        id: 'sec-5-2',
        order: 2,
        headingKo: '2. 4중 연대 벡터의 엄격한 분리',
        subheadingKo: '사건, 구성, 편집, 사본 연대가 충돌할 때 발생하는 역사적 착시',
        content: `성서 문헌을 학술적으로 분석할 때 가장 치명적인 오류는 '이야기 속 사건의 연대'와 '실제 물리적 사본의 연대'를 혼동하는 것이다. <장부 이후> 아틀라스는 이를 방지하기 위해 모든 텍스트에 **4중 연대 벡터(4-Dates Vector)**를 엄격히 적용한다.

1. **사건 연대 (Event Date, c. 1250 BCE)**: 모세의 출애굽, 여호수아의 가나안 정복 등 텍스트가 묘사하는 역사적 사건의 무대.
2. **구성/구전 연대 (Composition Date, c. 1100–800 BCE)**: 《드보라의 노래》(사사기 5장)처럼 고대 시적 운율로 구전되기 시작한 시기.
3. **편집 연대 (Redaction Date, c. 586–450 BCE)**: 바빌론 유배기 예루살렘 사제들과 신명기 학파가 다양한 북왕국·남왕국 전승을 하나의 오경(Torah)과 역사서로 통합 편찬한 시기.
4. **현존 사본 연대 (Witness Date, c. 150 BCE–CE 1008)**: 쿰란 동굴의 실제 가죽 두루마리(BCE 150) 혹은 완전한 히브리어 마소라 필사본인 레닌그라드 사본(CE 1008)의 고고학적 제작 시기.

이 4가지 연대를 혼동하지 않을 때 비로소 텍스트가 거쳐온 천 년의 형성과정이 시야에 들어온다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '연대 벡터 대조: 호메로스 서사시와 히브리 성서의 평행성',
          bodyKo: '호메로스 역시 트로이 함락 사건(c. 1200 BCE), 구전 가창(c. 750 BCE), 아테네 참주 편집(c. 530 BCE), 현존 Venetus A 사본(CE 950)이라는 동일한 4중 연대 격차를 가진다. 고대 대서사 텍스트의 형성은 동서양을 막론하고 이 4중 벡터의 궤적을 따른다.'
        }
      },
      {
        id: 'sec-5-3',
        order: 3,
        headingKo: '3. 최고(最古)의 성서 비문: 케테프 힌놈 은제 부적(KH2)',
        subheadingKo: '제1성전 시대 예루살렘 무덤에서 출토된 제사장 축복문',
        content: `성서 구절이 물리적으로 기록된 가장 오래된 실물 유물은 1979년 예루살렘 힌놈 골짜기 제24호 암굴 무덤에서 가브리엘 바르카이(Gabriel Barkay) 교수에 의해 발굴된 **케테프 힌놈 은제 두루마리 부적(Ketef Hinnom Silver Scrolls, KH1/KH2)**이다.

기원전 600년경(바빌론 군대에 의해 제1성전이 파괴되기 직전) 얇은 은판을 돌돌 말아 목걸이 부적으로 만든 이 손가락 크기의 유물에는 고대 히브리 문자(Paleo-Hebrew)로 민수기 6장 24-26절의 '아론의 제사장 축복문'이 미세하게 음각되어 있었다. 

그러나 이 유물이 성서 '민수기' 책 전체가 기원전 600년에 이미 완성되어 있었다는 증거는 아니다. 그것은 축복과 보호의 제의적 기도문구가 당대 유다인들의 일상 신앙 속에 강력한 주술적 부적으로 유통되고 있었음을 보여주는 사료다.`,
        originalQuote: {
          originalScript: 'יברכך יהוה וישמרך \nיאר יהוה פניו אליך ויחנך \nישא יהוה פניו אליך וישם לך שלום',
          transliteration: 'yəbārekəkā YHWH wəyišmərəkā \nyāʾēr YHWH pānāw ʾēlekā wiyḥunnekā \nyiśśāʾ YHWH pānāw ʾēlekā wəyāśēm ləkā šālôm',
          translationKo: '야훼께서 너에게 복을 주시고 너를 지키시기를!\n야훼께서 그의 얼굴을 너에게 비추사 은혜 베푸시기를!\n야훼께서 그의 얼굴을 너에게로 향하여 드사 평강 주시기를!',
          sourceCitation: '케테프 힌놈 제2호 은제 부적 (KH2, Israel Museum 80.1/2), 민수기 6:24-26'
        }
      },
      {
        id: 'sec-5-4',
        order: 4,
        headingKo: '4. 사해문서가 폭로한 텍스트 다형성(Pluriformity)',
        subheadingKo: '마소라(MT), 칠십인역 원형(LXX), 사마리아 오경(SP)의 평화로운 공존',
        content: `1947년부터 유다 광야 쿰란 11개 동굴에서 쏟아져 나온 230여 점의 성서 사본들은 성서학계를 충격에 빠뜨렸다. 

기원후 10세기 유대교 마소라 학자들에 의해 모음 부호가 붙여져 표준 정본이 된 **마소라 본문(Masoretic Text, MT)**과 정확히 일치하는 사본은 쿰란 텍스트의 약 40~50%에 불과했다. 놀랍게도 기원전 3세기 알렉산드리아에서 번역된 희랍어 구약 **칠십인역(Septuagint, LXX)**의 바탕이 되었던 히브리어 이본(4QSam-a, 4QJer-b)과 **사마리아 오경(Samaritan Pentateuch)** 계통의 사본들이 같은 동굴 안에서 아무런 배척 없이 나란히 보관되어 있었다.

특히 사무엘기 사본인 **4QSam-a**는 오늘날 우리가 읽는 마소라 성서 본문에서 탈락된 거인 나하스의 잔혹 행위에 관한 결정적 문단(사무엘상 10장 말미)을 온전히 보존하고 있었다. 고대 유대교 사회에서 성서는 닫힌 정본이 아니라, 서로 다른 전승들이 상호 대화하며 생명력을 유지하던 '열린 텍스트의 바다'였다.`,
        originalQuote: {
          originalScript: 'ונחש מלך בני עמון הוא לחץ את בני גד ואת בני ראובן בחזקה ונקר להם כל עין ימין...',
          transliteration: 'wə-nāḥāš melek bənê-ʿammôn hûʾ lōḥēṣ ʾet-bənê-gād wə-ʾet-bənê rəʾûbēn bə-ḥāzqāh...',
          translationKo: '암몬 자손의 왕 나하스는 갓 자손과 르우벤 자손을 심히 압제하였으며, 그들의 오른쪽 눈을 모조리 후벼 파내어...',
          sourceCitation: '쿰란 제4동굴 사무엘기 사본 (4QSam-a, Col. XII), 마소라 본문에서 탈락된 구절'
        }
      },
      {
        id: 'sec-5-5',
        order: 5,
        headingKo: '5. 결론: 성서 정전은 고정된 화석이 아니라 대화의 전승이었다',
        subheadingKo: '살아있는 해석 공동체와 텍스트의 역사',
        content: `성서의 '원본'을 찾는 탐정 놀이는 이제 종언을 고했다. 성서의 위대함은 어느 한 시점에 진공 상태에서 완성된 무결한 원본에 있는 것이 아니라, 숱한 역사적 파국과 디아스포라의 시련 속에서도 공동체가 텍스트를 끊임없이 다시 베끼고, 해석하고, 삶에 적용하며 전승해온 그 '과정 자체'에 있다.

케테프 힌놈의 은판에서 쿰란 동굴의 가죽 두루마리, 알렉산드리아의 파피루스, 그리고 중세의 거대한 코덱스에 이르기까지, 성서는 고정된 돌비석이 아니라 끊임없이 살아 움직이는 대화의 강물이었다.`
      }
    ],
    primarySources: [
      {
        id: 'src-5-1',
        artifactId: 'ketef-hinnom-silver-scrolls',
        nameKo: '케테프 힌놈 은제 부적 (KH2)',
        nameEnOrOriginal: 'Ketef Hinnom Silver Amulets (KH2)',
        catalogNo: 'Israel Museum Jerusalem 80.1/2',
        institution: 'The Israel Museum, Jerusalem',
        dateVector: {
          eventDateBCE: 600,
          compositionDateBCE: 700,
          witnessDateBCE: 600
        },
        originalScript: 'יברכך יהוה וישמרך',
        transliteration: 'yəbārekəkā YHWH wəyišmərəkā',
        translationKo: '야훼께서 너를 축복하시고 너를 지키시기를 (민수기 6:24 축복문)',
        sourceGrade: 'Grade A',
        epigraphyMethod: '다중스펙트럼 적외선 촬영(MSI) 및 실물 롤링 해체 판독',
        notes: '성서 본문이 기록된 인류 역사상 가장 오래된 물리적 사본 유물.'
      },
      {
        id: 'src-5-2',
        artifactId: 'dead-sea-scrolls-samuel',
        nameKo: '쿰란 제4동굴 사무엘기 사본 (4QSam-a)',
        nameEnOrOriginal: 'Qumran Cave 4 Samuel Scroll (4Q51 / 4QSam-a)',
        catalogNo: 'IAA / Rockefeller Museum 4Q51',
        institution: 'Israel Antiquities Authority / Shrine of the Book',
        dateVector: {
          eventDateBCE: 1000,
          compositionDateBCE: 600,
          redactionDateBCE: 400,
          witnessDateBCE: 100
        },
        originalScript: 'ונחש מלך בני עמון הוא לחץ',
        transliteration: 'wə-nāḥāš melek bənê-ʿammôn...',
        translationKo: '마소라 본문에는 없고 칠십인역(LXX) 및 요세푸스에 보존된 암몬 왕 나하스의 단락을 보존한 가죽 사본',
        sourceGrade: 'Grade A',
        epigraphyMethod: '디지털 사해문서 아카이브 IIIF 초고해상도 적외선 스캔',
        notes: '히브리 성서 본문비평학의 패러다임을 바꾼 대표적 다형성(Pluriformity) 사본.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-5-1',
        topic: '고대 성서 본문의 성격: 단일 원본(Urtext) 수렴 모델 vs 다형성(Pluriformity) 공존 모델',
        thesisA: {
          scholarOrSchool: '프랭크 무어 크로스 (Frank Moore Cross, 1975)',
          eraOrYear: '1975',
          claimKo: '성서는 팔레스타인, 이집트(칠십인역), 바빌로니아(마소라)라는 3대 지역적 텍스트 가계(Local Texts Theory)로 분기되었다가 수렴되었다.',
          keyEvidence: '쿰란 사본들에서 나타나는 3대 지리적 이본 계열의 언어학적 특징 대조.'
        },
        thesisB: {
          scholarOrSchool: '에마누엘 토브 (Emanuel Tov, 2012)',
          eraOrYear: '1992–2012',
          claimKo: '지리적 3분설은 도식적이며, 쿰란에는 마소라계, 칠십인역계, 비정렬 독립계 등 수많은 텍스트가 권위의 위계 없이 자유롭게 공존하던 다원적 생태계가 존재했다.',
          keyEvidence: '단일 동굴(4번 동굴) 내에서 서로 다른 계통의 성서 사본 수십 점이 평화롭게 동시 보관된 고고학적 맥락.'
        },
        consensusStatus: '현대 성서학 본문비평은 토브의 텍스트 다원성 및 열린 정경(Open Canon) 모델을 학계의 표준 패러다임으로 확립함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-5-1',
        sourceGrade: 'Grade A',
        author: 'Tov, Emanuel',
        year: 2012,
        title: 'Textual Criticism of the Hebrew Bible (3rd Revised Ed.)',
        publication: 'Minneapolis: Fortress Press.',
        urlOrDoi: 'http://dss.collections.imj.org.il/'
      },
      {
        id: 'bib-5-2',
        sourceGrade: 'Grade A',
        author: 'Barkay, Gabriel et al.',
        year: 2004,
        title: 'The Amulets from Ketef Hinnom: A New Edition and Evaluation',
        publication: 'Bulletin of the American Schools of Oriental Research 334: 41-71.'
      },
      {
        id: 'bib-5-3',
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
    subtitle: '문자화가 구전을 없애지 않고 새로운 상호작용을 만든 과정',
    summary: '문자가 도입된다고 해서 기존의 구전 문화가 즉시 사라지지 않는다. 고대 사회에서 문자는 구전 기억을 돕고 낭송하는 보조 도구로 동존했다.',
    content: `현대인들은 문자와 구전(Orality)을 완전히 대립되는 단계로 생각하지만, 고대 문명에서 문자는 오히려 구전 가창과 낭송을 돕는 촉매였다.

호메로스 서사시는 문자화된 이후에도 시민 광장과 축제에서 눈으로 읽히기보다 귀로 들렸다. 메소포타미아의 찬가와 이집트의 피라미드 텍스트 역시 사제가 현장에서 목소리로 외치는 제의적 낭송과 짝을 이루었다.

문자는 구전을 대체하여 없앤 것이 아니라, 낭송자에게 정본 기준을 제시하고 기억의 오차를 교정해주는 2차적 보존 장치로 융합되었다.`,
    keyTakeaways: [
      '구전(Orality)과 문자화(Literacy)는 단절적 2분법이 아니라 수세기에 걸쳐 공존하며 서로를 고양시킨 상호보완적 관계였음',
      '고대 세계에서 묵독(Silent Reading)은 극히 예외적이었으며, 모든 문헌은 본질적으로 소리 내어 읽는 음독(Vocal Performance)을 전제로 작성됨',
      '바빌로니아 아키투(Akitu) 신년 축제의 창조 서사시 《에누마 엘리시》와 그리스 랩소도스의 서사시 완창은 텍스트를 대본 삼아 수행된 살아있는 구전 제의였음',
      '월터 옹의 단순 대립 도식을 넘어 로잘린드 토마스의 \'문서화된 구전성(Written Orality)\' 모델로 진화'
    ],
    civilizationsDiscussed: ['greece', 'mesopotamia', 'egypt', 'israel-judah'],
    readingTimeMinutes: 7,
    relatedArtifactIds: ['homeric-textualization-iliad', 'kesh-temple-hymn', 'standard-epic-of-gilgamesh'],
    crossRefEssayIds: ['essay-3-tomb-writing', 'essay-4-homer-textualization', 'essay-5-biblical-four-dates'],
    sections: [
      {
        id: 'sec-6-1',
        order: 1,
        headingKo: '1. 문자는 구전을 죽이지 않았다',
        subheadingKo: '구전 문화와 문자 문화의 잘못된 이분법 해체',
        content: `20세기 미디어 이론가 마샬 맥루한과 고전문헌학자 월터 옹(Walter J. Ong)은 문자의 발명이 인간의 의식을 시각 중심주의로 재편하며 원초적 구전 문화(Primary Orality)를 완전히 파괴했다고 보았다.

그러나 고대 지중해와 근동의 고고학적 비문과 점토판 사료들은 정반대의 현실을 증언한다. 문자가 탄생한 지 2천 년이 지난 고전기 그리스나 헬레니즘 시대에도, 문자는 구전을 대체한 것이 아니라 구전 공연(Performance)을 조직하고, 보증하고, 표준화하는 보조적 무대 장치로 기능했다. 고대 사회는 문자가 지배하는 사회가 아니라, '문자로 강화된 구전 사회(Text-aided Oral Society)'였다.`,
        scholarlyCallout: {
          type: 'theory-debate',
          titleKo: '학술 쟁점: 월터 옹의 단절론 vs 로잘린드 토마스의 공존 융합론',
          bodyKo: '월터 옹은 문자가 구전을 불가역적으로 해체했다고 보았으나, 케임브리지 고전학자 로잘린드 토마스(Rosalind Thomas)는 고대 아테네에서 비문과 법률 문서가 오히려 시민 광장의 구두 연설, 증언, 종교적 구전 낭송을 증폭시키는 촉매 역할을 했음을 실증했다.'
        }
      },
      {
        id: 'sec-6-2',
        order: 2,
        headingKo: '2. 소리 내어 읽기의 문명사: 침묵의 독서 이전의 세계',
        subheadingKo: '아우구스티누스를 경악시킨 암브로시우스의 묵독',
        content: `현대인은 글을 읽을 때 입을 굳게 다물고 눈으로만 활자를 스캔한다. 그러나 고대 세계에서 글을 읽는다는 것은 예외 없이 **소리 내어 발성하는 행위(Reading Aloud)**를 의미했다.

띄어쓰기(Scriptio Continua)와 문장부호가 전혀 없던 고대 그리스어 파피루스와 히브리어 두루마리는 눈으로만 봐서는 의미 단위를 끊어 읽을 수 없었다. 독자는 목소리를 내어 혀와 입술로 운율과 음절을 조음(Articulate)해야만 비로소 문장의 통사 구조를 파악할 수 있었다.

기원후 4세기 교부 아우구스티누스가 밀라노의 스승 암브로시우스 주교의 방을 방문했을 때, "그는 책을 읽을 때 눈은 페이지를 훑고 마음은 의미를 파악했으나, 그의 혀는 쉬고 목소리는 전혀 나지 않았다"며 이를 기적과도 같은 기이한 장면으로 《고백록》(Confessiones)에 기록한 것은 묵독이 고대 사회에서 얼마나 희귀한 예외였는지를 극적으로 폭로한다.`,
        originalQuote: {
          originalScript: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
          transliteration: 'sed cum legebat, oculi ducebantur per paginas et cor intellectum rimabatur, vox autem et lingua quiescebant.',
          translationKo: '그러나 그가 책을 읽을 때 그의 눈은 페이지를 이끌고 마음은 의미를 꿰뚫었으나, 목소리와 혀는 완전히 고요하였다.',
          sourceCitation: '아우구스티누스 《고백록》 제6권 3장 (Augustine, Confessiones VI.3)'
        }
      },
      {
        id: 'sec-6-3',
        order: 3,
        headingKo: '3. 아키투 신년제와 《에누마 엘리시》의 제의적 낭송',
        subheadingKo: '바빌론 에사길라 신전에서 대사제의 목소리로 가창된 텍스트',
        content: `메소포타미아에서도 문학 점토판은 책장에 꽂아두고 읽는 서적이 아니라, 국가 제의에서 소리로 울려 퍼지는 제전의 대본이었다.

매년 봄 춘분날 바빌론에서 열린 11일간의 **아키투(Akitu) 신년 축제** 제4일 저녁, 에사길라 신전의 최고 대사제(Šešgallu)는 마르둑(Marduk) 신상 앞에 홀로 나아가 창조 서사시 **《에누마 엘리시》(Enuma Elish)**의 전 7개 점토판(약 1,000행) 전체를 머리부터 끝까지 목소리 높여 완창해야 했다. 

점토판의 정밀한 쐐기문자는 사제의 기억이 흔들리지 않도록 지탱하는 권위의 기준점이었으며, 텍스트의 생명력은 사제의 성대를 통해 신전의 공기 속으로 진동할 때 비로소 완성되었다.`,
        originalQuote: {
          originalScript: '𒂊 𒉡 𒈠 \t 𒂊 𒇺 \t 𒆷 \t 𒈾 𒁍 \t border \t 𒊭 𒈠 𒈬',
          transliteration: 'e-nu-ma e-liš la na-bu-ú šá-ma-mu',
          translationKo: '위로 하늘의 이름이 아직 불리지 않았고, 아래로 굳건한 땅의 이름이 지어지지 않았을 때...',
          sourceCitation: '에누마 엘리시 제1점토판 표제행 (BM K.3473)'
        }
      },
      {
        id: 'sec-6-4',
        order: 4,
        headingKo: '4. 랩소도스의 지팡이와 악보로서의 파피루스',
        subheadingKo: '호메로스 낭송가들의 지팡이(Rhabdos)와 텍스트의 관계',
        content: `고대 그리스의 전문 낭송가 랩소도스(Rhapsodos, '노래를 꿰매는 자')들은 리라 반주 대신 단단한 나무 지팡이(Rhabdos)로 바닥을 내리치며 6각운 박자를 맞추었다.

그들의 손에 들린 호메로스 파피루스 두루마리는 현대의 독서용 책이 아니라, 음악의 **악보(Score)**와 같았다. 낭송가는 텍스트를 글자 그대로 암기하면서도, 청중의 반응과 축제의 열기에 따라 목소리의 억양(Pitch), 휴지(Pause), 표정 연기를 즉흥적으로 덧입혔다. 문자는 구전의 즉흥성을 질식시킨 것이 아니라, 광활한 제국과 폴리스 전역에서 동일한 서사시의 뼈대를 오차 없이 울려 퍼지게 만든 표준 악보였다.`,
        scholarlyCallout: {
          type: 'comparative-insight',
          titleKo: '비교 통찰: 유대교 토라 칸틸레이션(Cantillation)과 그리스 낭송',
          bodyKo: '유대교 회당에서 토라 두루마리를 읽을 때도 단순 낭독이 아닌 정교한 음악적 억양 부호인 테아밈(Te\'amim, 칸틸레이션)에 맞추어 노래하듯 읊는다. 문자는 언제나 성스러운 멜로디의 뼈대였다.'
        }
      },
      {
        id: 'sec-6-5',
        order: 5,
        headingKo: '5. 결론: 문자는 구전의 대체물이 아닌 기억의 외재화 증폭기였다',
        subheadingKo: '소리와 글자의 위대한 공존이 빚어낸 고대 문명',
        content: `고대 세계에서 문자와 구전은 승자와 패자의 관계가 아니었다. 구전은 텍스트에 감정과 생명, 현장성의 숨결을 불어넣었고, 문자는 시간과 공간의 풍화 속에서 흩어지기 쉬운 구전의 기억에 영원성과 표준성의 닻을 내렸다.

우리가 오늘날 고전문헌이라 부르는 위대한 텍스트들은 모두 눈으로 읽히기 전에 수천만 번 귀로 들렸던 음성 언어의 기념비들이다. 문자를 이해하기 위해서는 언제나 그 글자 밑바닥에서 고동치는 고대인들의 생생한 육성을 함께 들어야 한다.`
      }
    ],
    primarySources: [
      {
        id: 'src-6-1',
        artifactId: 'standard-epic-of-gilgamesh',
        nameKo: '에누마 엘리시 제4점토판 (아키투 신년제 가창본)',
        nameEnOrOriginal: 'Enuma Elish Tablet IV (Babylonian Akitu Recitation)',
        catalogNo: 'British Museum K.3473',
        institution: 'The British Museum, London',
        dateVector: {
          eventDateBCE: 1800,
          compositionDateBCE: 1200,
          redactionDateBCE: 700,
          witnessDateBCE: 650
        },
        originalScript: '𒂊 𒉡 𒈠 \t 𒂊 𒇺',
        transliteration: 'e-nu-ma e-liš',
        translationKo: '위로 하늘의 이름이 불리지 않았을 때 (바빌론 아키투 축제 대사제 낭송 의식 본문)',
        sourceGrade: 'Grade A',
        epigraphyMethod: '대영박물관 소장 점토판 고해상도 디지털 재접합 및 eBL 데이터베이스 연계',
        notes: '신아시리아 니네베 아슈르바니팔 도서관 출토본.'
      }
    ],
    scholarlyDebates: [
      {
        id: 'deb-6-1',
        topic: '고대 사회의 문해력과 구전성의 관계: 낭송의 지배인가, 문서 행정의 지배인가?',
        thesisA: {
          scholarOrSchool: '윌리엄 V. 해리스 (William V. Harris, 1989)',
          eraOrYear: '1989',
          claimKo: '고대 그리스와 로마 사회의 전반적 문해율은 10~15%를 결코 넘지 못했으며, 사회 대다수는 철저한 구전성에 의존했다.',
          keyEvidence: '문자 교육 기구의 부재와 일반 농민·노예 계층의 서명 불가(Agraphoi) 기록.'
        },
        thesisB: {
          scholarOrSchool: '로잘린드 토마스 (Rosalind Thomas, 1992)',
          eraOrYear: '1992',
          claimKo: '문해율 통계보다 중요한 것은 비문해자조차 공공 비문과 법정 문서의 권위를 신뢰하고 구두로 활용했던 \'문서화된 구전 문화\'의 침투력이다.',
          keyEvidence: '아테네 도편추방제 도편(Ostraka)의 대리 필사 및 민회 법령 비문 낭독 관행.'
        },
        consensusStatus: '현대 고전학계는 정량적 저문해율(Harris)을 인정하면서도 정성적인 구전-문서 융합 문화(Thomas)의 영향력을 핵심으로 파악함.'
      }
    ],
    bibliography: [
      {
        id: 'bib-6-1',
        sourceGrade: 'Grade B',
        author: 'Ong, Walter J.',
        year: 1982,
        title: 'Orality and Literacy: The Technologizing of the Word',
        publication: 'London: Methuen.'
      },
      {
        id: 'bib-6-2',
        sourceGrade: 'Grade A',
        author: 'Thomas, Rosalind',
        year: 1992,
        title: 'Literacy and Orality in Ancient Greece',
        publication: 'Cambridge: Cambridge University Press.'
      },
      {
        id: 'bib-6-3',
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
          originalScript: '𒀀 𒈾 \t 𒈗 \t 𒁁 𒉌 𒅀 \t 𒌝 𒈠 \t 𒁹 badbreak 𒄭 𒁀 \t 𒀵 𒅗 𒈠',
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
        originalScript: '𒀀 𒈾 \t 𒈗 \t 𒁁 𒉌 𒅀 \t 𒁹 badbreak 𒄭 𒁀',
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
