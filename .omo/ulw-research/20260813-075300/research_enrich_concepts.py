import json
import re

ENRICHED_10_CONCEPTS = [
  {
    "id": "kleos",
    "termGreek": "κλέος",
    "termTransliteration": "Kleos",
    "termKo": "불멸의 영광 (Kleos Aphthiton)",
    "etymology": "조어 인도유럽어(PIE) *kleu- ('듣다 / 귓가에 들리다'), 고대 그리스어 κλύω(klyō)에서 유래. 원래 의미는 '노래를 통해 구전으로 널리 들리는 유명함'.",
    "definition": "죽음을 뛰어넘어 구전과 시(Poetry/Song)를 통해 영원히 후세의 입에 오르내리는 불멸의 이름과 영예.",
    "exampleInHomer": "아킬레우스는 요절하더라도 불멸의 영광(Kleos Aphthiton)을 얻는 길과, 오래 살되 잊혀지는 길 중 전자(전사로서의 불멸)를 선택한다. (일리아스 9권 410-416행)",
    "primaryPassages": "Il. 9.410-416, Il. 18.121, Od. 1.344, Od. 24.196",
    "opposingConcept": "Akleos (잊혀짐, 수치스러운 사멸) / Nostos (생환, 귀환)",
    "philosophicalDepth": "그레고리 나지(Gregory Nagy, 'The Best of the Achaeans')에 따르면, Kleos는 영웅의 일회적 삶을 서사시적 연창(Performance)을 통해 불멸화하는 고대 비교시학의 핵심 장치이다. 브루노 스넬(Bruno Snell)은 영웅이 죽음을 대가로 자신의 존재를 시어(Verse)로 승화시키는 의식이라 분석했다.",
    "comparativeMythology": "메소포타미아 《길가메시 서사시》의 불로초 탐색 실패 후 성벽 수축을 통해 불멸의 이름을 남기려는 주제의 동지중해적 동형(Parallel)."
  },
  {
    "id": "nostos",
    "termGreek": "νόστος",
    "termTransliteration": "Nostos",
    "termKo": "고향으로의 귀환 (Nostos)",
    "etymology": "조어 인도유럽어(PIE) *nes- ('살아서 어둠을 뚫고 빛으로 돌아오다')에서 유래. 영어 Nostalgia(향수)의 어원.",
    "definition": "전쟁의 파괴와 바다의 방랑을 이겨내고 자신의 잃어버린 자아, 가문, 왕국(이타케)으로 복귀하는 귀환 여행.",
    "exampleInHomer": "오뒷세우스는 칼립소 여신이 제시한 '죽지 않는 신성'의 유혹을 거절하고, 죽을 운명의 인간으로서 고향 이타케와 아내 페넬로페에게 돌아가는 귀환(Nostos)을 선택한다. (오뒷세이아 5권 203-224행)",
    "primaryPassages": "Od. 1.1-5, Od. 5.203-224, Od. 11.439-444, Od. 23.230",
    "opposingConcept": "Kleos (현세적 무공 요절) / Nōnymnos (이름 없이 방랑하다 사멸함)",
    "philosophicalDepth": "더글러스 프레임(Douglas Frame, 'The Myth of Return')에 따르면, Nostos는 단순한 공간적 이동이 아니라 신체적 죽음의 위험에서 생명의 빛으로 되돌아오는 '정신적 생환(Return to Consciousness)'이다.",
    "comparativeMythology": "우가리트 서사시의 바알 신의 지하세계 귀환 및 이집트 오시리스 신화의 생환 모티브와의 동지중해 비교."
  },
  {
    "id": "xenia",
    "termGreek": "ξενία",
    "termTransliteration": "Xenia",
    "termKo": "손님 환대 제의 (Xenia)",
    "etymology": "조어 인도유럽어(PIE) *ghos-ti- ('이방인 / 손님 / 신성한 상호 의무')에서 유래.",
    "definition": "제우스 크세니오스(Zeus Xenios) 신의 이름으로 이방인과 나그네를 환대하고 신분을 묻기 전에 음식과 숙소를 제공하며 선물을 교환하는 고대 지중해 신성 규범.",
    "exampleInHomer": "트로이 전쟁의 발화점이 파리스의 손님 환대 규범(Xenia) 위반이었으며, 오뒷세이아는 외눈박이 거인 퀴클롭스의 문명적 환대 거부와 구혼자들의 가문 환대 침해에 대한 신성한 징벌이다. (일리아스 6권 119-236행, 오뒷세이아 9권 266-278행)",
    "primaryPassages": "Il. 6.119-236, Od. 9.266-278, Od. 14.45-61, Od. 24.265-279",
    "opposingConcept": "Axenia (환대 거부, 야만성) / Dysxenia (손님에 대한 해악)",
    "philosophicalDepth": "가브리엘 허만(Gabriel Herman)과 핀리(M.I. Finley, 'The World of Odysseus')는 Xenia가 법률과 국가가 부재하던 시기 부족 간 평화적 교류와 동맹을 구축하던 유일한 외교적 제의(Ritualised Friendship)였다고 입증했다.",
    "comparativeMythology": "구약 성서 창세기(18장 아브라함의 천사 환대 모티브) 및 고대 근동의 이방인 보호 신성법(Hospitality Law)과의 직교."
  },
  {
    "id": "time",
    "termGreek": "τιμή",
    "termTransliteration": "Timē",
    "termKo": "사회적 명예 및 전리품 보상 (Timē)",
    "etymology": "조어 인도유럽어(PIE) *kwei- ('평가하다 / 가치를 가늠하다 / 대가를 치르다')에서 유래.",
    "definition": "동료 전사들과 공동체로부터 공식적으로 인정받는 명예와 눈에 보이는 물질적 전리품(Geras).",
    "exampleInHomer": "아가멤논이 아킬레우스의 전리품 여인 브리세이스를 빼앗은 것은 단순한 재물 손실이 아니라 아킬레우스의 전사적 명예(Timē)를 짓밟은 행위였기에 거룩한 분노(Mēnis)가 폭발한다. (일리아스 1권 158-171행)",
    "primaryPassages": "Il. 1.158-171, Il. 9.318-322, Il. 12.310-328, Od. 1.347",
    "opposingConcept": "Atimia (명예 훼손, 불명예, 무가치)",
    "philosophicalDepth": "E.R. 도즈(E.R. Dodds, 'The Greeks and the Irrational')는 호메로스 사회를 내면적 죄의식 문화(Guilt Culture)가 아닌 타인의 시선과 사회적 평가에 의존하는 '수치 문화(Shame Culture)'로 규정하며, Timē가 영웅의 존재 가치 자체였다고 설명한다.",
    "comparativeMythology": "북유럽 비외르우프 서사시의 명예 전리품(Ring-giver) 보상 문화와의 전형적 인도유럽어족 대조."
  },
  {
    "id": "metis",
    "termGreek": "μῆτις",
    "termTransliteration": "Mētis",
    "termKo": "꾀, 지혜, 임기응변 (Mētis)",
    "etymology": "조어 인도유럽어(PIE) *me- ('측정하다 / 계획을 세우다 / 조율하다')에서 유래.",
    "definition": "단순한 물리적 사력(Biē)에 대비되는 꾀, 지혜, 변장술, 상황 대응 및 딜레마 극복 능력.",
    "exampleInHomer": "오뒷세우스는 자신을 '아무도 아닌 자(Outis)'라고 칭하여 퀴클롭스를 속이고, 목마(Wooden Horse) 기략을 발명하여 트로이를 함락시킨다. (오뒷세이아 9권 364-367행)",
    "primaryPassages": "Il. 23.313-318, Od. 9.364-367, Od. 13.291-299, Od. 22.1-40",
    "opposingConcept": "Biē (야만적·물리적 무력, 아킬레우스의 사력 ↔ 오뒷세우스의 지혜)",
    "philosophicalDepth": "마르셀 드티엔(Marcel Detienne)과 르네 베르낭(Jean-Pierre Vernant, 'Cunning Intelligence in Greek Culture')에 따르면, Mētis는 고정된 이성이 아니라 유동적이고 굽이치는 상황에 맞추어 변신하고 승리하는 지중해적 실용 지혜의 정수이다.",
    "comparativeMythology": "메소포타미아 지혜와 물의 신 에아(Ea/Enki)의 기략 모티브 및 북유럽 로키(Loki) 신화와의 비교."
  },
  {
    "id": "menis",
    "termGreek": "μῆνις",
    "termTransliteration": "Mēnis",
    "termKo": "신성한 거룩한 분노 (Mēnis)",
    "etymology": "조어 인도유럽어(PIE) *men- ('정신 / 영적 격노 / 우주적 분노')에서 유래.",
    "definition": "인간의 단순한 개인적 화(Thymos/Kholos)가 아니라, 우주 질서 파괴나 신성 모독에 반응하여 신이나 반신 영웅만이 발하는 거룩하고 파괴적인 분노.",
    "exampleInHomer": "《일리아스》 1권 첫 단어 'μῆνιν(Mēnin)'으로 서시가 선언되며, 파트로클로스의 죽음 이후 헥토르를 도살하고 시신을 끌고 다니는 아킬레우스의 우주적 분노의 동력이다. (일리아스 1권 1행, 21권 1-135행)",
    "primaryPassages": "Il. 1.1, Il. 5.33, Il. 19.35, Il. 21.1-135",
    "opposingConcept": "Thymos / Kholos (인간의 일반적 감정적 화) / Philotes (화해, 우애)",
    "philosophicalDepth": "레너드 뮬너(Leonard Muellner, 'The Anger of Achilles')는 Mēnis가 텍스트 전체에서 오직 아폴론, 제우스, 그리고 영웅 중에는 아킬레우스에게만 부여되는 금기적 신성 분노의 어휘라고 고증했다.",
    "comparativeMythology": "구약 성서 야훼 신의 '야훼의 분노(Charon Aph)' 및 길가메시의 엔키두 사망 후의 통곡 격노와의 동형성."
  },
  {
    "id": "ate",
    "termGreek": "ἄτη",
    "termTransliteration": "Atē",
    "termKo": "정신의 눈멂 / 파멸적 착오 (Atē)",
    "etymology": "조어 인도유럽어(PIE) *aw- ('해를 입히다 / 신성 유발적 미망')에서 유래.",
    "definition": "신들에 의해 눈이 멀어 도덕적·이성적 판단력을 잃고 파멸적 행동을 저지르는 정신적 미망과 착오 상태.",
    "exampleInHomer": "아가멤논은 19권에서 아킬레우스와 화해하며 자신이 아킬레우스의 전리품을 빼앗은 오만은 신 제우스와 아테가 내린 눈멂(Atē) 때문이었다고 시인한다. (일리아스 19권 85-138행)",
    "primaryPassages": "Il. 9.502-512, Il. 19.85-138, Od. 11.61, Od. 22.316",
    "opposingConcept": "Sophrosyne (맑은 정신, 절제, 사려깊음)",
    "philosophicalDepth": "E.R. 도즈(E.R. Dodds)는 Atē를 '신적 개입(Psychic Intervention)'의 대표적 사례로 보며, 초기 그리스인들이 자신의 치명적 실수를 초자연적 비이성적 미망의 탓으로 돌리는 심리적 기제였다고 분석했다.",
    "comparativeMythology": "북유럽 신화에서 로키의 꾀임에 빠져 발두르를 죽인 회두르의 비극적 착오 모티브와의 대조."
  },
  {
    "id": "moira",
    "termGreek": "μοῖρα",
    "termTransliteration": "Moira",
    "termKo": "할당된 운명과 몫 (Moira)",
    "etymology": "조어 인도유럽어(PIE) *mer- ('분할하다 / 몫을 나누어주다 / 운명의 할당')에서 유래.",
    "definition": "신들조차 임의로 변경하거나 꺾을 수 없는 인간 각자에게 할당된 수명, 몫, 운명의 절대적 경계.",
    "exampleInHomer": "제우스는 자신이 사랑하는 아들 사르페돈이 죽을 운명(Moira)에 처했을 때 그를 살리고 싶어 하지만, 헤라의 경고를 듣고 운명의 섭리를 꺾지 못한다. (일리아스 16권 431-461행)",
    "primaryPassages": "Il. 16.431-461, Il. 22.208-213, Od. 1.32-43, Od. 11.292",
    "opposingConcept": "Hyper moiran (운명의 한계를 넘어서려는 무모한 도발)",
    "philosophicalDepth": "디트리히(B.C. Dietrich, 'Death, Fate and the Gods')에 따르면, Moira는 최고의 신 제우스보다도 더 근원적인 우주적 할당 원리로서 초기 그리스 비극관의 씨앗이 된다.",
    "comparativeMythology": "북유럽 신화의 노른(Norns) 세 자매 운명의 실 타래 및 고대 근동 운명의 판(Tablets of Destinies)과의 비교."
  },
  {
    "id": "hubris",
    "termGreek": "ὕβρις",
    "termTransliteration": "Hubris",
    "termKo": "신성과 경계를 넘어서는 오만 (Hubris)",
    "etymology": "조어 인도유럽어(PIE) *ud- ('위로 치솟다 / 경계를 선넘어 짓밟다')에서 유래.",
    "definition": "자신의 인간적 한계를 잊고 신성을 침범하거나 타인의 존엄(Timē)을 짓밟는 과도한 오만과 선넘음.",
    "exampleInHomer": "오뒷세우스가 퀴클롭스를 이긴 후 오만하게 자신의 진짜 이름을 외쳤다가 포세이돈의 저주를 받게 되며, 이타케의 구혼자들은 가문 환대 침해 오만(Hubris)으로 사형 판결을 받는다. (오뒷세이아 9권 502-535행, 16-22권)",
    "primaryPassages": "Il. 1.214, Il. 11.695, Od. 1.368, Od. 14.84, Od. 17.581",
    "opposingConcept": "Aidos (경외심, 수치심, 신과 타인에 대한 존중)",
    "philosophicalDepth": "피셔(N.R.E. Fisher, 'Hybris: A Study in the Values of Honour and Shame')는 Hubris가 단순한 자만심이 아니라 타인의 명예(Timē)를 의도적으로 유린하여 자신의 우월함을 과시하려는 폭력적 침해 행위라고 정의했다.",
    "comparativeMythology": "바벨탑 신화(창세기 11장)의 신성 영역 침범 및 힌두 신화 아수라들의 오만 모티브와의 직교."
  },
  {
    "id": "aristeia",
    "termGreek": "ἀριστεία",
    "termTransliteration": "Aristeia",
    "termKo": "영웅의 무공 절정 순간 (Aristeia)",
    "etymology": "고대 그리스어 ἄριστος(aristos, '최상 / 최고') + -εία(행위/순간)에서 유래.",
    "definition": "전장에서 개별 전사가 신의 가호와 신성한 불꽃을 받아 적진을 홀로 괴멸시키는 영웅적 무공의 최고조 서사 단위.",
    "exampleInHomer": "일리아스 5권 디오메데스의 무공 절정(Aristeia)과 21권 아킬레우스가 크산토스 강물을 핏빛으로 물들이는 전율적인 무공 순간. (일리아스 5권 1-133행, 21권 1-135행)",
    "primaryPassages": "Il. 5.1-133, Il. 11.1-283, Il. 16.1-683, Il. 21.1-135",
    "opposingConcept": "Kakotes (비겁함, 약화, 무공의 굴욕)",
    "philosophicalDepth": "마크 에드워즈(Mark W. Edwards, 'Homer: Poet of the Iliad')는 Aristeia가 (1) 무구 착용, (2) 전장 출격, (3) 신성한 빛, (4) 적장 킬스트릭, (5) 부상과 치료, (6) 듀얼 승리의 6단계 구전 구조를 엄격히 따르는 전형적 서사 단위(Type Scene)라고 해설했다.",
    "comparativeMythology": "마하바라타 서사시의 카르나(Karna) 및 아르주나(Arjuna)의 무공 절정 서사 단락과의 정밀 대조."
  }
]

homer_ts_path = "c:/Working/src/data/homer.ts"
with open(homer_ts_path, "r", encoding="utf-8") as f:
    code = f.read()

pattern = r"export const HOMERIC_CONCEPTS: HomericConcept\[\] = \[[\s\S]*?\];"
ts_concepts_str = "export const HOMERIC_CONCEPTS: HomericConcept[] = " + json.dumps(ENRICHED_10_CONCEPTS, ensure_ascii=False, indent=2) + ";"

new_code = re.sub(pattern, ts_concepts_str, code)

with open(homer_ts_path, "w", encoding="utf-8") as f:
    f.write(new_code)

print(f"Successfully enriched all 10 Homeric Concepts in homer.ts!")
