import { Host, h } from '@stencil/core';
/**
 * @slot (default) - the nodes of the tree.
 */
export class RuxTree {
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleNodeSelected = this._handleNodeSelected.bind(this);
  }
  disconnectedCallback() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
    const assignedElements = slot.assignedElements({
      flatten: true,
    });
    assignedElements.map((el) => {
      el.removeEventListener('ruxtreenodeselected', this._handleNodeSelected);
    });
  }
  _handleSlotChange() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
    const assignedElements = slot.assignedElements({
      flatten: true,
    });
    assignedElements.map((el) => {
      el.setAttribute('aria-level', '1');
      el.addEventListener('ruxtreenodeselected', this._handleNodeSelected);
    });
  }
  _handleNodeSelected(e) {
    const allNodes = document.querySelectorAll('rux-tree-node');
    const previousSelectedNode = Array.from(allNodes).find((node) => {
      var _a, _b;
      return (node.selected &&
        ((_b = (_a = node.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tree-node')) === null || _b === void 0 ? void 0 : _b.id) !== e.detail);
    });
    if (previousSelectedNode) {
      previousSelectedNode.selected = false;
    }
  }
  render() {
    return (h(Host, { role: "tree", class: "rux-tree" }, h("div", { ref: (el) => (this.slotContainer = el) }, h("slot", { onSlotchange: this._handleSlotChange }))));
  }
  static get is() { return "rux-tree"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-tree.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-tree.css"]
    };
  }
  static get elementRef() { return "el"; }
}
