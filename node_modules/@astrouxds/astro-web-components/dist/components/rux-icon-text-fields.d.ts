import type { Components, JSX } from "../types/components";

interface RuxIconTextFields extends Components.RuxIconTextFields, HTMLElement {}
export const RuxIconTextFields: {
  prototype: RuxIconTextFields;
  new (): RuxIconTextFields;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
