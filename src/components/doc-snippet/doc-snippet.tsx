import { Component, Host, h, Element, State, Prop } from "@stencil/core";

@Component({
  tag: "doc-snippet",
  styleUrl: "doc-snippet.scss"
})
export class DocSnippet {
  clipboard: any = {};
  @Element() host: HTMLDivElement;
  @State() isHovering = false;
  @Prop() snippet: string;

  componentDidLoad() {
    const $codeBlock = this.host.querySelector("pre code");
    const $previewBlock = this.host.querySelector(".bd-snippet-preview");
    const content = this.snippet.replace(/^\s+|\s+$/g, "");

    $previewBlock.innerHTML = content;
    $codeBlock.innerHTML = this.htmlSpecialChars(content);
    (window as any).hljs.highlightBlock($codeBlock);

    this.clipboard = new (window as any).ClipboardJS(
      this.host.querySelector(".bd-copy"),
      {
        text: () => content
      }
    );
  }

  componentDidUnload() {
    this.clipboard.destroy();
  }

  htmlSpecialChars(innerHTML: any): any {
    return innerHTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  render() {
    return (
      <Host class="bd-snippet">
        <div class="bd-snippet-preview"></div>
        <div class="bd-snippet-code highlight-full ">
          <figure
            class={this.isHovering ? "highlight bd-is-hovering" : "highlight"}
          >
            <pre
              style={{
                whitespace: "pre-wrap",
                wordWrap: "break-word"
              }}
            >
              <code class="language-html" data-lang="html"></code>
            </pre>
            <button
              class="button is-small bd-copy"
              onMouseEnter={() => (this.isHovering = true)}
              onMouseLeave={() => (this.isHovering = false)}
            >
              Copy
            </button>
          </figure>
        </div>
      </Host>
    );
  }
}
