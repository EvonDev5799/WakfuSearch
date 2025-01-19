"use strict";
class FieldSwitchModule {
    id;
    requirementButton;
    weightButton;
    description;
    elem;
    constructor(id, caption, language) {
        this.id = id;
        this.requirementButton = new SwitchButtonControl(TextHelper.requirement[language]);
        this.weightButton = new SwitchButtonControl(TextHelper.weight[language]);
        this.description = caption;
        let span = document.createElement('span');
        span.innerHTML = this.description;
        this.elem = document.createElement('div');
        this.elem.appendChild(span);
        this.elem.appendChild(this.requirementButton.elem);
        this.elem.appendChild(this.weightButton.elem);
    }
    onRequirementClick(callback) {
        this.requirementButton.onClick((positive) => { callback(this.id, positive); });
    }
    onWeightClick(callback) {
        this.weightButton.onClick((positive) => { callback(this.id, positive); });
    }
    setRequirementState(positive) {
        this.requirementButton.set(positive);
    }
    setWeightState(positive) {
        this.weightButton.set(positive);
    }
}
