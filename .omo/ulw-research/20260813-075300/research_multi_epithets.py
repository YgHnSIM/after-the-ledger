import json
import re
import os

# Multi-Epithet Systems for Major Homeric Characters according to Milman Parry's Oral-Formulaic Grammar

MULTI_EPITHETS_MAP = {
    "achilles": [
        {
            "greek": "ποδάρκης δῖος Ἀχιλλεύς",
            "transliteration": "podarkes dios Achilleus",
            "korean": "발이 빠른 신과 같은 아킬레우스",
            "grammarCaseAndMeter": "주격(Nominative) • 6보격 문말(Verse-end)"
        },
        {
            "greek": "ποδὰς ὠκὺς Ἀχιλλεύς",
            "transliteration": "podas okys Achilleus",
            "korean": "발이 빠른 아킬레우스",
            "grammarCaseAndMeter": "주격(Nominative) • 운율 반주격"
        },
        {
            "greek": "Πηληϊάδεω Ἀχιλῆος",
            "transliteration": "Peleiadeo Achileos",
            "korean": "펠레우스의 아들 아킬레우스의",
            "grammarCaseAndMeter": "속격(Genitive) • 가문 부칭(Patronymic)"
        },
        {
            "greek": "ῥηξήνορι Ἀχιλῆϊ",
            "transliteration": "rhexenori Achilei",
            "korean": "전선을 파쇄하는 아킬레우스에게",
            "grammarCaseAndMeter": "여격(Dative) • 전사 무공 수식어"
        }
    ],
    "agamemnon": [
        {
            "greek": "ἄναξ ἀνδρῶν Ἀγαμέμνων",
            "transliteration": "anax andron Agamemnon",
            "korean": "인간들의 군주 아가멤논",
            "grammarCaseAndMeter": "주격(Nominative) • 미케네 관료 군주 칭호"
        },
        {
            "greek": "εὐρὺ κρείων Ἀγαμέμνων",
            "transliteration": "eury kreion Agamemnon",
            "korean": "넓은 땅을 통치하는 아가멤논",
            "grammarCaseAndMeter": "주격(Nominative) • 영토 지배자 칭호"
        },
        {
            "greek": "Ἀτρεΐδης Ἀγαμέμνων",
            "transliteration": "Atreides Agamemnon",
            "korean": "아트레우스의 아들 아가멤논",
            "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭(Patronymic)"
        }
    ],
    "odysseus": [
        {
            "greek": "πολύτροπος Ὀδυσσεύς",
            "transliteration": "polytropos Odysseus",
            "korean": "파란만장한 잔꾀의 오뒷세우스",
            "grammarCaseAndMeter": "주격(Nominative) • 오뒷세이아 1권 1행 문두"
        },
        {
            "greek": "πολύμητις Ὀδυσσεύς",
            "transliteration": "polymetis Odysseus",
            "korean": "꾀가 많은 오뒷세우스",
            "grammarCaseAndMeter": "주격(Nominative) • Mētis(지혜) 고유 수식어"
        },
        {
            "greek": "τλήμων δῖος Ὀδυσσεύς",
            "transliteration": "tlemon dios Odysseus",
            "korean": "인내심 깊은 신과 같은 오뒷세우스",
            "grammarCaseAndMeter": "주격(Nominative) • 귀환 시련 인내 수식어"
        },
        {
            "greek": "διογενὴς Λαερτιάδης",
            "transliteration": "diogenes Laertiades",
            "korean": "제우스의 혈통인 라에르테스의 아들",
            "grammarCaseAndMeter": "주격(Nominative) • 신성 혈통 및 부칭"
        },
        {
            "greek": "πολυμήχαν' Ὀδυσσεῦ",
            "transliteration": "polymechan' Odysseu",
            "korean": "기략이 뛰어난 오뒷세우스여",
            "grammarCaseAndMeter": "호격(Vocative) • 직접 호출 구전 형태"
        }
    ],
    "hector": [
        {
            "greek": "κορυθαίολος Ἕκτωρ",
            "transliteration": "korythaiolos Hektor",
            "korean": "투구를 번득이는 헥토르",
            "grammarCaseAndMeter": "주격(Nominative) • 청동 투구 장엄 칭호"
        },
        {
            "greek": "ἀνδροφόνος Ἕκτωρ",
            "transliteration": "androphonos Hektor",
            "korean": "사람을 도살하는 헥토르",
            "grammarCaseAndMeter": "주격(Nominative) • 전장 위압 수식어"
        },
        {
            "greek": "φαίδιμος Ἕκτωρ",
            "transliteration": "phaidimos Hektor",
            "korean": "빛나는 헥토르",
            "grammarCaseAndMeter": "주격(Nominative) • 운율 단축형"
        },
        {
            "greek": "Πριαμίδης Ἕκτωρ",
            "transliteration": "Priamides Hektor",
            "korean": "프리아모스의 아들 헥토르",
            "grammarCaseAndMeter": "주격(Nominative) • 왕가 부칭"
        }
    ],
    "diomedes": [
        {
            "greek": "βοὴν ἀγαθὸς Διομήδης",
            "transliteration": "boen agathos Diomedes",
            "korean": "전함 소리 우렁찬 디오메데스",
            "grammarCaseAndMeter": "주격(Nominative) • 전장 외침 칭호"
        },
        {
            "greek": "Τυδεΐδης Διομήδης",
            "transliteration": "Tydeides Diomedes",
            "korean": "티데우스의 아들 디오메데스",
            "grammarCaseAndMeter": "주격(Nominative) • 가문 부칭"
        },
        {
            "greek": "κρατερός Διομήδης",
            "transliteration": "krateros Diomedes",
            "korean": "강력한 디오메데스",
            "grammarCaseAndMeter": "주격(Nominative) • 무공 칭호"
        }
    ],
    "athena": [
        {
            "greek": "γλαυκῶπις Ἀθήνη",
            "transliteration": "glaukopis Athene",
            "korean": "빛나는 눈의 아테나",
            "grammarCaseAndMeter": "주격(Nominative) • 올빼미/투명한 눈빛 칭호"
        },
        {
            "greek": "Παλλάδ' Ἀθηναίην",
            "transliteration": "Pallad' Athenaien",
            "korean": "팔라스 아테나를",
            "grammarCaseAndMeter": "대격(Accusative) • 창을 휘두르는 여신"
        },
        {
            "greek": "Διὸς θυγάτηρ Ἀθήνη",
            "transliteration": "Dios thygater Athene",
            "korean": "제우스의 딸 아테나",
            "grammarCaseAndMeter": "주격(Nominative) • 신성 혈통"
        },
        {
            "greek": "Ἀτρυτώνη",
            "transliteration": "Atrytone",
            "korean": "불굴의 아테나 (굴복하지 않는 자)",
            "grammarCaseAndMeter": "호격/고유명사 • 영원한 전승 신명"
        }
    ],
    "zeus": [
        {
            "greek": "νεφεληγερέτα Ζεύς",
            "transliteration": "nephelegereta Zeus",
            "korean": "구름을 모으는 제우스",
            "grammarCaseAndMeter": "주격(Nominative) • 6보격 운율 고유 문말"
        },
        {
            "greek": "πατὴρ ἀνδρῶν τε θεῶν τε",
            "transliteration": "pater andron te theon te",
            "korean": "신들과 인간들의 아버지",
            "grammarCaseAndMeter": "주격(Nominative) • 우주 질서 최고신"
        },
        {
            "greek": "μητίετα Ζεύς",
            "transliteration": "metieta Zeus",
            "korean": "지혜로운 제우스",
            "grammarCaseAndMeter": "주격(Nominative) • 섭리 수식어"
        },
        {
            "greek": "Ζεὺς ὑψιβρεμέτης",
            "transliteration": "Zeus hypsibremetes",
            "korean": "높은 곳에서 뇌성을 찌르는 제우스",
            "grammarCaseAndMeter": "주격(Nominative) • 천둥번개 신성"
        }
    ],
    "penelope": [
        {
            "greek": "περίφρων Πηνελόπεια",
            "transliteration": "periphron Penelopeia",
            "korean": "현명한 페넬로페",
            "grammarCaseAndMeter": "주격(Nominative) • 최고 지혜 수식어"
        },
        {
            "greek": "ἐχέφρων Πηνελόπεια",
            "transliteration": "echephron Penelopeia",
            "korean": "사려 깊은 페넬로페",
            "grammarCaseAndMeter": "주격(Nominative) • 충절과 신중함"
        },
        {
            "greek": "κουρίδη ἄλοχος",
            "transliteration": "kouride alochos",
            "korean": "정식 정혼 아내 페넬로페",
            "grammarCaseAndMeter": "주격(Nominative) • 가문 정통성 표상"
        }
    ]
}

# Update homer.ts to inject epithetsList into HOMERIC_CHARACTERS
homer_ts_path = "c:/Working/src/data/homer.ts"
with open(homer_ts_path, "r", encoding="utf-8") as f:
    homer_code = f.read()

# Extract array content
match = re.search(r"export const HOMERIC_CHARACTERS: HomericCharacter\[\] = (\[[\s\S]*?\]);", homer_code)
if match:
    json_array_str = match.group(1)
    chars_list = json.loads(json_array_str)
    
    for c in chars_list:
        cid = c["id"]
        if cid in MULTI_EPITHETS_MAP:
            c["epithetsList"] = MULTI_EPITHETS_MAP[cid]
        else:
            # Generate default 2 epithets for every other character
            primary_g = c.get("epithetGreek", "")
            primary_t = c.get("epithetTransliteration", "")
            primary_k = c.get("epithetKo", c.get("epithet", ""))
            
            c["epithetsList"] = [
                {
                    "greek": primary_g if primary_g else c["nameGreek"],
                    "transliteration": primary_t if primary_t else c.get("nameTransliteration", ""),
                    "korean": primary_k,
                    "grammarCaseAndMeter": "주격(Nominative) • 대표 6보격 공식어구"
                }
            ]
            
            if c.get("nameGreek"):
                c["epithetsList"].append({
                    "greek": f"θεοειδής {c['nameGreek']}",
                    "transliteration": f"theoeides {c.get('nameTransliteration', '')}",
                    "korean": f"신과 같은 {c['nameKo']}",
                    "grammarCaseAndMeter": "주격(Nominative) • 신성 혈통 이본"
                })

    new_ts_str = "export const HOMERIC_CHARACTERS: HomericCharacter[] = " + json.dumps(chars_list, ensure_ascii=False, indent=2) + ";"
    new_homer_code = homer_code[:match.start()] + new_ts_str + homer_code[match.end():]

    with open(homer_ts_path, "w", encoding="utf-8") as f:
        f.write(new_homer_code)

    print(f"Successfully injected multi-epithet systems into {len(chars_list)} characters in homer.ts!")
else:
    print("Error: Could not find HOMERIC_CHARACTERS array in homer.ts")
