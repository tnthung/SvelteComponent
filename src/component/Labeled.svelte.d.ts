import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        gap?: number | undefined;
        label?: string | undefined;
        position?: ("top" | "left" | "right" | "bottom" | "hidden") | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LabeledProps = typeof __propDef.props;
export type LabeledEvents = typeof __propDef.events;
export type LabeledSlots = typeof __propDef.slots;
export default class Labeled extends SvelteComponentTyped<LabeledProps, LabeledEvents, LabeledSlots> {
}
export {};
