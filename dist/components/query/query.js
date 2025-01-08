"use strict";
class QueryModule {
    types;
    rarities;
    level;
    requirements;
    weights;
    switches;
    search;
    elem;
    constructor(actions, itemTypes, rarities, language) {
        this.types = new TypeTableModule(itemTypes, language);
        this.rarities = new RarityTableModule(rarities);
        this.level = new RangeInput(TextHelper.level[language]);
        this.requirements = new RequirementTableModule(actions, language);
        this.weights = new WeightTableModule(actions, language);
        this.switches = new FSManagerModule(actions, language);
        this.switches.onRequirementClick((id, active) => this.setRequirementState(id, active));
        this.switches.onWeightClick((id, active) => this.setWeightState(id, active));
        this.search = document.createElement('button');
        this.search.innerHTML = TextHelper.searchPlaceholder[language];
        this.elem = document.createElement('div');
        this.elem.classList.add('menu');
        this.elem.appendChild(this.types.elem);
        this.elem.appendChild(this.rarities.elem);
        this.elem.appendChild(this.level.elem);
        this.elem.appendChild(this.switches.elem);
        this.elem.appendChild(this.requirements.elem);
        this.elem.appendChild(this.weights.elem);
        this.elem.appendChild(this.search);
    }
    ;
    setRequirementState(id, active) {
        this.switches.setRequirementState(id, !active);
        this.requirements.set(id, active);
    }
    ;
    setWeightState(id, active) {
        this.switches.setWeightState(id, !active);
        this.weights.set(id, active);
    }
    ;
    queryObject() {
        return {
            types: this.types.queryObject(),
            level: this.level.queryObject(),
            rarities: this.rarities.queryObject(),
            requirements: this.requirements.queryObject(),
            weights: this.weights.queryObject()
        };
    }
    onSearch(callback) {
        this.search.addEventListener('click', () => { callback(this.queryObject()); });
    }
}
