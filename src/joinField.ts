import type {JoinField} from 'payload';

type Overrides = Partial<Omit<JoinField, 'type' | 'name' | 'collection' | 'on'>>;
type Collection = JoinField['collection'];
type On = JoinField['on'];

export function joinField(name: string, collection: Collection, on: On, overrides: Overrides = {}): JoinField {
    return {
        type: 'join',
        name,
        collection,
        on,
        ...overrides,
    } as JoinField;
}
