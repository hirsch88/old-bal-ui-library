'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-3c413d70.js');

const BalToast = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h(core.Host, null, core.h("slot", null), "asdf"));
    }
    static get style() { return ":host{display:block;height:80px;width:200px;background-color:#00f;position:absolute;top:20px}"; }
};

exports.bal_toast = BalToast;
