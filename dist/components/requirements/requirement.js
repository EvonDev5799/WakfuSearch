"use strict";
class RequirementModule {
    id;
    display;
    range;
    params;
    elem;
    constructor(id, caption, display, params) {
        this.id = id;
        this.display = display;
        this.range = new RangeInput(caption);
        this.elem = this.range.elem;
        this.params = params;
    }
    ;
    queryObject() {
        return {
            id: this.id,
            range: this.range.queryObject(),
            params: this.params
        };
    }
    ;
    isActive() {
        return this.display;
    }
}
