import { Host, h } from "@stencil/core";
export class BalToast {
    render() {
        return (h(Host, null,
            h("slot", null),
            "asdf"));
    }
    static get is() { return "bal-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["bal-toast.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["bal-toast.css"]
    }; }
}
