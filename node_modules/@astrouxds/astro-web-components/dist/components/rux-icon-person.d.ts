import type { Components, JSX } from "../types/components";

interface RuxIconPerson extends Components.RuxIconPerson, HTMLElement {}
export const RuxIconPerson: {
  prototype: RuxIconPerson;
  new (): RuxIconPerson;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
