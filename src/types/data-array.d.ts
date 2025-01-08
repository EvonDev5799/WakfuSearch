type DataArray = WItemData[]


type WItemData = {
    definition: WItemDefinition;
    title: WTextTemplate;
    description?: WTextTemplate;
};

type WItemDefinition = {
    item: WItem;
    useEffects: WEffectNode[];
    useCriticalEffects: WEffect[];
    equipEffects: WEffectNode[];
};

type WItem = {
    id: number;
    level: number;
    baseParameters: WBaseParameters;
    useParameters: WUseParameters;
    graphicParameters: WGraphicParameters;
    properties: number[];
    sublimationParameters?: WSublimationParameters;
    shardsParameters?: WShardsParameters;
};

type WBaseParameters = {
    itemTypeId: number;
    itemSetId: number;
    rarity: number;
    bindType: number;
    minimumShardSlotNumber: number;
    maximumShardSlotNumber: number;
};

type WUseParameters = {
    useCostAp: number;
    useCostMp: number;
    useCostWp: number;
    useRangeMin: number;
    useRangeMax: number;
    useTestFreeCell: boolean;
    useTestLos: boolean;
    useTestOnlyLine: boolean;
    useTestNoBorderCell: boolean;
    useWorldTarget: number;
};

type WGraphicParameters = {
    gfxId: number;
    femaleGfxId: number;
};

type WSublimationParameters = {
    slotColorPattern: number[];
    isEpic: boolean;
    isRelic: boolean;
};

type WShardsParameters = {
    color: number;
    doubleBonusPosition: number[];
    shardLevelingCurve: number[];
    shardLevelRequirement: number[];
}

type WEffectNode = {
    effect: WEffect;
    subEffects?: WEffectNode[];
};

type WEffect = {
    definition: WEffectDefinition;
    description?: WTextTemplate;
};

type WEffectDefinition = {
    id: number;
    actionId: number;
    areaShape: number;
    areaSize: number[];
    params: number[];
};