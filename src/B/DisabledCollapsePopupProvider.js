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
    if (isParticipant(element) && isExpanded(element)) {
      delete entries[REPLACE_WITH_COLLAPSED];

      entries[REPLACE_WITH_COLLAPSED] = {
        label: translate("Collapsed Pool (removes content)"),
        className: "bpmn-icon-lane",
        disabled: !!hasChildren(element),
        title:
          !!hasChildren(element) &&
          translate("Pool is not empty, collapsing is therefore not possible."),
        action: function () {
          if (hasChildren(element)) {
            return;
          }

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
