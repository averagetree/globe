import type { Components, JSX } from "../types/components";

interface RuxIconRouter extends Components.RuxIconRouter, HTMLElement {}
export const RuxIconRouter: {
  prototype: RuxIconRouter;
  new (): RuxIconRouter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
