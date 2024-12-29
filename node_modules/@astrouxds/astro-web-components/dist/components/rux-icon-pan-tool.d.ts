import type { Components, JSX } from "../types/components";

interface RuxIconPanTool extends Components.RuxIconPanTool, HTMLElement {}
export const RuxIconPanTool: {
  prototype: RuxIconPanTool;
  new (): RuxIconPanTool;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
