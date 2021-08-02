import { registerApplication, start } from "single-spa";

const prefix = (location, ...prefixes) =>
  prefixes.some(
    (prefix) => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );

const getElementById = (id) => document.getElementById(id);

registerApplication(
  "@wcs/single-spa-demo-nav",
  () => System.import("@wcs/single-spa-demo-nav"),
  () => true,
  { domElement: getElementById("nav-container") }
);
registerApplication(
  "@wcs/single-spa-demo-page-1",
  () => System.import("@wcs/single-spa-demo-page-1"),
  (location) => prefix(location, "page1"),
  { domElement: getElementById("page-1-container") }
);
registerApplication(
  "@wcs/single-spa-demo-page-2",
  () => System.import("@wcs/single-spa-demo-page-2"),
  (location) => prefix(location, "page2"),
  { domElement: getElementById("page-2-container") }
);
start();
