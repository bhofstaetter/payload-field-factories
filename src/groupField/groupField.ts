import type {GroupField} from 'payload';

type UnnamedGroupField = Extract<GroupField, {name?: false | undefined}>;
type NamedGroupField = Extract<GroupField, {name: string}>;

type OverridesUnnamed = Partial<Omit<UnnamedGroupField, 'type' | 'fields'>>;
type OverridesNamed = Partial<Omit<NamedGroupField, 'type' | 'fields'>>;

type Fields = GroupField['fields'];

export function groupField(fields: Fields, overrides?: OverridesUnnamed): UnnamedGroupField;
export function groupField(fields: Fields, overrides?: OverridesNamed): NamedGroupField;
export function groupField(fields: Fields, overrides: OverridesUnnamed | OverridesNamed = {}): GroupField {
    return {
        type: 'group',
        fields,
        ...overrides,
    } as GroupField;
}
