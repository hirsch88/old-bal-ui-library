import { Component, Host, h } from "@stencil/core";
import { routes } from "../routes";

@Component({
  tag: "doc-router"
})
export class DocRouter {
  render() {
    return (
      <Host class="bd-lead">
        <stencil-router historyType="hash">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/" component="doc-page-home" exact={true} />
            {routes.map(route => (
              <stencil-route url={route.url} component={route.component} />
            ))}
            <stencil-route component="doc-page-not-found" />
          </stencil-route-switch>
        </stencil-router>
      </Host>
    );
  }
}
