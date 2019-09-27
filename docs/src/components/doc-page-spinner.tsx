import { Component, h } from "@stencil/core";

@Component({
  tag: "doc-page-spinner"
})
export class DocPageSpinner {
  public static label = "Spinner";
  public static url = "/components/spinner";
  public static component = "doc-page-spinner";

  render() {
    return (
      <doc-page heading={DocPageSpinner.label} subtitle="Busy indicator">
        <h2 class="title is-2">Basic</h2>
        <doc-snippet
          snippet={`
<bal-spinner></bal-spinner>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Small</h2>
        <doc-snippet
          snippet={`
<bal-spinner class="is-small"></bal-spinner>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Inverted</h2>
        <doc-snippet
          snippet={`
<div class="has-background-info" style="padding: 20px">
  <bal-spinner class="is-inverted"></bal-spinner>
</div>
        `}
        ></doc-snippet>
      </doc-page>
    );
  }
}
