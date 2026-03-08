import type {NamedTab, Tab, UnnamedTab} from 'payload';

type Fields = Tab['fields'];
type Label = UnnamedTab['label'];

type OverridesUnnamed = Partial<Omit<UnnamedTab, 'fields' | 'label'>>;
type OverridesNamed = Partial<Omit<NamedTab, 'name' | 'fields'>>;

export function tab(label: Label, fields: Fields, overrides?: OverridesUnnamed): UnnamedTab;
export function tab(name: string, label: Label, fields: Fields, overrides?: OverridesNamed): NamedTab;
export function tab(
    nameOrLabel: string | Label,
    labelOrFields: Label | Fields,
    fieldsOrOverrides?: Fields | OverridesUnnamed,
    overrides?: OverridesNamed,
): Tab {
    if (typeof nameOrLabel === 'string' && !Array.isArray(labelOrFields)) {
        return {
            name: nameOrLabel,
            label: labelOrFields as Label,
            fields: fieldsOrOverrides as Fields,
            ...overrides,
        } as Tab;
    }

    return {
        label: nameOrLabel as Label,
        fields: labelOrFields as Fields,
        ...(fieldsOrOverrides as OverridesUnnamed),
    } as Tab;
}
