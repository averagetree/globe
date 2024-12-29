import type { Components, JSX } from "../types/components";

interface RuxTrack extends Components.RuxTrack, HTMLElement {}
export const RuxTrack: {
  prototype: RuxTrack;
  new (): RuxTrack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
