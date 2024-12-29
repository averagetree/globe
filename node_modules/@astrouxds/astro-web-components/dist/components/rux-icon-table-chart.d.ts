import type { Components, JSX } from "../types/components";

interface RuxIconTableChart extends Components.RuxIconTableChart, HTMLElement {}
export const RuxIconTableChart: {
  prototype: RuxIconTableChart;
  new (): RuxIconTableChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
