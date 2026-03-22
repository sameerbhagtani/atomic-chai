import styleMap from "./styleMap.js";
import styleStore from "./styleStore.js";
import parseDynamicClass from "./dynamicParser.js";

export default function applyStyles(element) {
    const prevStyles = styleStore.get(element) || {};

    // remove all the styles that we previously set
    for (let key in prevStyles) {
        element.style.removeProperty(key);
    }

    const styles = parseClasses(element.classList);

    for (let key in styles) {
        element.style.setProperty(key, styles[key]);
    }

    styleStore.set(element, styles);
}

function parseClasses(classList) {
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

    return styles;
}
