import { Host, h } from '@stencil/core';
export class RuxTableBody {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "rux-table-body"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-table-body.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-table-body.css"]
    };
  }
}
