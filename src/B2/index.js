import DisabledCollapsePopupProvider from "./DisabledCollapsePopupProvider";

import DisabledSubprocessProvider from "./DisabledSubprocessProvider";

const module = {
  __depends__: ["popupMenu"],
  __init__: ["disabledCollapsePopupProvider", "disabledSubprocessProvider"],
  disabledCollapsePopupProvider: ["type", DisabledCollapsePopupProvider],
  disabledSubprocessProvider: ["type", DisabledSubprocessProvider]
};

export default {
  key: "B2",
  modules: [module]
};
