"use strict";
function match(tested, template) {
    let filter = template.toUpperCase();
    return tested.toUpperCase().indexOf(filter) > -1;
}
class FSTableModule {
    switches;
    elem;
    constructor(actions, language) {
        this.switches = new Map();
        this.elem = document.createElement('div');
        for (let action of actions) {
            if ((action.definition.id == 1068) || (action.definition.id == 1069)) {
                for (let i = 1; i <= 3; i++) {
                    let swtch = new FieldSwitchModule({ id: action.definition.id, subId: i }, parseGeneric(action.description[language], ["", 0, i]), language);
                    this.switches.set({ id: action.definition.id, subId: i }, swtch);
                }
            }
            else {
                let swtch = new FieldSwitchModule({ id: action.definition.id }, defaultParse(action.description[language]), language);
                this.switches.set({ id: action.definition.id }, swtch);
            }
        }
        this.filter("");
    }
    onRequirementClick(callback) {
        for (let swtch of this.switches.values()) {
            swtch.onRequirementClick(callback);
        }
    }
    onWeightClick(callback) {
        for (let swtch of this.switches.values()) {
            swtch.onWeightClick(callback);
        }
    }
    setRequirementState(id, positive) {
        for (let [key, value] of this.switches) {
            if (idMatch(id, key)) {
                value.setRequirementState(positive);
                break;
            }
        }
    }
    setWeightState(id, positive) {
        for (let [key, value] of this.switches) {
            if (idMatch(id, key)) {
                value.setWeightState(positive);
                break;
            }
        }
    }
    filter(template) {
        let newChilds = [];
        for (let swtch of this.switches.values()) {
            if (match(swtch.description, template))
                newChilds.push(swtch.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }
}
