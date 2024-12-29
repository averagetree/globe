import type { Components, JSX } from "../types/components";

interface RuxIconBarChart extends Components.RuxIconBarChart, HTMLElement {}
export const RuxIconBarChart: {
  prototype: RuxIconBarChart;
  new (): RuxIconBarChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
