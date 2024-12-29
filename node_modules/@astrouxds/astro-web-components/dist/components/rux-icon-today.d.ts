import type { Components, JSX } from "../types/components";

interface RuxIconToday extends Components.RuxIconToday, HTMLElement {}
export const RuxIconToday: {
  prototype: RuxIconToday;
  new (): RuxIconToday;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
