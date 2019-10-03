import { r as registerInstance, h, H as Host } from './core-3525f4f3.js';
var BalToast = /** @class */ (function () {
    function BalToast(hostRef) {
        registerInstance(this, hostRef);
    }
    BalToast.prototype.render = function () {
        return (h(Host, null, h("slot", null), "asdf"));
    };
    Object.defineProperty(BalToast, "style", {
        get: function () { return ":host{display:block;height:80px;width:200px;background-color:#00f;position:absolute;top:20px}"; },
        enumerable: true,
        configurable: true
    });
    return BalToast;
}());
export { BalToast as bal_toast };
