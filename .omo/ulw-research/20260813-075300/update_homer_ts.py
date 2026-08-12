import json
import re
import os

session_dir = "c:/Working/.omo/ulw-research/20260813-075300"
json_path = os.path.join(session_dir, "wave-2-expansion.json")

with open(json_path, "r", encoding="utf-8") as f:
    characters = json.load(f)

formatted_chars = []
for c in characters:
    # Build formatted TS object
    epithet_str = c.get("epithetKo", c.get("epithet", ""))
    if c.get("epithetGreek"):
        epithet_str += f" ({c['epithetGreek']} / {c.get('epithetTransliteration', '')})"
    
    char_obj = {
        "id": c["id"],
        "nameKo": c["nameKo"],
        "nameGreek": c["nameGreek"],
        "nameTransliteration": c.get("nameTransliteration", ""),
        "epithet": epithet_str,
        "epithetGreek": c.get("epithetGreek", ""),
        "epithetTransliteration": c.get("epithetTransliteration", ""),
        "epithetKo": c.get("epithetKo", ""),
        "side": c["side"],
        "role": c["role"],
        "description": c["description"],
        "aristeiaOrKeyBook": c.get("aristeiaOrKeyBook", ""),
        "philologyNote": c.get("philologyNote", "")
    }
    formatted_chars.append(char_obj)

ts_content_str = "export const HOMERIC_CHARACTERS: HomericCharacter[] = " + json.dumps(formatted_chars, ensure_ascii=False, indent=2) + ";\n"

# Read homer.ts
homer_ts_path = "c:/Working/src/data/homer.ts"
with open(homer_ts_path, "r", encoding="utf-8") as f:
    homer_code = f.read()

# Replace HOMERIC_CHARACTERS array
pattern = r"export const HOMERIC_CHARACTERS: HomericCharacter\[\] = \[[\s\S]*?\];"
new_homer_code = re.sub(pattern, ts_content_str.strip(), homer_code)

with open(homer_ts_path, "w", encoding="utf-8") as f:
    f.write(new_homer_code)

print(f"Successfully updated {homer_ts_path} with {len(formatted_chars)} detailed Homeric characters and epithets!")
