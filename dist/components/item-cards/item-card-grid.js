"use strict";
class ItemCardGrid {
    elem;
    size;
    cards;
    constructor(results, actions, size, language) {
        this.cards = [];
        for (let result of results) {
            this.cards.push(new ItemCard(result, actions, results[0].score, language));
        }
        this.size = size;
        this.elem = document.createElement('div');
        this.elem.classList.add('item-card-grid');
        let row = this.itemRow();
        for (let card of this.cards) {
            if (row.children.length >= size) {
                this.elem.appendChild(row);
                row = this.itemRow();
            }
            row.appendChild(card.elem);
        }
        while (row.children.length < size) {
            let placeholder = document.createElement('div');
            placeholder.classList.add('item-card');
            placeholder.classList.add('item-card-placeholder');
            row.appendChild(placeholder);
        }
        this.elem.appendChild(row);
    }
    itemRow() {
        let row = document.createElement('div');
        row.classList.add('item-row');
        return row;
    }
}
