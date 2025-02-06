class WeightTableModule {
    weights: Map<WExtendedId, WeightModule>;
    elem: HTMLDivElement;

    constructor(actions: WActions, language: language) {
        this.weights = new Map<WExtendedId, WeightModule>();
        for (let action of actions) {
            if ((action.definition.id == 1068) || (action.definition.id == 1069)) {
                for (let i = 1; i <= 3; i++) {
                    let wm = new WeightModule(action.definition.id, parseGeneric(action.description[language], ["", 0, i]), false, language, [{ index: 2, range: { min: i, max: i } }]);
                    this.weights.set({ id: action.definition.id, subId: i }, wm);
                }
            } else {
                let wm = new WeightModule(action.definition.id, defaultParse(action.description[language]), false, language);
                this.weights.set({ id: action.definition.id }, wm);
            }
        }
        this.elem = document.createElement('div');
        this.elem.classList.add(`weight-table`);
        this.syncElement();
    }

    syncElement() {
        let newChilds: HTMLElement[] = [];
        for (let weight of this.weights.values()) {
            if (weight.display)
                newChilds.push(weight.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }

    set(id: WExtendedId, state: boolean) {
        for (let [key, value] of this.weights) {
            if (idMatch(id, key)) {
                value.display = state;
                this.syncElement();
                break;
            }
        }
    }

    queryObject() {
        let values = [];
        for (let weight of this.weights.values()) {
            if (weight.isActive()) values.push(weight.queryObject());
        }
        return values;
    }
}