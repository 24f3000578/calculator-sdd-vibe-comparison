## Context

Greenfield change: no existing React app in the repository. The calculator is a client-only SPA built with Vite and React functional components. State is managed with `useState` (and optionally `useReducer` if operand/operator flow grows). Requirements are split across `calculator-operations` and `calculator-ui` specs.

## Goals / Non-Goals

**Goals:**

- Scaffold React + Vite with TypeScript (recommended) or JavaScript per team preference; default to TypeScript for clearer operand typing.
- Implement chained two-operand evaluation: digit entry → operator → digit entry → equals (standard four-function behavior).
- Support `+`, `−`, `×`, `÷`, decimal input, and **Clear** (full reset to initial state).
- Responsive layout: readable display and tappable buttons on phones; centered card layout on larger screens.
- Clean structure: `App` → `Calculator` (container + state) → `Display` + `Keypad` / `Button`.

**Non-Goals (deferred per proposal):**

- Calculation history panel or persistence
- Scientific functions (sin, log, etc.)
- Dark/light theme toggle
- Physical keyboard input mapping

## Decisions

### 1. Project location and tooling

- **Choice**: Create app at `calculator/` (or `apps/calculator/`) via `npm create vite@latest calculator -- --template react-ts`.
- **Rationale**: Isolates the demo app from future monorepo content; Vite is fast and matches the user’s technical requirements.
- **Alternative**: CRA — rejected (deprecated, slower).

### 2. State model

- **Choice**: Single `useReducer` or consolidated `useState` object in `Calculator` holding: `display` (string shown), `operand` (first number), `operator` (`+` | `-` | `*` | `/` | null), `waitingForOperand` (boolean after operator pressed).
- **Rationale**: Classic calculator FSM avoids scattered booleans; easy to extend for history later.
- **Alternative**: Eval on every button via `eval()` — rejected (security, imprecise floats).

### 3. Arithmetic and edge cases

- **Choice**: Parse display strings to numbers for computation; use JavaScript arithmetic with optional rounding for display (e.g. limit decimal places).
- **Division by zero**: Show `Error` or `Cannot divide by zero` on display; further input clears via **Clear**.
- **Clear**: Resets display to `0`, clears operand, operator, and waiting flag.

### 4. UI and styling

- **Choice**: CSS Modules or a single `Calculator.css` with CSS Grid for the button pad; mobile-first media queries (`min-width: 480px`) for max-width container.
- **Rationale**: No extra UI library dependency for v1; keeps bundle small.
- **Alternative**: Tailwind — acceptable if already standard in org; not required here.

### 5. Component boundaries

| Component   | Responsibility                                      |
|------------|------------------------------------------------------|
| `App`      | Shell, global styles, mounts `Calculator`           |
| `Calculator` | State, handlers (`onDigit`, `onOperator`, `onClear`, `onEquals`) |
| `Display`  | Renders current display string                      |
| `Keypad`   | Grid of `Button` components, maps labels to handlers |
| `Button`   | Reusable styled button with `variant` (digit/op/action) |

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Floating-point display artifacts (e.g. `0.1 + 0.2`) | Format result for display; document as known JS limitation |
| Rapid double-tap on operators | Ignore or replace pending operator per common calculator UX |
| No keyboard support yet | Document in README; spec defers to future change |
| Scope creep into scientific/history | Non-goals enforced in tasks checklist |

## Migration Plan

Not applicable — new application. **Deploy**: `npm run build` produces static assets for any static host (Netlify, Vercel, GitHub Pages).

## Open Questions

- TypeScript vs JavaScript: default **TypeScript** unless user prefers JS-only template.
- App folder name: `calculator` vs root-level Vite project — recommend `calculator/` subdirectory.
