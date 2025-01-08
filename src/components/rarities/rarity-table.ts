class RarityTableModule extends TableModule<RarityModule> {
    constructor(ids: number[]) {
        super(ids, RarityModule, "rarity", true, 'fr');
    };
}