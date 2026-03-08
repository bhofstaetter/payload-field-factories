import type {ArrayField} from 'payload';

type Overrides = Partial<Omit<ArrayField, 'type' | 'name' | 'fields'>>;
type Fields = ArrayField['fields'];

export function arrayField(name: string, fields: Fields, overrides: Overrides = {}): ArrayField {
    return {
        type: 'array',
        name,
        fields,
        ...overrides,
    } as ArrayField;
}
