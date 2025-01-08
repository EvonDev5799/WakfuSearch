function GetLevel(itemData: WItemData): number { return itemData.definition.item.level; }
function GetItemTypeId(itemData: WItemData): number { return itemData.definition.item.baseParameters.itemTypeId; }
function GetRarity(itemData: WItemData): number { return itemData.definition.item.baseParameters.rarity; }
function GetEquipEffects(itemData: WItemData): WEffectNode[] { return itemData.definition.equipEffects; }
function GetId(itemData: WItemData): number { return itemData.definition.item.id; }
function GetGfx(itemData: WItemData): number { return itemData.definition.item.graphicParameters.gfxId }

function GetParam(effect: WEffectNode, index: number): number { return effect.effect.definition.params[index]; }
function GetActionId(effect: WEffectNode): number { return effect.effect.definition.actionId }
function GetValue(effect: WEffectNode): number { return GetParam(effect, 0); }