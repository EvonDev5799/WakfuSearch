class SwitchButtonControl {
    text: any;
    elem: HTMLButtonElement;
    positive: boolean;

    constructor(text: string, positive = true) {
        this.text = text;

        this.elem = document.createElement("button");
        this.positive = positive;
        this.set(this.positive);
    };

    onClick(callback: (postive: boolean) => any) {
        this.elem.addEventListener("click", () => { callback(this.positive) });
    }

    set(positive: boolean) {
        this.positive = positive;
        this.elem.innerHTML = `${positive ? "+" : "-"} ${this.text}`;
    }
}