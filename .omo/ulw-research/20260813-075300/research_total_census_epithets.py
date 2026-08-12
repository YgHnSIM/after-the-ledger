import json
import re

EXHAUSTIVE_34_EPITHETS_MAP = {
    "achilles": [
        {"greek": "ποδάρκης δῖος Ἀχιλλεύς", "transliteration": "podarkes dios Achilleus", "korean": "발이 빠른 신과 같은 아킬레우스", "grammarCaseAndMeter": "주격(Nominative) • 6보격 문말 고유 성구"},
        {"greek": "ποδὰς ὠκὺς Ἀχιλλεύς", "transliteration": "podas okys Achilleus", "korean": "발이 빠른 아킬레우스", "grammarCaseAndMeter": "주격(Nominative) • 운율 반주격"},
        {"greek": "Πηληϊάδεω Ἀχιλῆος", "transliteration": "Peleiadeo Achileos", "korean": "펠레우스의 아들 아킬레우스의", "grammarCaseAndMeter": "속격(Genitive) • 가문 부칭(Patronymic)"},
        {"greek": "ῥηξήνορι Ἀχιλῆϊ", "transliteration": "rhexenori Achilei", "korean": "전선을 파쇄하는 아킬레우스에게", "grammarCaseAndMeter": "여격(Dative) • 전사 무공 수식어"},
        {"greek": "φέριστος Ἀχαιῶν", "transliteration": "pheristos Achaion", "korean": "아카이오이 백성 중 가장 뛰어난 장수", "grammarCaseAndMeter": "주격(Nominative) • 최강의 영웅 표상"}
    ],
    "agamemnon": [
        {"greek": "ἄναξ ἀνδρῶν Ἀγαμέμνων", "transliteration": "anax andron Agamemnon", "korean": "인간들의 군주 아가멤논", "grammarCaseAndMeter": "주격(Nominative) • 미케네 관료 군주 칭호"},
        {"greek": "εὐρὺ κρείων Ἀγαμέμνων", "transliteration": "eury kreion Agamemnon", "korean": "넓은 땅을 통치하는 아가멤논", "grammarCaseAndMeter": "주격(Nominative) • 영토 지배자"},
        {"greek": "Ἀτρεΐδης Ἀγαμέμνων", "transliteration": "Atreides Agamemnon", "korean": "아트레우스의 아들 아가멤논", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"},
        {"greek": "κύδιστε Ἀγαμέμνων", "transliteration": "kydiste Agamemnon", "korean": "가장 영광스러운 아가멤논이여", "grammarCaseAndMeter": "호격(Vocative) • 장엄 호칭"}
    ],
    "diomedes": [
        {"greek": "βοὴν ἀγαθὸς Διομήδης", "transliteration": "boen agathos Diomedes", "korean": "전함 소리 우렁찬 디오메데스", "grammarCaseAndMeter": "주격(Nominative) • 전장 함성 수식어"},
        {"greek": "Τυδεΐδης Διομήδης", "transliteration": "Tydeides Diomedes", "korean": "티데우스의 아들 디오메데스", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"},
        {"greek": "κρατερός Διομήδης", "transliteration": "krateros Diomedes", "korean": "강력한 무공의 디오메데스", "grammarCaseAndMeter": "주격(Nominative) • 운율 단축 수식어"},
        {"greek": "ἵπποδαμος Διομήδης", "transliteration": "hippodamos Diomedes", "korean": "말을 길들이는 디오메데스", "grammarCaseAndMeter": "주격(Nominative) • 기마 무공 수식어"}
    ],
    "great-ajax": [
        {"greek": "ἕρκος Ἀχαιῶν", "transliteration": "herkos Achaion", "korean": "아카이오이 장병들의 방파제(거대한 방패)", "grammarCaseAndMeter": "주격(Nominative) • 수호 방패 표상"},
        {"greek": "Τελαμώνιος Αἴας", "transliteration": "Telamonios Aias", "korean": "텔라몬의 아들 아이아스", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"},
        {"greek": "μέγας Αἴας", "transliteration": "megas Aias", "korean": "위대한 거구의 아이아스", "grammarCaseAndMeter": "주격(Nominative) • 거체 체격 수식어"},
        {"greek": "ἀντίθεος Αἴας", "transliteration": "antitheos Aias", "korean": "신을 방불케 하는 아이아스", "grammarCaseAndMeter": "주격(Nominative) • 영웅 수식어"}
    ],
    "menelaus": [
        {"greek": "βοὴν ἀγαθὸς Μενέλαος", "transliteration": "boen agathos Menelaos", "korean": "전함 소리 우렁찬 메넬라오스", "grammarCaseAndMeter": "주격(Nominative) • 전장 함성 수식어"},
        {"greek": "ξανθὸς Μενέλαος", "transliteration": "xanthos Menelaos", "korean": "금발의 메넬라오스", "grammarCaseAndMeter": "주격(Nominative) • 용모 특징 수식어"},
        {"greek": "Ἀτρεΐδης Μενέλαος", "transliteration": "Atreides Menelaos", "korean": "아트레우스의 아들 메넬라오스", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"},
        {"greek": "ἀρηΐφιλος Μενέλαος", "transliteration": "areiphilos Menelaos", "korean": "전쟁신 아레스의 사랑을 받는 메넬라오스", "grammarCaseAndMeter": "주격(Nominative) • 신성 비호"}
    ],
    "nestor": [
        {"greek": "Γερήνιος ἱππότα Νέστωρ", "transliteration": "Gerenios hippota Nestor", "korean": "게레니아의 기수 네스토르", "grammarCaseAndMeter": "주격(Nominative) • 고대 원로 기수 칭호"},
        {"greek": "Νηληϊάδης Νέστωρ", "transliteration": "Neleiades Nestor", "korean": "네레우스의 아들 네스토르", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"},
        {"greek": "ἡδυεπὴς Νέστωρ", "transliteration": "hedyepes Nestor", "korean": "꿀처럼 달콤한 말을 하는 네스토르", "grammarCaseAndMeter": "주격(Nominative) • 원로 변론가 수식어"}
    ],
    "odysseus": [
        {"greek": "πολύτροπος Ὀδυσσεύς", "transliteration": "polytropos Odysseus", "korean": "파란만장한 잔꾀의 오뒷세우스", "grammarCaseAndMeter": "주격(Nominative) • 《오뒷세이아》 1권 1행 문두"},
        {"greek": "πολύμητις Ὀδυσσεύς", "transliteration": "polymetis Odysseus", "korean": "꾀가 많은 오뒷세우스", "grammarCaseAndMeter": "주격(Nominative) • Mētis(지혜) 고유 수식어"},
        {"greek": "τλήμων δῖος Ὀδυσσεύς", "transliteration": "tlemon dios Odysseus", "korean": "인내심 깊은 신과 같은 오뒷세우스", "grammarCaseAndMeter": "주격(Nominative) • 귀환 시련 인내 수식어"},
        {"greek": "διογενὴς Λαερτιάδης", "transliteration": "diogenes Laertiades", "korean": "제우스의 혈통인 라에르테스의 아들", "grammarCaseAndMeter": "주격(Nominative) • 신성 혈통 및 부칭"},
        {"greek": "πολυμήχαν' Ὀδυσσεῦ", "transliteration": "polymechan' Odysseu", "korean": "기략이 뛰어난 오뒷세우스여", "grammarCaseAndMeter": "호격(Vocative) • 직접 호출 구전 형태"}
    ],
    "patroclus": [
        {"greek": "Μενοιτιάδης Πατρόκλεις", "transliteration": "Menoitiades Patrokleis", "korean": "메노이티오스의 아들 파트로클로스여", "grammarCaseAndMeter": "호격(Vocative) • 시인의 직접 감정 호출"},
        {"greek": "ἱππεῦ Πατρόκλεες", "transliteration": "hippeu Patroklees", "korean": "용맹한 기수 파트로클로스여", "grammarCaseAndMeter": "호격(Vocative) • 6보격 2인칭 특수 호칭"},
        {"greek": "θεόφιν μήστωρ ἀτάλαντος", "transliteration": "theophin mestor atalantos", "korean": "신과 같은 기략을 지닌 장수", "grammarCaseAndMeter": "주격(Nominative) • 아킬레우스 대역 무공"}
    ],
    "idomeneus": [
        {"greek": "δουρικλυτὸς Ἰδομενεύς", "transliteration": "douriklytos Idomeneus", "korean": "창으로 명성을 떨치는 이도메네오스", "grammarCaseAndMeter": "주격(Nominative) • 크레타 무공 창술 수식어"},
        {"greek": "Ἰδομενεὺς ἄναξ", "transliteration": "Idomeneus anax", "korean": "크레타의 왕 이도메네오스 군주", "grammarCaseAndMeter": "주격(Nominative) • 관료제 군주 칭호"}
    ],
    "lesser-ajax": [
        {"greek": "Ὀϊλῆος ταχὺς Αἴας", "transliteration": "Oileos tachys Aias", "korean": "오일레우스의 아들 빠른 아이아스", "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭 및 보병 신속성"},
        {"greek": "ταχὺς Αἴας", "transliteration": "tachys Aias", "korean": "빠른 발의 아이아스", "grammarCaseAndMeter": "주격(Nominative) • 신속성 수식어"}
    ],
    "hector": [
        {"greek": "κορυθαίολος Ἕκτωρ", "transliteration": "korythaiolos Hektor", "korean": "투구를 번득이는 헥토르", "grammarCaseAndMeter": "주격(Nominative) • 청동 투구 장엄 칭호"},
        {"greek": "ἀνδροφόνος Ἕκτωρ", "transliteration": "androphonos Hektor", "korean": "사람을 살상하는 헥토르", "grammarCaseAndMeter": "주격(Nominative) • 전장 위압 수식어"},
        {"greek": "φαίδιμος Ἕκτωρ", "transliteration": "phaidimos Hektor", "korean": "빛나는 헥토르", "grammarCaseAndMeter": "주격(Nominative) • 운율 단축형"},
        {"greek": "Πριαμίδης Ἕκτωρ", "transliteration": "Priamides Hektor", "korean": "프리아모스의 아들 헥토르", "grammarCaseAndMeter": "주격(Nominative) • 왕가 부칭"}
    ],
    "priam": [
        {"greek": "Πρίαμος θεοειδής", "transliteration": "Priamos theoeides", "korean": "신과 같은 프리아모스", "grammarCaseAndMeter": "주격(Nominative) • 트로이 성왕 수식어"},
        {"greek": "Δαρδανίδης Πρίαμος", "transliteration": "Dardanides Priamos", "korean": "다르다노스의 후손 프리아모스", "grammarCaseAndMeter": "주격(Nominative) • 트로이 왕가 시조 부칭"}
    ],
    "paris": [
        {"greek": "Δύσπαρις", "transliteration": "Dysparis", "korean": "불운과 파멸의 파리스", "grammarCaseAndMeter": "주격(Nominative) • 트로이 파멸 비극 수식어"},
        {"greek": "Ἀλέξανδρος θεοειδής", "transliteration": "Alexandros theoeides", "korean": "신과 같은 용모의 알렉산드로스(파리스)", "grammarCaseAndMeter": "주격(Nominative) • 미모 수식어"},
        {"greek": "Ἑλένης πόσις ἠϋκόμοιο", "transliteration": "Helenes posis eukomoio", "korean": "아름다운 머리채의 헬레네의 남편", "grammarCaseAndMeter": "주격(Nominative) • 서사적 관계 수식어"}
    ],
    "aeneas": [
        {"greek": "Ἀγχισιάδης Αἰνείας", "transliteration": "Anchisiades Aineias", "korean": "앙키세스의 아들 아이네이아스", "grammarCaseAndMeter": "주격(Nominative) • 혈통 부칭"},
        {"greek": "Τρώων βουληφόρος", "transliteration": "Troon boulephoros", "korean": "트로이인들의 지혜로운 조언자", "grammarCaseAndMeter": "주격(Nominative) • 지도자 수식어"}
    ],
    "sarpedon": [
        {"greek": "Διὸς υἱὸς Σαρπηδών", "transliteration": "Dios huios Sarpedon", "korean": "제우스의 직계 아들 사르페돈", "grammarCaseAndMeter": "주격(Nominative) • 제우스 직계 신성"},
        {"greek": "ἀγὸς Λυκίων", "transliteration": "agos Lykion", "korean": "리키아 전사들의 영도자", "grammarCaseAndMeter": "주격(Nominative) • Noblesse Oblige 12권"}
    ],
    "andromache": [
        {"greek": "λευκώλενος Ἀνδρομάχη", "transliteration": "leukolenos Andromache", "korean": "하얀 팔의 안드로마케", "grammarCaseAndMeter": "주격(Nominative) • 고귀한 여인 수식어"},
        {"greek": "Ἕκτορος ἄλοχος", "transliteration": "Hektoros alochos", "korean": "헥토르의 정숙한 아내", "grammarCaseAndMeter": "주격(Nominative) • 서사적 관계 성구"}
    ],
    "zeus": [
        {"greek": "νεφεληγερέτα Ζεύς", "transliteration": "nephelegereta Zeus", "korean": "구름을 모으는 제우스", "grammarCaseAndMeter": "주격(Nominative) • 6보격 운율 고유 문말"},
        {"greek": "πατὴρ ἀνδρῶν τε θεῶν τε", "transliteration": "pater andron te theon te", "korean": "신들과 인간들의 아버지", "grammarCaseAndMeter": "주격(Nominative) • 우주 질서 최고신"},
        {"greek": "μητίετα Ζεύς", "transliteration": "metieta Zeus", "korean": "지혜로운 제우스", "grammarCaseAndMeter": "주격(Nominative) • 섭리 수식어"},
        {"greek": "Ζεὺς ὑψιβρεμέτης", "transliteration": "Zeus hypsibremetes", "korean": "높은 곳에서 뇌성을 찌르는 제우스", "grammarCaseAndMeter": "주격(Nominative) • 천둥번개 신성"}
    ],
    "athena": [
        {"greek": "γλαυκῶπις Ἀθήνη", "transliteration": "glaukopis Athene", "korean": "빛나는 눈의 아테나", "grammarCaseAndMeter": "주격(Nominative) • 올빼미/투명 눈빛 칭호"},
        {"greek": "Παλλάδ' Ἀθηναίην", "transliteration": "Pallad' Athenaien", "korean": "팔라스 아테나를", "grammarCaseAndMeter": "대격(Accusative) • 창을 휘두르는 여신"},
        {"greek": "Διὸς θυγάτηρ Ἀθήνη", "transliteration": "Dios thygater Athene", "korean": "제우스의 딸 아테나", "grammarCaseAndMeter": "주격(Nominative) • 신성 혈통"},
        {"greek": "Ἀτρυτώνη", "transliteration": "Atrytone", "korean": "불굴의 아테나 (굴복하지 않는 자)", "grammarCaseAndMeter": "호격/고유명사 • 영원한 전승 신명"}
    ],
    "apollo": [
        {"greek": "ἑκηβόλος Ἀπόλλων", "transliteration": "hekebolos Apollon", "korean": "멀리 화살을 쏘는 아폴론", "grammarCaseAndMeter": "주격(Nominative) • 활과 화살 신성"},
        {"greek": "Φοῖβος Ἀπόλλων", "transliteration": "Phoibos Apollon", "korean": "빛나는 포이보스 아폴론", "grammarCaseAndMeter": "주격(Nominative) • 광명과 정화"},
        {"greek": "ἄναξ ἑκάεργος", "transliteration": "anax hekaergos", "korean": "멀리서 힘을 미치는 군주", "grammarCaseAndMeter": "주격(Nominative) • 역병 징벌 신성"}
    ],
    "poseidon": [
        {"greek": "γαϊήοχος ἐννοσίγαιος", "transliteration": "gaieochos ennosigaios", "korean": "대지를 흔드는 포세이돈", "grammarCaseAndMeter": "주격(Nominative) • 지진과 바다 신성"},
        {"greek": "κυανοχαίτης Ποσειδάων", "transliteration": "kyanochaites Poseidaon", "korean": "검푸른 머리채의 포세이돈", "grammarCaseAndMeter": "주격(Nominative) • 바다 색채 수식어"}
    ],
    "hermes": [
        {"greek": "διάκτορος Ἀργεϊφόντης", "transliteration": "diaktoros Argeiphontes", "korean": "아르고스를 살해한 인도자 헤르메스", "grammarCaseAndMeter": "주격(Nominative) • 전령의 신"},
        {"greek": "ἐριούνιος Ἑρμῆς", "transliteration": "eriounios Hermes", "korean": "행운을 가져다주는 헤르메스", "grammarCaseAndMeter": "주격(Nominative) • 인도자 수식어"}
    ],
    "hera": [
        {"greek": "πότνια Ἥρη", "transliteration": "potnia Here", "korean": "전능한 여신 헤라", "grammarCaseAndMeter": "주격(Nominative) • 여신 관료 칭호"},
        {"greek": "βοῶπις πότνια Ἥρη", "transliteration": "boopis potnia Here", "korean": "소의 눈을 가진 전능한 헤라", "grammarCaseAndMeter": "주격(Nominative) • 자비로운 커다란 눈"},
        {"greek": "λευκώλενος Ἥρη", "transliteration": "leukolenos Here", "korean": "하얀 팔의 헤라", "grammarCaseAndMeter": "주격(Nominative) • 신성 미모 수식어"}
    ],
    "aphrodite": [
        {"greek": "φιλομειδὴς Ἀφροδίτη", "transliteration": "philomeides Aphrodite", "korean": "미소를 사랑하는 아프로디테", "grammarCaseAndMeter": "주격(Nominative) • 미소와 사랑"},
        {"greek": "χρυσέη Ἀφροδίτη", "transliteration": "chrysee Aphrodite", "korean": "황금빛의 아프로디테", "grammarCaseAndMeter": "주격(Nominative) • 찬란한 미모"}
    ],
    "ares": [
        {"greek": "βροτολοιγὸς Ἄρης", "transliteration": "brotoloigos Ares", "korean": "인간에게 재앙을 가져오는 아레스", "grammarCaseAndMeter": "주격(Nominative) • 전쟁 살상 광기"},
        {"greek": "μιαιφόνος Ἄρης", "transliteration": "miaiphonos Ares", "korean": "피에 주린 아레스", "grammarCaseAndMeter": "주격(Nominative) • 전장 피비린내"}
    ],
    "hephaestus": [
        {"greek": "ἀμφιγυήεις Ἡφαίστος", "transliteration": "amphigyeis Hephaistos", "korean": "절룩거리는 대장장이 헤파이스토스", "grammarCaseAndMeter": "주격(Nominative) • 장인 신성"},
        {"greek": "κλυτοτέχνης Ἡφαίστος", "transliteration": "klytotechnes Hephaistos", "korean": "명성 높은 기술의 헤파이스토스", "grammarCaseAndMeter": "주격(Nominative) • 방패 제작 명장"}
    ],
    "thetis": [
        {"greek": "ἀργυρόπεζα Θέτις", "transliteration": "argyropeza Thetis", "korean": "은빛 발의 테티스", "grammarCaseAndMeter": "주격(Nominative) • 바다 님프 수식어"},
        {"greek": "Θέτις ἠϋκόμοιο", "transliteration": "Thetis eukomoio", "korean": "아름다운 머리채의 테티스", "grammarCaseAndMeter": "속격/주격 • 신성 모티브"}
    ],
    "penelope": [
        {"greek": "περίφρων Πηνελόπεια", "transliteration": "periphron Penelopeia", "korean": "현명한 페넬로페", "grammarCaseAndMeter": "주격(Nominative) • 최고 지혜 수식어"},
        {"greek": "ἐχέφρων Πηνελόπεια", "transliteration": "echephron Penelopeia", "korean": "사려 깊은 페넬로페", "grammarCaseAndMeter": "주격(Nominative) • 충절과 신중함"},
        {"greek": "κουρίδη ἄλοχος", "transliteration": "kouride alochos", "korean": "정식 정혼 아내 페넬로페", "grammarCaseAndMeter": "주격(Nominative) • 가문 정통성 표상"}
    ],
    "telemachus": [
        {"greek": "πεπνυμένος Τηλέμαχος", "transliteration": "pepnymenos Telemachos", "korean": "슬기로운 텔레μα코스", "grammarCaseAndMeter": "주격(Nominative) • 청년 성장 지혜"},
        {"greek": "Ὀδυσσῆος φίλος υἱός", "transliteration": "Odysseos philos huios", "korean": "오뒷세우스의 사랑하는 아들", "grammarCaseAndMeter": "주격(Nominative) • 가문 계승 부칭"}
    ],
    "eumaeus": [
        {"greek": "δῖος ὑφορβός", "transliteration": "dios hyphorbos", "korean": "신과 같은 돼지치기 에우마이오스", "grammarCaseAndMeter": "주격(Nominative) • 하층민 신분 고결 칭호"},
        {"greek": "ὄρχαμος ἀνδρῶν", "transliteration": "orchamos andron", "korean": "인간들의 지도자 에우마이오스", "grammarCaseAndMeter": "주격(Nominative) • 오뒷세우스의 직설 호칭"}
    ],
    "eurycleia": [
        {"greek": "τροφὸς ἠϋκόμοιο", "transliteration": "trophos eukomoio", "korean": "아름다운 머리채의 충직한 유모 에우뤼클레이아", "grammarCaseAndMeter": "주격(Nominative) • 왕가 유모 칭호"},
        {"greek": "περίφρων Εὐρύκλεια", "transliteration": "periphron Eurykleia", "korean": "현명한 에우뤼클레이아", "grammarCaseAndMeter": "주격(Nominative) • 흉터 알아봄 Anagnorisis"}
    ],
    "nausicaa": [
        {"greek": "λευκώλενος Ναυσικάα", "transliteration": "leukolenos Nausikaa", "korean": "하얀 팔의 나우시카아", "grammarCaseAndMeter": "주격(Nominative) • 파이아케스 공주"},
        {"greek": "θεῶν ἄντα μοῖρα", "transliteration": "theon anta moira", "korean": "신들의 면전과 같은 고결한 자태", "grammarCaseAndMeter": "주격(Nominative) • 신성 자태"}
    ],
    "circe": [
        {"greek": "δεινὴ θεὸς αὐδήεσσα", "transliteration": "deine theos audeessa", "korean": "무서운 말씨를 지닌 마녀 여신 키르케", "grammarCaseAndMeter": "주격(Nominative) • 아이아이에 섬 마법사"},
        {"greek": "Κίρκη ἠϋκόμοιο", "transliteration": "Kirke eukomoio", "korean": "아름다운 머리채의 키르케", "grammarCaseAndMeter": "주격(Nominative) • 여신 수식어"}
    ],
    "calypso": [
        {"greek": "δῖα θεάων Καλυψώ", "transliteration": "dia theaon Kalypso", "korean": "여신 중의 신성한 칼립소", "grammarCaseAndMeter": "주격(Nominative) • 오귀기아 섬 님프"},
        {"greek": "Καλυψὼ ἠϋκόμοιο", "transliteration": "Kalypso eukomoio", "korean": "자태가 아름다운 칼립소", "grammarCaseAndMeter": "주격(Nominative) • 영원한 불사 님프"}
    ],
    "polyphemus": [
        {"greek": "κρατερός Πολύφημος", "transliteration": "krateros Polyphemos", "korean": "강력한 거인 폴리페모스", "grammarCaseAndMeter": "주격(Nominative) • 외눈박이 퀴클롭스"},
        {"greek": "υἱὸς Ποσειδάωνος", "transliteration": "huios Poseidaonos", "korean": "포세이돈의 직계 아들", "grammarCaseAndMeter": "주격(Nominative) • 바다 신 직계 부칭"}
    ]
}

homer_ts_path = "c:/Working/src/data/homer.ts"
with open(homer_ts_path, "r", encoding="utf-8") as f:
    homer_code = f.read()

match = re.search(r"export const HOMERIC_CHARACTERS: HomericCharacter\[\] = (\[[\s\S]*?\]);", homer_code)
if match:
    json_array_str = match.group(1)
    chars_list = json.loads(json_array_str)
    
    for c in chars_list:
        cid = c["id"]
        if cid in EXHAUSTIVE_34_EPITHETS_MAP:
            c["epithetsList"] = EXHAUSTIVE_34_EPITHETS_MAP[cid]

    new_ts_str = "export const HOMERIC_CHARACTERS: HomericCharacter[] = " + json.dumps(chars_list, ensure_ascii=False, indent=2) + ";"
    new_homer_code = homer_code[:match.start()] + new_ts_str + homer_code[match.end():]

    with open(homer_ts_path, "w", encoding="utf-8") as f:
        f.write(new_homer_code)

    print(f"Successfully populated 34 characters with exhaustive multi-formulaic epithets in homer.ts!")
