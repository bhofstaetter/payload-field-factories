import type {CollapsibleField} from 'payload';

type Fields = CollapsibleField['fields'];
type Label = NonNullable<CollapsibleField['label']>;
type Overrides = Partial<Omit<CollapsibleField, 'type' | 'fields' | 'label'>>;

type Args = {
    fields: Fields;
    overrides?: Overrides;
};

export function collapsibleField(label: Label, argsOrFields: Args | Fields): CollapsibleField {
    const {fields, overrides = {}} = Array.isArray(argsOrFields) ? {fields: argsOrFields} : argsOrFields;

    return {
        type: 'collapsible',
        label,
        fields,
        ...overrides,
    } as CollapsibleField;
}
