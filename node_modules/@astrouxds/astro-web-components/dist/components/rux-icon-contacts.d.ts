import type { Components, JSX } from "../types/components";

interface RuxIconContacts extends Components.RuxIconContacts, HTMLElement {}
export const RuxIconContacts: {
  prototype: RuxIconContacts;
  new (): RuxIconContacts;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
