"use strict";
class TableModule {
    items;
    elem;
    constructor(models, module, css, defaultDisplay, language) {
        this.items = [];
        for (let model of models) {
            let item = new module(model, defaultDisplay, language);
            this.items.push(item);
        }
        this.elem = document.createElement('div');
        this.elem.classList.add(`${css}-table`);
        this.syncElement();
    }
    ;
    syncElement() {
        let newChilds = [];
        for (let item of this.items) {
            if (item.display)
                newChilds.push(item.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }
    set(id, state) {
        for (let item of this.items) {
            if (item.id == id) {
                if (item.display != state) {
                    item.display = state;
                    this.syncElement();
                }
            }
        }
    }
    queryObject() {
        let values = [];
        for (let item of this.items) {
            if (item.isActive())
                values.push(item.queryObject());
        }
        return values;
    }
}
