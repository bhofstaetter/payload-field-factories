import type {TextField} from 'payload';

type TextFieldSingle = Extract<TextField, {hasMany?: false | undefined}>;
type TextFieldMany = Extract<TextField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<TextFieldSingle, 'type' | 'name'>>;
type OverridesMany = Partial<Omit<TextFieldMany, 'type' | 'name' | 'hasMany'>> & {hasMany: true};

export function textField(name: string, overrides: OverridesMany): TextFieldMany;
export function textField(name: string, overrides?: OverridesSingle): TextFieldSingle;
export function textField(name: string, overrides: OverridesMany | OverridesSingle = {}): TextField {
    return {
        type: 'text',
        name,
        ...overrides,
    } as TextField;
}
