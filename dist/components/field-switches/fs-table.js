"use strict";
function match(tested, template) {
    let filter = template.toUpperCase();
    return tested.toUpperCase().indexOf(filter) > -1;
}
class FSTableModule {
    switches;
    elem;
    constructor(actions, language) {
        this.switches = [];
        this.elem = document.createElement('div');
        for (let action of actions) {
            let swtch = new FieldSwitchModule(action, language);
            this.switches.push(swtch);
        }
        this.filter("");
    }
    onRequirementClick(callback) {
        for (let swtch of this.switches) {
            swtch.onRequirementClick(callback);
        }
    }
    onWeightClick(callback) {
        for (let swtch of this.switches) {
            swtch.onWeightClick(callback);
        }
    }
    setRequirementState(id, positive) {
        for (let swtch of this.switches) {
            if (swtch.id == id) {
                swtch.setRequirementState(positive);
                break;
            }
        }
    }
    setWeightState(id, positive) {
        for (let swtch of this.switches) {
            if (swtch.id == id) {
                swtch.setWeightState(positive);
                break;
            }
        }
    }
    filter(template) {
        let newChilds = [];
        for (let swtch of this.switches) {
            if (match(swtch.description, template))
                newChilds.push(swtch.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }
}
