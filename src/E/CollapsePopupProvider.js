import { is } from "bpmn-js/lib/util/ModelUtil";

import { isExpanded } from "bpmn-js/lib/util/DiUtil";

var REPLACE_WITH_COLLAPSED = "replace-with-collapsed-pool";

export default function CollapsePopupProvider(
  popupMenu,
  bpmnReplace,
  translate
) {
  popupMenu.registerProvider("bpmn-replace", this);

  this._bpmnReplace = bpmnReplace;
  this._translate = translate;
}

CollapsePopupProvider.$inject = ["popupMenu", "bpmnReplace", "translate"];

CollapsePopupProvider.prototype.getPopupMenuEntries = function (element) {
  var bpmnReplace = this._bpmnReplace,
    translate = this._translate;

  return function (entries) {
    if (isParticipant(element) && isExpanded(element) && hasChildren(element)) {
      entries[REPLACE_WITH_COLLAPSED] = {
        label: translate("Convert to Black Box (removes content)"),
        actionName: "replace-with-collapsed-pool",
        className: "bpmn-icon-lane",
        action: function () {
          bpmnReplace.replaceElement(element, {
            type: "bpmn:Participant",
            isExpanded: false
          });
        }
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
