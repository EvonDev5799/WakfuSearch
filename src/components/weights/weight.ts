class WeightModule implements TableItem {
    id: number;
    display: boolean;
    value: ValueInput;
    elem: HTMLDivElement;

    constructor(action: WAction, display: boolean, language: language) {
        this.id = action.definition.id;
        this.display = display;
        this.value = new ValueInput(defaultParse(action.description[language]), language, 1);
        this.elem = this.value.elem;
    };
    queryObject(): WWeight {
        return {
            id: this.id,
            value: this.value.queryObject()
        }
    };

    isActive() {
        return this.display;
    }
}