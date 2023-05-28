import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        gap?: number | undefined;
        color?: string | undefined;
        thickness?: number | undefined;
        direction?: "vertical" | "horizontal" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DivisorProps = typeof __propDef.props;
export type DivisorEvents = typeof __propDef.events;
export type DivisorSlots = typeof __propDef.slots;
export default class Divisor extends SvelteComponentTyped<DivisorProps, DivisorEvents, DivisorSlots> {
}
export {};
