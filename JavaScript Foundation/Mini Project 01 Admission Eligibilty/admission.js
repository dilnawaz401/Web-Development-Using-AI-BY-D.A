const MINIMUM_MATH_GRADE = 60;
const MINIMUM_ENGLISH_GRADE = 50;
const MINIMUM_OVERALL_AVERAGE = 65;

const form = document.querySelector("#admission-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const grades = {
    Mathematics: Number(document.querySelector("#mathematics").value),
    English: Number(document.querySelector("#english").value),
    Physics: Number(document.querySelector("#physics").value),
    Chemistry: Number(document.querySelector("#chemistry").value),
    "Computer Science": Number(
      document.querySelector("#computer-science").value
    ),
  };

  if (!name || Object.values(grades).some((grade) => !Number.isFinite(grade))) {
    result.textContent = "Please enter your name and all five grades.";
    result.className = "result error";
    return;
  }

  const average =
    Object.values(grades).reduce((total, grade) => total + grade, 0) /
    Object.keys(grades).length;
  const requirementsNotMet = [];

  if (grades.Mathematics < MINIMUM_MATH_GRADE) {
    requirementsNotMet.push(
      `Mathematics grade must be at least ${MINIMUM_MATH_GRADE}.`
    );
  }
  if (grades.English < MINIMUM_ENGLISH_GRADE) {
    requirementsNotMet.push(
      `English grade must be at least ${MINIMUM_ENGLISH_GRADE}.`
    );
  }
  if (average < MINIMUM_OVERALL_AVERAGE) {
    requirementsNotMet.push(
      `Overall average must be at least ${MINIMUM_OVERALL_AVERAGE}.`
    );
  }

  const heading =
    requirementsNotMet.length === 0
      ? "Eligible for admission to the Software Engineering Program."
      : "Not eligible for admission to the Software Engineering Program.";

  result.replaceChildren();
  const summary = document.createElement("p");
  summary.textContent = `${name}: ${heading} Overall average: ${average.toFixed(
    1
  )}%.`;
  result.append(summary);

  if (requirementsNotMet.length > 0) {
    const list = document.createElement("ul");
    for (const requirement of requirementsNotMet) {
      const item = document.createElement("li");
      item.textContent = requirement;
      list.append(item);
    }
    result.append(list);
  }

  result.className =
    requirementsNotMet.length === 0 ? "result success" : "result failure";
});
