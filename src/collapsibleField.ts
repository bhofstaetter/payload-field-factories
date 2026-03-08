import type {CollapsibleField} from 'payload';

type Fields = CollapsibleField['fields'];
type Label = NonNullable<CollapsibleField['label']>;
type Overrides = Partial<Omit<CollapsibleField, 'type' | 'fields' | 'label'>>;

export function collapsibleField(label: Label, fields: Fields, overrides: Overrides = {}): CollapsibleField {
    return {
        type: 'collapsible',
        label,
        fields,
        ...overrides,
    } as CollapsibleField;
}
