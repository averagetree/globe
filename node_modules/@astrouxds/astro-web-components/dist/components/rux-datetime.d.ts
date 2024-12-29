import type { Components, JSX } from "../types/components";

interface RuxDatetime extends Components.RuxDatetime, HTMLElement {}
export const RuxDatetime: {
  prototype: RuxDatetime;
  new (): RuxDatetime;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
