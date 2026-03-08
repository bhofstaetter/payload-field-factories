import type {SelectField} from 'payload';

type SelectFieldSingle = Extract<SelectField, {hasMany?: false | undefined}>;
type SelectFieldMany = Extract<SelectField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<SelectFieldSingle, 'type' | 'name' | 'options'>>;
type OverridesMany = Partial<Omit<SelectFieldMany, 'type' | 'name' | 'options' | 'hasMany'>> & {hasMany: true};

type Options = SelectField['options'];

export function selectField(name: string, options: Options, overrides: OverridesMany): SelectFieldMany;
export function selectField(name: string, options: Options, overrides?: OverridesSingle): SelectFieldSingle;
export function selectField(
    name: string,
    options: Options,
    overrides: OverridesMany | OverridesSingle = {},
): SelectField {
    return {
        type: 'select',
        name,
        options,
        ...overrides,
    } as SelectField;
}
