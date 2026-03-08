import type {RichTextField} from 'payload';

type Overrides = Partial<Omit<RichTextField, 'type' | 'name'>>;

export function richTextField(name: string, overrides: Overrides = {}): RichTextField {
    return {
        type: 'richText',
        name,
        ...overrides,
    } as RichTextField;
}
