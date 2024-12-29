import type { Components, JSX } from "../types/components";

interface RuxIconPets extends Components.RuxIconPets, HTMLElement {}
export const RuxIconPets: {
  prototype: RuxIconPets;
  new (): RuxIconPets;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
