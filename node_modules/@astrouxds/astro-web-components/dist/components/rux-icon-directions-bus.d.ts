import type { Components, JSX } from "../types/components";

interface RuxIconDirectionsBus extends Components.RuxIconDirectionsBus, HTMLElement {}
export const RuxIconDirectionsBus: {
  prototype: RuxIconDirectionsBus;
  new (): RuxIconDirectionsBus;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
