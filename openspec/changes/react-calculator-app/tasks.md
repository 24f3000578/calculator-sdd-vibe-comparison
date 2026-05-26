## 1. Project setup

- [x] 1.1 Scaffold React + Vite app in `calculator/` using the `react-ts` template
- [x] 1.2 Verify dev server runs (`npm install`, `npm run dev`)
- [x] 1.3 Add base global styles and app shell in `App.tsx`

## 2. Calculator state and logic

- [x] 2.1 Create `Calculator` container with hook-based state (display, operand, operator, waitingForOperand)
- [x] 2.2 Implement digit and decimal input handlers per `calculator-operations` spec
- [x] 2.3 Implement operator selection and equals evaluation for `+`, `−`, `×`, `÷`
- [x] 2.4 Implement **Clear** handler to reset all state to initial values
- [x] 2.5 Handle division by zero with error display and recovery via **Clear**
- [x] 2.6 Format numeric results for display (limit spurious floating-point noise)

## 3. UI components

- [x] 3.1 Create `Display` component bound to current display string
- [x] 3.2 Create reusable `Button` component with variants (digit, operator, action)
- [x] 3.3 Create `Keypad` grid wiring all digit, operator, decimal, equals, and **Clear** buttons
- [x] 3.4 Compose `Calculator` with `Display` and `Keypad`; connect handlers

## 4. Responsive styling

- [x] 4.1 Style calculator card and display (mobile-first)
- [x] 4.2 Style keypad CSS Grid with touch-friendly button sizes
- [x] 4.3 Add media query for wider viewports (centered, max-width container)

## 5. Verification and documentation

- [x] 5.1 Manually verify all four operations and **Clear** against spec scenarios
- [x] 5.2 Manually verify responsive layout on narrow and wide viewport
- [x] 5.3 Add `calculator/README.md` with run/build instructions and list of deferred enhancements (history, scientific mode, theme, keyboard)
