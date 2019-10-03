import { p as patchBrowser, b as bootstrapLazy } from './core-3525f4f3.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["bal-button", [[1, "bal-button", { "type": [1], "disabled": [4], "loading": [4] }]]], ["bal-toast", [[1, "bal-toast"]]], ["bal-spinner", [[1, "bal-spinner"]]]], options);
});
