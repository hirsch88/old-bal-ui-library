import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "doc-page-not-found"
})
export class DocPageNotFound {
  render() {
    return (
      <Host>
        <h1>Not Found</h1>
        <slot></slot>
      </Host>
    );
  }
}
