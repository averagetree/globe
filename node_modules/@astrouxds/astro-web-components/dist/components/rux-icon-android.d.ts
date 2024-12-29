import type { Components, JSX } from "../types/components";

interface RuxIconAndroid extends Components.RuxIconAndroid, HTMLElement {}
export const RuxIconAndroid: {
  prototype: RuxIconAndroid;
  new (): RuxIconAndroid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
