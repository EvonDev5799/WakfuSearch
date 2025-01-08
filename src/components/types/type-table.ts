class TypeTableModule extends TableModule<TypeModule> {
    constructor(types: WItemTypes, language: language) {
        super(types, TypeModule, "item-type", true, language);
    };
}