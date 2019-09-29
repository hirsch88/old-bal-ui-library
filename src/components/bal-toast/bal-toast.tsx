import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "bal-toast",
  styleUrl: "bal-toast.scss",
  shadow: true
})
export class BalToast {
  render() {
    return (
      <Host>
        <slot></slot>
        asdf
      </Host>
    );
  }
}
