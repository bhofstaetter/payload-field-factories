import type {CodeField} from 'payload';

type Overrides = Partial<Omit<CodeField, 'type' | 'name'>>;

export function codeField(name: string, overrides: Overrides = {}): CodeField {
    return {
        type: 'code',
        name,
        ...overrides,
    } as CodeField;
}
