import { is } from "bpmn-js/lib/util/ModelUtil";

import { isExpanded } from "bpmn-js/lib/util/DiUtil";

var REPLACE_WITH_COLLAPSED = "replace-with-collapsed-pool";

export default function DisabledCollapsePopupProvider(
  popupMenu,
  tooltips,
  bpmnReplace,
  translate
) {
  popupMenu.registerProvider("bpmn-replace", this);

  this._translate = translate;
  this._tooltips = tooltips;
  this._bpmnReplace = bpmnReplace;
}

DisabledCollapsePopupProvider.$inject = [
  "popupMenu",
  "tooltips",
  "bpmnReplace",
  "translate"
];

DisabledCollapsePopupProvider.prototype.getPopupMenuEntries = function (
  element
) {
  var tooltips = this._tooltips,
    translate = this._translate,
    bpmnReplace = this._bpmnReplace;

  return function (entries) {
    if (isParticipant(element) && isExpanded(element)) {
      entries[REPLACE_WITH_COLLAPSED] = {
        label: translate("Collapsed Pool (removes content)"),
        actionName: "replace-with-collapsed-pool",
        className: "bpmn-icon-lane",
        disabled: !!hasChildren(element),
        action: function (event) {
          if (hasChildren(element)) {
            return tooltips.add({
              position: {
                x: event.x + 50,
                y: event.y + 50
              },
              type: "error",
              timeout: 2000,
              html:
                "<div>" +
                translate(
                  "Pool is not empty, collapsing is therefore not possible."
                ) +
                "</div>"
            });
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
