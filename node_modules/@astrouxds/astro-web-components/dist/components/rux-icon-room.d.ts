import type { Components, JSX } from "../types/components";

interface RuxIconRoom extends Components.RuxIconRoom, HTMLElement {}
export const RuxIconRoom: {
  prototype: RuxIconRoom;
  new (): RuxIconRoom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
