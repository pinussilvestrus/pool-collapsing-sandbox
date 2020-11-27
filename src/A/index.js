import RemovedCollapsePopupProvider from "./RemovedCollapsePopupProvider";

import DisableCollapsedSubprocessModule from "bpmn-js-disable-collapsed-subprocess";

const module = {
  __depends__: ["popupMenu"],
  __init__: ["removedCollapsePopupProvider"],
  removedCollapsePopupProvider: ["type", RemovedCollapsePopupProvider]
};

export default {
  key: "A",
  modules: [module, DisableCollapsedSubprocessModule]
};
