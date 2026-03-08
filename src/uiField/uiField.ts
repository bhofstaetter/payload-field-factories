import type {UIField} from 'payload';

type Overrides = Partial<Omit<UIField, 'type' | 'name'>>;

export function uiField(name: string, overrides: Overrides = {}): UIField {
    return {
        type: 'ui',
        name,
        ...overrides,
    } as UIField;
}
