import type { Components, JSX } from "../types/components";

interface RuxIconDock extends Components.RuxIconDock, HTMLElement {}
export const RuxIconDock: {
  prototype: RuxIconDock;
  new (): RuxIconDock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
