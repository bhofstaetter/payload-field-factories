import type {TextareaField} from 'payload';

type Overrides = Partial<Omit<TextareaField, 'type' | 'name'>>;

export function textareaField(name: string, overrides: Overrides = {}): TextareaField {
    return {
        type: 'textarea',
        name,
        ...overrides,
    } as TextareaField;
}
