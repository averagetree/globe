import { Host, h } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
/**
 * @slot (default) - The container's content
 * @slot header - The container's header
 * @slot tab-bar - The container's tab bar
 * @slot toolbar - The container's toolbar
 * @slot footer - The container's footer
 * @part container - The container's outermost element
 * @part header - The container's outside header element
 * @part tab-bar - The container's outside tab bar element
 * @part toolbar - The container's outside toolbar element
 * @part body - The container's outside body element
 * @part footer - The container's outside footer element
 *
 */
export class RuxContainer {
  constructor() {
    this.activeSlots = {
      header: false,
      'tab-bar': false,
      toolbar: false,
      footer: false,
    };
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange(slotName) {
    const show = hasSlot(this.el, slotName);
    this.activeSlots = Object.assign(Object.assign({}, this.activeSlots), { [slotName]: show });
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-container", part: "container" }, h("div", { class: {
        'rux-container__header': true,
        hidden: !this.activeSlots.header,
      }, part: "header" }, h("slot", { name: "header", onSlotchange: () => this._handleSlotChange('header') })), h("div", { class: {
        'rux-container__tab-bar': true,
        hidden: !this.activeSlots['tab-bar'],
      }, part: "tab-bar" }, h("slot", { name: "tab-bar", onSlotchange: () => this._handleSlotChange('tab-bar') })), h("div", { class: {
        'rux-container__toolbar': true,
        hidden: !this.activeSlots.toolbar,
      }, part: "toolbar" }, h("slot", { name: "toolbar", onSlotchange: () => this._handleSlotChange('toolbar') })), h("div", { class: "rux-container__body", part: "body" }, h("slot", null)), h("div", { class: {
        'rux-container__footer': true,
        hidden: !this.activeSlots.footer,
      }, part: "footer" }, h("slot", { name: "footer", onSlotchange: () => this._handleSlotChange('footer') })))));
  }
  static get is() { return "rux-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-container.css"]
    };
  }
  static get states() {
    return {
      "activeSlots": {}
    };
  }
  static get elementRef() { return "el"; }
}
