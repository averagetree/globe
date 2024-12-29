import { Host, h } from '@stencil/core';
/**
 * @slot (default) - Used for instances of rux-tab-panel
 */
export class RuxTabPanels {
  connectedCallback() {
    this.el.setAttribute('style', 'position: relative; width: 100%;');
    this._getSlottedChildren = this._getSlottedChildren.bind(this);
  }
  _getSlottedChildren() {
    var _a, _b;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
    if (slot) {
      const childNodes = slot.assignedNodes({ flatten: true });
      const children = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
      this._registerTabPanels(children);
      return children;
    }
    else {
      return [];
    }
  }
  _registerTabPanels(children) {
    this.ruxRegisterPanels.emit(children);
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: this._getSlottedChildren })));
  }
  static get is() { return "rux-tab-panels"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": [".././rux-tab-panel/rux-tab-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../rux-tab-panel/rux-tab-panel.css"]
    };
  }
  static get events() {
    return [{
        "method": "ruxRegisterPanels",
        "name": "ruxregisterpanels",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits a list of the Tab Panels on the event.detail which have been passed in"
        },
        "complexType": {
          "original": "HTMLRuxTabPanelsElement[]",
          "resolved": "HTMLRuxTabPanelsElement[]",
          "references": {
            "HTMLRuxTabPanelsElement": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
}
