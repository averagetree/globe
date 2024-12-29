import type { Components, JSX } from "../types/components";

interface RuxIconAnnouncement extends Components.RuxIconAnnouncement, HTMLElement {}
export const RuxIconAnnouncement: {
  prototype: RuxIconAnnouncement;
  new (): RuxIconAnnouncement;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
