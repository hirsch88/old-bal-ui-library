import { Route, route } from "./utils/route";
import { DocPageButton } from "./components/doc-page-button";
import { DocPageSpinner } from "./components/doc-page-spinner";

export const routes: Array<Route> = [
  route(DocPageButton),
  route(DocPageSpinner)
];
