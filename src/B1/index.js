import DisabledCollapsePopupProvider from "./DisabledCollapsePopupProvider";

export default {
  __depends__: ["popupMenu"],
  __init__: ["disabledCollapsePopupProvider"],
  disabledCollapsePopupProvider: ["type", DisabledCollapsePopupProvider]
};
