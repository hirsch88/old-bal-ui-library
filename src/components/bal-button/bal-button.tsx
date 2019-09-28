import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "bal-button",
  styleUrl: "bal-button.scss"
})
export class BalButton {
  /**
   * The theme type of the button. Given by bulma our css framework.
   */
  @Prop() type: "is-primary" | "is-info" = "is-primary";

  /**
   * If `true` the button is disabled
   */
  @Prop() disabled: boolean;

  /**
   * If `true` the label is hidden and a loading spinner is shown instead.
   */
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
