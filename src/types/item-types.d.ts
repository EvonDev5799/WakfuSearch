type WItemTypes = WItemType[];

type WItemType = {
    definition: WItemTypeDefinition
    title?: WTextTemplate
};

type WItemTypeDefinition = {
    id: number
    parentId?: number
    equipmentPositions: string[]
    equipmentDisabledPositions: string[]
    isRecyclable: boolean
    isVisibleInAnimation: boolean
};
