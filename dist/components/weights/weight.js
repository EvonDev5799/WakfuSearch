"use strict";
class WeightModule {
    id;
    display;
    value;
    elem;
    constructor(action, display, language) {
        this.id = action.definition.id;
        this.display = display;
        this.value = new ValueInput(defaultParse(action.description[language]), language, 1);
        this.elem = this.value.elem;
    }
    ;
    queryObject() {
        return {
            id: this.id,
            value: this.value.queryObject()
        };
    }
    ;
    isActive() {
        return this.display;
    }
}
