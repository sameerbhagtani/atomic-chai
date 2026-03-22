import { scanNode, observeDOM } from "./domManager.js";
import { addCustomClass } from "./styleManager.js";
import resetStyles from "./reset.css";

function injectResetStyles() {
    if (document.getElementById("atomic-chai-reset")) return;

    const style = document.createElement("style");
    style.id = "atomic-chai-reset";
    style.textContent = resetStyles;

    document.head.appendChild(style);
}

function initAtomicChai() {
    function init() {
        injectResetStyles();
        scanNode(document);
        observeDOM();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}

initAtomicChai();

const AtomicChai = {
    init: initAtomicChai,
    addClass: addCustomClass,
};

export { initAtomicChai as init, addCustomClass as addClass };
export default AtomicChai;
