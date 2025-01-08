type WRange = {
    min?: number;
    max?: number;
};

type WRequirement = {
    id: number;
    range: WRange;
};

type WParameters = {
    index: number;
    range: WRange;
};


type WWeight = {
    id: number;
    value: number;
    params?: WParameters[];
};

type WQuery = {
    level: WRange;
    rarities: number[];
    types: number[];
    requirements: WRequirement[];
    weights: WWeight[];
    blacklist?: any[];
};