import type {RadioField} from 'payload';

type Overrides = Partial<Omit<RadioField, 'type' | 'name' | 'options'>>;
type Options = RadioField['options'];

export function radioField(name: string, options: Options, overrides: Overrides = {}): RadioField {
    return {
        type: 'radio',
        name,
        options,
        ...overrides,
    } as RadioField;
}
