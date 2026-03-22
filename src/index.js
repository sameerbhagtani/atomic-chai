import { scanNode, observeDOM } from "./domManager.js";
import { addCustomClass } from "./styleManager.js";

function injectResetStyles() {
    if (document.getElementById("atomic-chai-reset")) return;

    const style = document.createElement("style");
    style.id = "atomic-chai-reset";

    style.textContent = `
        *,
        ::after,
        ::before,
        ::backdrop,
        ::file-selector-button {
            box-sizing: border-box;
            border: 0 solid;
            margin: 0;
            padding: 0;
        }

        html {
            line-height: 1.5;
            -webkit-text-size-adjust: 100%;
            tab-size: 4;
            font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }

        body {
            line-height: inherit;
            cursor: default;
            -webkit-font-smoothing: antialiased;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-size: inherit;
            font-weight: inherit;
        }

        input, button, textarea, select {
            font: inherit;
            color: inherit;
        }

        textarea {
            resize: vertical;
        }

        button {
            all: unset;
            cursor: pointer;
        }

        button:focus-visible {
            outline: auto;
        }

        a {
            color: inherit;
            text-decoration: inherit;
        }

        ol,
        ul {
            list-style: none;
        }

        img,
        svg,
        video,
        canvas,
        audio,
        iframe,
        embed,
        object {
            display: block;
            vertical-align: middle;
        }

        img,
        video {
            max-width: 100%;
            height: auto;
        }

        table {
            border-collapse: collapse;
        }

        b,
        strong {
            font-weight: bolder;
        }

        code,
        pre {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
    `;

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

export { AtomicChai };
export default AtomicChai;
