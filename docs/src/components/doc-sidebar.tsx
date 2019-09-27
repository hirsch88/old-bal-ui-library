import { Component, Host, h } from "@stencil/core";
import { routes } from "../routes";

@Component({
  tag: "doc-sidebar"
})
export class DocSidebar {
  render() {
    return (
      <Host class="bd-categories">
        <div class="bd-category is-active">
          <header class="bd-category-header">
            <strong>Overview</strong>
          </header>

          <ul class="bd-category-list">
            <li>
              <stencil-route-link url="/overview/colors">
                Colors
              </stencil-route-link>
            </li>
          </ul>
        </div>
        <div class="bd-category is-active">
          <header class="bd-category-header">
            <strong>Components</strong>
          </header>

          <ul class="bd-category-list">
            {routes.map(route => (
              <li>
                <stencil-route-link url={route.url}>
                  {route.label}
                </stencil-route-link>
              </li>
            ))}
          </ul>
        </div>
      </Host>
    );
  }
}
