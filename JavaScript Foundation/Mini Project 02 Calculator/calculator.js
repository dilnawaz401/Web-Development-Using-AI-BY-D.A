(function () {
    const displayEl = document.getElementById("display");
    const expressionEl = document.getElementById("expression");
    const keysEl = document.querySelector(".keys");

    let displayStr = "0";
    let storedValue = null;
    let pendingOp = null;
    let waitingForOperand = false;

    function updateDisplay() {
        displayEl.textContent = displayStr;
    }

    function updateExpression(rightValue) {
        if (pendingOp === null || storedValue === null) {
            expressionEl.textContent = "";
            return;
        }

        const symbols = { "+": "+", "-": "−", "*": "×", "/": "÷" };
        const expression = formatNumber(storedValue) + " " + symbols[pendingOp];
        expressionEl.textContent =
            rightValue === undefined
                ? expression
                : expression + " " + rightValue;
    }

    function clearOpHighlight() {
        keysEl.querySelectorAll(".key--op.is-selected").forEach(function (el) {
            el.classList.remove("is-selected");
        });
    }

    function setOpHighlight(op) {
        clearOpHighlight();
        if (!op) return;
        const btn = keysEl.querySelector('.key--op[data-op="' + op + '"]');
        if (btn) btn.classList.add("is-selected");
    }

    function getDisplayNumber() {
        const n = parseFloat(displayStr);
        if (Number.isNaN(n)) {
            throw new Error("Invalid number on display");
        }
        return n;
    }

    function applyOperation(left, right, op) {
        switch (op) {
            case "+":
                return left + right;
            case "-":
                return left - right;
            case "*":
                return left * right;
            case "/":
                if (right === 0) {
                    throw new Error("Cannot divide by zero");
                }
                return left / right;
            default:
                throw new Error("Unknown operator");
        }
    }

    function formatNumber(n) {
        if (typeof n !== "number" || !Number.isFinite(n)) {
            throw new Error("Invalid result");
        }
        const abs = Math.abs(n);
        if (abs !== 0 && (abs >= 1e9 || abs < 1e-9)) {
            return String(parseFloat(n.toPrecision(9)));
        }
        let s = n.toString();
        if (s.length > 14) {
            s = parseFloat(n.toPrecision(12)).toString();
        }
        return s;
    }

    function showError() {
        displayStr = "Error";
        updateDisplay();
        expressionEl.textContent = "";
        storedValue = null;
        pendingOp = null;
        waitingForOperand = false;
        clearOpHighlight();
    }

    function handleClear() {
        try {
            displayStr = "0";
            expressionEl.textContent = "";
            storedValue = null;
            pendingOp = null;
            waitingForOperand = false;
            updateDisplay();
            clearOpHighlight();
        } catch (err) {
            showError();
        }
    }

    function inputDigit(digit) {
        try {
            if (waitingForOperand) {
                displayStr = digit;
                waitingForOperand = false;
            } else if (displayStr === "0") {
                displayStr = digit;
            } else {
                displayStr += digit;
            }
            updateExpression(displayStr);
            clearOpHighlight();
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function inputDecimal() {
        try {
            if (waitingForOperand) {
                displayStr = "0.";
                waitingForOperand = false;
            } else if (displayStr.indexOf(".") === -1) {
                displayStr += ".";
            }
            updateExpression(displayStr);
            clearOpHighlight();
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function runPendingCalculation() {
        const right = getDisplayNumber();
        const result = applyOperation(storedValue, right, pendingOp);
        return formatNumber(result);
    }

    function handleOperator(nextOp) {
        try {
            if (waitingForOperand) {
                pendingOp = nextOp;
                setOpHighlight(nextOp);
                updateExpression();
                return;
            }
            if (pendingOp !== null && storedValue !== null) {
                displayStr = runPendingCalculation();
                storedValue = parseFloat(displayStr);
            } else {
                storedValue = getDisplayNumber();
            }
            pendingOp = nextOp;
            waitingForOperand = true;
            updateExpression();
            setOpHighlight(nextOp);
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function handleEquals() {
        try {
            if (pendingOp === null || storedValue === null) {
                return;
            }
            updateExpression(displayStr);
            displayStr = runPendingCalculation();
            storedValue = null;
            pendingOp = null;
            waitingForOperand = true;
            clearOpHighlight();
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function handleSign() {
        try {
            if (displayStr === "0" || displayStr === "0.") {
                return;
            }
            if (displayStr.charAt(0) === "-") {
                displayStr = displayStr.slice(1);
            } else {
                displayStr = "-" + displayStr;
            }
            updateExpression(displayStr);
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function handlePercent() {
        try {
            const n = getDisplayNumber();
            displayStr = formatNumber(n / 100);
            waitingForOperand = true;
            updateExpression(displayStr);
            clearOpHighlight();
            updateDisplay();
        } catch (err) {
            showError();
        }
    }

    function onKeyClick(event) {
        const btn = event.target.closest("button");
        if (!btn || !keysEl.contains(btn)) {
            return;
        }

        if (displayStr === "Error") {
            handleClear();
        }

        try {
            if (btn.dataset.digit !== undefined) {
                inputDigit(btn.dataset.digit);
                return;
            }
            const action = btn.dataset.action;
            if (action === "decimal") {
                inputDecimal();
                return;
            }
            if (action === "clear") {
                handleClear();
                return;
            }
            if (action === "sign") {
                handleSign();
                return;
            }
            if (action === "percent") {
                handlePercent();
                return;
            }
            if (action === "equals") {
                handleEquals();
                return;
            }
            if (btn.dataset.op) {
                handleOperator(btn.dataset.op);
            }
        } catch (err) {
            showError();
        }
    }

    keysEl.addEventListener("click", onKeyClick);
})();
