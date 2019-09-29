import { document, console } from "global";
import { addDecorator, storiesOf } from "@storybook/html";
import readme from "./readme.md";
import { DocPropMarkdown } from "../../utils/doc-prop.js";
import { DocSnippet } from "../../utils/doc-snippet.js";

export default {
  title: "Spinner",
  decorators: [DocSnippet],
  parameters: {
    notes: readme + DocPropMarkdown("bal-spinner")
  }
};

export const Basic = () => `<bal-spinner></bal-spinner>`;

export const Small = () => `<bal-spinner class="is-small"></bal-spinner>`;

export const Inverted = () => `
<div class="has-background-info" style="padding: 20px">
  <bal-spinner class="is-inverted"></bal-spinner>
</div>`;
