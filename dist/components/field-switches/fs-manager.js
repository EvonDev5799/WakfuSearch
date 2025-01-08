"use strict";
class FSManagerModule {
    fstable;
    elem;
    constructor(actions, language) {
        this.fstable = new FSTableModule(actions, language);
        let search = document.createElement("input");
        search.type = "text";
        search.placeholder = `${TextHelper.searchPlaceholder[language]}...`;
        search.addEventListener("input", () => {
            this.fstable.filter(search.value);
        });
        this.elem = document.createElement("div");
        this.elem.classList.add("fs-module");
        this.elem.appendChild(search);
        this.elem.appendChild(this.fstable.elem);
    }
    onRequirementClick(callback) {
        this.fstable.onRequirementClick(callback);
    }
    onWeightClick(callback) {
        this.fstable.onWeightClick(callback);
    }
    setRequirementState(id, positive) {
        this.fstable.setRequirementState(id, positive);
    }
    setWeightState(id, positive) {
        this.fstable.setWeightState(id, positive);
    }
}
