import type { Components, JSX } from "../types/components";

interface RuxIconAlarm extends Components.RuxIconAlarm, HTMLElement {}
export const RuxIconAlarm: {
  prototype: RuxIconAlarm;
  new (): RuxIconAlarm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
