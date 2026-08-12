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

export interface HomericCharacter {
  id: string;
  nameKo: string;
  nameGreek: string;
  epithet: string;            // 영웅 수식어구 (Formulaic Epithet)
  side: 'achaean' | 'trojan' | 'god' | 'odyssey-hero' | 'odyssey-monster';
  role: string;
  description: string;
}

export interface HomericConcept {
  id: string;
  termGreek: string;
  termTransliteration: string;
  termKo: string;
  definition: string;
  exampleInHomer: string;
}

export interface ComparativeEpicMatrixItem {
  id: string;
  theme: string;
  greekEpicConcept: string;
  iliadOdysseyManifestation: string;
  nearEasternParallel: string;
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
  category: 'oral-formulaic' | 'homeric-question' | 'neoanalysis' | 'textual-criticism';
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
