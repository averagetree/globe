import type { Components, JSX } from "../types/components";

interface RuxIconChat extends Components.RuxIconChat, HTMLElement {}
export const RuxIconChat: {
  prototype: RuxIconChat;
  new (): RuxIconChat;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
