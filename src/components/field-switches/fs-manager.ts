class FSManagerModule {
    fstable: FSTableModule;
    elem: HTMLDivElement;
    constructor(actions: WActions, language: language) {

        this.fstable = new FSTableModule(actions, language);

        let search = document.createElement("input");
        search.type = "text";
        search.placeholder = `${TextHelper.searchPlaceholder[language]}...`
        search.addEventListener("input", () => {
            this.fstable.filter(search.value);
        });

        this.elem = document.createElement("div");
        this.elem.classList.add("fs-module");
        this.elem.appendChild(search);
        this.elem.appendChild(this.fstable.elem);
    }

    onRequirementClick(callback: (id: WExtendedId, positive: boolean) => any) {
        this.fstable.onRequirementClick(callback);
    }

    onWeightClick(callback: (id: WExtendedId, positive: boolean) => any) {
        this.fstable.onWeightClick(callback);
    }

    setRequirementState(id: WExtendedId, positive: boolean) {
        this.fstable.setRequirementState(id, positive);
    }

    setWeightState(id: WExtendedId, positive: boolean) {
        this.fstable.setWeightState(id, positive);
    }
}