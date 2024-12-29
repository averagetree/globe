import type { Components, JSX } from "../types/components";

interface RuxIconReplay extends Components.RuxIconReplay, HTMLElement {}
export const RuxIconReplay: {
  prototype: RuxIconReplay;
  new (): RuxIconReplay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
