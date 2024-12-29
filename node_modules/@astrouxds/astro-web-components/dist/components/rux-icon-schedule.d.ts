import type { Components, JSX } from "../types/components";

interface RuxIconSchedule extends Components.RuxIconSchedule, HTMLElement {}
export const RuxIconSchedule: {
  prototype: RuxIconSchedule;
  new (): RuxIconSchedule;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
