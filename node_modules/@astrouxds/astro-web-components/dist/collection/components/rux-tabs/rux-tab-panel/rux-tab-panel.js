import { Host, h } from '@stencil/core';
/**
 * @slot (default) - Used to render any additional content inside a rux-tab-panel.
 */
export class RuxTabPanel {
  connectedCallback() {
    this.el.setAttribute('role', 'tabpanel');
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-tab-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tab-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tab-panel.css"]
    };
  }
  static get elementRef() { return "el"; }
}
