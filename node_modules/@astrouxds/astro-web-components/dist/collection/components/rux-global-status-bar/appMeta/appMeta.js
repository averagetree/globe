import { h } from '@stencil/core';
export const AppMeta = ({ domain, name, version }, children) => (h("div", { class: "app-meta", part: "app-meta" }, h("div", { class: "app-info-wrapper" }, domain && h("h1", { class: "app-domain" }, domain), name && h("h1", { class: "app-name" }, name), version && h("span", { class: "app-version" }, version)), children));
