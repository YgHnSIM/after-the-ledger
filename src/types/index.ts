export type CivilizationId = 'mesopotamia' | 'egypt' | 'greece' | 'israel-judah' | 'ugarit';

export type ConfidenceLevel = 'sure' | 'likely' | 'debated' | 'unknown';
// '확실' | '유력' | '논쟁 중' | '알 수 없음'

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
  | 'personal-letters'; // 편지·일상·유희

export type MaterialType = 
  | 'clay-tablet'       // 점토판
  | 'stone-monument'    // 석비·무덤 벽면
  | 'papyrus'           // 파피루스
  | 'parchment-leather' // 가죽·양피지
  | 'ostracon'          // 도기 파편
  | 'metal-scroll'      // 금속판·은제 두루마리
  | 'wood-wax';         // 목판·밀랍판

export interface TextVector {
  linesOrWordsCount: string;       // 현존 행·단어·문자 수
  singleObjectExtent: string;      // 하나의 물리적 유물 분량
  copiesCount: string;             // 동일 작품 사본 수
  totalCorpusArtifacts: string;    // 코퍼스 전체 유물 수
  laborEstimate: string;           // 제작에 필요한 문자 노동량
  transmissionSpan: string;        // 전승 기간과 지리적 확산
}

export interface ArtifactRecord {
  id: string;
  titleKo: string;
  titleNative: string;
  civilization: CivilizationId;
  script: string;                  // e.g. "설형문자 (Cuneiform)", "히에로그리프", "Linear B", "고대 히브리 문자"
  language: string;                // e.g. "아카드어", "고대 이집트어", "미케네 그리스어"
  dateStartBCE: number;            // negative or positive BCE value (e.g. 3300 BCE = 3300)
  dateEndBCE: number;
  dateBasis: string;               // 고고학적 층위, 방사성탄소, 왕대, 고문서학
  material: MaterialType;
  materialLabel: string;
  genre: GenreCategory;
  genreLabel: string;
  textUnit: TextUnitCategory;
  textUnitLabel: string;
  extent: string;                  // 현존 규격 및 행수
  actors: string;                  // 제작 주체 (서기관, 사제, 왕실, 주민)
  context: string;                 // 출토 맥락 (궁전 아카이브, 무덤, 동굴, 집터)
  compositionDateBCE?: string;     // 추정 구성 연대 (성립 시기)
  witnessDateBCE: string;          // 해당 물리적 유물 제작 연대
  confidence: ConfidenceLevel;
  confidenceReason: string;
  summary: string;
  description: string;
  preservationNotes: string;       // 보존 편향 특이사항
  sources: SourceReference[];
  imageRights: string;
  svgGraphicType?: 'tablet' | 'papyrus' | 'stone' | 'silver' | 'pottery' | 'linear-b';
}

export interface SourceReference {
  id: string;
  grade: 'A' | 'B' | 'C' | 'D';
  gradeLabel: string; // "A: 유물 소장기관 / 코퍼스 DB", "B: 동료평가 논문", "C: 학술 해설", "D: 참고자료"
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
  accentColor: string;             // HEX or CSS variable
  colorClass: string;
  scriptEmergenceBCE: number;      // 문자 출현·도입 연대 (상대연대 t=0)
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
  differentiator: string;          // 문명 고유의 특징
}

export interface ComparativeEssay {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  summary: string;
  content: string;                 // Full academic essay text
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
