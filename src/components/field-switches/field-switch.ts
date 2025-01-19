class FieldSwitchModule {
    id: WExtendedId;
    requirementButton: SwitchButtonControl;
    weightButton: SwitchButtonControl;
    description: string;
    elem: HTMLDivElement;

    constructor(id: WExtendedId, caption: string, language: language) {

        this.id = id;
        this.requirementButton = new SwitchButtonControl(TextHelper.requirement[language]);
        this.weightButton = new SwitchButtonControl(TextHelper.weight[language]);

        this.description = caption;
        let span = document.createElement('span');
        span.innerHTML = this.description;

        this.elem = document.createElement('div');
        this.elem.appendChild(span);
        this.elem.appendChild(this.requirementButton.elem);
        this.elem.appendChild(this.weightButton.elem);
    }

    onRequirementClick(callback: (id: WExtendedId, positive: boolean) => any) {
        this.requirementButton.onClick((positive: boolean) => { callback(this.id, positive) });
    }

    onWeightClick(callback: (id: WExtendedId, positive: boolean) => any) {
        this.weightButton.onClick((positive: boolean) => { callback(this.id, positive) });
    }

    setRequirementState(positive: boolean) {
        this.requirementButton.set(positive);
    }

    setWeightState(positive: boolean) {
        this.weightButton.set(positive);
    }
}