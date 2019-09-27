import { Component, h } from "@stencil/core";

@Component({
  tag: "doc-page-button"
})
export class DocPageButton {
  public static label = "Button";
  public static url = "/components/button";
  public static component = "doc-page-button";

  render() {
    return (
      <doc-page
        heading={DocPageButton.label}
        subtitle="The classic button, in different colors, sizes, and states"
      >
        <h2 class="title is-2">Colors</h2>
        <doc-snippet
          snippet={`
<bal-button type="is-primary">Primary</bal-button>
<bal-button type="is-info">Info</bal-button>
<bal-button type="is-success">Success</bal-button>
<bal-button type="is-warning">Warning</bal-button>
<bal-button type="is-danger">Danger</bal-button>
<bal-button type="is-link">Link</bal-button>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Outlined</h2>
        <doc-snippet
          snippet={`
<bal-button type="is-primary is-outlined">Primary</bal-button>
<bal-button type="is-info is-outlined">Info</bal-button>
<bal-button type="is-success is-outlined">Success</bal-button>
<bal-button type="is-warning is-outlined">Warnung</bal-button>
<bal-button type="is-danger is-outlined">Danger</bal-button>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Inverted</h2>
        <doc-snippet
          snippet={`
<div class="has-background-info" style="padding: 20px">
  <bal-button type="is-primary is-inverted">Primary</bal-button>
  <bal-button type="is-info is-inverted">Info</bal-button>
  <bal-button type="is-info is-inverted is-outlined">Info Outlined</bal-button>
</div>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Disabled</h2>
        <doc-snippet
          snippet={`
<bal-button type="is-primary" disabled>Primary</bal-button>
<bal-button type="is-info" disabled>Info</bal-button>
<bal-button type="is-success" disabled>Success</bal-button>
<bal-button type="is-warning" disabled>Warning</bal-button>
<bal-button type="is-danger" disabled>Danger</bal-button>
<bal-button type="is-link" disabled>Link</bal-button>
        `}
        ></doc-snippet>

        <h2 class="title is-2">Loading</h2>
        <doc-snippet
          snippet={`
<bal-button type="is-primary" loading>Primary</bal-button>
<bal-button type="is-info" loading>Info</bal-button>
<bal-button type="is-success" loading>Success</bal-button>
<bal-button type="is-warning" loading>Warning</bal-button>
<bal-button type="is-danger" loading>Danger</bal-button>
        `}
        ></doc-snippet>
      </doc-page>
    );
  }
}
