import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "doc-header"
})
export class DocHeader {
  render() {
    return (
      <Host
        class="navbar is-spaced has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <stencil-route-link url="/">
            <h1
              class="navbar-item"
              style={{
                fontSize: "24px",
                fontWeight: "bold"
              }}
            >
              Baloise UI Library
            </h1>
          </stencil-route-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item"></div>
          </div>
        </div>
      </Host>
    );
  }
}
