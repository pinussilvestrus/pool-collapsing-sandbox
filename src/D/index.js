import DisabledCollapsePopupProvider from "./DisabledCollapsePopupProvider";

import DisabledSubprocessProvider from "./DisabledSubprocessProvider";

import CustomPopupMenu from "./PopupMenu";

const module = {
  __depends__: ["bpmnReplace"],
  __init__: [
    "popupMenu",
    "disabledCollapsePopupProvider",
    "disabledSubprocessProvider"
  ],
  disabledCollapsePopupProvider: ["type", DisabledCollapsePopupProvider],
  disabledSubprocessProvider: ["type", DisabledSubprocessProvider],
  popupMenu: ["type", CustomPopupMenu]
};

export default {
  key: "D",
  modules: [module]
};
