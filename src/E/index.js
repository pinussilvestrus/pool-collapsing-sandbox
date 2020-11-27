import CollapsePopupProvider from "./CollapsePopupProvider";

const module = {
  __depends__: ["popupMenu", "bpmnReplace"],
  __init__: ["collapsePopupProvider"],
  collapsePopupProvider: ["type", CollapsePopupProvider]
};

export default {
  key: "E",
  modules: [module]
};
