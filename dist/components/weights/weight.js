"use strict";
class WeightModule {
    id;
    display;
    value;
    params;
    elem;
    constructor(id, caption, display, language, params) {
        this.id = id;
        this.display = display;
        this.value = new ValueInput(caption, language, 1);
        this.elem = this.value.elem;
        this.params = params;
    }
    ;
    queryObject() {
        return {
            id: this.id,
            value: this.value.queryObject(),
            params: this.params
        };
    }
    ;
    isActive() {
        return this.display;
    }
}
