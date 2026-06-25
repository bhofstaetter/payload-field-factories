import type {TextField} from 'payload';

type TextFieldSingle = Extract<TextField, {hasMany?: false | undefined}>;
type TextFieldMany = Extract<TextField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<TextFieldSingle, 'type' | 'name'>>;
type OverridesMany = Partial<Omit<TextFieldMany, 'type' | 'name'>>;
type Overrides = OverridesSingle | OverridesMany;

export function textField(name: string, overrides: OverridesMany & {hasMany: true}): TextFieldMany;
export function textField(name: string, overrides?: OverridesSingle): TextFieldSingle;
export function textField(name: string, overrides: Overrides): TextField;
export function textField(name: string, overrides: Overrides = {}): TextField {
    return {
        type: 'text',
        name,
        ...overrides,
    } as TextField;
}
