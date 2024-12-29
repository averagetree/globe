import type { Components, JSX } from "../types/components";

interface RuxIconEquipment extends Components.RuxIconEquipment, HTMLElement {}
export const RuxIconEquipment: {
  prototype: RuxIconEquipment;
  new (): RuxIconEquipment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
