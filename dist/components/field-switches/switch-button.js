"use strict";
class SwitchButtonControl {
    text;
    elem;
    positive;
    constructor(text, positive = true) {
        this.text = text;
        this.elem = document.createElement("button");
        this.positive = positive;
        this.set(this.positive);
    }
    ;
    onClick(callback) {
        this.elem.addEventListener("click", () => { callback(this.positive); });
    }
    set(positive) {
        this.positive = positive;
        this.elem.innerHTML = `${positive ? "+" : "-"} ${this.text}`;
    }
}
