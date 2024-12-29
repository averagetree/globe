import type { Components, JSX } from "../types/components";

interface RuxIconDevices extends Components.RuxIconDevices, HTMLElement {}
export const RuxIconDevices: {
  prototype: RuxIconDevices;
  new (): RuxIconDevices;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
