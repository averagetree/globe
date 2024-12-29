import type { Components, JSX } from "../types/components";

interface RuxIconAttachment extends Components.RuxIconAttachment, HTMLElement {}
export const RuxIconAttachment: {
  prototype: RuxIconAttachment;
  new (): RuxIconAttachment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
