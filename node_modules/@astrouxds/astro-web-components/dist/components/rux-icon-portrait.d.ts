import type { Components, JSX } from "../types/components";

interface RuxIconPortrait extends Components.RuxIconPortrait, HTMLElement {}
export const RuxIconPortrait: {
  prototype: RuxIconPortrait;
  new (): RuxIconPortrait;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
