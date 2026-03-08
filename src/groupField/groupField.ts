import type {GroupField, NamedGroupField, UnnamedGroupField} from 'payload';

type OverridesUnnamed = Partial<Omit<UnnamedGroupField, 'type' | 'fields'>>;
type OverridesNamed = Partial<Omit<NamedGroupField, 'type' | 'name' | 'fields'>>;

type Fields = GroupField['fields'];

export function groupField(fields: Fields, overrides?: OverridesUnnamed): UnnamedGroupField;
export function groupField(name: string, fields: Fields, overrides?: OverridesNamed): NamedGroupField;
export function groupField(nameOrFields: string | Fields, fieldsOrOverrides?: Fields | OverridesUnnamed, overrides?: OverridesNamed): GroupField {
    if (typeof nameOrFields === 'string') {
        return {
            type: 'group',
            name: nameOrFields,
            fields: fieldsOrOverrides as Fields,
            ...overrides,
        } as GroupField;
    }

    return {
        type: 'group',
        fields: nameOrFields,
        ...(fieldsOrOverrides as OverridesUnnamed),
    } as GroupField;
}