import type { Components, JSX } from "../types/components";

interface RuxIconBuild extends Components.RuxIconBuild, HTMLElement {}
export const RuxIconBuild: {
  prototype: RuxIconBuild;
  new (): RuxIconBuild;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
