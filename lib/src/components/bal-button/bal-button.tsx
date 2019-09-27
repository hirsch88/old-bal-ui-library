import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "bal-button",
  styleUrl: "bal-button.scss"
})
export class BalButton {
  @Prop() type: string;
  @Prop() disabled: boolean;
  @Prop() loading: boolean;

  render() {
    return (
      <Host>
        <button class={`button ${this.type}`} disabled={this.disabled}>
          {this.loading ? (
            <bal-spinner class="is-small is-inverted"></bal-spinner>
          ) : (
            ""
          )}
          <span style={{ display: this.loading ? "none" : "inline-block" }}>
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
