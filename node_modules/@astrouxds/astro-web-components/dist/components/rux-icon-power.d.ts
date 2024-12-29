import type { Components, JSX } from "../types/components";

interface RuxIconPower extends Components.RuxIconPower, HTMLElement {}
export const RuxIconPower: {
  prototype: RuxIconPower;
  new (): RuxIconPower;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
