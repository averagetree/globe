import { Host, h } from '@stencil/core';
export class RuxTableCell {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table-cell"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-cell.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-cell.css"]
    };
  }
}
