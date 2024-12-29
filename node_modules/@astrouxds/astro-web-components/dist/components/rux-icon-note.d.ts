import type { Components, JSX } from "../types/components";

interface RuxIconNote extends Components.RuxIconNote, HTMLElement {}
export const RuxIconNote: {
  prototype: RuxIconNote;
  new (): RuxIconNote;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
