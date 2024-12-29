import type { Components, JSX } from "../types/components";

interface RuxClassificationMarking extends Components.RuxClassificationMarking, HTMLElement {}
export const RuxClassificationMarking: {
  prototype: RuxClassificationMarking;
  new (): RuxClassificationMarking;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
