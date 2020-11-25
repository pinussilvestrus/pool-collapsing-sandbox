import { is } from "bpmn-js/lib/util/ModelUtil";

import { isExpanded } from "bpmn-js/lib/util/DiUtil";

var REPLACE_WITH_COLLAPSED = "replace-with-collapsed-pool";

export default function RemovedCollapsePopupProvider(popupMenu) {
  popupMenu.registerProvider("bpmn-replace", this);
}

RemovedCollapsePopupProvider.$inject = ["popupMenu"];

RemovedCollapsePopupProvider.prototype.getPopupMenuEntries = function (
  element
) {
  return function (entries) {
    if (isParticipant(element) && isExpanded(element) && hasChildren(element)) {
      delete entries[REPLACE_WITH_COLLAPSED];
    }

    return entries;
  };
};

// helper /////////////////

function isParticipant(element) {
  return is(element, "bpmn:Participant");
}

function hasChildren(element) {
  return element.children && element.children.length;
}
