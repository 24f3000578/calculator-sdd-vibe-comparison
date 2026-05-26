# Calculator

A responsive four-function calculator built with React, TypeScript, and Vite.

## Features

- Addition, subtraction, multiplication, and division
- Decimal input
- Clear (reset) button
- Division-by-zero error handling
- Mobile-first responsive layout

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

Static output is written to `dist/` for deployment to any static host.

## Project structure

```
src/
  components/   Calculator, Display, Keypad, Button
  utils/        calculate, formatDisplay
  types.ts      Shared TypeScript types
```

## Deferred enhancements

The following are planned for future changes but not included in v1:

- Calculation history
- Scientific calculator mode
- Dark/light theme toggle
- Keyboard input support
