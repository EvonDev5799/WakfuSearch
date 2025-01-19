"use strict";
function GetLevel(itemData) { return itemData.definition.item.level; }
function GetItemTypeId(itemData) { return itemData.definition.item.baseParameters.itemTypeId; }
function GetRarity(itemData) { return itemData.definition.item.baseParameters.rarity; }
function GetEquipEffects(itemData) { return itemData.definition.equipEffects; }
function GetId(itemData) { return itemData.definition.item.id; }
function GetGfx(itemData) { return itemData.definition.item.graphicParameters.gfxId; }
function GetParam(effect, index) { return effect.effect.definition.params[index]; }
function GetActionId(effect) { return effect.effect.definition.actionId; }
function GetValue(effect) { return GetParam(effect, 0); }
function idMatch(id1, id2) { return (id1.id == id2.id) && (id1.subId == id2.subId); }
