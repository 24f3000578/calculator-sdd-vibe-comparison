## ADDED Requirements

### Requirement: Display current value

The calculator UI SHALL include a display area that shows the value the user is entering or the result of the last operation.

#### Scenario: Show entered digits

- **WHEN** the user presses digit keys
- **THEN** the display SHALL update to reflect the current operand string

#### Scenario: Show result after equals

- **WHEN** the user completes an operation with `=`
- **THEN** the display SHALL show the computed result

### Requirement: Keypad for digits and operators

The calculator UI SHALL present a keypad with digit buttons `0`–`9`, operator buttons for `+`, `−`, `×`, `÷`, an equals button, a decimal button, and a **Clear** button.

#### Scenario: All core controls visible

- **WHEN** the calculator is rendered
- **THEN** the user SHALL see buttons for digits 0–9, four operators, equals, decimal, and **Clear**

### Requirement: Responsive layout

The calculator UI SHALL be usable on narrow (mobile) and wide (desktop) viewports without horizontal scrolling of the keypad.

#### Scenario: Mobile viewport

- **WHEN** the viewport width is below 480px
- **THEN** the calculator layout SHALL fit within the viewport width
- **AND** buttons SHALL remain large enough for touch interaction (minimum ~44px touch target where feasible)

#### Scenario: Desktop viewport

- **WHEN** the viewport width is 480px or wider
- **THEN** the calculator MAY be presented in a centered container with constrained max-width for readability

### Requirement: Functional React implementation

The UI SHALL be implemented with React functional components and React hooks for state management.

#### Scenario: Component structure

- **WHEN** inspecting the implementation
- **THEN** the app SHALL use functional components (not class components)
- **AND** calculator state SHALL be managed with React hooks (e.g. `useState` or `useReducer`) in a parent calculator container component
