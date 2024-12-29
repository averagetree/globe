import type { Components, JSX } from "../types/components";

interface RuxIconPublish extends Components.RuxIconPublish, HTMLElement {}
export const RuxIconPublish: {
  prototype: RuxIconPublish;
  new (): RuxIconPublish;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
