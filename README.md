# AtomicChai ☕️

AtomicChai is a lightweight **runtime CSS engine** that applies utility classes directly in the browser.

No build tools.  
No configuration.  
No compilation step.

Just include a script and start styling.

> Tailwind-style utilities - but fully runtime.

---

## 🚀 Features

### 🧼 Resets CSS by Default

AtomicChai includes a minimal reset so you start with a consistent baseline across browsers.

---

### ⚡️ Dynamic Utilities & Color Palette

Generate styles on the fly using dynamic values:

    chai-p-4 → padding: 16px
    chai-w-[300px] → width: 300px
    chai-text-orange-500 → color from palette

---

### 🔁 Reactive via MutationObserver

AtomicChai watches the DOM and automatically applies styles when elements or classes change.

No manual re-renders needed.

---

### 🧩 Works with Vanilla JS & React

Use it anywhere:

- Plain HTML
- React
- Any framework

No special integration required.

---

### 🛠 Extend with `AtomicChai.addClass()`

Add your own custom utilities at runtime:

    AtomicChai.addClass("chai-custom", {
      color: "red",
    });

---

## 📦 Usage

### 📥 Install via npm

    npm install atomic-chai

    import initAtomicChai from "atomic-chai";

    initAtomicChai();

---

### 🌐 Use via CDN

    <script src="https://unpkg.com/atomic-chai"></script>

That’s it - start using classes immediately.

---

## ⚙️ How it Works

AtomicChai operates entirely at runtime:

1. Scans the DOM for class names
2. Matches them against:
    - static utility map
    - dynamic regex rules
3. Converts them into inline styles
4. Applies styles directly to elements
5. Uses MutationObserver to react to changes

So whenever:

- new elements are added
- classes change

👉 styles are applied instantly

---

## 📚 Utilities

AtomicChai uses a **pattern-based utility system**.

---

### 🧱 Spacing

| Class                  | CSS                              |
| ---------------------- | -------------------------------- |
| chai-p-{val}           | padding: {val \* 4}px            |
| chai-px-{val}          | padding-left/right: {val \* 4}px |
| chai-py-{val}          | padding-top/bottom: {val \* 4}px |
| chai-pt/pr/pb/pl-{val} | directional padding              |
| chai-m-{val}           | margin: {val \* 4}px             |
| chai-mx/my-{val}       | axis margin                      |
| chai-mt/mr/mb/ml-{val} | directional margin               |
| chai-mx-auto           | margin-left/right: auto          |

---

### 📐 Sizing

| Class                         | CSS              |
| ----------------------------- | ---------------- |
| chai-w/h-{val}                | {val \* 4}px     |
| chai-w/h-[value]              | custom value     |
| chai-min/max-w/h-{val}        | scaled size      |
| chai-min/max-w/h-[value]      | custom size      |
| chai-w-full / chai-h-full     | 100%             |
| chai-w-screen / chai-h-screen | viewport         |
| chai-w-dvw / chai-h-dvh       | dynamic viewport |
| chai-w-svw / chai-h-svh       | small viewport   |
| chai-w-lvw / chai-h-lvh       | large viewport   |

---

### 🔤 Typography

| Class                         | CSS                         |
| ----------------------------- | --------------------------- |
| chai-text-{size}              | font-size scale (xs -> 9xl) |
| chai-text-left/center/right   | text-align                  |
| chai-font-{weight}            | 100 -> 900                  |
| chai-uppercase/lowercase      | text-transform              |
| chai-underline / line-through | text-decoration             |
| chai-text-[value]             | color OR font-size          |

---

### 🎨 Colors

| Class                     | CSS               |
| ------------------------- | ----------------- |
| chai-text-{color}-{shade} | text color        |
| chai-bg-{color}-{shade}   | background        |
| chai-text-black / white   | preset colors     |
| chai-bg-black / white     | preset bg         |
| chai-bg-[value]           | custom background |

---

### 📦 Layout & Flex/Grid

| Class                 | CSS               |
| --------------------- | ----------------- |
| chai-flex / chai-grid | display           |
| chai-flex-row/col     | direction         |
| chai-flex-wrap        | wrapping          |
| chai-items-\*         | align-items       |
| chai-justify-\*       | justify-content   |
| chai-gap-{val}        | gap: {val \* 4}px |
| chai-grid-cols-{val}  | grid columns      |
| chai-grid-rows-{val}  | grid rows         |

---

### 🔲 Borders

| Class                           | CSS           |
| ------------------------------- | ------------- |
| chai-border / chai-border-{val} | border width  |
| chai-border-{color}-{shade}     | border color  |
| chai-border-[value]             | custom border |
| chai-border-solid/dashed        | border style  |
| chai-rounded-\*                 | border radius |

---

### 📍 Position

| Class                            | CSS             |
| -------------------------------- | --------------- |
| chai-relative/absolute/fixed     | position        |
| chai-top/right/bottom/left-{val} | {val \* 4}px    |
| chai-top/right/...-[value]       | custom position |
| chai-z-{val}                     | z-index         |
| chai-z-[value]                   | custom z-index  |

---

### ⚙️ Misc

| Class                     | CSS              |
| ------------------------- | ---------------- |
| chai-overflow-\*          | overflow control |
| chai-object-cover/contain | object-fit       |
| chai-whitespace-nowrap    | white-space      |
| chai-truncate             | ellipsis         |
| chai-box-border/content   | box-sizing       |
| chai-opacity-{val}        | opacity          |
| chai-cursor-\*            | cursor           |

---

## 🤝 Contributing

Feel free to open issues or submit PRs!

---

## 📄 License

MIT © Sameer Bhagtani

---

## 💬 Final Note

AtomicChai is built with a simple philosophy:

> **Write utilities. Skip the build step. Stay in the browser.**
