import type {UIField} from 'payload';

type Components = NonNullable<UIField['admin']['components']>;
type Overrides = Partial<Omit<UIField, 'type' | 'name'>> & {admin?: Omit<UIField['admin'], 'components'>};

type Args = {
    components: Components;
    overrides?: Overrides;
};

function isArgs(argsOrComponents: Args | Components): argsOrComponents is Args {
    return 'components' in argsOrComponents;
}

export function uiField(name: string, argsOrComponents: Args | Components): UIField {
    const {components, overrides = {}} = isArgs(argsOrComponents) ? argsOrComponents : {components: argsOrComponents};

    const {admin, ...otherOverrides} = overrides;

    return {
        type: 'ui',
        name,
        admin: {
            components,
            ...admin,
        },
        ...otherOverrides,
    } as UIField;
}
