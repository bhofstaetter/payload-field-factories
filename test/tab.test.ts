import {describe, expect, it} from 'vitest';
import {tab} from '@/tab';

describe('tab', () => {
    it('creates an unnamed tab with string label', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab('Content', fields);

        expect(result).toEqual({label: 'Content', fields});
    });

    it('creates an unnamed tab with localized label', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab({en: 'Content', de: 'Inhalt'}, fields);

        expect(result).toEqual({label: {en: 'Content', de: 'Inhalt'}, fields});
    });

    it('creates an unnamed tab with overrides', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab('Content', fields, {id: 'content-tab'});

        expect(result).toEqual({label: 'Content', fields, id: 'content-tab'});
    });

    it('creates a named tab', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab('settings', 'Settings', fields);

        expect(result).toEqual({name: 'settings', label: 'Settings', fields});
    });

    it('creates a named tab with localized label', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab('settings', {en: 'Settings', de: 'Einstellungen'}, fields);

        expect(result).toEqual({name: 'settings', label: {en: 'Settings', de: 'Einstellungen'}, fields});
    });

    it('creates a named tab with overrides', () => {
        const fields = [{type: 'text' as const, name: 'title'}];
        const result = tab('settings', 'Settings', fields, {id: 'settings-tab'});

        expect(result).toEqual({name: 'settings', label: 'Settings', fields, id: 'settings-tab'});
    });
});
