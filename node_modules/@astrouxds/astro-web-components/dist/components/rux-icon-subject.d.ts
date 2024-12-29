import type { Components, JSX } from "../types/components";

interface RuxIconSubject extends Components.RuxIconSubject, HTMLElement {}
export const RuxIconSubject: {
  prototype: RuxIconSubject;
  new (): RuxIconSubject;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
