import { h } from '@stencil/core';
/**
 * @part container - the container of the rux-menu-item-divider
 */
export class RuxMenuItemDivider {
  render() {
    return (h("div", { class: "wrapper" }, h("li", { role: "separator", part: "container" })));
  }
  static get is() { return "rux-menu-item-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-menu-item-divider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-menu-item-divider.css"]
    };
  }
}
