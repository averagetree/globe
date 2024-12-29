import { Host, h } from '@stencil/core';
export class RuxMenu {
  connectedCallback() {
    this.el.addEventListener('click', (e) => {
      this._handleSelected(e.target);
    });
  }
  _handleSelected(item) {
    //prevent code from running if the clicked element was disabled
    if (item.disabled)
      return;
    const menuItems = Array.from(this.el.querySelectorAll('rux-menu-item'));
    menuItems.forEach((el) => {
      el.selected = false;
      if (el === item && !el.disabled) {
        item.selected = true;
        this.ruxMenuSelected.emit(item);
      }
    });
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-menu" }, h("slot", null))));
  }
  static get is() { return "rux-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-menu.css"]
    };
  }
  static get events() {
    return [{
        "method": "ruxMenuSelected",
        "name": "ruxmenuselected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when a rux-menu-item is selected. Emits the rux-menu-item selected in the event detail."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
