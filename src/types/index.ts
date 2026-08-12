export type CivilizationId = 'mesopotamia' | 'egypt' | 'greece' | 'israel-judah' | 'ugarit' | 'china';

export type ConfidenceLevel = 'sure' | 'likely' | 'debated' | 'unknown';

export type TextUnitCategory = 
  | 'single-work'       // 단일 작품 (e.g. 일리아스)
  | 'text-collection'   // 문헌 집성체 (e.g. 피라미드 텍스트)
  | 'corpus'            // 문서군·코퍼스 (e.g. 우루크 점토판 전체)
  | 'tradition';        // 전승 전통 (e.g. 히브리 성서 전승)

export type GenreCategory = 
  | 'economic-admin'    // 경제·행정
  | 'knowledge-lexical' // 지식·목록·교육
  | 'royal-monumental'  // 왕권·기념·외교
  | 'religious-funerary'// 종교·장례·제의
  | 'law-codes'         // 법·규범
  | 'epic-poetry'       // 서사·시·문학
  | 'personal-letters'  // 편지·일상·유희
  | 'divination-oracle';// 점괘·신탁 (갑골문)

export type MaterialType = 
  | 'clay-tablet'       // 점토판
  | 'stone-monument'    // 석비·무덤 벽면
  | 'papyrus'           // 파피루스
  | 'parchment-leather' // 가죽·양피지
  | 'ostracon'          // 도기 파편
  | 'metal-scroll'      // 금속판·은제 두루마리
  | 'oracle-bone'       // 갑골 (우골·갑각)
  | 'wood-wax';         // 목판·밀랍판

export interface InscriptionBreakdown {
  scriptOriginal: string;        // 원전 문자
  transliteration: string;       // 학술 라틴어 전사
  translationKo: string;        // 한국어 직역
  literaryContext: string;       // 의례/문학적 해설
}

export interface ArtifactRecord {
  id: string;
  titleKo: string;
  titleNative: string;
  civilization: CivilizationId;
  museumAccessionNo?: string;    // 박물관 소장 고유 번호 (e.g. BM K.3375, JE 32169, 1QIsa^a)
  script: string;
  language: string;
  dateStartBCE: number;
  dateEndBCE: number;
  dateBasis: string;
  material: MaterialType;
  materialLabel: string;
  genre: GenreCategory;
  genreLabel: string;
  textUnit: TextUnitCategory;
  textUnitLabel: string;
  extent: string;
  actors: string;
  context: string;
  dateEventBCE?: string;
  compositionDateBCE?: string;
  redactionDateBCE?: string;
  witnessDateBCE: string;

  confidence: ConfidenceLevel;
  confidenceReason: string;
  summary: string;
  description: string;
  preservationNotes: string;
  inscriptionBreakdown?: InscriptionBreakdown; // 1차 비문 분석 모듈
  sources: SourceReference[];
  imageRights: string;
  svgGraphicType?: 'tablet' | 'papyrus' | 'stone' | 'silver' | 'pottery' | 'linear-b' | 'oracle-bone';
}

export interface ScribalInstitution {
  id: string;
  nameKo: string;
  nameNative: string;
  civilization: CivilizationId;
  periodBCE: string;
  primaryLocation: string;
  description: string;
  curriculum: string[];
  keyArtifacts: string[];
  historicalImpact: string;
}

// --- HOMERIC EPIC MASTERY TYPES ---
export interface HomericBookSummary {
  bookNumber: number;
  epic: 'iliad' | 'odyssey';
  titleKo: string;
  titleGreek: string;
  summary: string;
  keyEvents: string[];
  iconicLines: {
    greek: string;
    transliteration: string;
    korean: string;
  }[];
  keyCharacters: string[];
}

export interface HomericEpithetItem {
  greek: string;               // e.g. "ποδάρκης δῖος Ἀχιλλεύς"
  transliteration: string;     // e.g. "podarkes dios Achilleus"
  korean: string;              // e.g. "발이 빠른 신과 같은 아킬레우스"
  grammarCaseAndMeter: string; // e.g. "주격(Nominative) • 6보격 문말(Verse-end)"
  epicSource: 'iliad' | 'odyssey' | 'both'; // 원전 출처 구분: 'iliad' | 'odyssey' | 'both'
  lineCitation?: string;       // e.g. "Il. 1.121" | "Od. 1.1" | "Il. 1.7 / Od. 1.28"
}

export interface HomericCharacter {
  id: string;
  nameKo: string;
  nameGreek: string;
  nameTransliteration?: string;
  epithet: string;            // 대표 영웅 수식어구 (Primary Epithet)
  epithetGreek?: string;
  epithetTransliteration?: string;
  epithetKo?: string;
  epithetsList?: HomericEpithetItem[]; // 다중 구전 운율 수식어구 체계 (Multiple Formulaic Epithet System)
  side: 'achaean' | 'trojan' | 'god' | 'odyssey-hero' | 'odyssey-monster';
  role: string;
  description: string;
  aristeiaOrKeyBook?: string;
  philologyNote?: string;
}

export interface LinearBAttestation {
  sign: string;                // e.g. "𐀷𐀩𐀏" or transliterated syllabogram
  transliteration: string;     // e.g. "wa-na-ka"
  mycenaeanGreek: string;      // e.g. "ϝάναξ (wanaks)"
  tabletCitation: string;      // e.g. "Pylos PY Ta 711, PY Er 312"
  contextAndMeaning: string;   // e.g. "미케네 최고 군주/관료 수장 표상"
}

export interface HomericConcept {
  id: string;
  termGreek: string;
  termTransliteration: string;
  termKo: string;
  etymology?: string;                  // 인도유럽어족 어원 및 언어학적 origin
  definition: string;
  exampleInHomer: string;
  primaryPassages?: string;            // 원전 핵심 권수 및 행수 (e.g. "Il. 9.410-416")
  opposingConcept?: string;            // 대립/대비되는 개념어 (e.g. "Biē ↔ Mētis")
  philosophicalDepth?: string;         // 서양고전학 문헌학 및 비교철학 심화 해설 (Snell, Dodds, Nagy)
  comparativeMythology?: string;       // 근동 및 비교신화학적 사료 (Gilgamesh, Ugarit 등)
  linearBAttestation?: LinearBAttestation; // 미케네 선문자 B 점토판 실증 사료
}

export interface ConceptRelationship {
  id: string;
  sourceId: string;
  targetId: string;
  type: 'triggers' | 'opposes' | 'transforms' | 'culminates';
  typeLabelKo: string;
  narrativeDescription: string;
}

export interface ComparativeEpicMatrixItem {
  id: string;
  theme: string;
  conceptId?: string;                  // 호메로스 10대 개념어 연계 ID (e.g. "kleos", "xenia")
  greekEpicConcept: string;
  iliadOdysseyManifestation: string;
  nearEasternParallel: string;         // 메소포타미아 길가메시 서사시 등
  indianMahabharataParallel?: string;  // 인도 마하바라타 / 라마야나 서사시
  norseBeowulfParallel?: string;       // 고대 북유럽 비외르우프 / 에다 서사시
  comparativeInsight: string;
}

export interface SourceReference {
  id: string;
  grade: 'A' | 'B' | 'C' | 'D';
  gradeLabel: string;
  title: string;
  authorOrInstitution: string;
  year?: string;
  url?: string;
  description?: string;
}

export interface ClaimRecord {
  id: string;
  claimTitle: string;
  claimSentence: string;
  claimType: 'fact' | 'inference' | 'hypothesis';
  status: ConfidenceLevel;
  statusLabel: string;
  civilization: CivilizationId;
  supportingEvidence: string[];
  counterEvidence: string[];
  alternativeExplanations: string[];
  keyResearchers: string[];
  primarySources: string[];
  lastReviewed: string;
}

export interface CivilizationInfo {
  id: CivilizationId;
  nameKo: string;
  nameEn: string;
  accentColor: string;
  colorClass: string;
  scriptEmergenceBCE: number;
  scriptName: string;
  primaryMedia: string;
  oneSentenceSummary: string;
  keyQuestion: string;
  stages: {
    stage: number;
    title: string;
    description: string;
    bcePeriod: string;
  }[];
  overviewNarrative: string;
  keyDiscoveries: string[];
  differentiator: string;
}

export interface ComparativeEssay {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  keyTakeaways: string[];
  civilizationsDiscussed: CivilizationId[];
}

export interface LargeTextDefinitionMode {
  id: 'single-work' | 'text-collection' | 'corpus' | 'tradition' | 'extent' | 'copies' | 'labor';
  nameKo: string;
  shortDescription: string;
  impactExplanation: string;
  winnerCivilization: string;
  exampleArtifact: string;
}

export interface PreservationBiasInfo {
  material: string;
  survivalRate: string;
  favorableConditions: string;
  destructiveConditions: string;
  paradoxExample: string;
  biasImpact: string;
}

export interface GlossaryItem {
  term: string;
  originalTerm?: string;
  category: string;
  definition: string;
  context: string;
}

// ----------------------------------------------------
// Homeric Scholarship & Comparative Philology Types
// ----------------------------------------------------

export interface HomericScholarshipRecord {
  id: string;
  category: 'oral-formulaic' | 'homeric-question' | 'neoanalysis' | 'textual-criticism' | 'evolutionary-model' | 'near-eastern-comparative' | 'mycenaean-linear-b';

  categoryLabel: string;
  titleKo: string;
  scholarName: string;      // e.g. "Milman Parry & Albert Lord", "F.A. Wolf", "Gregory Nagy"
  yearOrEra: string;        // e.g. "1930-1954", "1795"
  coreThesis: string;       // 핵심 연구 명제
  evidenceDescription: string; // 주요 근거 및 사료
  citation: string;         // 학술 출처 저술/DOI 명칭
  impactOnHomer: string;    // 호메로스 이해에 미친 영향
}

export interface NearEasternParallel {
  id: string;
  nearEasternWork: string;  // e.g. "길가메시 서사시 (Epic of Gilgamesh)"
  nearEasternEra: string;   // e.g. "c. 2100 ~ 1200 BCE"
  homericWork: string;      // e.g. "일리아스 (Iliad)"
  motifTitle: string;       // e.g. "전우의 죽음과 주인공의 비극적 분노"
  nearEasternEvidence: string; // 메소포타미아/우가리트 사료 내용
  homericEvidence: string;     // 호메로스 대응 구절/권수
  comparativeAnalysis: string; // Martin L. West & Walter Burkert 등의 학술 비교 분석
  citation: string;
}

export interface LinearBComparison {
  id: string;
  linearBTerm: string;      // e.g. "wa-na-ka"
  linearBTransliteration: string;
  linearBMeaning: string;   // e.g. "미케네 궁전의 최고 군주/왕"
  homericTerm: string;      // e.g. "ἄναξ (Anax)"
  homericMeaning: string;   // e.g. "신 또는 전사 부족장 (아가멤논/제우스)"
  historicalShift: string;  // 청동기 붕괴(c. 1200 BCE) 후 왕권 붕괴와 어휘 의미 변천 해설
  tabletReference: string;  // e.g. "Pylos Ta 711, Knossos V 52"
}
