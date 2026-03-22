import applyStyles from "./styleManager.js";

export function scanNode(node) {
    // handle root
    if (
        node.nodeType === 1 &&
        node.classList &&
        [...node.classList].some((cls) => cls.startsWith("chai-"))
    ) {
        applyStyles(node);
    }

    // handle children
    const allElements = node.querySelectorAll('[class*="chai-"]');
    allElements.forEach(applyStyles);
}

export function observeDOM() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // new elements added
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) {
                    scanNode(node);
                }
            });

            // class changes
            if (
                mutation.type === "attributes" &&
                mutation.attributeName === "class"
            ) {
                applyStyles(mutation.target);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    });
}
