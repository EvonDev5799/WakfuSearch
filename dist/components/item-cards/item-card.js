"use strict";
function web_url(item) {
    return `https://www.wakfu.com/fr/mmorpg/encyclopedie/divers/${GetId(item)}`;
}
function image_url(item) {
    return `https://static.ankama.com/wakfu/portal/game/item/115/${GetGfx(item)}.png`;
}
class ItemCard {
    elem;
    constructor(data, actions, max, language) {
        this.elem = document.createElement('div');
        this.elem.classList.add("item-card");
        this.setScoreData(data.score, max);
        this.setTitle(data.item, language);
        this.setImage(data.item);
        this.addField(TextHelper.level[language], data.item.definition.item.level);
        this.addField(TextHelper.rarity[language], data.item.definition.item.baseParameters.rarity);
        for (let effect of data.item.definition.equipEffects) {
            let id = effect.effect.definition.actionId;
            for (let action of actions) {
                if (action.definition.id == id) {
                    this.addEffect(action, effect.effect.definition.params, language);
                }
            }
        }
    }
    setScoreData(score, max) {
        let scoreDataDiv = document.createElement('div');
        scoreDataDiv.innerHTML = `Score: ${score}/${max} (${Math.floor(score * 100 / max)}%)`;
        this.elem.appendChild(scoreDataDiv);
    }
    setTitle(item, language) {
        let titleDiv = document.createElement('div');
        let title = document.createElement('a');
        title.innerHTML = item.title[language];
        title.setAttribute('href', web_url(item));
        titleDiv.appendChild(title);
        this.elem.appendChild(titleDiv);
    }
    setImage(item) {
        let image = document.createElement('img');
        image.setAttribute('src', image_url(item));
        this.elem.appendChild(image);
    }
    addField(fieldname, value) {
        let element = document.createElement('div');
        element.innerHTML = `${fieldname}: ${value}`;
        this.elem.appendChild(element);
    }
    addEffect(action, params, language) {
        let element = document.createElement('div');
        let text = action.description[language];
        element.innerHTML = parseGeneric(text, params);
        this.elem.appendChild(element);
    }
}
