import type { Components, JSX } from "../types/components";

interface RuxIconGrade extends Components.RuxIconGrade, HTMLElement {}
export const RuxIconGrade: {
  prototype: RuxIconGrade;
  new (): RuxIconGrade;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
