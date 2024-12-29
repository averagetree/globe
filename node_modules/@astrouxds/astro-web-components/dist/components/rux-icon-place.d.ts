import type { Components, JSX } from "../types/components";

interface RuxIconPlace extends Components.RuxIconPlace, HTMLElement {}
export const RuxIconPlace: {
  prototype: RuxIconPlace;
  new (): RuxIconPlace;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
