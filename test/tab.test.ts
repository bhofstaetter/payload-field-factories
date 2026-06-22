import {expect, it} from 'vitest';
import {tab} from '@/tab';

it('creates a named tab', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = tab('settings', fields);

    expect(result).toEqual({name: 'settings', fields});
});

it('creates a named tab with overrides', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = tab('settings', {fields, overrides: {label: 'Settings'}});

    expect(result).toEqual({name: 'settings', fields, label: 'Settings'});
});

it('creates an unnamed tab with localized label', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = tab({en: 'Content', de: 'Inhalt'}, fields);

    expect(result).toEqual({label: {en: 'Content', de: 'Inhalt'}, fields});
});

it('creates an unnamed tab with overrides', () => {
    const fields = [{type: 'text' as const, name: 'title'}];
    const result = tab({en: 'Content', de: 'Inhalt'}, {fields, overrides: {id: 'content-tab'}});

    expect(result).toEqual({label: {en: 'Content', de: 'Inhalt'}, fields, id: 'content-tab'});
});
