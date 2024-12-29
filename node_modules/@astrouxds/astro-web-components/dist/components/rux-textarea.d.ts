import type { Components, JSX } from "../types/components";

interface RuxTextarea extends Components.RuxTextarea, HTMLElement {}
export const RuxTextarea: {
  prototype: RuxTextarea;
  new (): RuxTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
