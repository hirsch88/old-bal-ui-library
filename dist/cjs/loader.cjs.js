'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-846e4ae0.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.globals();
    core.bootstrapLazy([["bal-button.cjs",[[1,"bal-button",{"type":[1],"disabled":[4],"loading":[4]}]]],["bal-toast.cjs",[[1,"bal-toast"]]],["bal-spinner.cjs",[[1,"bal-spinner"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
