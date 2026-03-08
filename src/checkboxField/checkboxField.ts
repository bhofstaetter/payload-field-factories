import type {CheckboxField} from 'payload';

type Overrides = Partial<Omit<CheckboxField, 'type' | 'name'>>;

export function checkboxField(name: string, overrides: Overrides = {}): CheckboxField {
    return {
        type: 'checkbox',
        name,
        ...overrides,
    } as CheckboxField;
}
