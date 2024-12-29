import type { Components, JSX } from "../types/components";

interface RuxIconViewList extends Components.RuxIconViewList, HTMLElement {}
export const RuxIconViewList: {
  prototype: RuxIconViewList;
  new (): RuxIconViewList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
