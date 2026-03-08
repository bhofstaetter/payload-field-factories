import type {UIField} from 'payload';

type Components = UIField['admin']['components'];
type Overrides = Partial<Omit<UIField, 'type' | 'name'>> & {admin?: Omit<UIField['admin'], 'components'>};

export function uiField(name: string, components: Components, overrides: Overrides = {}): UIField {
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
