import type {RowField} from 'payload';

type Fields = RowField['fields'];
type Overrides = Partial<Omit<RowField, 'type' | 'fields'>>;

type Args = {
    fields: Fields;
    overrides?: Overrides;
};

export function rowField(argsOrFields: Args | Fields): RowField {
    const {fields, overrides = {}} = Array.isArray(argsOrFields) ? {fields: argsOrFields} : argsOrFields;

    return {
        type: 'row',
        fields,
        ...overrides,
    };
}
