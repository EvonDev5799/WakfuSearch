class RangeInput {
    min: HTMLInputElement;
    max: HTMLInputElement;
    elem: HTMLDivElement;

    constructor(title: string) {
        let text = document.createElement("span");
        text.classList.add('title');
        text.innerHTML = title;

        let separator = document.createElement("span");
        separator.innerHTML = "-";

        this.min = document.createElement("input");
        this.min.type = "number";
        this.min.placeholder = "Min";

        this.max = document.createElement("input");
        this.max.type = "number";
        this.max.placeholder = "Max";

        this.elem = document.createElement("div");
        this.elem.classList.add('range-element');
        this.elem.appendChild(text);
        this.elem.appendChild(this.min);
        this.elem.appendChild(separator);
        this.elem.appendChild(this.max);
    }

    queryObject(): WRange {
        let range: WRange = {};
        if (this.min.value != "") range.min = Number(this.min.value);
        if (this.max.value != "") range.max = Number(this.max.value);
        return range;
    }
}