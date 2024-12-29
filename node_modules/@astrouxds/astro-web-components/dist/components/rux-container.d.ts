import type { Components, JSX } from "../types/components";

interface RuxContainer extends Components.RuxContainer, HTMLElement {}
export const RuxContainer: {
  prototype: RuxContainer;
  new (): RuxContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
