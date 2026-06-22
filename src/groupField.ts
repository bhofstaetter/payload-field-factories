import type {GroupField, NamedGroupField, UnnamedGroupField} from 'payload';

type OverridesUnnamed = Partial<Omit<UnnamedGroupField, 'type' | 'fields'>>;
type OverridesNamed = Partial<Omit<NamedGroupField, 'type' | 'name' | 'fields'>>;

type Fields = GroupField['fields'];

type ArgsNamed = {
    fields: Fields;
    overrides?: OverridesNamed;
};

type ArgsUnnamed = {
    fields: Fields;
    overrides?: OverridesUnnamed;
};

export function groupField(argsOrFields: ArgsUnnamed | Fields): UnnamedGroupField;
export function groupField(name: string, argsOrFields: ArgsNamed | Fields): NamedGroupField;
export function groupField(
    nameOrArgsOrFields: string | ArgsUnnamed | Fields,
    argsOrFields?: ArgsNamed | Fields,
): GroupField {
    if (typeof nameOrArgsOrFields === 'string') {
        const {fields, overrides = {}} = Array.isArray(argsOrFields) ? {fields: argsOrFields} : (argsOrFields ?? {});

        return {
            type: 'group',
            name: nameOrArgsOrFields,
            fields,
            ...overrides,
        } as GroupField;
    }

    const {fields, overrides = {}} = Array.isArray(nameOrArgsOrFields)
        ? {fields: nameOrArgsOrFields}
        : nameOrArgsOrFields;

    return {
        type: 'group',
        fields,
        ...overrides,
    } as GroupField;
}
