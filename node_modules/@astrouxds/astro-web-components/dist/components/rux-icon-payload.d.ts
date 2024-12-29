import type { Components, JSX } from "../types/components";

interface RuxIconPayload extends Components.RuxIconPayload, HTMLElement {}
export const RuxIconPayload: {
  prototype: RuxIconPayload;
  new (): RuxIconPayload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
