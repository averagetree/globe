import type { Components, JSX } from "../types/components";

interface RuxIconMic extends Components.RuxIconMic, HTMLElement {}
export const RuxIconMic: {
  prototype: RuxIconMic;
  new (): RuxIconMic;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
