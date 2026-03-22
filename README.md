# AtomicChai ☕️

AtomicChai is a lightweight **runtime CSS engine** that applies utility classes directly in the browser.

No build tools.  
No configuration.  
No compilation step.

Just include a script and start styling.

> Tailwind-style utilities - but fully runtime.

---

## 🚀 Features

### Resets CSS by Default

AtomicChai includes a minimal reset so you start with a consistent baseline across browsers.

### Dynamic Utilities & Color Palette

Generate styles on the fly using dynamic values:

```
chai-p-4 -> padding: 16px
chai-w-[300px] -> width: 300px
chai-text-orange-500 -> color from palette
```

### Reactive via MutationObserver

AtomicChai watches the DOM and automatically applies styles when elements or classes change.

No manual re-renders needed.

### Works with Vanilla JS & React

Use it anywhere:

- Plain HTML
- React
- Any framework

No special integration required.

### Extend with `AtomicChai.addClass()`

Add your own custom utilities at runtime:

```js
AtomicChai.addClass("chai-custom", {
    color: "red",
});
```

---

## 📦 Usage

### 📥 Install via npm

```bash
npm install atomic-chai
```

```js
import "atomic-chai";
```

### 🌐 Use via CDN

```js
<script src="https://unpkg.com/atomic-chai"></script>
```

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

### Spacing

| Class         | Effect                           |
| ------------- | -------------------------------- |
| chai-p-{val}  | padding: {val \* 4}px            |
| chai-px-{val} | padding-left/right: {val \* 4}px |
| chai-py-{val} | padding-top/bottom: {val \* 4}px |
| chai-pt-{val} | padding-top: {val \* 4}px        |
| chai-pr-{val} | padding-right: {val \* 4}px      |
| chai-pb-{val} | padding-bottom: {val \* 4}px     |
| chai-pl-{val} | padding-left: {val \* 4}px       |
| chai-m-{val}  | margin: {val \* 4}px             |
| chai-mx-{val} | margin-left/right: {val \* 4}px  |
| chai-my-{val} | margin-top/bottom: {val \* 4}px  |
| chai-mt-{val} | margin-top: {val \* 4}px         |
| chai-mr-{val} | margin-right: {val \* 4}px       |
| chai-mb-{val} | margin-bottom: {val \* 4}px      |
| chai-ml-{val} | margin-left: {val \* 4}px        |
| chai-mx-auto  | margin-left/right: auto          |

### Sizing

| Class              | Effect                   |
| ------------------ | ------------------------ |
| chai-w-{val}       | width: {val \* 4}px      |
| chai-w-[value]     | width: value             |
| chai-h-{val}       | height: {val \* 4}px     |
| chai-h-[value]     | height: value            |
| chai-max-w-{val}   | max-width: {val \* 4}px  |
| chai-max-w-[value] | max-width: value         |
| chai-max-h-{val}   | max-height: {val \* 4}px |
| chai-max-h-[value] | max-height: value        |
| chai-min-w-{val}   | min-width: {val \* 4}px  |
| chai-min-w-[value] | min-width: value         |
| chai-min-h-{val}   | min-height: {val \* 4}px |
| chai-min-h-[value] | min-height: value        |
| chai-w-full        | width: 100%              |
| chai-h-full        | height: 100%             |
| chai-w-screen      | width: 100vw             |
| chai-h-screen      | height: 100vh            |
| chai-w-dvw         | width: 100dvw            |
| chai-h-dvh         | height: 100dvh           |
| chai-w-svw         | width: 100svw            |
| chai-h-svh         | height: 100svh           |
| chai-w-lvw         | width: 100lvw            |
| chai-h-lvh         | height: 100lvh           |

### Colors

| Class                     | Effect                        |
| ------------------------- | ----------------------------- |
| chai-text-black / white   | color: #000 / #fff            |
| chai-bg-black / white     | background-color: #000 / #fff |
| chai-text-{color}-{shade} | color from palette            |
| chai-bg-{color}-{shade}   | background-color from palette |
| chai-text-[color]         | dynamic color                 |
| chai-bg-[value]           | dynamic background-color      |

### Typography

| Class                | Effect                        |
| -------------------- | ----------------------------- |
| chai-text-[size]     | dynamic font-size             |
| chai-text-xs         | font-size: 12px               |
| chai-text-sm         | font-size: 14px               |
| chai-text-base       | font-size: 16px               |
| chai-text-lg         | font-size: 18px               |
| chai-text-xl         | font-size: 20px               |
| chai-text-2xl        | font-size: 24px               |
| chai-text-3xl        | font-size: 30px               |
| chai-text-4xl        | font-size: 36px               |
| chai-text-5xl        | font-size: 48px               |
| chai-text-6xl        | font-size: 60px               |
| chai-text-7xl        | font-size: 72px               |
| chai-text-8xl        | font-size: 96px               |
| chai-text-9xl        | font-size: 128px              |
| chai-text-left       | text-align: left              |
| chai-text-center     | text-align: center            |
| chai-text-right      | text-align: right             |
| chai-text-justify    | text-align: justify           |
| chai-text-start      | text-align: start             |
| chai-text-end        | text-align: end               |
| chai-font-[val]      | dynamic font-weight           |
| chai-font-thin       | font-weight: 100              |
| chai-font-extralight | font-weight: 200              |
| chai-font-light      | font-weight: 300              |
| chai-font-normal     | font-weight: 400              |
| chai-font-medium     | font-weight: 500              |
| chai-font-semibold   | font-weight: 600              |
| chai-font-bold       | font-weight: 700              |
| chai-font-extrabold  | font-weight: 800              |
| chai-font-black      | font-weight: 900              |
| chai-uppercase       | text-transform: uppercase     |
| chai-lowercase       | text-transform: lowercase     |
| chai-capitalize      | text-transform: capitalize    |
| chai-normal-case     | text-transform: none          |
| chai-underline       | text-decoration: underline    |
| chai-overline        | text-decoration: overline     |
| chai-line-through    | text-decoration: line-through |
| chai-no-underline    | text-decoration: none         |

### Border

| Class                       | Effect                |
| --------------------------- | --------------------- |
| chai-border-{val}           | border-width: {val}px |
| chai-border-{color}-{shade} | border-color          |
| chai-border-[value]         | border-color          |
| chai-border                 | border-width: 1px     |
| chai-border-solid           | border-style: solid   |
| chai-border-dashed          | border-style: dashed  |
| chai-border-dotted          | border-style: dotted  |
| chai-border-double          | border-style: double  |
| chai-border-none            | border-style: none    |
| chai-rounded-none           | border-radius: 0px    |
| chai-rounded-sm             | border-radius: 4px    |
| chai-rounded-md             | border-radius: 6px    |
| chai-rounded-lg             | border-radius: 8px    |
| chai-rounded-xl             | border-radius: 12px   |
| chai-rounded-2xl            | border-radius: 16px   |
| chai-rounded-3xl            | border-radius: 24px   |
| chai-rounded-4xl            | border-radius: 32px   |
| chai-rounded-full           | border-radius: 9999px |

### Cursor

| Class                   | Effect              |
| ----------------------- | ------------------- |
| chai-cursor-pointer     | cursor: pointer     |
| chai-cursor-default     | cursor: default     |
| chai-cursor-not-allowed | cursor: not-allowed |
| chai-cursor-text        | cursor: text        |
| chai-cursor-move        | cursor: move        |

### Display

| Class             | Effect                |
| ----------------- | --------------------- |
| chai-block        | display: block        |
| chai-inline       | display: inline       |
| chai-inline-block | display: inline-block |
| chai-hidden       | display: none         |

### Flex & Grid

| Class                      | Effect                         |
| -------------------------- | ------------------------------ |
| chai-flex                  | display: flex                  |
| chai-inline-flex           | display: inline-flex           |
| chai-grid                  | display: grid                  |
| chai-inline-grid           | display: inline-grid           |
| chai-grid-cols-{n}         | repeat(n, 1fr)                 |
| chai-grid-rows-{n}         | repeat(n, 1fr)                 |
| chai-flex-row              | flex-direction: row            |
| chai-flex-row-reverse      | flex-direction: row-reverse    |
| chai-flex-col              | flex-direction: column         |
| chai-flex-col-reverse      | flex-direction: column-reverse |
| chai-flex-wrap             | flex-wrap: wrap                |
| chai-flex-nowrap           | flex-wrap: nowrap              |
| chai-flex-wrap-reverse     | flex-wrap: wrap-reverse        |
| chai-items-start           | align-items: flex-start        |
| chai-items-center          | align-items: center            |
| chai-items-end             | align-items: flex-end          |
| chai-items-stretch         | align-items: stretch           |
| chai-items-baseline        | align-items: baseline          |
| chai-justify-start         | justify-content: flex-start    |
| chai-justify-center        | justify-content: center        |
| chai-justify-end           | justify-content: flex-end      |
| chai-justify-between       | justify-content: space-between |
| chai-justify-around        | justify-content: space-around  |
| chai-justify-evenly        | justify-content: space-evenly  |
| chai-justify-items-start   | justify-items: start           |
| chai-justify-items-center  | justify-items: center          |
| chai-justify-items-end     | justify-items: end             |
| chai-justify-items-stretch | justify-items: stretch         |
| chai-content-start         | align-content: start           |
| chai-content-center        | align-content: center          |
| chai-content-end           | align-content: end             |
| chai-content-between       | align-content: space-between   |
| chai-content-around        | align-content: space-around    |
| chai-content-evenly        | align-content: space-evenly    |

### Gap

| Class          | Effect            |
| -------------- | ----------------- |
| chai-gap-{val} | gap: {val \* 4}px |

### Position

| Class               | Effect               |
| ------------------- | -------------------- |
| chai-static         | position: static     |
| chai-relative       | position: relative   |
| chai-absolute       | position: absolute   |
| chai-fixed          | position: fixed      |
| chai-sticky         | position: sticky     |
| chai-top-{val}      | top: {val \* 4}px    |
| chai-right-{val}    | right: {val \* 4}px  |
| chai-bottom-{val}   | bottom: {val \* 4}px |
| chai-left-{val}     | left: {val \* 4}px   |
| chai-top-[value]    | top: value           |
| chai-right-[value]  | right: value         |
| chai-bottom-[value] | bottom: value        |
| chai-left-[value]   | left: value          |
| chai-z-{val}        | z-index: val         |
| chai-z-[value]      | z-index: value       |
| chai-top-0          | top: 0               |
| chai-right-0        | right: 0             |
| chai-bottom-0       | bottom: 0            |
| chai-left-0         | left: 0              |

### Misc

| Class                  | Effect                                                                   |
| ---------------------- | ------------------------------------------------------------------------ |
| chai-overflow-hidden   | overflow: hidden                                                         |
| chai-overflow-auto     | overflow: auto                                                           |
| chai-overflow-scroll   | overflow: scroll                                                         |
| chai-overflow-x-hidden | overflow-x: hidden                                                       |
| chai-overflow-x-auto   | overflow-x: auto                                                         |
| chai-overflow-x-scroll | overflow-x: scroll                                                       |
| chai-overflow-y-hidden | overflow-y: hidden                                                       |
| chai-overflow-y-auto   | overflow-y: auto                                                         |
| chai-overflow-y-scroll | overflow-y: scroll                                                       |
| chai-object-cover      | object-fit: cover                                                        |
| chai-object-contain    | object-fit: contain                                                      |
| chai-object-fill       | object-fit: fill                                                         |
| chai-whitespace-nowrap | white-space: nowrap                                                      |
| chai-whitespace-pre    | white-space: pre                                                         |
| chai-truncate          | overflow: hidden;<br />text-overflow: ellipsis;<br />white-space: nowrap |
| chai-text-ellipsis     | text-overflow: ellipsis                                                  |
| chai-text-clip         | text-overflow: clip                                                      |
| chai-box-border        | box-sizing: border-box                                                   |
| chai-box-content       | box-sizing: content-box                                                  |
| chai-opacity-0         | opacity: 0                                                               |
| chai-opacity-50        | opacity: 0.5                                                             |
| chai-opacity-100       | opacity: 1                                                               |

## 🤝 Contributing

Feel free to open issues or submit PRs!

---

## 📄 License

MIT © Sameer Bhagtani

---

## 💬 Final Note

AtomicChai is built with a simple philosophy:

> **Write utilities. Skip the build step. Stay in the browser.**
