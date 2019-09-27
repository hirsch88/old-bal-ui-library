import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "doc-root"
})
export class DocRoot {
  render() {
    return (
      <Host>
        <doc-header></doc-header>
        <main class="bd-main">
          <div class="bd-side-background"></div>
          <div
            class="bd-main-container container"
            style={{ marginLeft: "0px", marginRight: "0px" }}
          >
            <div class="bd-duo">
              <doc-router></doc-router>
              <aside class="bd-side">
                <doc-sidebar></doc-sidebar>
              </aside>
            </div>
          </div>
        </main>
      </Host>
    );
  }
}
