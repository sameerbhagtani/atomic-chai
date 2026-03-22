import styleMap from "./styleMap.js";
import styleStore from "./styleStore.js";
import parseDynamicClass from "./dynamicParser.js";

const classCache = new Map();

export default function applyStyles(element) {
    const prevStyles = styleStore.get(element) || {};
    const newStyles = parseClasses(element.classList);

    // remove styles that no longer exist
    for (let key in prevStyles) {
        if (!(key in newStyles)) {
            element.style.removeProperty(key);
        }
    }

    // add / update styles
    for (let key in newStyles) {
        if (prevStyles[key] !== newStyles[key]) {
            element.style.setProperty(key, newStyles[key]);
        }
    }

    styleStore.set(element, newStyles);
}

function parseClasses(classList) {
    const key = [...classList]
        .filter((cls) => cls.startsWith("chai-"))
        .join(" ");

    if (classCache.has(key)) {
        return classCache.get(key);
    }

    console.log("here");

    const styles = {};

    classList.forEach((cls) => {
        if (!cls.startsWith("chai-")) return;

        // static
        if (styleMap[cls]) {
            Object.assign(styles, styleMap[cls]);
            return;
        }

        // dynamic
        const dynamicStyles = parseDynamicClass(cls);
        if (dynamicStyles) {
            Object.assign(styles, dynamicStyles);
        }
    });

    classCache.set(key, styles);

    return styles;
}
