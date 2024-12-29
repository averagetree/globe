import type { Components, JSX } from "../types/components";

interface RuxIconBlock extends Components.RuxIconBlock, HTMLElement {}
export const RuxIconBlock: {
  prototype: RuxIconBlock;
  new (): RuxIconBlock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
