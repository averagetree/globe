import type { Components, JSX } from "../types/components";

interface RuxIconSettings extends Components.RuxIconSettings, HTMLElement {}
export const RuxIconSettings: {
  prototype: RuxIconSettings;
  new (): RuxIconSettings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
