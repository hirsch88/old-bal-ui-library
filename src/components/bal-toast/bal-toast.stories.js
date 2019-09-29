import readme from "./readme.md";
import { DocPropMarkdown } from "../../utils/doc-prop.js";
import { DocSnippet } from "../../utils/doc-snippet.js";

export default {
  title: "Toast",
  decorators: [DocSnippet],
  parameters: {
    notes: readme + DocPropMarkdown("bal-toast")
  }
};

export const Basic = () => `<bal-toast></bal-toast>`;
