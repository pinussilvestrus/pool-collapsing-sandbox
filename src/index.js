import Modeler from "bpmn-js/lib/Modeler";

import dom from "domtastic";

import { find, findIndex } from "min-dash";

import "bpmn-js/dist/assets/diagram-js.css";

import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import "./styles.css";

import diagram from "./diagram.bpmn";

import variantA from "./A";
import variantB1 from "./B1";
import variantB2 from "./B2";
import variantC from "./C";

const VARIANTS = [
  variantA,
  variantB1,
  variantB2,
  variantC
];

const DEFAULT_VARIANT = "A";

const container = dom("#container");

const variantsBadge = dom(".variant-badge");

let activeVariant = "";

let modeler;


const renderModeler = (modules = []) => {
  if (modeler) {
    modeler.destroy();
  }

  modeler = new Modeler({
    container: container[0],
    keyboard: {
      bindTo: document
    },
    additionalModules: [...modules]
  });

  modeler
    .importXML(diagram)
    .then(() => {
      const canvas = modeler.get("canvas");

      canvas.zoom("fit-viewport");
    })
    .catch((err) => console.log(err));
};

const toggleVariant = (variant) => {
  let found = find(VARIANTS, (v) => v.key === variant);

  if (!found) {
    found = VARIANTS[0];
  }

  const { key, modules } = found;

  activeVariant = key;

  variantsBadge.find("span").text(key);

  updateURL(variant);
  renderModeler(modules);
};

const onNextVariant = () => {
  const found = findIndex(VARIANTS, (v) => v.key === activeVariant);

  if (found === VARIANTS.length - 1) {
    return toggleVariant(VARIANTS[0].key);
  }

  return toggleVariant(VARIANTS[found + 1].key);
};

variantsBadge.on("click", onNextVariant);

const variant = urlParam("variant");
toggleVariant(variant);


// helpers //////////

function updateURL(variant) {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?variant=${variant}`;
  window.history.pushState({ path: newurl }, "", newurl);
}
function urlParam(name) {
  const results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  return (results && results[1]) || DEFAULT_VARIANT;
}
