import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "doc-page"
})
export class DocPage {
  @Prop() public heading: string;
  @Prop() public subtitle: string;

  render() {
    return (
      <Host>
        <header class="bd-header">
          <div class="bd-header-titles">
            <h1 class="title is-1">{this.heading}</h1>
            <p class="subtitle is-3">{this.subtitle}</p>
          </div>
        </header>
        <div class="bd-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
