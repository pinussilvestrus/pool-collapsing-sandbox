import RemovedCollapsePopupProvider from "./RemovedCollapsePopupProvider";

const module = {
  __depends__: ["popupMenu"],
  __init__: ["removedCollapsePopupProvider"],
  removedCollapsePopupProvider: ["type", RemovedCollapsePopupProvider]
};

export default {
  key: "A",
  modules: [module]
};
