import { GlossaryItem } from '../types';

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: '아브자드 (Abjad)',
    originalTerm: 'Abjad',
    category: '문자체계',
    definition: '자음(Consonants) 부호만을 기록하고 모음(Vowels)은 문맥에 따라 독자가 보충하여 읽는 문자체계. 페니키아, 고대 히브리, 아람 문자가 대표적임.',
    context: '그리스인들은 페니키아 아브자드를 도입할 때 사용할 자음이 없는 기호들에 모음 음가를 부여하여 최초의 완전한 알파벳을 발명했다.'
  },
  {
    term: '어휘목록 (Lexical Lists)',
    originalTerm: 'Lexical Lists / Cuneiform Lexical Tradition',
    category: '지식체계',
    definition: '메소포타미아 서기관들이 직업, 사물, 동식물, 그릇, 수메르어-아카드어 어휘를 주제별로 구획하여 정리한 분류 목록.',
    context: '기원전 3300년 우루크 IV 층에서 출토되어 회계 문서와 사실상 동시 출현했음을 증명하는 핵심 유물이다.'
  },
  {
    term: '선문자 B (Linear B)',
    originalTerm: 'Linear B',
    category: '문자체계',
    definition: '청동기 시대 미케네 그리스 문명(c. 1400–1200 BCE)에서 미케네 그리스어를 기록하기 위해 사용된 음절(Syllabary) 문자체계.',
    context: '1952년 마이클 카트리스에 의해 해독되었으며, 오직 궁전 아카이브 아카운팅 장부로만 사용되다가 궁전 붕괴 시 전면 사멸했다.'
  },
  {
    term: '코퍼스 (Corpus)',
    originalTerm: 'Textual Corpus',
    category: '고고학·문헌학',
    definition: '특정 장소, 시대, 또는 장르에서 출토되거나 전승된 텍스트 및 유물 전체 집합.',
    context: '이 연구에서는 단일 작품과 특정 유적지의 출토 코퍼스를 구별하여 비교 단위로 사용한다.'
  },
  {
    term: '문자화 (Textualization)',
    originalTerm: 'Textualization',
    category: '문헌학',
    definition: '구전(Oral tradition)으로 읊어지던 시, 신화, 제의 주문이 물리적 문자로 고정되는 역사적 과정.',
    context: '호메로스 서사시나 성서의 예언서 전승이 구전 가창에서 파피루스/가죽 텍스트로 고정된 사례가 대표적이다.'
  },
  {
    term: '우경좌서 (Boustrophedon)',
    originalTerm: 'Boustrophedon',
    category: '문자 비문',
    definition: '소가 밭을 갈듯 한 행은 왼쪽에서 오른쪽으로, 다음 행은 오른쪽에서 왼쪽으로 방향을 번갈아 글을 쓰는 고대 비문 방식.',
    context: '크레타 고르틴 법전 비문이나 초기 그리스 알파벳 비문에서 관찰된다.'
  },
  {
    term: '오스트라콘 (Ostracon)',
    originalTerm: 'Ostracon (pl. Ostraca)',
    category: '기록 매체',
    definition: '깨진 도자기 파편 표면에 붓과 먹으로 글씨를 적거나 칼로 새긴 고대 실용 기록 매체.',
    context: '파피루스보다 구하기 쉬워 라기스 군사 편지, 게제르 농경 메모, 아테네 도편추방제 투표용지로 다량 사용되었다.'
  },
  {
    term: '피라미드 텍스트 (Pyramid Texts)',
    originalTerm: 'Pyramid Texts',
    category: '종교·장례',
    definition: '이집트 고왕국 제5-6왕조 파라오 무덤 지하 매장실 석회암 내벽에 새겨진 현존 최고(最古)의 대규모 장례 제의 주문 집성.',
    context: '사카라 우나스 피라미드 매장실에 228개 주문이 현존하며, 이후 중왕국 관 텍스트와 신왕국 사자의 서 원형이 되었다.'
  },
  {
    term: '보존 편향 (Preservation Bias)',
    originalTerm: 'Preservation Bias',
    category: '고고학 방법론',
    definition: '유물의 물리적 재료(점토 vs 파피루스 vs 가죽)와 매장 매체 기후 조건에 따라 특정 자료만 선택적으로 남게 되는 왜곡 현상.',
    context: '메소포타미아 점토판은 불에 구워져 대량 보존된 반면, 이집트 델타의 파피루스는 습기로 부식되어 출토 데이터의 착시를 일으킨다.'
  },
  {
    term: 'DCCLT',
    originalTerm: 'Digital Corpus of Cuneiform Lexical Texts',
    category: '디지털 인문학',
    definition: 'UC 버클리가 주도하여 메소포타미아 쐐기문자 어휘목록 점토판 전체를 디지털 정본으로 제공하는 정밀 학술 코퍼스 DB.',
    context: '본 연구 프로젝트의 메소포타미아 어휘목록 출현 연대 및 텍스트 데이터의 주요 A급 출처이다.'
  }
];
