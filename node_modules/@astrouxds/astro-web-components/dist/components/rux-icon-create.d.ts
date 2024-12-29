import type { Components, JSX } from "../types/components";

interface RuxIconCreate extends Components.RuxIconCreate, HTMLElement {}
export const RuxIconCreate: {
  prototype: RuxIconCreate;
  new (): RuxIconCreate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
