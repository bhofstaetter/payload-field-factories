import {expect, it} from 'vitest';
import {tab} from '@/tab';
import {tabsField} from '@/tabsField';

it('creates a tabs field from a tabs shortcut', () => {
    const tabs = [tab('content', [{type: 'text' as const, name: 'title'}])];
    const result = tabsField(tabs);

    expect(result).toEqual({type: 'tabs', tabs});
});

it('creates a tabs field with overrides', () => {
    const tabs = [tab('content', [{type: 'text' as const, name: 'title'}])];
    const result = tabsField({tabs, overrides: {label: 'Sections'}});

    expect(result).toEqual({type: 'tabs', tabs, label: 'Sections'});
});
