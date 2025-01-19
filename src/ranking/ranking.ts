function inRange(value: number, range: WRange): boolean {
    if (range.min != undefined && value < range.min) return false;
    if (range.max != undefined && value > range.max) return false;
    return true;
}

function match_params(effect: WEffectNode, params?: WParameters[]): boolean {
    if (params == undefined) return true;
    for (let param of params) {
        if (!inRange(GetParam(effect, param.index), param.range)) return false;
    }
    return true
}

function effect_by_id(effects: WEffectNode[], id: number, params?: WParameters[]): WEffectNode | undefined {
    for (let effect of effects) {
        if (GetActionId(effect) == id && match_params(effect, params)) return effect;
    }
}


function match_level(item: WItemData, query: WQuery): boolean {
    return inRange(GetLevel(item), query.level);
}

function match_type(item: WItemData, query: WQuery): boolean {
    return query.types.includes(GetItemTypeId(item));
}

function matck_rarity(item: WItemData, query: WQuery): boolean {
    return query.rarities.includes(GetRarity(item));
}


function match_requirements(item: WItemData, query: WQuery): boolean {
    for (let requirement of query.requirements) {
        let effect = effect_by_id(GetEquipEffects(item), requirement.id, requirement.params);
        if (effect === undefined || !inRange(GetValue(effect), requirement.range)) return false;
    }
    return true;
}

function match_all(item: WItemData, query: WQuery): boolean {
    return (
        match_level(item, query)
        && matck_rarity(item, query)
        && match_type(item, query)
        && match_requirements(item, query)
    );
}

function compute_score(item: WItemData, query: WQuery): number {
    let score = 0;
    for (let weight of query.weights) {
        let effect = effect_by_id(GetEquipEffects(item), weight.id, weight.params)
        if (effect !== undefined) score += weight.value * GetValue(effect);
    }

    return score
}


function process_request(items: WItemData[], query: WQuery): WResults {
    let result: WResults = [];
    for (let item of items) {
        if (match_all(item, query)) result.push({ score: compute_score(item, query), item: item });
    }
    result.sort((a, b) => b.score - a.score);
    return result;
}