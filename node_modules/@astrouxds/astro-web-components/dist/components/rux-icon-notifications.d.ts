import type { Components, JSX } from "../types/components";

interface RuxIconNotifications extends Components.RuxIconNotifications, HTMLElement {}
export const RuxIconNotifications: {
  prototype: RuxIconNotifications;
  new (): RuxIconNotifications;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
