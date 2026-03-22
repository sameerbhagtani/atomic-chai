import { scanNode, observeDOM } from "./domManager.js";

function initAtomicChai() {
    function init() {
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

if (typeof window !== "undefined") {
    window.AtomicChai = {
        init: initAtomicChai,
    };
}

export default initAtomicChai;
