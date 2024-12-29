import type { Components, JSX } from "../types/components";

interface RuxIconKeyboard extends Components.RuxIconKeyboard, HTMLElement {}
export const RuxIconKeyboard: {
  prototype: RuxIconKeyboard;
  new (): RuxIconKeyboard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
