import type { Components, JSX } from "../types/components";

interface RuxIconEvent extends Components.RuxIconEvent, HTMLElement {}
export const RuxIconEvent: {
  prototype: RuxIconEvent;
  new (): RuxIconEvent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
