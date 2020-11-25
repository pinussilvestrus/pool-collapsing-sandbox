import DisabledCollapsePopupProvider from "./DisabledCollapsePopupProvider";

const module = {
  __depends__: ["popupMenu"],
  __init__: ["disabledCollapsePopupProvider"],
  disabledCollapsePopupProvider: ["type", DisabledCollapsePopupProvider]
};

export default {
  key: "B1",
  modules: [module]
};
