import type { Components, JSX } from "../types/components";

interface RuxDialog extends Components.RuxDialog, HTMLElement {}
export const RuxDialog: {
  prototype: RuxDialog;
  new (): RuxDialog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
