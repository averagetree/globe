import type { Components, JSX } from "../types/components";

interface RuxIconScore extends Components.RuxIconScore, HTMLElement {}
export const RuxIconScore: {
  prototype: RuxIconScore;
  new (): RuxIconScore;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
