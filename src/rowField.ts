import type {RowField} from 'payload';

type Fields = RowField['fields'];
type Overrides = Omit<RowField, 'type' | 'fields'>;

export function rowField(fields: Fields, overrides: Overrides = {}): RowField {
    return {
        type: 'row',
        fields,
        ...overrides,
    };
}
