import type { Components, JSX } from "../types/components";

interface RuxBreadcrumbItem extends Components.RuxBreadcrumbItem, HTMLElement {}
export const RuxBreadcrumbItem: {
  prototype: RuxBreadcrumbItem;
  new (): RuxBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
