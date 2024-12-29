import type { Components, JSX } from "../types/components";

interface RuxIconApps extends Components.RuxIconApps, HTMLElement {}
export const RuxIconApps: {
  prototype: RuxIconApps;
  new (): RuxIconApps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
