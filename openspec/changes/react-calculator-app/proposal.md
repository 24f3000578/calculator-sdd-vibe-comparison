## Why

A standalone React calculator provides a focused learning and demo surface for modern frontend patterns (Vite, hooks, component composition) while delivering immediate utility for basic arithmetic. Building it now establishes a clean foundation that can grow into history, scientific mode, theming, and keyboard support without rework.

## What Changes

- Scaffold a new React + Vite application with functional components and hook-based state.
- Implement a calculator with addition, subtraction, multiplication, division, and a clear (reset) action.
- Provide a responsive UI that works on mobile and desktop viewports.
- Organize code into a small, maintainable component tree (display, keypad, app shell).
- Document future enhancements (history, scientific mode, theme toggle, keyboard input) as out of scope for this change.

## Capabilities

### New Capabilities

- `calculator-operations`: Evaluates two-operand arithmetic (+, −, ×, ÷), handles clear/reset, and defines display/operand behavior (including division by zero).
- `calculator-ui`: Responsive layout, visual display of the current value, and an accessible button grid for digits and operators.

### Modified Capabilities

<!-- None — greenfield project with no existing specs -->

## Impact

- **New codebase**: Vite + React project (likely under a dedicated app directory at repo root).
- **Dependencies**: `react`, `react-dom`, Vite toolchain; no backend or API.
- **Systems**: Client-only; no database, auth, or deployment changes in this proposal.
