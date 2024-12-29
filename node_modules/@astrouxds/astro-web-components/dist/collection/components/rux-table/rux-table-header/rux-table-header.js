import { Host, h } from '@stencil/core';
export class RuxTableHeader {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-header.css"]
    };
  }
}
