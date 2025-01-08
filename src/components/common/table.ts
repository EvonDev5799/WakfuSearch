class TableModule<Type extends TableItem> {
    items: Type[];
    elem: HTMLDivElement;
    constructor(models: any[], module: TableItemConstructor<Type>, css: string, defaultDisplay: boolean, language: language) {
        this.items = [];
        for (let model of models) {
            let item = new module(model, defaultDisplay, language);
            this.items.push(item);
        }
        this.elem = document.createElement('div');
        this.elem.classList.add(`${css}-table`);
        this.syncElement();
    };

    syncElement() {
        let newChilds: HTMLElement[] = [];
        for (let item of this.items) {
            if (item.display)
                newChilds.push(item.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }

    set(id: number, state: boolean) {
        for (let item of this.items) {
            if (item.id == id) {
                if (item.display != state) {
                    item.display = state;
                    this.syncElement();
                }
            }
        }
    }

    queryObject(): ReturnType<Type["queryObject"]>[] {
        let values = [];
        for (let item of this.items) {
            if (item.isActive()) values.push(item.queryObject());
        }
        return values;
    }
}