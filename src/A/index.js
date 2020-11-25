import RemovedCollapsePopupProvider from "./RemovedCollapsePopupProvider";

export default {
  __depends__: ["popupMenu"],
  __init__: ["removedCollapsePopupProvider"],
  removedCollapsePopupProvider: ["type", RemovedCollapsePopupProvider]
};
