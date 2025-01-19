"use strict";
class RequirementTableModule {
    requirements;
    elem;
    constructor(actions, language) {
        this.requirements = new Map();
        for (let action of actions) {
            if ((action.definition.id == 1068) || (action.definition.id == 1069)) {
                for (let i = 1; i <= 3; i++) {
                    let rm = new RequirementModule(action.definition.id, parseGeneric(action.description[language], ["", 0, i]), false);
                    this.requirements.set({ id: action.definition.id, subId: i }, rm);
                }
            }
            else {
                let rm = new RequirementModule(action.definition.id, defaultParse(action.description[language]), false);
                this.requirements.set({ id: action.definition.id }, rm);
            }
        }
        this.elem = document.createElement('div');
        this.elem.classList.add(`requirement-table`);
        this.syncElement();
    }
    syncElement() {
        let newChilds = [];
        for (let requirement of this.requirements.values()) {
            if (requirement.display)
                newChilds.push(requirement.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }
    set(id, state) {
        for (let [key, value] of this.requirements) {
            if (idMatch(id, key)) {
                value.display = state;
                this.syncElement();
                break;
            }
        }
    }
    queryObject() {
        let values = [];
        for (let requirement of this.requirements.values()) {
            if (requirement.isActive())
                values.push(requirement.queryObject());
        }
        return values;
    }
}
