import { is } from "bpmn-js/lib/util/ModelUtil";

import { isExpanded } from "bpmn-js/lib/util/DiUtil";

var REPLACE_WITH_COLLAPSED = "replace-with-collapsed-pool";

export default function DisabledCollapsePopupProvider(
  popupMenu,
  bpmnReplace,
  translate
) {
  popupMenu.registerProvider("bpmn-replace", this);

  this._translate = translate;
  this._bpmnReplace = bpmnReplace;
}

DisabledCollapsePopupProvider.$inject = [
  "popupMenu",
  "bpmnReplace",
  "translate"
];

DisabledCollapsePopupProvider.prototype.getPopupMenuEntries = function (
  element
) {
  var bpmnReplace = this._bpmnReplace,
    translate = this._translate;

  return function (entries) {
    if (isParticipant(element) && isExpanded(element) && hasChildren(element)) {
      entries[REPLACE_WITH_COLLAPSED] = {
        label: translate("Collapsed Pool (removes content)"),
        className: "bpmn-icon-lane",
        disabled: true
      };
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
