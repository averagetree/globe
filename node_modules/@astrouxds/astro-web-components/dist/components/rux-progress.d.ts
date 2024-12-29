import type { Components, JSX } from "../types/components";

interface RuxProgress extends Components.RuxProgress, HTMLElement {}
export const RuxProgress: {
  prototype: RuxProgress;
  new (): RuxProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
