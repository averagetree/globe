import type { Components, JSX } from "../types/components";

interface RuxIconUpdate extends Components.RuxIconUpdate, HTMLElement {}
export const RuxIconUpdate: {
  prototype: RuxIconUpdate;
  new (): RuxIconUpdate;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
