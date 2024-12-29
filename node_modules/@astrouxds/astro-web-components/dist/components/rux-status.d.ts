import type { Components, JSX } from "../types/components";

interface RuxStatus extends Components.RuxStatus, HTMLElement {}
export const RuxStatus: {
  prototype: RuxStatus;
  new (): RuxStatus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
