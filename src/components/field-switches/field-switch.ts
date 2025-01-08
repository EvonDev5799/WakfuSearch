class FieldSwitchModule {
    id: any;
    requirementButton: any;
    weightButton: any;
    description: string;
    elem: HTMLDivElement;

    constructor(action: WAction, language: language) {

        this.id = action.definition.id;
        this.requirementButton = new SwitchButtonControl(TextHelper.requirement[language]);
        this.weightButton = new SwitchButtonControl(TextHelper.weight[language]);

        this.description = defaultParse(action.description[language]);
        let span = document.createElement('span');
        span.innerHTML = this.description;

        this.elem = document.createElement('div');
        this.elem.appendChild(span);
        this.elem.appendChild(this.requirementButton.elem);
        this.elem.appendChild(this.weightButton.elem);
    }

    onRequirementClick(callback: (id: number, positive: boolean) => any) {
        this.requirementButton.onClick((positive: boolean) => { callback(this.id, positive) });
    }

    onWeightClick(callback: (id: number, positive: boolean) => any) {
        this.weightButton.onClick((positive: boolean) => { callback(this.id, positive) });
    }

    setRequirementState(positive: boolean) {
        this.requirementButton.set(positive);
    }

    setWeightState(positive: boolean) {
        this.weightButton.set(positive);
    }
}