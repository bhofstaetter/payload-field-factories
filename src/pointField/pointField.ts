import type {PointField} from 'payload';

type Overrides = Partial<Omit<PointField, 'type' | 'name'>>;

export function pointField(name: string, overrides: Overrides = {}): PointField {
    return {
        type: 'point',
        name,
        ...overrides,
    } as PointField;
}
