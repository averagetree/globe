import { h } from '@stencil/core';
const MonitoringLabel = ({ label, sublabel, }) => (h("div", { class: "rux-advanced-status__label", part: "monitoring-label" }, h("span", null, label), h("span", { class: `rux-advanced-status__sublabel ${!sublabel ? 'rux-advanced-status__hidden' : ''}`, part: "monitoring-sublabel" }, sublabel)));
export default MonitoringLabel;
