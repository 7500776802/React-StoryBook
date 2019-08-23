import { configure } from "@storybook/react";
import yourTheme from "./yourTheme"
import { addParameters } from "@storybook/react";

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context("../src", true, /(\.|\/)story\.js$/);
  importAll(req);
}

addParameters({
  options: {
    theme: yourTheme
  }
});
configure(loadStories, module);
