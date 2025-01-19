class WeightModule {
    id: number;
    display: boolean;
    value: ValueInput;
    params?: WParameters[];
    elem: HTMLDivElement;

    constructor(id: number, caption: string, display: boolean, language: language, params?: WParameters[]) {
        this.id = id;
        this.display = display;
        this.value = new ValueInput(caption, language, 1);
        this.elem = this.value.elem;
        this.params = params;
    };

    queryObject(): WWeight {
        return {
            id: this.id,
            value: this.value.queryObject(),
            params: this.params
        };
    };

    isActive() {
        return this.display;
    }
}