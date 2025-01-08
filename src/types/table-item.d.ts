interface TableItem {
    display: boolean;
    id: number;
    elem: HTMLElement;

    queryObject(): any;
    isActive(): boolean;
}

type TableItemConstructor<Type> = (new (model: any, display: boolean, language: language) => Type);