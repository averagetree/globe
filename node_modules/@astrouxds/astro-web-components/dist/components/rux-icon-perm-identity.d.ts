import type { Components, JSX } from "../types/components";

interface RuxIconPermIdentity extends Components.RuxIconPermIdentity, HTMLElement {}
export const RuxIconPermIdentity: {
  prototype: RuxIconPermIdentity;
  new (): RuxIconPermIdentity;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
