# Atomic Chai ☕️

A lightweight, client-side utility CSS engine inspired by Tailwind, but with **zero build step**.

Just add classes like `chai-p-4` or `chai-bg-blue`, and Atomic Chai will automatically apply inline styles at runtime.

---

## ✨ Features

- No build step: works directly in the browser
- Utility-first (Tailwind-like classes)
- Reactive: automatically applies styles to new DOM elements
- Uses `MutationObserver` for live updates
- Lightweight and simple

---

## 📦 Installation

```bash
npm install atomic-chai
```

---

## 🚀 Usage

### JavaScript

```js
import initAtomicChai from "atomic-chai";
```

---

### HTML (CDN)

```html
<script src="https://unpkg.com/atomic-chai"></script>
```

---

## 💡 Example

```html
<div class="chai-p-4 chai-bg-blue chai-text-white chai-rounded">
    Hello from Atomic Chai 🚀
</div>
```

👉 This will automatically become:

```html
<div
    style="padding:16px; background-color:blue; color:white; border-radius:6px;"
>
    Hello from Atomic Chai 🚀
</div>
```

---

## 🧠 How It Works

1. Scans the DOM for classes starting with `chai-`
2. Maps them to predefined styles
3. Applies inline styles dynamically
4. Observes DOM changes using `MutationObserver`
5. Updates styles when elements or classes change

---

## 🤝 Contributing

Feel free to open issues or submit PRs!

---

## 📄 License

MIT © Sameer Bhagtani
