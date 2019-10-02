import { Host, h } from "@stencil/core";
export class BalButton {
    constructor() {
        /**
         * The theme type of the button. Given by bulma our css framework.
         */
        this.type = "is-primary";
    }
    render() {
        return (h(Host, null,
            h("button", { class: `button ${this.type}`, disabled: this.disabled },
                this.loading ? (h("bal-spinner", { class: "is-small is-inverted" })) : (""),
                h("span", { style: { display: this.loading ? "none" : "inline-block" } },
                    h("slot", null)))));
    }
    static get is() { return "bal-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["bal-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bal-button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"is-primary\" | \"is-info\"",
                "resolved": "\"is-info\" | \"is-primary\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The theme type of the button. Given by bulma our css framework."
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"is-primary\""
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` the button is disabled"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "loading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` the label is hidden and a loading spinner is shown instead."
            },
            "attribute": "loading",
            "reflect": false
        }
    }; }
}
