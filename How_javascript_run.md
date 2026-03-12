javascript execution context

code----> Global execution context

execution context
1.Global execution context
2.Functional execution context
3.Eval execution context(generally seen in mongo)

📌 JAVASCRIPT EXECUTION CONTEXT – VISUAL BLOCK REPRESENTATION

CODE:
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
let total = num1 + num2;
return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

🚀 STEP 1: GLOBAL EXECUTION CONTEXT CREATED
(Everything starts here)

CALL STACK:
┌──────────────────────────┐
│ Global Execution Context│
└──────────────────────────┘

🧠 STEP 2: MEMORY CREATION PHASE (HOISTING)
(JS scans full code before execution)

GLOBAL MEMORY (Creation Phase):
┌──────────────────────────┐
│ val1 → undefined │
│ val2 → undefined │
│ addNum → function {...} │
│ result1 → undefined │
│ result2 → undefined │
└──────────────────────────┘

⚙️ STEP 3: EXECUTION PHASE (Line by Line)

Line: let val1 = 10;
┌──────────────────────────┐
│ val1 → 10 │
└──────────────────────────┘

Line: let val2 = 5;
┌──────────────────────────┐
│ val1 → 10 │
│ val2 → 5 │
└──────────────────────────┘

🔥 STEP 4: FUNCTION CALL → addNum(val1, val2)
(New Execution Context Created)

CALL STACK:
┌──────────────────────────┐
│ addNum() Execution EC │ ← New box (Top)
├──────────────────────────┤
│ Global Execution EC │
└──────────────────────────┘

📦 addNum() EXECUTION CONTEXT (FIRST CALL)

Memory Phase (Function EC):
┌──────────────────────────┐
│ num1 → undefined │
│ num2 → undefined │
│ total → undefined │
└──────────────────────────┘

Execution Phase:
Arguments passed:
num1 = 10
num2 = 5

Computation:
total = num1 + num2 = 15

Return:
return 15 → goes back to Global EC

CALL STACK after return:
┌──────────────────────────┐
│ Global Execution EC │
└──────────────────────────┘

GLOBAL MEMORY UPDATE:
┌──────────────────────────┐
│ result1 → 15 │
└──────────────────────────┘

🔥 STEP 5: SECOND FUNCTION CALL → addNum(10, 2)
(Again NEW Execution Context – fresh box)

CALL STACK:
┌──────────────────────────┐
│ addNum() Execution EC │ ← New fresh context
├──────────────────────────┤
│ Global Execution EC │
└──────────────────────────┘

📦 addNum() EXECUTION CONTEXT (SECOND CALL)

Memory Phase:
┌──────────────────────────┐
│ num1 → undefined │
│ num2 → undefined │
│ total → undefined │
└──────────────────────────┘

Execution Phase:
num1 = 10
num2 = 2
total = 12
return 12 → back to Global EC

CALL STACK after completion:
┌──────────────────────────┐
│ Global Execution EC │
└──────────────────────────┘

🎯 FINAL GLOBAL MEMORY (After Full Execution)
┌──────────────────────────┐
│ val1 → 10 │
│ val2 → 5 │
│ addNum → function {...} │
│ result1 → 15 │
│ result2 → 12 │
└──────────────────────────┘

🧠 CORE VISUAL RULE:
Global EC (created once)
↓
Function Call → New Execution Context (box)
↓
Executes → Returns Value
↓
Execution Context gets removed from Call Stack

<!-- Why use link at react router -->

when we use a tag then complete page will reload that why a tag is not used so we use
Link
