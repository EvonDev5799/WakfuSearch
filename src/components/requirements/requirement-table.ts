class RequirementTableModule extends TableModule<RequirementModule> {
    constructor(actions: WActions, language: language) {
        super(actions, RequirementModule, "requirement", false, language);
    };
}