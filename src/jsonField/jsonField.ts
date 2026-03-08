import type {JSONField} from 'payload';

type Overrides = Partial<Omit<JSONField, 'type' | 'name'>>;

export function jsonField(name: string, overrides: Overrides = {}): JSONField {
    return {
        type: 'json',
        name,
        ...overrides,
    } as JSONField;
}
