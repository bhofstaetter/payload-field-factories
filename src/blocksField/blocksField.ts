import type {BlocksField} from 'payload';

type BlockReferences = NonNullable<BlocksField['blockReferences']>;
type Overrides = Partial<Omit<BlocksField, 'type' | 'name' | 'blocks' | 'blockReferences'>>;

export function blocksField(name: string, blockReferences: BlockReferences, overrides: Overrides = {}): BlocksField {
    return {
        type: 'blocks',
        name,
        blocks: [],
        blockReferences,
        ...overrides,
    } as BlocksField;
}
