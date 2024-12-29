import type { Components, JSX } from "../types/components";

interface RuxIconLock extends Components.RuxIconLock, HTMLElement {}
export const RuxIconLock: {
  prototype: RuxIconLock;
  new (): RuxIconLock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
