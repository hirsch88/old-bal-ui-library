import { document, console } from "global";
import { addDecorator, storiesOf } from "@storybook/html";
import readme from "./readme.md";
import { DocPropMarkdown } from "../../utils/doc-prop.js";
import { DocSnippet } from "../../utils/doc-snippet.js";

storiesOf("Button", module)
  .addDecorator(DocSnippet)
  .addParameters({
    notes: readme + DocPropMarkdown("bal-button")
  })
  .add(
    "Basic Colors",
    () => `
<bal-button type="is-primary">Primary</bal-button>
<bal-button type="is-info">Info</bal-button>
<bal-button type="is-success">Success</bal-button>
<bal-button type="is-warning">Warning</bal-button>
<bal-button type="is-danger">Danger</bal-button>
<bal-button type="is-link">Link</bal-button>
`
  )
  .add(
    "Outlined",
    () => `
<bal-button type="is-primary is-outlined">Primary</bal-button>
<bal-button type="is-info is-outlined">Info</bal-button>
<bal-button type="is-success is-outlined">Success</bal-button>
<bal-button type="is-warning is-outlined">Warnung</bal-button>
<bal-button type="is-danger is-outlined">Danger</bal-button>
`
  )
  .add(
    "Inverted",
    () => `
<div class="has-background-info" style="padding: 20px">
  <bal-button type="is-primary is-inverted">Primary</bal-button>
  <bal-button type="is-info is-inverted">Info</bal-button>
  <bal-button type="is-info is-inverted is-outlined">Info Outlined</bal-button>
</div>
`
  )
  .add(
    "Disabled",
    () => `
<bal-button type="is-primary" disabled>Primary</bal-button>
<bal-button type="is-info" disabled>Info</bal-button>
<bal-button type="is-success" disabled>Success</bal-button>
<bal-button type="is-warning" disabled>Warning</bal-button>
<bal-button type="is-danger" disabled>Danger</bal-button>
<bal-button type="is-link" disabled>Link</bal-button>
`
  )
  .add(
    "Loading",
    () => `
<bal-button type="is-primary" loading>Primary</bal-button>
<bal-button type="is-info" loading>Info</bal-button>
<bal-button type="is-success" loading>Success</bal-button>
<bal-button type="is-warning" loading>Warning</bal-button>
<bal-button type="is-danger" loading>Danger</bal-button>
`
  );

// export default {
//   title: "bal-button",
//   parameters: {
//     notes: readme
//   }
// };

// const Center = ({ children }) => <div style={styles}>{children}</div>;

// export const primary = () => `
// <bal-button type="is-primary">Hode</bal-button>
// ${copyCodeBlock('<bal-button type="is-primary">Hode</bal-button>', {
//   lang: "xml"
// })}

// `;
// export const info = () => '<bal-button type="is-info">Hode</bal-button>';
