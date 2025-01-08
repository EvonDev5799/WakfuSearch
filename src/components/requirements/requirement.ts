class RequirementModule implements TableItem {
    id: number;
    display: boolean;
    range: RangeInput;
    elem: HTMLDivElement;

    constructor(action: WAction, display: boolean, language: language) {
        this.id = action.definition.id;
        this.display = display;
        this.range = new RangeInput(defaultParse(action.description[language]));
        this.elem = this.range.elem;
    };

    queryObject(): WRequirement {
        return {
            id: this.id,
            range: this.range.queryObject()
        }
    };

    isActive() {
        return this.display;
    }
}
