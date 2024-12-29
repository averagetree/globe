import type { Components, JSX } from "../types/components";

interface RuxBreadcrumb extends Components.RuxBreadcrumb, HTMLElement {}
export const RuxBreadcrumb: {
  prototype: RuxBreadcrumb;
  new (): RuxBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
