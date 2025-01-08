"use strict";
const actions = [
    {
        "definition": {
            "id": 20,
            "effect": "Boost : Point de vie (PV)"
        },
        "description": {
            "fr": "[#1] PV",
            "en": "[#1] HP",
            "es": "[#1] PdV",
            "pt": "[#1] PV"
        }
    },
    {
        "definition": {
            "id": 21,
            "effect": "Deboost : Point de vie (PV)"
        },
        "description": {
            "fr": "-[#1] Point{[>1]?s:} de Vie",
            "en": "-[#1] Health Point{[=1]?:s}",
            "es": "-[#1] punto{[=1]?:s} de vida",
            "pt": "-[#1] Ponto{[>1]?s:} de Vida"
        }
    },
    {
        "definition": {
            "id": 26,
            "effect": "Gain : Ma\u00eetrise Soin"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise Soin",
            "en": "[#1] Healing Mastery",
            "es": "[#1] dominio cura",
            "pt": "[#1] de Dom\u00ednio de cura"
        }
    },
    {
        "definition": {
            "id": 31,
            "effect": "Boost : PA"
        },
        "description": {
            "fr": "[#1] PA",
            "en": "[#1] AP",
            "es": "[#1] PA",
            "pt": "[#1] PA"
        }
    },
    {
        "definition": {
            "id": 41,
            "effect": "Boost : PM"
        },
        "description": {
            "fr": "[#1] PM",
            "en": "[#1] MP",
            "es": "[#1] PM",
            "pt": "[#1] de PM"
        }
    },
    {
        "definition": {
            "id": 42,
            "effect": "OLD - Deboost : PM"
        },
        "description": {
            "fr": "-[#1] PM {[~2]?([#2]%):}",
            "en": "-[#1] MP {[~2]?([#2]%):}",
            "es": "-[#1] PM {[~2]?([#2]%):}",
            "pt": "-[#1] PM {[~2]?([#2]%):}"
        }
    },
    {
        "definition": {
            "id": 56,
            "effect": "Deboost : PA"
        },
        "description": {
            "fr": "-[#1] PA max",
            "en": "-[#1] max AP",
            "es": "-[#1] PA m\u00e1x.",
            "pt": "-[#1] PA m\u00e1ximo"
        }
    },
    {
        "definition": {
            "id": 57,
            "effect": "Deboost : PM"
        },
        "description": {
            "fr": "-[#1] PM max",
            "en": "-[#1] max MP",
            "es": "-[#1] PM m\u00e1x.",
            "pt": "-[#1] PM m\u00e1ximo"
        }
    },
    {
        "definition": {
            "id": 71,
            "effect": "Gain : R\u00e9sistance Dos"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance Dos",
            "en": "[#1] Rear Resistance",
            "es": "[#1] resistencia por la espalda",
            "pt": "[#1] de Resist\u00eancia de costas"
        }
    },
    {
        "definition": {
            "id": 80,
            "effect": "Gain : R\u00e9sistance \u00c9l\u00e9mentaire"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance \u00c9l\u00e9mentaire",
            "en": "[#1] Elemental Resistance",
            "es": "[#1] resistencia elemental",
            "pt": "[#1] de resist\u00eancia elementar"
        }
    },
    {
        "definition": {
            "id": 82,
            "effect": "Gain : R\u00e9sistance Feu"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance [el1]",
            "en": "[#1] [el1] Resistance",
            "es": "[#1] resistencia al [el1]",
            "pt": "[#1] Resist\u00eancia a [el1]"
        }
    },
    {
        "definition": {
            "id": 83,
            "effect": "Gain : R\u00e9sistance Eau"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance [el2]",
            "en": "[#1] [el2] Resistance",
            "es": "[#1] resistencia al [el2]",
            "pt": "[#1] Resist\u00eancia a [el2]"
        }
    },
    {
        "definition": {
            "id": 84,
            "effect": "Gain : R\u00e9sistance Terre"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance [el3]",
            "en": "[#1] [el3] Resistance",
            "es": "[#1] resistencia a la [el3]",
            "pt": "[#1] Resist\u00eancia a [el3]"
        }
    },
    {
        "definition": {
            "id": 85,
            "effect": "Gain : R\u00e9sistance Air"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance [el4]",
            "en": "[#1] [el4] Resistance",
            "es": "[#1] resistencia al [el4]",
            "pt": "[#1] Resist\u00eancia a [el4]"
        }
    },
    {
        "definition": {
            "id": 90,
            "effect": "Perte : R\u00e9sistance \u00c9l\u00e9mentaire"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance \u00e9l\u00e9mentaire",
            "en": "-[#1] Elemental Resistance",
            "es": "-[#1] resistencia elemental",
            "pt": "-[#1] Resist\u00eancia elementar"
        }
    },
    {
        "definition": {
            "id": 96,
            "effect": "Perte : R\u00e9sistance Terre (sans cap)"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance [el3]",
            "en": "-[#1] [el3] Resistance",
            "es": "-[#1] resistencia a la [el3]",
            "pt": "-[#1] Resist\u00eancia a [el3]"
        }
    },
    {
        "definition": {
            "id": 97,
            "effect": "Perte : R\u00e9sistance Feu (sans cap)"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance [el1]",
            "en": "-[#1] [el1] Resistance",
            "es": "-[#1] resistencia al [el1]",
            "pt": "-[#1] Resist\u00eancia a [el1]"
        }
    },
    {
        "definition": {
            "id": 98,
            "effect": "Perte : R\u00e9sistance Eau (sans cap)"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance [el2]",
            "en": "-[#1] [el2] Resistance",
            "es": "-[#1] resistencia al [el2]",
            "pt": "-[#1] Resist\u00eancia a [el2]"
        }
    },
    {
        "definition": {
            "id": 100,
            "effect": "Perte : R\u00e9sistance \u00c9l\u00e9mentaire (sans cap)"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance \u00e9l\u00e9mentaire",
            "en": "-[#1] Elemental Resistance",
            "es": "-[#1] resistencia elemental",
            "pt": "-[#1] Resist\u00eancia elementar"
        }
    },
    {
        "definition": {
            "id": 120,
            "effect": "Gain : Ma\u00eetrise \u00c9l\u00e9mentaire"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise \u00c9l\u00e9mentaire",
            "en": "[#1] Elemental Mastery",
            "es": "[#1] dominio elemental",
            "pt": "[#1] de dom\u00ednio elementar"
        }
    },
    {
        "definition": {
            "id": 122,
            "effect": "Gain : Ma\u00eetrise Feu"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise [el1]",
            "en": "[#1] [el1] Mastery",
            "es": "[#1] dominio de [el1]",
            "pt": "[#1] de dom\u00ednio de [el1]"
        }
    },
    {
        "definition": {
            "id": 123,
            "effect": "Gain : Ma\u00eetrise Terre"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise [el3]",
            "en": "[#1] [el3] Mastery",
            "es": "[#1] dominio de [el3]",
            "pt": "[#1] de dom\u00ednio de [el3]"
        }
    },
    {
        "definition": {
            "id": 124,
            "effect": "Gain : Ma\u00eetrise Eau"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise [el2]",
            "en": "[#1] [el2] Mastery",
            "es": "[#1] dominio de [el2]",
            "pt": "[#1] de dom\u00ednio de [el2]"
        }
    },
    {
        "definition": {
            "id": 125,
            "effect": "Gain : Ma\u00eetrise Air"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise [el4]",
            "en": "[#1] [el4] Mastery",
            "es": "[#1] dominio de [el4]",
            "pt": "[#1] de dom\u00ednio de [el4]"
        }
    },
    {
        "definition": {
            "id": 130,
            "effect": "Perte : Ma\u00eetrise \u00c9l\u00e9mentaire"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise \u00c9l\u00e9mentaire",
            "en": "-[#1] Elemental Mastery",
            "es": "-[#1] dominio elemental",
            "pt": "-[#1] de dom\u00ednio elementar"
        }
    },
    {
        "definition": {
            "id": 132,
            "effect": "Perte : Ma\u00eetrise Feu"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise [el1]",
            "en": "-[#1] [el1] Mastery",
            "es": "-[#1] dominio de [el1]",
            "pt": "-[#1] de dom\u00ednio de [el1]"
        }
    },
    {
        "definition": {
            "id": 149,
            "effect": "Gain : Ma\u00eetrise Critique"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise Critique",
            "en": "[#1] Critical Mastery",
            "es": "[#1] dominio cr\u00edtico",
            "pt": "[#1] de Dom\u00ednio de cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 150,
            "effect": "Gain : Coup Critique (%)"
        },
        "description": {
            "fr": "[#1]% Coup critique",
            "en": "[#1]% Critical Hit",
            "es": "[#1]% de golpe cr\u00edtico",
            "pt": "[#1]% de golpe cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 160,
            "effect": "Gain : Port\u00e9e"
        },
        "description": {
            "fr": "[#1] Port\u00e9e",
            "en": "[#1] Range",
            "es": "[#1] alcance",
            "pt": "[#1] de Alcance"
        }
    },
    {
        "definition": {
            "id": 161,
            "effect": "Perte : Port\u00e9e"
        },
        "description": {
            "fr": "-[#1] Port\u00e9e",
            "en": "-[#1] Range",
            "es": "-[#1] alcance",
            "pt": "-[#1] de Alcance"
        }
    },
    {
        "definition": {
            "id": 162,
            "effect": "Gain : Prospection"
        },
        "description": {
            "fr": "[#1] Prospection",
            "en": "[#1] Prospecting",
            "es": "[#1] prospecci\u00f3n",
            "pt": "[#1] de Prospec\u00e7\u00e3o"
        }
    },
    {
        "definition": {
            "id": 166,
            "effect": "Gain : Sagesse"
        },
        "description": {
            "fr": "[#1] Sagesse",
            "en": "[#1] Wisdom",
            "es": "[#1] sabidur\u00eda",
            "pt": "[#1] de Sabedoria"
        }
    },
    {
        "definition": {
            "id": 168,
            "effect": "Perte : Coup Critique (%)"
        },
        "description": {
            "fr": "-[#1]% Coup critique",
            "en": "-[#1]% Critical Hit",
            "es": "-[#1]% de golpe cr\u00edtico",
            "pt": "-[#1]% de golpe cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 171,
            "effect": "Gain : Initiative"
        },
        "description": {
            "fr": "[#1] Initiative",
            "en": "[#1] Initiative",
            "es": "[#1] iniciativa",
            "pt": "[#1] de Iniciativa"
        }
    },
    {
        "definition": {
            "id": 172,
            "effect": "Perte : Initiative"
        },
        "description": {
            "fr": "-[#1] Initiative",
            "en": "-[#1] Initiative",
            "es": "-[#1] iniciativa",
            "pt": "-[#1] de Iniciativa"
        }
    },
    {
        "definition": {
            "id": 173,
            "effect": "Gain : Tacle"
        },
        "description": {
            "fr": "[#1] Tacle",
            "en": "[#1] Lock",
            "es": "[#1] placaje",
            "pt": "[#1] de Bloqueio"
        }
    },
    {
        "definition": {
            "id": 174,
            "effect": "Perte : Tacle"
        },
        "description": {
            "fr": "-[#1] Tacle",
            "en": "-[#1] Lock",
            "es": "-[#1] placaje",
            "pt": "-[#1] de Bloqueio"
        }
    },
    {
        "definition": {
            "id": 175,
            "effect": "Gain : Esquive"
        },
        "description": {
            "fr": "[#1] Esquive",
            "en": "[#1] Dodge",
            "es": "[#1] Esquiva",
            "pt": "[#1] de esquiva"
        }
    },
    {
        "definition": {
            "id": 176,
            "effect": "Perte : Esquive"
        },
        "description": {
            "fr": "-[#1] Esquive",
            "en": "-[#1] Dodge",
            "es": "-[#1] esquiva",
            "pt": "-[#1] de Esquiva"
        }
    },
    {
        "definition": {
            "id": 177,
            "effect": "Gain : Volont\u00e9"
        },
        "description": {
            "fr": "[#1] Volont\u00e9",
            "en": "[#1] Force of Will",
            "es": "[#1] voluntad",
            "pt": "[#1] de Vontade"
        }
    },
    {
        "definition": {
            "id": 180,
            "effect": "Gain : Ma\u00eetrise Dos"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise Dos",
            "en": "[#1] Rear Mastery",
            "es": "[#1] dominio espalda",
            "pt": "[#1] de Dom\u00ednio de costas"
        }
    },
    {
        "definition": {
            "id": 181,
            "effect": "Perte : Ma\u00eetrise Dos"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise Dos",
            "en": "-[#1] Rear Mastery",
            "es": "-[#1] dominio espalda",
            "pt": "-[#1] de Dom\u00ednio de costas"
        }
    },
    {
        "definition": {
            "id": 184,
            "effect": "Gain : Contr\u00f4le"
        },
        "description": {
            "fr": "[#1] Contr\u00f4le",
            "en": "[#1] Control",
            "es": "[#1] control",
            "pt": "[#1] de Controle"
        }
    },
    {
        "definition": {
            "id": 191,
            "effect": "Boost : PW"
        },
        "description": {
            "fr": "[#1] PW",
            "en": "[#1] WP",
            "es": "[#1] PW",
            "pt": "[#1] de PW"
        }
    },
    {
        "definition": {
            "id": 192,
            "effect": "Deboost : PW"
        },
        "description": {
            "fr": "-[#1] PW max",
            "en": "-[#1] max WP",
            "es": "-[#1] PW m\u00e1x.",
            "pt": "-[#1] de PW no m\u00e1x."
        }
    },
    {
        "definition": {
            "id": 193,
            "effect": "Gain : PW"
        },
        "description": {
            "fr": "[#1] PW",
            "en": "[#1] WP",
            "es": "[#1] PW",
            "pt": "[#1] de PW"
        }
    },
    {
        "definition": {
            "id": 194,
            "effect": "Perte : PW"
        },
        "description": {
            "fr": "-[#1] PW",
            "en": "-[#1] WP",
            "es": "-[#1] PW",
            "pt": "-[#1] PW"
        }
    },
    {
        "definition": {
            "id": 875,
            "effect": "Gain : Parade"
        },
        "description": {
            "fr": "[#1]% Parade",
            "en": "[#1]% Block",
            "es": "[#1]% anticipaci\u00f3n",
            "pt": "[#1]% de Parada"
        }
    },
    {
        "definition": {
            "id": 876,
            "effect": "Perte : Parade"
        },
        "description": {
            "fr": "-[#1]% Parade",
            "en": "-[#1]% Block",
            "es": "-[#1]% anticipaci\u00f3n",
            "pt": "-[#1]% de Parada"
        }
    },
    {
        "definition": {
            "id": 988,
            "effect": "Gain : R\u00e9sistance Critique"
        },
        "description": {
            "fr": "[#1] R\u00e9sistance Critique",
            "en": "[#1] Critical Resistance",
            "es": "[#1] resistencia cr\u00edtica",
            "pt": "[#1] de Resist\u00eancia a cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 1052,
            "effect": "Gain : Ma\u00eetrise M\u00eal\u00e9e"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise M\u00eal\u00e9e",
            "en": "[#1] Melee Mastery",
            "es": "[#1] dominio de mel\u00e9",
            "pt": "[#1] Dom\u00ednio de curta dist\u00e2ncia"
        }
    },
    {
        "definition": {
            "id": 1053,
            "effect": "Gain : Ma\u00eetrise Distance"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise Distance",
            "en": "[#1] Distance Mastery",
            "es": "[#1] dominio distancia",
            "pt": "[#1] de Dom\u00ednio de dist\u00e2ncia"
        }
    },
    {
        "definition": {
            "id": 1055,
            "effect": "Gain : Ma\u00eetrise Berserk"
        },
        "description": {
            "fr": "[#1] Ma\u00eetrise Berserk",
            "en": "[#1] Berserk Mastery",
            "es": "[#1] dominio berserker",
            "pt": "[#1] de Dom\u00ednio de Berserk"
        }
    },
    {
        "definition": {
            "id": 1056,
            "effect": "Perte : Ma\u00eetrise Critique"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise Critique",
            "en": "-[#1] Critical Mastery",
            "es": "-[#1] dominio cr\u00edtico",
            "pt": "-[#1] de Dom\u00ednio de cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 1059,
            "effect": "Perte : Ma\u00eetrise M\u00eal\u00e9e"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise M\u00eal\u00e9e",
            "en": "-[#1] Melee Mastery",
            "es": "-[#1] dominio de mel\u00e9",
            "pt": "-[#1] Dom\u00ednio de curta dist\u00e2ncia"
        }
    },
    {
        "definition": {
            "id": 1060,
            "effect": "Perte : Ma\u00eetrise Distance"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise Distance",
            "en": "-[#1] Distance Mastery",
            "es": "-[#1] dominio distancia",
            "pt": "-[#1] de Dom\u00ednio de dist\u00e2ncia"
        }
    },
    {
        "definition": {
            "id": 1061,
            "effect": "Perte : Ma\u00eetrise Berserk"
        },
        "description": {
            "fr": "-[#1] Ma\u00eetrise Berserk",
            "en": "-[#1] Berserk Mastery",
            "es": "-[#1] dominio berserker",
            "pt": "-[#1] de Dom\u00ednio de Berserk"
        }
    },
    {
        "definition": {
            "id": 1062,
            "effect": "Perte : R\u00e9sistance Critique"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance Critique",
            "en": "-[#1] Critical Resistance",
            "es": "-[#1] resistencia cr\u00edtica",
            "pt": "-[#1] de Resist\u00eancia a cr\u00edtico"
        }
    },
    {
        "definition": {
            "id": 1063,
            "effect": "Perte : R\u00e9sistance Dos"
        },
        "description": {
            "fr": "-[#1] R\u00e9sistance Dos",
            "en": "-[#1] Rear Resistance",
            "es": "-[#1] resistencia por la espalda",
            "pt": "-[#1] de Resist\u00eancia de costas"
        }
    },
    {
        "definition": {
            "id": 1068,
            "effect": "Gain : Ma\u00eetrise \u00c9l\u00e9mentaire dans un nombre variable d'\u00e9l\u00e9ments"
        },
        "description": {
            "fr": "{[~3]?[#1] Ma\u00eetrise [#3]:[#1] Ma\u00eetrise sur [#2] \u00e9l\u00e9ment{[>2]?s:} al\u00e9atoire{[>2]?s:}}",
            "en": "{[~3]?[#1] Mastery [#3]:[#1] Mastery of [#2] random{[=2]?:} element{[=2]?:s}}",
            "es": "{[~3]?[#1] Dominio[#3]:[#1] Dominio de [#2] elemento{[>2]?s:} aleatorio{[>2]?s:}}",
            "pt": "{[~3]?[#1] Dom\u00ednio[#3]:[#1] Dom\u00ednio sobre [#2] elemento{[>2]?s:} aleat\u00f3rio{[>2]?s:}}"
        }
    },
    {
        "definition": {
            "id": 1069,
            "effect": "Gain : R\u00e9sistance \u00c9l\u00e9mentaire dans un nombre variable d'\u00e9l\u00e9ments"
        },
        "description": {
            "fr": "{[~3]?[#1] R\u00e9sistance [#3]:[#1] R\u00e9sistance sur [#2] \u00e9l\u00e9ment{[>2]?s:} al\u00e9atoire{[>2]?s:}}",
            "en": "{[~3]?[#1] Resistance [#3]:[#1] Resistance to [#2] random element{[>2]?s:}}",
            "es": "{[~3]?[#1] Resistencia [#3]:[#1] Resistencia a [#2] elemento{[>2]?s:} aleatorio{[>2]?s:}}",
            "pt": "{[~3]?[#1] de Resist\u00eancia a [#3]:[#1] de Resist\u00eancia a [#2] elemento{[>2]?s:} aleat\u00f3rio{[>2]?s:}}"
        }
    }
];
