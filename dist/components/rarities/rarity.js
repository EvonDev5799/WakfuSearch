"use strict";
let RARITIES = [
    "Common",
    "Unusual",
    "Rare",
    "Mythical",
    "Legendary",
    "Relic",
    "Souvenir",
    "Epic"
];
class RarityModule {
    id;
    display;
    checkbox;
    elem;
    constructor(id, display) {
        this.id = id;
        this.display = display;
        let icon = document.createElement("span");
        icon.setAttribute("title", RARITIES[this.id]);
        icon.classList.add("rarity", `rarity-${this.id}`);
        this.checkbox = document.createElement("input");
        this.checkbox.type = "checkbox";
        this.checkbox.checked = true;
        this.elem = document.createElement("div");
        this.elem.appendChild(icon);
        this.elem.appendChild(this.checkbox);
    }
    ;
    queryObject() { return this.id; }
    ;
    isActive() {
        return this.display && this.checkbox.checked;
    }
}
