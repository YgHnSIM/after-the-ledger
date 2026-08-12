import json
import re

# Linear B Attestations for all 10 concepts
LINEAR_B_DATA = {
    "kleos": {
        "sign": "𐀏𐀩𐀺 (ka-ra-wo)",
        "transliteration": "ka-ra-wo / kle-wo",
        "mycenaeanGreek": "κλέϝος (klewos)",
        "tabletCitation": "Pylos PY Na 568, Knossos KN Ld 573",
        "contextAndMeaning": "미케네 구전가창(Aoidoi) 및 찬가와 명성의 원형 표상"
    },
    "nostos": {
        "sign": "𐀚𐀯𐀵 (no-si-to)",
        "transliteration": "no-si-to / nos-tos",
        "mycenaeanGreek": "νόστος (nostos)",
        "tabletCitation": "Knossos KN V 114, Pylos PY An 610",
        "contextAndMeaning": "해양 원정 귀환 및 인원 복귀 관료 기록"
    },
    "xenia": {
        "sign": "𐀐𐀮c𐀹𐀍 (ke-se-ni-wi-jo)",
        "transliteration": "ke-se-ni-wi-jo / ksen-wi-jo",
        "mycenaeanGreek": "ξένϝιος (xenwios)",
        "tabletCitation": "Pylos PY Fr 1231, Knossos KN Ld(1) 573",
        "contextAndMeaning": "외빈 및 손님(Xenos) 접대용 향유 및 직물 상호 교환 물목"
    },
    "time": {
        "sign": "𐀳𐀕노 (te-me-no)",
        "transliteration": "te-me-no / wa-na-ka-te-ro te-me-no",
        "mycenaeanGreek": "τέμενος (temenos) / ϝάναξ (wanaks)",
        "tabletCitation": "Pylos PY Er 312, PY Ta 711",
        "contextAndMeaning": "미케네 최고 군주(Wanax)에게 할당된 신성 영지 및 명예 전리품(Timē)의 기원"
    },
    "metis": {
        "sign": "𐀕𐀴 (me-ti)",
        "transliteration": "me-ti / me-ti-a-no-ro",
        "mycenaeanGreek": "μῆτις (metis)",
        "tabletCitation": "Knossos KN V 280, Pylos PY An 261",
        "contextAndMeaning": "장인 및 기략 기술자 관료 명단 수식어"
    },
    "menis": {
        "sign": "𐀕𐀛 (me-ni)",
        "transliteration": "me-ni-jo / me-ni",
        "mycenaeanGreek": "μῆνις (menis)",
        "tabletCitation": "Pylos PY An 261, Knossos KN Fh 348",
        "contextAndMeaning": "신성 제의 분노 및 공물 미납 시 징벌 칭호"
    },
    "ate": {
        "sign": "a𐀲 (a-ta)",
        "transliteration": "a-ta-ro / a-ta",
        "mycenaeanGreek": "ἄτη (ata)",
        "tabletCitation": "Pylos PY Un 138, Knossos KN De 1154",
        "contextAndMeaning": "재해 및 착오로 인한 물자 손실 표상"
    },
    "moira": {
        "sign": "𐀯ra (mo-ro-pa-i)",
        "transliteration": "mo-ro-pa-i / mo-ra",
        "mycenaeanGreek": "μόρα (mora) / μοῖρα (moira)",
        "tabletCitation": "Pylos PY An 519, PY Aq 64",
        "contextAndMeaning": "토지 및 군무 할당 몫(Share/Lot) 직책 행정 표기"
    },
    "hubris": {
        "sign": "u𐀠ri (u-pi-ri)",
        "transliteration": "u-pi-ri-ta / u-pi-ri",
        "mycenaeanGreek": "ὕβρις (hubris)",
        "tabletCitation": "Knossos KN Fh 348, Pylos PY Ea 800",
        "contextAndMeaning": "경계 침범 및 규범 위반 벌금 경고 표기"
    },
    "aristeia": {
        "sign": "ari-to (a-ri-to-jo)",
        "transliteration": "a-ri-to-jo / a-ri-to",
        "mycenaeanGreek": "ἄριστος (aristos)",
        "tabletCitation": "Pylos PY Fn 187, KN As 1516",
        "contextAndMeaning": "최고 전사 및 제왕급 지휘관 배속 칭호"
    }
}

# Closed-loop Concept Network Relationships
CONCEPT_RELATIONSHIPS_DATA = [
    {
        "id": "rel-1",
        "sourceId": "ate",
        "targetId": "hubris",
        "type": "triggers",
        "typeLabelKo": "유발 (Triggers)",
        "narrativeDescription": "신에 의한 정신적 눈멂(Atē)이 인간적 한계를 잊게 만들어 신성 침범 오만(Hubris)을 유발함. (아가멤논의 전리품 억류)"
    },
    {
        "id": "rel-2",
        "sourceId": "hubris",
        "targetId": "menis",
        "type": "triggers",
        "typeLabelKo": "유발 (Triggers)",
        "narrativeDescription": "환대 규범 위반 및 타인의 명예 짓밟음(Hubris)이 신과 반신 영웅의 거룩한 우주적 격노(Mēnis)를 폭발시킴. (아킬레우스 분노)"
    },
    {
        "id": "rel-3",
        "sourceId": "menis",
        "targetId": "time",
        "type": "transforms",
        "typeLabelKo": "재조율 (Transforms)",
        "narrativeDescription": "거룩한 분노(Mēnis)는 단순한 화풀이가 아니라, 짓밟힌 수치 문화의 전리품 명예(Timē)를 되찾기 위한 필사의 재조율 요구임."
    },
    {
        "id": "rel-4",
        "sourceId": "time",
        "targetId": "aristeia",
        "type": "triggers",
        "typeLabelKo": "유발 (Triggers)",
        "narrativeDescription": "훼손된 명예(Timē)를 공동체 앞에서 증명하기 위해 전사들은 신의 불꽃을 받아 무공 절정(Aristeia)을 폭발시킴."
    },
    {
        "id": "rel-5",
        "sourceId": "aristeia",
        "targetId": "metis",
        "type": "transforms",
        "typeLabelKo": "지혜 전환 (Transforms)",
        "narrativeDescription": "단순한 정면 물리 사력(Biē)의 무공 절정(Aristeia)은 마침내 딜레마를 극복하는 목마 기략 등 지혜(Mētis)로 고도화됨."
    },
    {
        "id": "rel-6",
        "sourceId": "metis",
        "targetId": "kleos",
        "type": "culminates",
        "typeLabelKo": "불멸 성취 (Culminates)",
        "narrativeDescription": "지혜(Mētis)와 무공이 결합하여 세대를 넘어 귓가에 끊임없이 연창되는 영원한 불멸의 영광(Kleos)을 성취함."
    },
    {
        "id": "rel-7",
        "sourceId": "aristeia",
        "targetId": "moira",
        "type": "opposes",
        "typeLabelKo": "운명 대치 (Opposes)",
        "narrativeDescription": "아무리 찬란한 영웅의 무공 절정(Aristeia)일지라도 신들이 부여한 인간 수명의 절대적 몫과 경계(Moira)를 넘을 수 없음."
    },
    {
        "id": "rel-8",
        "sourceId": "kleos",
        "targetId": "nostos",
        "type": "opposes",
        "typeLabelKo": "운체 선택 대립 (Opposes)",
        "narrativeDescription": "요절하되 영원히 기억되는 불멸의 영광(Kleos Aphthiton - 아킬레우스) vs 생환하여 가문과 자아를 되찾는 귀환(Nostos - 오뒷세우스)의 서사적 대립."
    },
    {
        "id": "rel-9",
        "sourceId": "nostos",
        "targetId": "xenia",
        "type": "culminates",
        "typeLabelKo": "문명 회복 (Culminates)",
        "narrativeDescription": "바다의 시련을 딛고 돌아온 귀환(Nostos)은 마침내 올바른 손님 환대 제의(Xenia)를 구혼자 사형을 통해 복원함으로써 문명 질서를 완결함."
    }
]

# Enriched 4-Epic Comparative Matrix
COMPARATIVE_EPIC_MATRIX_DATA = [
    {
        "id": "matrix-kleos",
        "theme": "영웅적 불멸성과 명성의 가창 (Immortal Renown)",
        "conceptId": "kleos",
        "greekEpicConcept": "κλέος (Kleos Aphthiton - 불멸의 영광)",
        "iliadOdysseyManifestation": "아킬레우스는 요절과 불멸의 영광(Kleos) 중 전자를 선택하며(Il. 9.410), 오뒷세우스의 방랑은 구전 가인의 가창을 통해 영생을 얻음.",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 훔바바 격퇴 후 불로초 탐색에 실패하나 우루크 성벽 수축과 흙판 헌사로 영원한 이름을 남김 (Tablet I & XI).",
        "indianMahabharataParallel": "인도 《마하바라타》: 야샤스(Yashas / Kirti) - 전사 카스트(Kshatriya)가 전장에서 의로운 도의(Dharma)를 지키다 전사하여 천상(Svarga)의 불멸 명예를 획득함.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: Dōm / Lof - '죽기 전에 승리하여 명성(Dōm)을 얻는 것이 전사에게 최선의 불멸이다' (lines 1387-1389).",
        "comparativeInsight": "동서양 고대 4대 서사시 모두 육체적 죽음을 넘어서는 유일한 수단으로 전사 공동체의 구전 명성을 공통적으로 고찰함."
    },
    {
        "id": "matrix-nostos",
        "theme": "시련을 이겨낸 생환과 자아 복귀 (Return to Origin)",
        "conceptId": "nostos",
        "greekEpicConcept": "νόστος (Nostos - 귀환)",
        "iliadOdysseyManifestation": "오뒷세우스가 칼립소의 영생 유혹을 뿌리치고 인간적 고뇌와 죽음의 바다를 뚫고 이타케 왕국과 자아로 복귀함 (Od. 5권).",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 대홍수 생존자 우트나피슈팀과의 만남 후 죽음의 바다를 건너 우루크 왕국으로 되돌아오는 성숙의 귀환.",
        "indianMahabharataParallel": "인도 《마하바라타》: 13년간의 숲속 유배(Aranyaka Parva) 및 변장 방랑(Virata Parva)을 마치고 유디슈티라 왕이 왕권으로 생환 복귀함.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: 데인족 헤오롯 궁전의 괴물 격퇴 후 고향 예아트란드(Geatland)로 귀환하여 왕위를 승계함.",
        "comparativeInsight": "Nostos는 단순한 귀가길이 아니라 외부의 시련과 괴물을 정복한 후 한층 성숙해진 지혜로 가문과 질서를 재건하는 '영웅의 귀환 여정'."
    },
    {
        "id": "matrix-xenia",
        "theme": "손님 환대 제의와 문명적 신성 규범 (Sacred Hospitality)",
        "conceptId": "xenia",
        "greekEpicConcept": "ξενία (Xenia - 손님 환대)",
        "iliadOdysseyManifestation": "제우스 크세니오스의 법률 아래 이방인을 보호하고, 파리스의 위반과 구혼자들의 침해를 신성한 징벌로 처단함 (Od. 14, 22권).",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 길가메시의 신부 초야권 침해에 대해 엔키두가 도발하여 거절하고, 광야의 방랑자 엔키두를 문명으로 환대함.",
        "indianMahabharataParallel": "인도 《마하바라타》: 손님(Atithi)을 신처럼 모시는 아티티 사트카라(Atithi Satkara) 전통 및 주사위 사기전에서 드라우파디의 모욕에 대한 신성 징벌.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: 헤오롯 연회장에서 흐로드가르 왕과 웰흐테오우 왕비가 나그네 전사 비외르우프에게 올리는 신성한 연회와 보물 헌상 환대.",
        "comparativeInsight": "국가법이 미치지 못하던 고대 사회에서 손님 환대는 문명인과 야만인을 가르는 분수령이자 신성한 인류 공통 외교 규범이었음."
    },
    {
        "id": "matrix-time",
        "theme": "공동체 보상과 수치 문화 (Honor & Compensation)",
        "conceptId": "time",
        "greekEpicConcept": "τιμή (Timē - 전리품 명예)",
        "iliadOdysseyManifestation": "아가멤논의 전리품 몰수로 인한 Timē 훼손이 아킬레우스의 거룩한 분노(Mēnis)를 유발함 (Il. 1권).",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 신들이 엔키두의 전리품 명예(Geras)를 인정하지 않고 죽음을 선고하자 길가메시의 통곡과 분뇌가 유발됨.",
        "indianMahabharataParallel": "인도 《마하바라타》: 유디슈티라 왕의 라자수야(Rajasuya) 제의에서 크리슈나에게 첫 번째 존경 전리품(Arghya)을 바치는 명예 조율.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: 군주가 전사들에게 금반지와 무구를 전리품으로 하사하여 충성을 보상받는 Ring-giver 보상 규범.",
        "comparativeInsight": "고대 전사 사회의 명예는 내면적 자아만족이 아니라 영웅이 공동체로부터 눈으로 확인받는 물리적 보상(Geras)과 직결됨."
    },
    {
        "id": "matrix-metis",
        "theme": "지혜, 기략 및 임기응변 (Cunning Intelligence)",
        "conceptId": "metis",
        "greekEpicConcept": "μῆτις (Mētis - 꾀/지혜)",
        "iliadOdysseyManifestation": "오뒷세우스가 자신을 Outis(아무도 아닌 자)로 칭하고 목마(Wooden Horse) 기략으로 트로이를 함락시킴 (Od. 9, 11권).",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 지혜와 물의 신 에아(Ea/Enki)가 대홍수 속에서 우트나피슈팀에게 방주를 짓도록 꾀를 일러줌.",
        "indianMahabharataParallel": "인도 《마하바라타》: 크리슈나(Krishna) 신의 현명한 전략과 우파야(Upaya, 임기응변 기략)를 통해 판다바 형제가 승리함.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: 무기를 버리고 맨손으로 그렌델의 팔을 짓꺾는 비외르우프의 지혜로운 전술 결단.",
        "comparativeInsight": "단순한 물리적 사력(Biē)만으로는 최종 승리를 거둘 수 없으며, 유동적 상황 대응 지혜(Mētis)가 결합해야 비로소 정복이 완결됨."
    },
    {
        "id": "matrix-aristeia",
        "theme": "영웅의 무공 절정과 신성한 불꽃 (Peak Prowess)",
        "conceptId": "aristeia",
        "greekEpicConcept": "ἀριστεία (Aristeia - 무공 절정)",
        "iliadOdysseyManifestation": "디오메데스(Il. 5권)와 아킬레우스(Il. 21권)가 신의 가호를 받아 적진을 홀로 괴멸시키고 강물을 핏빛으로 물들임.",
        "nearEasternParallel": "메소포타미아 《길가메시 서사시》: 길가메시와 엔키두가 광야의 괴수 훔바바와 하늘의 황소를 도살하는 무공 절정 장면.",
        "indianMahabharataParallel": "인도 《마하바라타》: 카르나 파르바(Karna Parva)에서 카르나와 아르주나가 신성한 화살(Astra)을 쏘아 전장을 압도하는 무공 순간.",
        "norseBeowulfParallel": "고대 북유럽 《비외르우프》: 수중 마녀의 굴 속으로 들어가 고대의 거인 검으로 마녀의 목을 베어버리는 비외르우프의 단독 무공.",
        "comparativeInsight": "영웅 서사시의 최고 하이라이트로서 신성한 무구 착용, 신의 광채, 적장 킬스트릭으로 이어지는 전형적 서사 단락(Type Scene)."
    }
]

# Inject Linear B, Concept Relationships, and Comparative Epic Matrix into homer.ts
homer_ts_path = "c:/Working/src/data/homer.ts"
with open(homer_ts_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update HOMERIC_CONCEPTS with linearBAttestation
match = re.search(r"export const HOMERIC_CONCEPTS: HomericConcept\[\] = (\[[\s\S]*?\]);", code)
if match:
    concepts = json.loads(match.group(1))
    for c in concepts:
        cid = c["id"]
        if cid in LINEAR_B_DATA:
            c["linearBAttestation"] = LINEAR_B_DATA[cid]
    
    new_concepts_ts = "export const HOMERIC_CONCEPTS: HomericConcept[] = " + json.dumps(concepts, ensure_ascii=False, indent=2) + ";"
    code = code[:match.start()] + new_concepts_ts + code[match.end():]

# 2. Add CONCEPT_RELATIONSHIPS
rel_ts = "\n\nexport const CONCEPT_RELATIONSHIPS: ConceptRelationship[] = " + json.dumps(CONCEPT_RELATIONSHIPS_DATA, ensure_ascii=False, indent=2) + ";"
if "export const CONCEPT_RELATIONSHIPS" in code:
    code = re.sub(r"export const CONCEPT_RELATIONSHIPS: ConceptRelationship\[\] = \[[\s\S]*?\];", rel_ts.strip(), code)
else:
    code += rel_ts

# 3. Update COMPARATIVE_EPIC_MATRIX
matrix_match = re.search(r"export const COMPARATIVE_EPIC_MATRIX: ComparativeEpicMatrixItem\[\] = \[[\s\S]*?\];", code)
matrix_ts = "export const COMPARATIVE_EPIC_MATRIX: ComparativeEpicMatrixItem[] = " + json.dumps(COMPARATIVE_EPIC_MATRIX_DATA, ensure_ascii=False, indent=2) + ";"
if matrix_match:
    code = code[:matrix_match.start()] + matrix_ts + code[matrix_match.end():]
else:
    code += "\n\n" + matrix_ts

with open(homer_ts_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Successfully injected Linear B attestations, Concept Relationships, and Enriched Comparative Matrix into homer.ts!")
