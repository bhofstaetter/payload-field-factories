import type {Tab, TabsField} from 'payload';

type Tabs = Tab[];
type Overrides = Partial<Omit<TabsField, 'type' | 'tabs'>>;

export function tabsField(tabs: Tabs, overrides: Overrides = {}): TabsField {
    return {
        type: 'tabs',
        tabs,
        ...overrides,
    } as TabsField;
}
