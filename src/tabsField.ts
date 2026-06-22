import type {Tab, TabsField} from 'payload';

type Tabs = Tab[];
type Overrides = Partial<Omit<TabsField, 'type' | 'tabs'>>;

type Args = {
    tabs: Tabs;
    overrides?: Overrides;
};

export function tabsField(argsOrTabs: Args | Tabs): TabsField {
    const {tabs, overrides = {}} = Array.isArray(argsOrTabs) ? {tabs: argsOrTabs} : argsOrTabs;

    return {
        type: 'tabs',
        tabs,
        ...overrides,
    } as TabsField;
}
