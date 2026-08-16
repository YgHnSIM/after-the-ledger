#!/usr/bin/env python3
"""
Research Sourcing Script for Ancient Writing Culture Essays
===========================================================
This script defines the academic sourcing pipeline using the `ultimate-browsing`
3-tier architecture to discover, extract, and verify Grade A/B primary sources
and modern epigraphic databases (CDLI, ORACC, Perseus, Homer Multitext, Louvre, BM).

Tier Routing:
- Tier 1 (insane-search): CDLI, Perseus, Jina Reader, OpenAccess scholarly PDFs/APIs
- Tier 1.5 (agent-reach): Platform readers, GitHub academic repos, Chinese epigraphy databases
- Tier 2 (Chrome stealth): CloakBrowser + agent-browser for museum portals with WAF/Turnstile
"""

import json
import os
import sys
from typing import Dict, List, Any

# Ensure UTF-8 output on Windows consoles
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Matrix of 8 Ancient Writing Culture Essays & Primary Target Sourcing Queries
ESSAY_SOURCING_MATRIX: Dict[str, Dict[str, Any]] = {
    "essay-1-accounting-first": {
        "essay_title": "1. 장부가 먼저였는가?",
        "primary_sources": [
            {
                "name": "Standard Professions List ED Lu A (W 20266,1)",
                "catalog": "CDLI P254191",
                "target_url": "https://cdli.mpiwg-berlin.mpg.de/artifacts/254191",
                "tier": "Tier 1",
                "extraction_method": "Jina Reader / CDLI API",
            },
            {
                "name": "Uruk IV Archaic Administrative Tablet (MSVO 3, 11)",
                "catalog": "CDLI P005573",
                "target_url": "https://cdli.mpiwg-berlin.mpg.de/artifacts/5573",
                "tier": "Tier 1",
                "extraction_method": "CDLI JSON API",
            },
            {
                "name": "Abydos Tomb U-j Bone and Ivory Labels",
                "catalog": "UCL Petrie Museum UC 36000+",
                "target_url": "https://www.ucl.ac.uk/museums-static/digitalegypt/abydos/tombuj.html",
                "tier": "Tier 1",
                "extraction_method": "insane-search curl_cffi",
            }
        ],
        "scholarly_references": [
            "Englund, R. K. (1998). Texts from the Late Uruk Period. OBO 160/1.",
            "Schmandt-Besserat, D. (1992). Before Writing: From Counting to Cuneiform. UT Press.",
            "Nissen, H. J., Damerow, P., & Englund, R. K. (1993). Archaic Bookkeeping. Chicago."
        ]
    },
    "essay-2-lexical-lists": {
        "essay_title": "2. 목록은 최초의 지식체계인가?",
        "primary_sources": [
            {
                "name": "Ur5-ra = hubullu (Bilingual Lexical Series)",
                "catalog": "DCCLT / CDLI P365448",
                "target_url": "http://oracc.museum.upenn.edu/dcclt/pager",
                "tier": "Tier 1",
                "extraction_method": "ORACC HTML parse via Jina",
            },
            {
                "name": "Ugarit Quadrilingual Vocabulary (Sumerian-Akkadian-Hurrian-Ugaritic)",
                "catalog": "RS 20.123+ / Louvre AO 19936",
                "target_url": "https://collections.louvre.fr/en/ark:/53355/cl010120150",
                "tier": "Tier 2",
                "extraction_method": "CloakBrowser CDP snapshot",
            }
        ],
        "scholarly_references": [
            "Veldhuis, N. (2014). History of the Cuneiform Lexical Tradition. GMTR 6.",
            "Goody, J. (1977). The Domestication of the Savage Mind. Cambridge University Press."
        ]
    },
    "essay-3-tomb-writing": {
        "essay_title": "3. 왕의 무덤에서 문자는 무엇을 하는가?",
        "primary_sources": [
            {
                "name": "Unas Pyramid Texts (PT 213-219, Burial Chamber)",
                "catalog": "Saqqara Pyramid of Unas / UCL Digital Egypt",
                "target_url": "https://www.ucl.ac.uk/museums-static/digitalegypt/pyramids/unas.html",
                "tier": "Tier 1",
                "extraction_method": "insane-search",
            },
            {
                "name": "Narmer Palette",
                "catalog": "Cairo Egyptian Museum JE 32169",
                "target_url": "https://www.ancient-egypt.co.uk/cairo%20museum/cm,%20narmer%20palette/index.htm",
                "tier": "Tier 1",
                "extraction_method": "insane-search",
            }
        ],
        "scholarly_references": [
            "Assmann, J. (2002). The Mind of Egypt: History and Meaning in the Time of the Pharaohs.",
            "Allen, J. P. (2005). The Ancient Egyptian Pyramid Texts. SBL Writings from the Ancient World."
        ]
    },
    "essay-4-homer-textualization": {
        "essay_title": "4. 호메로스는 언제 텍스트가 되었는가?",
        "primary_sources": [
            {
                "name": "Dipylon Oinochoe Inscription",
                "catalog": "Athens National Archaeological Museum NAM 192",
                "target_url": "https://epigraphy.packhum.org/text/22",
                "tier": "Tier 1",
                "extraction_method": "PHI Greek Inscriptions",
            },
            {
                "name": "Nestor's Cup of Pithekoussai",
                "catalog": "Museo Archeologico di Pithecusae 166705",
                "target_url": "https://epigraphy.packhum.org/text/321946",
                "tier": "Tier 1",
                "extraction_method": "PHI Greek Inscriptions",
            },
            {
                "name": "Venetus A Manuscript (Marcianus Graecus 454) with Scholia A",
                "catalog": "Biblioteca Nazionale Marciana / Harvard Homer Multitext",
                "target_url": "https://www.homermultitext.org/facsimiles/venetus-a/",
                "tier": "Tier 1.5",
                "extraction_method": "HMP IIIF Endpoint & GitHub repo",
            }
        ],
        "scholarly_references": [
            "Nagy, G. (2004). Homer's Text and Language. University of Illinois Press.",
            "Parry, M. (1971). The Making of Homeric Verse: The Collected Papers. Oxford.",
            "Lord, A. B. (1960). The Singer of Tales. Harvard University Press."
        ]
    },
    "essay-5-biblical-four-dates": {
        "essay_title": "5. 성서의 “원본”은 존재하는가?",
        "primary_sources": [
            {
                "name": "Ketef Hinnom Silver Amulets (KH1, KH2)",
                "catalog": "Israel Museum Jerusalem 80.1/1-2",
                "target_url": "https://www.imj.org.il/en/collections/372772",
                "tier": "Tier 2",
                "extraction_method": "CloakBrowser CDP snapshot",
            },
            {
                "name": "Great Isaiah Scroll (1QIsa-a) & 4QSam-a",
                "catalog": "The Digital Dead Sea Scrolls (IMJ / IAA)",
                "target_url": "http://dss.collections.imj.org.il/isaiah",
                "tier": "Tier 2",
                "extraction_method": "CloakBrowser CDP / IAA IIIF Manifest",
            }
        ],
        "scholarly_references": [
            "Tov, E. (2012). Textual Criticism of the Hebrew Bible (3rd Ed.). Fortress Press.",
            "Cross, F. M. (1975). Qumran and the History of the Biblical Text. Harvard University Press."
        ]
    },
    "essay-6-orality-and-text": {
        "essay_title": "6. 구전은 문자화 뒤에도 계속되는가?",
        "primary_sources": [
            {
                "name": "Enuma Elish Tablet IV (Babylonian Akitu Recitation)",
                "catalog": "British Museum K.3473",
                "target_url": "https://www.britishmuseum.org/collection/object/W_K-3473",
                "tier": "Tier 2",
                "extraction_method": "British Museum Collection API / CloakBrowser",
            }
        ],
        "scholarly_references": [
            "Ong, W. J. (1982). Orality and Literacy: The Technologizing of the Word. Methuen.",
            "Thomas, R. (1992). Literacy and Orality in Ancient Greece. Cambridge University Press."
        ]
    },
    "essay-7-preservation-bias": {
        "essay_title": "7. 무엇이 보존되고 무엇이 사라졌는가?",
        "primary_sources": [
            {
                "name": "Ashurbanipal Library Cuneiform Tablets (Fired Clay)",
                "catalog": "Nineveh Collection, British Museum",
                "target_url": "https://www.britishmuseum.org/collection/term/x-ashurbanipal",
                "tier": "Tier 2",
                "extraction_method": "CloakBrowser CDP",
            },
            {
                "name": "Diary of Merer (Wadi al-Jarf Papyrus)",
                "catalog": "Cairo Egyptian Museum / French Institute Cairo",
                "target_url": "https://en.wikipedia.org/wiki/Diary_of_Merer",
                "tier": "Tier 1",
                "extraction_method": "Jina Reader extraction",
            }
        ],
        "scholarly_references": [
            "Bagnall, R. S. (2011). Everyday Writing in the Graeco-Roman East. UC Press.",
            "Millard, A. (2000). Reading and Writing in the Time of Jesus. Sheffield Academic Press."
        ]
    },
    "essay-8-institutions-over-script": {
        "essay_title": "8. 문자 구조보다 제도가 더 중요했는가?",
        "primary_sources": [
            {
                "name": "Ugaritic Baal Epic (KTU 1.1-1.6)",
                "catalog": "Louvre AO 16636 / RS 2.[008]+",
                "target_url": "https://collections.louvre.fr/en/ark:/53355/cl010120149",
                "tier": "Tier 2",
                "extraction_method": "CloakBrowser CDP",
            },
            {
                "name": "Amarna Letter EA 286 (Abdi-Heba of Jerusalem)",
                "catalog": "Vorderasiatisches Museum Berlin VAT 1642",
                "target_url": "https://cdli.mpiwg-berlin.mpg.de/artifacts/271171",
                "tier": "Tier 1",
                "extraction_method": "CDLI API / Jina Reader",
            }
        ],
        "scholarly_references": [
            "Sanders, S. L. (2009). The Invention of Hebrew. University of Illinois Press.",
            "Baines, J. (2007). Visual and Written Culture in Ancient Egypt. Oxford University Press.",
            "Pardee, D. (2002). Ritual and Cult at Ugarit. SBL Writings from the Ancient World."
        ]
    }
}

def generate_sourcing_manifest():
    """Generates the JSON manifest of all target sources for academic verification."""
    output_path = os.path.join(os.path.dirname(__file__), "..", "docs", "research-sourcing-manifest.json")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(ESSAY_SOURCING_MATRIX, f, ensure_ascii=False, indent=2)
    print(f"[+] Sourcing manifest successfully generated: {output_path}")

def print_summary():
    print("=" * 70)
    print("Ancient Writing Culture Essays — Sourcing Pipeline Matrix")
    print("=" * 70)
    for essay_id, data in ESSAY_SOURCING_MATRIX.items():
        print(f"\n[{essay_id}] {data['essay_title']}")
        print(f"  * Primary Sources ({len(data['primary_sources'])}):")
        for src in data['primary_sources']:
            print(f"    - {src['name']} ({src['catalog']}) [{src['tier']}]")
        print(f"  * Key Bibliography ({len(data['scholarly_references'])} items)")

if __name__ == "__main__":
    print_summary()
    generate_sourcing_manifest()
