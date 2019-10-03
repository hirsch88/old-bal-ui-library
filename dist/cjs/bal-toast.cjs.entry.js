'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-846e4ae0.js');

const BalToast = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null), "asdf"));
    }
    static get style() { return ":host {\n  display: block;\n  height: 80px;\n  width: 200px;\n  background-color: blue;\n  position: absolute;\n  top: 20px;\n}"; }
};

exports.bal_toast = BalToast;
