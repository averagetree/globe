import { Host, h } from '@stencil/core';
/**
 * @part container - The outermost div encasing rux-indeterminate-progress which is responsible for the overall size and the outermost border.
 * @part animated-spinner - The second div in the heirarchy which is responsible for the spinning conic-gradient and the gap between the spinner and the containers's border.
 * @part inner-spinner-gap - The third div in the heirarchy which controls the gap between the animated-spinner and the inner-circle's border.
 * @part inner-circle - The fourth div in the heirarchy which controls the inner-most circle.
 */
export class RuxIndeterminateProgress {
  render() {
    return (h(Host, null, h("div", { class: {
        'rux-indeterminate-container': true,
      }, part: "container" }, h("div", { class: "rux-indeterminate-animated-spinner", part: "animated-spinner" }, h("div", { class: "rux-indeterminate-inner-spinner-gap", part: "inner-spinner-gap" }, h("div", { class: "rux-indeterminate-inner-circle", part: "inner-circle" }))))));
  }
  static get is() { return "rux-indeterminate-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-indeterminate-progress.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-indeterminate-progress.css"]
    };
  }
}
