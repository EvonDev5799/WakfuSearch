class WeightTableModule extends TableModule<WeightModule> {
    constructor(actions: WActions, language: language) {
        super(actions, WeightModule, "weight", false, language);
    };
}