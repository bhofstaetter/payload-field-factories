import type {SelectField} from 'payload';

type SelectFieldSingle = Extract<SelectField, {hasMany?: false | undefined}>;
type SelectFieldMany = Extract<SelectField, {hasMany: true}>;

type OverridesSingle = Partial<Omit<SelectFieldSingle, 'type' | 'name' | 'options'>>;
type OverridesMany = Partial<Omit<SelectFieldMany, 'type' | 'name' | 'options' | 'hasMany'>> & {hasMany: true};

type Options = SelectField['options'];

type ArgsMany = {
    options: Options;
    overrides: OverridesMany;
};

type ArgsSingle = {
    options: Options;
    overrides?: OverridesSingle;
};

export function selectField(name: string, argsSingleOrOptions: ArgsSingle | Options): SelectFieldSingle;
export function selectField(name: string, argsManyOrOptions: ArgsMany | Options): SelectFieldMany;
export function selectField(name: string, argsOrOptions: ArgsMany | ArgsSingle | Options): SelectField {
    const {options, overrides = {}} = Array.isArray(argsOrOptions) ? {options: argsOrOptions} : argsOrOptions;

    return {
        type: 'select',
        name,
        options,
        ...overrides,
    } as SelectField;
}
