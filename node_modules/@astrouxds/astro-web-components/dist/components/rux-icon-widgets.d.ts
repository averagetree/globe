import type { Components, JSX } from "../types/components";

interface RuxIconWidgets extends Components.RuxIconWidgets, HTMLElement {}
export const RuxIconWidgets: {
  prototype: RuxIconWidgets;
  new (): RuxIconWidgets;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
