import type { Components, JSX } from "../types/components";

interface RuxIconSimCard extends Components.RuxIconSimCard, HTMLElement {}
export const RuxIconSimCard: {
  prototype: RuxIconSimCard;
  new (): RuxIconSimCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
