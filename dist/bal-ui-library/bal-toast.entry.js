import { r as registerInstance, h, H as Host } from './core-4c84bbf3.js';

const BalToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), "asdf"));
    }
    static get style() { return ":host {\n  display: block;\n  height: 80px;\n  width: 200px;\n  background-color: blue;\n  position: absolute;\n  top: 20px;\n}"; }
};

export { BalToast as bal_toast };
