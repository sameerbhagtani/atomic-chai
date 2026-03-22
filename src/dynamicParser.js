const colors = {
    red: {
        50: "#fef2f2",
        100: "#ffe2e2",
        200: "#ffc9c9",
        300: "#ffa2a2",
        400: "#ff6467",
        500: "#fb2c36",
        600: "#e7000b",
        700: "#c10007",
        800: "#9f0712",
        900: "#82181a",
        950: "#460809",
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd4",
        200: "#ffd6a8",
        300: "#ffb86a",
        400: "#ff8904",
        500: "#ff6900",
        600: "#f54900",
        700: "#ca3500",
        800: "#9f2d00",
        900: "#7e2a0c",
        950: "#441306",
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c2",
        200: "#fff085",
        300: "#ffdf20",
        400: "#fdc700",
        500: "#f0b100",
        600: "#d08700",
        700: "#a65f00",
        800: "#894b00",
        900: "#733e0a",
        950: "#432004",
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#b9f8cf",
        300: "#7bf1a8",
        400: "#05df72",
        500: "#00c950",
        600: "#00a63e",
        700: "#008236",
        800: "#016630",
        900: "#0d542b",
        950: "#032e15",
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bedbff",
        300: "#8ec5ff",
        400: "#51a2ff",
        500: "#2b7fff",
        600: "#155dfc",
        700: "#1447e6",
        800: "#193cb8",
        900: "#1c398e",
        950: "#162456",
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d4ff",
        300: "#dab2ff",
        400: "#c27aff",
        500: "#ad46ff",
        600: "#9810fa",
        700: "#8200db",
        800: "#6e11b0",
        900: "#59168b",
        950: "#3c0366",
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fccee8",
        300: "#fda5d5",
        400: "#fb64b6",
        500: "#f6339a",
        600: "#e60076",
        700: "#c6005c",
        800: "#a3004c",
        900: "#861043",
        950: "#510424",
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5dc",
        400: "#99a1af",
        500: "#6a7282",
        600: "#4a5565",
        700: "#364153",
        800: "#1e2939",
        900: "#101828",
        950: "#030712",
    },
};

const rules = [
    //#region spacing
    {
        match: /^chai-p-(\d+)$/,
        handler: ([_, value]) => ({
            padding: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-px-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-left": `${value * 4}px`,
            "padding-right": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-py-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-top": `${value * 4}px`,
            "padding-bottom": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-pt-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-top": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-pr-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-right": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-pb-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-bottom": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-pl-(\d+)$/,
        handler: ([_, value]) => ({
            "padding-left": `${value * 4}px`,
        }),
    },

    {
        match: /^chai-m-(\d+)$/,
        handler: ([_, value]) => ({
            margin: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-mx-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-left": `${value * 4}px`,
            "margin-right": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-my-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-top": `${value * 4}px`,
            "margin-bottom": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-mt-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-top": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-mr-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-right": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-mb-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-bottom": `${value * 4}px`,
        }),
    },
    {
        match: /^chai-ml-(\d+)$/,
        handler: ([_, value]) => ({
            "margin-left": `${value * 4}px`,
        }),
    },
    //#endregion

    //#region sizing
    {
        match: /^chai-w-(\d+)$/,
        handler: ([_, value]) => ({
            width: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-w-\[(.+)\]$/,
        handler: ([_, value]) => ({
            width: value,
        }),
    },
    {
        match: /^chai-h-(\d+)$/,
        handler: ([_, value]) => ({
            height: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-h-\[(.+)\]$/,
        handler: ([_, value]) => ({
            height: value,
        }),
    },
    //#endregion

    //#region colors & typography
    {
        match: /^chai-text-([a-z]+)-(\d{2,3})$/,
        handler: ([_, color, shade]) => {
            const hex = colors[color]?.[shade];
            if (!hex) return null;

            return {
                color: hex,
            };
        },
    },
    {
        match: /^chai-bg-([a-z]+)-(\d{2,3})$/,
        handler: ([_, color, shade]) => {
            const hex = colors[color]?.[shade];
            if (!hex) return null;

            return {
                "background-color": hex,
            };
        },
    },
    {
        match: /^chai-text-\[(.+)\]$/,
        handler: ([_, value]) => {
            // color
            if (
                value.startsWith("#") ||
                value.startsWith("rgb") ||
                value.startsWith("hsl") ||
                value === "transparent" ||
                value === "currentColor"
            ) {
                return { color: value };
            }

            // font-size
            return { "font-size": value };
        },
    },
    {
        match: /^chai-bg-\[(.+)\]$/,
        handler: ([_, value]) => ({
            "background-color": value,
        }),
    },
    {
        match: /^chai-font-\[(\d+)\]$/,
        handler: ([_, value]) => ({
            "font-weight": value,
        }),
    },
    //#endregion

    //#region border
    {
        match: /^chai-border-(\d+)$/,
        handler: ([_, value]) => ({
            "border-width": `${value}px`,
        }),
    },
    {
        match: /^chai-border-([a-z]+)-(\d{2,3})$/,
        handler: ([_, color, shade]) => {
            const hex = colors[color]?.[shade];
            if (!hex) return null;

            return {
                "border-color": hex,
            };
        },
    },
    {
        match: /^chai-border-\[(.+)\]$/,
        handler: ([_, value]) => ({
            "border-color": value,
        }),
    },
    //#endregion

    //#region gap
    {
        match: /^chai-gap-(\d+)$/,
        handler: ([_, value]) => ({
            gap: `${value * 4}px`,
        }),
    },
    //#endregion

    //#region grid
    {
        match: /^chai-grid-cols-(\d+)$/,
        handler: ([_, value]) => ({
            "grid-template-columns": `repeat(${value}, minmax(0, 1fr))`,
        }),
    },
    {
        match: /^chai-grid-rows-(\d+)$/,
        handler: ([_, value]) => ({
            "grid-template-rows": `repeat(${value}, minmax(0, 1fr))`,
        }),
    },
    //#endregion

    //#region position
    {
        match: /^chai-top-(\d+)$/,
        handler: ([_, value]) => ({
            top: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-right-(\d+)$/,
        handler: ([_, value]) => ({
            right: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-bottom-(\d+)$/,
        handler: ([_, value]) => ({
            bottom: `${value * 4}px`,
        }),
    },
    {
        match: /^chai-left-(\d+)$/,
        handler: ([_, value]) => ({
            left: `${value * 4}px`,
        }),
    },

    {
        match: /^chai-top-\[(.+)\]$/,
        handler: ([_, value]) => ({
            top: value,
        }),
    },
    {
        match: /^chai-left-\[(.+)\]$/,
        handler: ([_, value]) => ({
            left: value,
        }),
    },
    {
        match: /^chai-right-\[(.+)\]$/,
        handler: ([_, value]) => ({
            right: value,
        }),
    },
    {
        match: /^chai-bottom-\[(.+)\]$/,
        handler: ([_, value]) => ({
            bottom: value,
        }),
    },

    {
        match: /^chai-z-(\d+)$/,
        handler: ([_, value]) => ({
            "z-index": value,
        }),
    },
    {
        match: /^chai-z-\[(.+)\]$/,
        handler: ([_, value]) => ({
            "z-index": value,
        }),
    },
    //#endregion
];

export default function parseDynamicClass(cls) {
    for (const rule of rules) {
        const match = cls.match(rule.match);
        if (match) {
            return rule.handler(match);
        }
    }
    return null;
}
