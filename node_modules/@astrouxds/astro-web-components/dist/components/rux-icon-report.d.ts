import type { Components, JSX } from "../types/components";

interface RuxIconReport extends Components.RuxIconReport, HTMLElement {}
export const RuxIconReport: {
  prototype: RuxIconReport;
  new (): RuxIconReport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
