export declare class RuxAccordion {
  el: HTMLRuxAccordionElement;
  /**
   * If present, sets a disabled state on the accordion, indicating that no part of it can be manipulated by user action.
   */
  disabled: boolean;
  /*******
   * toggles disallow muiltiple - default false
   * *********/
  disallowMultiple: boolean;
  updatedExpanded(event: Event): void;
  render(): any;
}
