type WActions = WAction[];

type WAction = {
    definition: WDefinition;
    description: WDescription;
};

type WDefinition = {
    id: number;
    effect: string;
};

type WDescription = {
    fr: string;
    en: string;
    es: string;
    pt: string;
}