"use strict";
class RequirementTableModule extends TableModule {
    constructor(actions, language) {
        super(actions, RequirementModule, "requirement", false, language);
    }
    ;
}
