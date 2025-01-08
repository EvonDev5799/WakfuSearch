"use strict";
class ValueInput {
    value;
    elem;
    constructor(title, language, start) {
        let text = document.createElement("span");
        text.classList.add('title');
        text.innerHTML = title;
        this.value = document.createElement("input");
        this.value.type = "number";
        this.value.placeholder = TextHelper.valuePlaceholder[language];
        if (start) {
            this.value.value = String(start);
        }
        this.elem = document.createElement("div");
        this.elem.classList.add('value-element');
        this.elem.appendChild(text);
        this.elem.appendChild(this.value);
    }
    ;
    queryObject() { return Number(this.value.value); }
    ;
}
