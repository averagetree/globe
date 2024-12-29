import type { Components, JSX } from "../types/components";

interface RuxCard extends Components.RuxCard, HTMLElement {}
export const RuxCard: {
  prototype: RuxCard;
  new (): RuxCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
