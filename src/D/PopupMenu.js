import inherits from "inherits";

import PopupMenu from "diagram-js/lib/features/popup-menu/PopupMenu";

import { domify, classes as domClasses, attr as domAttr } from "min-dom";

var DATA_REF = "data-id";

export default function CustomPopupMenu(injector) {
  injector.invoke(PopupMenu, this);
}

inherits(CustomPopupMenu, PopupMenu);

CustomPopupMenu.$inject = ["injector"];

/**
 * Creates a single entry and returns it as a DOM container.
 *
 * @param  {Object} entry
 *
 * @return {Object} a DOM container
 */
CustomPopupMenu.prototype._createEntry = function (entry, id) {
  var entryContainer = domify("<div>"),
    entryClasses = domClasses(entryContainer);

  entryClasses.add("entry");

  if (entry.className) {
    entry.className.split(" ").forEach(function (className) {
      entryClasses.add(className);
    });
  }

  domAttr(entryContainer, DATA_REF, id);

  if (entry.label) {
    var label = domify("<span>");
    label.textContent = entry.label;
    entryContainer.appendChild(label);
  }

  if (entry.subLabel) {
    var subLabel = domify("<p>");
    subLabel.textContent = entry.subLabel;
    subLabel.style.margin = 0;
    entryContainer.appendChild(subLabel);
  }

  if (entry.imageUrl) {
    entryContainer.appendChild(domify('<img src="' + entry.imageUrl + '" />'));
  }

  if (entry.active === true) {
    entryClasses.add("active");
  }

  if (entry.disabled === true) {
    entryClasses.add("disabled");
  }

  if (entry.title) {
    entryContainer.title = entry.title;
  }

  return entryContainer;
};
