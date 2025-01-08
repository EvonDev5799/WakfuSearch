"use strict";
class RequirementModule {
    id;
    display;
    range;
    elem;
    constructor(action, display, language) {
        this.id = action.definition.id;
        this.display = display;
        this.range = new RangeInput(defaultParse(action.description[language]));
        this.elem = this.range.elem;
    }
    ;
    queryObject() {
        return {
            id: this.id,
            range: this.range.queryObject()
        };
    }
    ;
    isActive() {
        return this.display;
    }
}
