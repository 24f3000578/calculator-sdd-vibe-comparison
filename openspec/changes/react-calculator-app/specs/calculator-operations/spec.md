## ADDED Requirements

### Requirement: Basic arithmetic operations

The calculator SHALL support addition, subtraction, multiplication, and division as binary operations between two operands entered via the keypad.

#### Scenario: Addition

- **WHEN** the user enters a first number, presses `+`, enters a second number, and presses `=`
- **THEN** the display SHALL show the sum of the two operands

#### Scenario: Subtraction

- **WHEN** the user enters a first number, presses `−`, enters a second number, and presses `=`
- **THEN** the display SHALL show the difference of the two operands

#### Scenario: Multiplication

- **WHEN** the user enters a first number, presses `×`, enters a second number, and presses `=`
- **THEN** the display SHALL show the product of the two operands

#### Scenario: Division

- **WHEN** the user enters a first number, presses `÷`, enters a second number, and presses `=`
- **THEN** the display SHALL show the quotient of the two operands (second operand non-zero)

### Requirement: Clear resets calculator state

The calculator SHALL provide a **Clear** control that resets all operation state to the initial idle state.

#### Scenario: Clear after input

- **WHEN** the user has entered digits or selected an operator and presses **Clear**
- **THEN** the display SHALL show `0` (or equivalent initial value)
- **AND** any stored first operand, pending operator, and in-progress second operand SHALL be discarded

### Requirement: Division by zero handling

The calculator SHALL NOT crash when division by zero is attempted.

#### Scenario: Divide by zero

- **WHEN** the user attempts to divide by zero (second operand is 0) and presses `=`
- **THEN** the display SHALL show an error indication (e.g. `Error` or a clear error message)
- **AND** the user SHALL be able to recover using **Clear**

### Requirement: Decimal input

The calculator SHALL allow decimal numbers in operands.

#### Scenario: Enter decimal operand

- **WHEN** the user presses the decimal key during digit entry
- **THEN** the display SHALL append a decimal separator to the current operand
- **AND** pressing the decimal key again for the same operand SHALL NOT add a second separator
