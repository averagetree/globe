import type { Components, JSX } from "../types/components";

interface RuxIconAssessment extends Components.RuxIconAssessment, HTMLElement {}
export const RuxIconAssessment: {
  prototype: RuxIconAssessment;
  new (): RuxIconAssessment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
