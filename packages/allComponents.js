const componentsContext = require.context("./components", true, /index.js$/);

const components = [];

function importAll(r) {
  r.keys().forEach((f) => {
    components.push(r(f).default);
  });
}

importAll(componentsContext);

export default components;
