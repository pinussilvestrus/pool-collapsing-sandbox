import DisabledCollapsePopupProvider from "./DisabledCollapsePopupProvider";

import DisabledSubprocessProvider from "./DisabledSubprocessProvider";

const module = {
  __depends__: ["popupMenu", "bpmnReplace"],
  __init__: ["disabledCollapsePopupProvider", "disabledSubprocessProvider"],
  disabledCollapsePopupProvider: ["type", DisabledCollapsePopupProvider],
  disabledSubprocessProvider: ["type", DisabledSubprocessProvider]
};

export default {
  key: "B",
  modules: [module]
};
