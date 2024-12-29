import type { Components, JSX } from "../types/components";

interface RuxIconQueryBuilder extends Components.RuxIconQueryBuilder, HTMLElement {}
export const RuxIconQueryBuilder: {
  prototype: RuxIconQueryBuilder;
  new (): RuxIconQueryBuilder;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
