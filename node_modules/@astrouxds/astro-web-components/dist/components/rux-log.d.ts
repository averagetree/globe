import type { Components, JSX } from "../types/components";

interface RuxLog extends Components.RuxLog, HTMLElement {}
export const RuxLog: {
  prototype: RuxLog;
  new (): RuxLog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
