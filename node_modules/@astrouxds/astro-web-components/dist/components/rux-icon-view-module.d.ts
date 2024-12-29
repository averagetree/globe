import type { Components, JSX } from "../types/components";

interface RuxIconViewModule extends Components.RuxIconViewModule, HTMLElement {}
export const RuxIconViewModule: {
  prototype: RuxIconViewModule;
  new (): RuxIconViewModule;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
