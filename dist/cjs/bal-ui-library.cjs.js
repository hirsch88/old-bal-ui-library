'use strict';

const core = require('./core-846e4ae0.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["bal-button.cjs",[[1,"bal-button",{"type":[1],"disabled":[4],"loading":[4]}]]],["bal-toast.cjs",[[1,"bal-toast"]]],["bal-spinner.cjs",[[1,"bal-spinner"]]]], options);
});
