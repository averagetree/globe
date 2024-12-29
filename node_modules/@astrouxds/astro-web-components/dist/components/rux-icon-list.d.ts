import type { Components, JSX } from "../types/components";

interface RuxIconList extends Components.RuxIconList, HTMLElement {}
export const RuxIconList: {
  prototype: RuxIconList;
  new (): RuxIconList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
