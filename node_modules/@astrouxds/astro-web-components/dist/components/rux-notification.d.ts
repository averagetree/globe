import type { Components, JSX } from "../types/components";

interface RuxNotification extends Components.RuxNotification, HTMLElement {}
export const RuxNotification: {
  prototype: RuxNotification;
  new (): RuxNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
