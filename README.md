[![Netlify Status](https://api.netlify.com/api/v1/badges/fb755542-ceba-4628-9023-61ff7b040bb1/deploy-status)](https://app.netlify.com/sites/marvel-fitness/deploys)



# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

---

# vue study

- [ ] [Using Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [ ] [Using Custom Directives](https://vuejs.org/api/sfc-script-setup.html#using-custom-directives)
- [ ] [Custom Directives](https://vuejs.org/guide/reusability/custom-directives.html)

---

# create project using vite

```bash
$ npm create vite@latest project-name
```

---

# tailwindcss

**_[tailwindcss](https://tailwindcss.com/)_**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### setting in tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### setting in style.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# vue-router

**_[vue Router](https://router.vuejs.org/)_**

```bash
npm install vue-router@4
```

### create file 'index.ts' in './src/routes'

create route

### setting at main.ts

```typescript
import router from "./router/index";
createApp(App).use(router).mount("#app");
```

---

# config path

### tsconfig.json

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
```

### vite.config.ts

```typescript
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
});
```

---

# node packages

### heroicons

```bash
npm install @heroicons/vue
```

### headlessui

```bash
npm install @headlessui/vue
```

---

# ERROR

### cannot find name 'process'.

```bash
npm i --save-dev @types/node
```
