import { Host, h } from '@stencil/core';
export class RuxTableHeaderCell {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table-header-cell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-header-cell.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-header-cell.css"]
    };
  }
}
