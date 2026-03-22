const styleMap = {
    //#region spacing
    "chai-mx-auto": { "margin-left": "auto", "margin-right": "auto" },
    //#endregion

    //#region sizing
    "chai-w-full": { width: "100%" },
    "chai-h-full": { height: "100%" },

    "chai-w-screen": { width: "100vw" },
    "chai-h-screen": { height: "100vh" },

    "chai-h-dvh": { height: "100dvh" },
    "chai-w-dvw": { width: "100dvw" },

    "chai-h-svh": { height: "100svh" },
    "chai-w-svw": { width: "100svw" },

    "chai-h-lvh": { height: "100lvh" },
    "chai-w-lvw": { width: "100lvw" },
    //#endregion

    //#region typography
    "chai-text-xs": { "font-size": "12px" },
    "chai-text-sm": { "font-size": "14px" },
    "chai-text-base": { "font-size": "16px" },
    "chai-text-lg": { "font-size": "18px" },
    "chai-text-xl": { "font-size": "20px" },
    "chai-text-2xl": { "font-size": "24px" },
    "chai-text-3xl": { "font-size": "30px" },
    "chai-text-4xl": { "font-size": "36px" },
    "chai-text-5xl": { "font-size": "48px" },
    "chai-text-6xl": { "font-size": "60px" },
    "chai-text-7xl": { "font-size": "72px" },
    "chai-text-8xl": { "font-size": "96px" },
    "chai-text-9xl": { "font-size": "128px" },

    "chai-text-left": { "text-align": "left" },
    "chai-text-center": { "text-align": "center" },
    "chai-text-right": { "text-align": "right" },
    "chai-text-justify": { "text-align": "justify" },
    "chai-text-start": { "text-align": "start" },
    "chai-text-end": { "text-align": "end" },

    "chai-font-thin": { "font-weight": "100" },
    "chai-font-extralight": { "font-weight": "200" },
    "chai-font-light": { "font-weight": "300" },
    "chai-font-normal": { "font-weight": "400" },
    "chai-font-medium": { "font-weight": "500" },
    "chai-font-semibold": { "font-weight": "600" },
    "chai-font-bold": { "font-weight": "700" },
    "chai-font-extrabold": { "font-weight": "800" },
    "chai-font-black": { "font-weight": "900" },

    "chai-uppercase": { "text-transform": "uppercase" },
    "chai-lowercase": { "text-transform": "lowercase" },
    "chai-capitalize": { "text-transform": "capitalize" },
    "chai-normal-case": { "text-transform": "none" },

    "chai-underline": { "text-decoration": "underline" },
    "chai-overline": { "text-decoration": "overline" },
    "chai-line-through": { "text-decoration": "line-through" },
    "chai-no-underline": { "text-decoration": "none" },
    //#endregion

    //#region border
    "chai-border": {
        "border-width": "1px",
        "border-style": "solid",
    },

    "chai-border-solid": { "border-style": "solid" },
    "chai-border-dashed": { "border-style": "dashed" },
    "chai-border-dotted": { "border-style": "dotted" },
    "chai-border-double": { "border-style": "double" },
    "chai-border-none": { "border-style": "none" },

    "chai-rounded-none": { "border-radius": "0px" },
    "chai-rounded-sm": { "border-radius": "4px" },
    "chai-rounded-md": { "border-radius": "6px" },
    "chai-rounded-lg": { "border-radius": "8px" },
    "chai-rounded-xl": { "border-radius": "12px" },
    "chai-rounded-2xl": { "border-radius": "16px" },
    "chai-rounded-3xl": { "border-radius": "24px" },
    "chai-rounded-4xl": { "border-radius": "32px" },
    "chai-rounded-full": { "border-radius": "9999px" },
    //#endregion

    //#region cursor
    "chai-cursor-pointer": { cursor: "pointer" },
    "chai-cursor-default": { cursor: "default" },
    "chai-cursor-not-allowed": { cursor: "not-allowed" },
    "chai-cursor-text": { cursor: "text" },
    "chai-cursor-move": { cursor: "move" },
    //#endregion

    //#region display
    "chai-block": { display: "block" },
    "chai-inline": { display: "inline" },
    "chai-inline-block": { display: "inline-block" },
    "chai-hidden": { display: "none" },
    //#endregion

    //#region flex and grid
    "chai-flex": { display: "flex" },
    "chai-inline-flex": { display: "inline-flex" },
    "chai-grid": { display: "grid" },
    "chai-inline-grid": { display: "inline-grid" },

    "chai-flex-row": { "flex-direction": "row" },
    "chai-flex-row-reverse": { "flex-direction": "row-reverse" },
    "chai-flex-col": { "flex-direction": "column" },
    "chai-flex-col-reverse": { "flex-direction": "column-reverse" },

    "chai-flex-wrap": { "flex-wrap": "wrap" },
    "chai-flex-nowrap": { "flex-wrap": "nowrap" },
    "chai-flex-wrap-reverse": { "flex-wrap": "wrap-reverse" },

    "chai-items-start": { "align-items": "flex-start" },
    "chai-items-center": { "align-items": "center" },
    "chai-items-end": { "align-items": "flex-end" },
    "chai-items-stretch": { "align-items": "stretch" },
    "chai-items-baseline": { "align-items": "baseline" },

    "chai-justify-start": { "justify-content": "flex-start" },
    "chai-justify-center": { "justify-content": "center" },
    "chai-justify-end": { "justify-content": "flex-end" },
    "chai-justify-between": { "justify-content": "space-between" },
    "chai-justify-around": { "justify-content": "space-around" },
    "chai-justify-evenly": { "justify-content": "space-evenly" },

    "chai-justify-items-start": { "justify-items": "start" },
    "chai-justify-items-center": { "justify-items": "center" },
    "chai-justify-items-end": { "justify-items": "end" },
    "chai-justify-items-stretch": { "justify-items": "stretch" },

    "chai-content-start": { "align-content": "start" },
    "chai-content-center": { "align-content": "center" },
    "chai-content-end": { "align-content": "end" },
    "chai-content-between": { "align-content": "space-between" },
    "chai-content-around": { "align-content": "space-around" },
    "chai-content-evenly": { "align-content": "space-evenly" },

    //#endregion

    //#region position
    "chai-static": { position: "static" },
    "chai-relative": { position: "relative" },
    "chai-absolute": { position: "absolute" },
    "chai-fixed": { position: "fixed" },
    "chai-sticky": { position: "sticky" },

    "chai-top-0": { top: "0" },
    "chai-left-0": { left: "0" },
    "chai-right-0": { right: "0" },
    "chai-bottom-0": { bottom: "0" },
    //#endregion

    //#region misc
    "chai-overflow-hidden": { overflow: "hidden" },
    "chai-overflow-auto": { overflow: "auto" },
    "chai-overflow-scroll": { overflow: "scroll" },

    "chai-overflow-x-hidden": { "overflow-x": "hidden" },
    "chai-overflow-x-auto": { "overflow-x": "auto" },
    "chai-overflow-x-scroll": { "overflow-x": "scroll" },

    "chai-overflow-y-hidden": { "overflow-y": "hidden" },
    "chai-overflow-y-auto": { "overflow-y": "auto" },
    "chai-overflow-y-scroll": { "overflow-y": "scroll" },

    "chai-object-cover": { "object-fit": "cover" },
    "chai-object-contain": { "object-fit": "contain" },
    "chai-object-fill": { "object-fit": "fill" },

    "chai-whitespace-nowrap": { "white-space": "nowrap" },
    "chai-whitespace-pre": { "white-space": "pre" },

    "chai-truncate": {
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
    },
    "chai-text-ellipsis": { "text-overflow": "ellipsis" },
    "chai-text-clip": { "text-overflow": "clip" },

    "chai-box-border": { "box-sizing": "border-box" },
    "chai-box-content": { "box-sizing": "content-box" },

    "chai-opacity-0": { opacity: "0" },
    "chai-opacity-50": { opacity: "0.5" },
    "chai-opacity-100": { opacity: "1" },
    //#endregion
};

export default styleMap;
