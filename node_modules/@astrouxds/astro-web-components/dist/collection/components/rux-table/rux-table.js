import { Host, h } from '@stencil/core';
export class RuxTable {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table.css"]
    };
  }
}
