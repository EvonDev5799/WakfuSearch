class RequirementModule {
    id: number;
    display: boolean;
    range: RangeInput;
    params?: WParameters[];
    elem: HTMLDivElement;

    constructor(id: number, caption: string, display: boolean, params?: WParameters[]) {
        this.id = id;
        this.display = display;
        this.range = new RangeInput(caption);
        this.elem = this.range.elem;
        this.params = params;
    };

    queryObject(): WRequirement {
        return {
            id: this.id,
            range: this.range.queryObject(),
            params: this.params
        }
    };

    isActive() {
        return this.display;
    }
}
