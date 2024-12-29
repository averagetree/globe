import type { Components, JSX } from "../types/components";

interface RuxIconNotes extends Components.RuxIconNotes, HTMLElement {}
export const RuxIconNotes: {
  prototype: RuxIconNotes;
  new (): RuxIconNotes;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
