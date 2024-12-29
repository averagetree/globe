import type { Components, JSX } from "../types/components";

interface RuxIconBackup extends Components.RuxIconBackup, HTMLElement {}
export const RuxIconBackup: {
  prototype: RuxIconBackup;
  new (): RuxIconBackup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
