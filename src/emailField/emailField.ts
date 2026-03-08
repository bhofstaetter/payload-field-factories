import type {EmailField} from 'payload';

type EmailFieldSingle = Extract<EmailField, {hasMany?: false | undefined}>;
type EmailFieldMany = Extract<EmailField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<EmailFieldSingle, 'type' | 'name'>>;
type OverridesMany = Partial<Omit<EmailFieldMany, 'type' | 'name' | 'hasMany'>> & {hasMany: true};

export function emailField(name: string, overrides: OverridesMany): EmailFieldMany;
export function emailField(name: string, overrides?: OverridesSingle): EmailFieldSingle;
export function emailField(name: string, overrides: OverridesMany | OverridesSingle = {}): EmailField {
    return {
        type: 'email',
        name,
        ...overrides,
    } as EmailField;
}
