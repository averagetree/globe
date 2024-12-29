import { Host, h } from '@stencil/core';
export class RuxTableHeaderRow {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table-header-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-header-row.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-header-row.css"]
    };
  }
}
