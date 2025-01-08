function match(tested: string, template: string) {
    let filter = template.toUpperCase();
    return tested.toUpperCase().indexOf(filter) > -1;
}

class FSTableModule {
    switches: FieldSwitchModule[];
    elem: HTMLDivElement;

    constructor(actions: WActions, language: language) {
        this.switches = [];
        this.elem = document.createElement('div');

        for (let action of actions) {
            let swtch = new FieldSwitchModule(action, language);
            this.switches.push(swtch);
        }
        this.filter("");
    }

    onRequirementClick(callback: (id: number, positive: boolean) => any) {
        for (let swtch of this.switches) {
            swtch.onRequirementClick(callback);
        }
    }

    onWeightClick(callback: (id: number, positive: boolean) => any) {
        for (let swtch of this.switches) {
            swtch.onWeightClick(callback);
        }
    }

    setRequirementState(id: number, positive: boolean) {
        for (let swtch of this.switches) {
            if (swtch.id == id) {
                swtch.setRequirementState(positive);
                break;
            }
        }
    }

    setWeightState(id: number, positive: boolean) {
        for (let swtch of this.switches) {
            if (swtch.id == id) {
                swtch.setWeightState(positive);
                break;
            }
        }
    }

    filter(template: string) {
        let newChilds: HTMLDivElement[] = []
        for (let swtch of this.switches) {
            if (match(swtch.description, template)) newChilds.push(swtch.elem);
        }
        this.elem.replaceChildren(...newChilds);
    }
}