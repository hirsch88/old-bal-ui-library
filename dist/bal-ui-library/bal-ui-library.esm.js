import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-4c84bbf3.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["bal-button",[[1,"bal-button",{"type":[1],"disabled":[4],"loading":[4]}]]],["bal-toast",[[1,"bal-toast"]]],["bal-spinner",[[1,"bal-spinner"]]]], options);
});
