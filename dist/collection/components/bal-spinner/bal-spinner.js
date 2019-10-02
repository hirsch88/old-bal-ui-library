import { Host, h } from "@stencil/core";
export class BalSpinner {
    render() {
        return (h(Host, null,
            h("div", { class: "bounce1" }),
            h("div", { class: "bounce2" }),
            h("div", { class: "bounce3" })));
    }
    static get is() { return "bal-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["bal-spinner.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bal-spinner.css"]
    }; }
}
