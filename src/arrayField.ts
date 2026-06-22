import type {ArrayField} from 'payload';

type Overrides = Partial<Omit<ArrayField, 'type' | 'name' | 'fields'>>;
type Fields = ArrayField['fields'];

type Args = {
    fields: Fields;
    overrides?: Overrides;
};

export function arrayField(name: string, argsOrFields: Args | Fields): ArrayField {
    const {fields, overrides = {}} = Array.isArray(argsOrFields) ? {fields: argsOrFields} : argsOrFields;

    return {
        type: 'array',
        name,
        fields,
        ...overrides,
    } as ArrayField;
}
