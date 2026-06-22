import {expect, it} from 'vitest';
import {blocksField} from '@/blocksField';

it('creates a blocks field from a references shortcut', () => {
    const result = blocksField('content', ['hero', 'cta']);

    expect(result).toEqual({type: 'blocks', name: 'content', blocks: [], blockReferences: ['hero', 'cta']});
});

it('creates a blocks field with overrides', () => {
    const result = blocksField('content', {blockReferences: ['hero'], overrides: {minRows: 1}});

    expect(result).toEqual({type: 'blocks', name: 'content', blocks: [], blockReferences: ['hero'], minRows: 1});
});
