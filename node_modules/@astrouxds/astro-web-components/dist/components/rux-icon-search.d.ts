import type { Components, JSX } from "../types/components";

interface RuxIconSearch extends Components.RuxIconSearch, HTMLElement {}
export const RuxIconSearch: {
  prototype: RuxIconSearch;
  new (): RuxIconSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
