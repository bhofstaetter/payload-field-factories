import type {NamedTab, Tab, UnnamedTab} from 'payload';

type Fields = Tab['fields'];
type Label = UnnamedTab['label'];
type UnnamedLabel = Exclude<Label, string>;

type OverridesNamed = Partial<Omit<NamedTab, 'name' | 'fields'>>;
type OverridesUnnamed = Partial<Omit<UnnamedTab, 'fields' | 'label'>>;

type ArgsNamed = {
    fields: Fields;
    overrides?: OverridesNamed;
};

type ArgsUnnamed = {
    fields: Fields;
    overrides?: OverridesUnnamed;
};

export function tab<T extends string | UnnamedLabel>(
    nameOrLabel: T,
    argsOrFields: (T extends string ? ArgsNamed : ArgsUnnamed) | Fields,
): T extends string ? NamedTab : UnnamedTab;
export function tab(nameOrLabel: string | UnnamedLabel, argsOrFields: ArgsNamed | ArgsUnnamed | Fields): Tab {
    const {fields, overrides = {}} = Array.isArray(argsOrFields) ? {fields: argsOrFields} : argsOrFields;

    if (typeof nameOrLabel === 'string') {
        return {
            name: nameOrLabel,
            fields,
            ...overrides,
        } as Tab;
    }

    return {
        label: nameOrLabel,
        fields,
        ...overrides,
    } as Tab;
}
