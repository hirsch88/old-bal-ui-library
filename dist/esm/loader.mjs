import { a as patchEsm, b as bootstrapLazy } from './core-59a5741b.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["bal-button",[[1,"bal-button",{"type":[1],"disabled":[4],"loading":[4]}]]],["bal-toast",[[1,"bal-toast"]]],["bal-spinner",[[1,"bal-spinner"]]]], options);
  });
};

export { defineCustomElements };
