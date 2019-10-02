import { r as registerInstance, h, H as Host } from './core-59a5741b.js';

const BalToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null), "asdf"));
    }
    static get style() { return ":host{display:block;height:80px;width:200px;background-color:#00f;position:absolute;top:20px}"; }
};

export { BalToast as bal_toast };
