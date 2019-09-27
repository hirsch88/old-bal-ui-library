import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "doc-page-home"
})
export class DocPageHome {
  render() {
    return (
      <Host>
        <header class="bd-header">
          <div class="bd-header-titles">
            <h1 class="title">Documentation</h1>
            <p class="subtitle is-4">
              Lightweight UI-Component Library for Baloise
            </p>
          </div>
        </header>
        <div class="bd-content">asdf</div>
      </Host>
    );
  }
}
