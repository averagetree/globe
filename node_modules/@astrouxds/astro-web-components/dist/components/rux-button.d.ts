import type { Components, JSX } from "../types/components";

interface RuxButton extends Components.RuxButton, HTMLElement {}
export const RuxButton: {
  prototype: RuxButton;
  new (): RuxButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
