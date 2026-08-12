import json
import os

# Phase 2 Expansion Wave: Odyssey Heroes & Additional Olympian Deities

HOMERIC_EXPANSION_RESEARCH = [
    # --- ODYSSEY HEROES & FAMILY ---
    {
        "id": "penelope",
        "nameKo": "페넬로페",
        "nameGreek": "Πηνελόπεια",
        "nameTransliteration": "Penelopeia",
        "epithetGreek": "περίφρων Πηνελόπεια / ἐχέφρων Πηνελόπεια",
        "epithetTransliteration": "periphron Penelopeia / echephron Penelopeia",
        "epithetKo": "현명한 페넬로페 / 사려 깊은 페넬로페",
        "side": "odyssey-hero",
        "role": "이타케의 왕비, 오뒷세우스의 충절스러운 아내",
        "description": "20년간 남편의 귀환을 기다리며, 낮에는 수의를 짜고 밤에는 푸는 지혜(Mētis)로 108명의 구혼자들의 압박을 물리친 절개와 지혜의 상징.",
        "aristeiaOrKeyBook": "오뒷세이아 19권 (변장한 오뒷세우스와의 대화) & 23권 (침대 침목 비밀 시험)",
        "philologyNote": "Periphron(περίφρων)은 오뒷세우스의 Mētis(지혜)에 대등한 페넬로페 고유의 고결한 통찰력 표현."
    },
    {
        "id": "telemachus",
        "nameKo": "텔레마코스",
        "nameGreek": "Τηλέμαχος",
        "nameTransliteration": "Telemachos",
        "epithetGreek": "πεπνυμένος Τηλέμαχος / θεοειδὴς Τηλέμαχος",
        "epithetTransliteration": "pepnymenos Telemachos / theoeides Telemachos",
        "epithetKo": "사려 깊은 텔레마코스 / 신과 같은 텔레마코스",
        "side": "odyssey-hero",
        "role": "오뒷세우스와 페넬로페의 아들, 이타케의 왕자",
        "description": "아버지가 없는 이타케에서 구혼자들의 압박을 받으며 성장하여, 필로스와 스파르타로 아버지를 찾는 여정(Telemachy)을 떠나 마침내 귀환한 아버지와 함께 구혼자들을 응징함.",
        "aristeiaOrKeyBook": "오뒷세이아 1-4권 (텔레마코스 여정 Telemachy) & 22권 (구혼자 응징전)",
        "philologyNote": "Pepnymenos(πεπνυμένος)는 청년이 어른 영웅으로 성숙해가는 신중함과 지혜를 상징."
    },
    {
        "id": "eumaios",
        "nameKo": "에우마이오스",
        "nameGreek": "Εὔμαιος",
        "nameTransliteration": "Eumaios",
        "epithetGreek": "δῖος Εὔμαιος / ὄρχαμος ἀνδρῶν",
        "epithetTransliteration": "dios Eumaios / orchamos andron",
        "epithetKo": "고결한 돼지치기 에우마이오스 / 사람들의 지도자 에우마이오스",
        "side": "odyssey-hero",
        "role": "이타케 국왕 가문의 충직한 돼지치기(Swineherd)",
        "description": "변장한 거지 신분의 오뒷세우스에게 신성한 환대(Xenia)를 베풀고, 아들과 같은 텔레마코스를 수호하며 귀환한 왕을 도와 구혼자 응징에 참전함.",
        "aristeiaOrKeyBook": "오뒷세이아 14권 (돼지치기의 환대) & 22권 (구혼자 응징 참전)",
        "philologyNote": "하층민 신분임에도 신과 같은 고결함(Dios) 칭호를 받으며, 시인이 직접 2인칭('에우마이오스여, 그대는...')으로 부르는 최고 수준의 인격적 헌사."
    },
    {
        "id": "eurykleia",
        "nameKo": "에우뤼클레이아",
        "nameGreek": "Εὐρύκλεια",
        "nameTransliteration": "Eurykleia",
        "epithetGreek": "τροφὸς Εὐρύκλεια / φίλη τρόφος",
        "epithetTransliteration": "trophos Eurykleia / phile trophos",
        "epithetKo": "충직한 유모 에우뤼클레이아 / 사랑스러운 유모",
        "side": "odyssey-hero",
        "role": "오뒷세우스와 텔레마코스를 키워낸 이타케 궁정의 수석 유모",
        "description": "변장한 오뒷세우스의 발을 씻겨주다 멧돼지에 찔렸던 허벅지 흉터를 알아보고 그가 국왕임을 가장 먼저 알아채며, 비밀을 엄수하여 귀환 작전을 도움.",
        "aristeiaOrKeyBook": "오뒷세이아 19권 (발 씻기 흉터 인지 장면 Anagnorisis)",
        "philologyNote": "Anagnorisis(인식/재회) 모티브의 서양문학사 최초이자 가장 극적인 복선 사료."
    },
    {
        "id": "nausikaa",
        "nameKo": "나우시카아",
        "nameGreek": "Ναυσικάα",
        "nameTransliteration": "Nausikaa",
        "epithetGreek": "λευκώλενος Ναυσικάα / παρθένος ἀδμήτη",
        "epithetTransliteration": "leukolenos Nausikaa / parthenos admete",
        "epithetKo": "하얀 팔의 나우시카아 / 결백한 처녀 나우시카아",
        "side": "odyssey-hero",
        "role": "파이아케스 섬 국왕 알키노오스와 아레테 왕비의 공주",
        "description": "난파되어 해변에 표류한 오뒷세우스를 발견하고 옷과 음식을 제공하며, 궁전으로 들어가는 꾀와 품위를 가르쳐주어 그가 고향으로 귀환할 배를 얻게 함.",
        "aristeiaOrKeyBook": "오뒷세이아 6권 (해변에서의 만남과 환대)",
        "philologyNote": "고대 서사시에서 순수함과 왕족의 품위, 은근한 사모의 정을 담아낸 유일무이한 서정적 인물."
    },
    {
        "id": "circe",
        "nameKo": "키르케",
        "nameGreek": "Κίρκη",
        "nameTransliteration": "Kirke",
        "epithetGreek": "ἐϋπλόκαμος Κίρκη / δεινὴ θεὸς αὐδήεσσα",
        "epithetTransliteration": "euplokamos Kirke / deine theos audeessa",
        "epithetKo": "땋은 머리의 아름다운 여신 키르케 / 사람의 목소리를 내는 무서운 여신",
        "side": "odyssey-monster",
        "role": "아이아이에 섬의 마녀 여신, 태양신 헬리오스의 딸",
        "description": "오뒷세우스의 선원들을 돼지로 변하게 만들었으나, 헤르메스가 준 몰리(Moly) 풀을 섭취한 오뒷세우스에게 가복되어 1년간 환대하고 저승 방문(Nekyia) 길을 안내해줌.",
        "aristeiaOrKeyBook": "오뒷세이아 10권 (마술과 환복) & 12권 (세이렌/스킬라 경고)",
        "philologyNote": "Audeessa(αὐδήεσσα)는 신이면서 인간의 언어로 대화할 수 있는 현세 교섭적 여신 표현."
    },
    {
        "id": "calypso",
        "nameKo": "칼립소",
        "nameGreek": "Καλυψώ",
        "nameTransliteration": "Kalypso",
        "epithetGreek": "πότνια Καλυψώ / δῖα θεάων",
        "epithetTransliteration": "potnia Kalypso / dia theaon",
        "epithetKo": "존엄한 칼립소 여신 / 여신들 중의 여신",
        "side": "odyssey-monster",
        "role": "오기기아 섬의 아틀라스의 딸, 신성한 님프 여신",
        "description": "난파된 오뒷세우스를 7년간 섬에 감금하고 불멸과 영원한 청춘을 제안했으나, 고향 귀환(Nostos)을 열망하며 바닷가에서 눈물짓는 오뒷세우스를 제우스의 명령으로 풀어줌.",
        "aristeiaOrKeyBook": "오뒷세이아 5권 (불멸의 유혹 거절과 뗏목 출발)",
        "philologyNote": "Kalypso는 '감추다, 은폐하다(Kalypto)'라는 어원에서 유래하여 영웅의 정체성을 7년간 은폐한 서사적 의미 포함."
    },
    {
        "id": "polyphemus",
        "nameKo": "폴리페모스 (퀴클롭스)",
        "nameGreek": "Πολύφημος",
        "nameTransliteration": "Polyphemos",
        "epithetGreek": "κρατερὸς Πολύφημος / ἀντίθεος Πολύφημος",
        "epithetTransliteration": "krateros Polyphemos / antitheos Polyphemos",
        "epithetKo": "강력한 폴리페모스 / 신에 필적하는 폴리페모스",
        "side": "odyssey-monster",
        "role": "포세이돈의 아들, 외눈박이 거인 퀴클롭스",
        "description": "손님 환대 규범(Xenia)을 무시하고 오뒷세우스의 선원들을 생으로 먹어치웠으나, 오뒷세우스의 꾀(Outis - 아무도 아닌 자)와 포도주에 속아 눈이 멀고 탈출을 허용함.",
        "aristeiaOrKeyBook": "오뒷세이아 9권 (퀴클롭스 동굴 실명 작전)",
        "philologyNote": "Outis(Οὖτις - Nobody)와 Mētis(꾀/지혜)의 음운론적 언어유희(Wordplay)가 결합된 최고 문학적 모티브."
    },

    # --- ADDITIONAL OLYMPIAN DEITIES ---
    {
        "id": "hera",
        "nameKo": "헤라",
        "nameGreek": "Ἥρα / Ἥρη",
        "nameTransliteration": "Hera / Here",
        "epithetGreek": "βοῶπις πότνια Ἥρη / χρυσόθρονος Ἥρη",
        "epithetTransliteration": "boopis potnia Here / chrysothronos Here",
        "epithetKo": "소의 눈을 가진 존엄한 왕비 헤라 / 황금 보좌의 헤라",
        "side": "god",
        "role": "올림포스 여신들의 여왕, 제우스의 아내이자 누이, 아카이오이의 수호신",
        "description": "파리스의 심판에서 미모 경쟁에 패한 원한으로 트로이의 완폐를 갈망하며, 14권에서 제우스에게 미약(아프로디테의 띠)을 써서 잠들게 한 후 전황을 그리스군에 유리하게 돌림.",
        "aristeiaOrKeyBook": "일리아스 14권 (제우스의 기만 Dios Apate)",
        "philologyNote": "Boōpis(βοῶπις)는 '소처럼 크고 깊고 신성한 눈'을 뜻하는 청동기 시대 여신 찬가 표상."
    },
    {
        "id": "aphrodite",
        "nameKo": "아프로디테",
        "nameGreek": "Ἀφροδίτη",
        "nameTransliteration": "Aphrodite",
        "epithetGreek": "φιλομειδὴς Ἀφροδίτη / Διὸς θυγάτηρ",
        "epithetTransliteration": "philomeides Aphrodite / Dios thygater",
        "epithetKo": "미소짓는 아프로디테 / 제우스의 딸 아프로디테",
        "side": "god",
        "role": "사랑과 미, 욕망의 여신, 트로이군(파리스 & 아이네이아스)의 수호신",
        "description": "파리스에게 세상에서 가장 아름다운 여인(헬레네)을 약속하여 전쟁의 씨앗을 뿌렸으며, 5권에서 아들 아이네이아스를 구하려다 디오메데스의 창에 손목 부상을 입고 올림포스로 도주함.",
        "aristeiaOrKeyBook": "일리아스 3권 (파리스 구출) & 5권 (손목 부상과 도주)",
        "philologyNote": "Philomeidēs(φιλομειδὴς)는 '미소를 사랑하는' 관능적 미의 유혹을 상징하는 고유 성구."
    },
    {
        "id": "ares",
        "nameKo": "아레스",
        "nameGreek": "Ἄρης",
        "nameTransliteration": "Ares",
        "epithetGreek": "βροτολοιγὸς Ἄρης / μιαιφόνος",
        "epithetTransliteration": "brotoloigos Ares / miaiphonos",
        "epithetKo": "사람을 삼키는 전신 아레스 / 피에 굶주린 아레스",
        "side": "god",
        "role": "유혈 충돌과 광기의 전쟁신, 트로이군 진영",
        "description": "이성적 전략의 아테나와 대비되는 맹목적 광기와 유혈 살상의 신. 일리아스 5권에서 디오메데스와 아테나의 협공을 받아 복부에 창을 맞고 비명을 지르며 올림포스로 후퇴함.",
        "aristeiaOrKeyBook": "일리아스 5권 (아레스의 부상과 올림포스 탄원)",
        "philologyNote": "Brotoloigos(βροτολοιγὸς)는 '인간을 파멸시키는, 살상에 광분하는' 공포의 전쟁신 수식어."
    },
    {
        "id": "hephaestus",
        "nameKo": "헤파이스토스",
        "nameGreek": "Ἥφαιστος",
        "nameTransliteration": "Hephaistos",
        "epithetGreek": "ἀμφιγυήεις Ἥφαιστος / κλυτοτέχνης",
        "epithetTransliteration": "amphigyeeis Hephaistos / klytotechnis",
        "epithetKo": "양다리를 저는 헤파이스토스 / 명성 높은 대장장이 신",
        "side": "god",
        "role": "대장간과 불, 금속 공예의 신",
        "description": "테티스 여신의 부탁을 받아 아킬레우스에게 우주와 문명이 조각된 신성한 방패(Shield of Achilles)와 신무기를 제작해주었으며, 21권에서 스카만드로스 강신을 불길로 격퇴함.",
        "aristeiaOrKeyBook": "일리아스 18권 (아킬레우스 방패 제작 Ekphrasis) & 21권 (강신의 불길 격퇴)",
        "philologyNote": "Ekphrasis(문학적 미술품 묘사)의 문학사상 최초 최고 템플릿인 '아킬레우스의 방패'."
    },
    {
        "id": "thetis",
        "nameKo": "테티스",
        "nameGreek": "Θέτις",
        "nameTransliteration": "Thetis",
        "epithetGreek": "ἀργυρόπεζα Θέτις / Νηρηΐς",
        "epithetTransliteration": "argyropeza Thetis / Nereis",
        "epithetKo": "은빛 발의 테티스 / 바다의 님프 테티스",
        "side": "god",
        "role": "바다의 노인 네레우스의 딸, 아킬레우스의 어머니",
        "description": "아들의 비극적 요절 운명을 슬퍼하면서도 제우스에게 무릎을 꿇고 청원하여 아들의 명예(Timē)를 회복시켰으며, 헤파이스토스에게 새 갑옷을 부탁함.",
        "aristeiaOrKeyBook": "일리아스 1권 (제우스 무릎 청원) & 18권 (헤파이스토스 방문)",
        "philologyNote": "Argyropeza(ἀργυρόπεζα)는 물결 위에 은빛으로 빛나는 여신의 발걸음을 형상화."
    }
]

# Read wave 1 and merge
session_dir = "c:/Working/.omo/ulw-research/20260813-075300"
wave1_path = os.path.join(session_dir, "wave-1-saturation.json")

with open(wave1_path, "r", encoding="utf-8") as f:
    wave1_data = json.load(f)

merged_data = wave1_data + HOMERIC_EXPANSION_RESEARCH
out_path = os.path.join(session_dir, "wave-2-expansion.json")

with open(out_path, "w", encoding="utf-8") as f:
    json.dump(merged_data, f, ensure_ascii=False, indent=2)

print(f"Phase 2 Expand Wave Complete: Combined total {len(merged_data)} Homeric hero/god records in {out_path}")
