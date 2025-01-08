"use strict";
class TypeModule {
    id;
    display;
    checkbox;
    elem;
    constructor(itemType, display, language) {
        this.id = itemType.definition.id;
        this.display = display;
        if (!(itemType.definition.parentId && [100, 118, 521].includes(itemType.definition.parentId))) {
            this.display = false;
        }
        let img = document.createElement('img');
        img.setAttribute('src', `https://static.ankama.com/wakfu/portal/game/category/${this.id}.png`);
        if (itemType.title != undefined)
            img.setAttribute('title', parseGeneric(itemType.title[language], ["", 0, "X"]));
        this.checkbox = document.createElement('input');
        this.checkbox.type = 'checkbox';
        this.checkbox.checked = true;
        this.elem = document.createElement('div');
        this.elem.appendChild(img);
        this.elem.appendChild(this.checkbox);
    }
    ;
    queryObject() { return this.id; }
    ;
    isActive() {
        return this.display && this.checkbox.checked;
    }
}
