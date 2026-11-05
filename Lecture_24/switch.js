// example 1
const userRole = "admin";
switch (userRole) {
    case "admin":
        console.log("You have full access.");
        break;
    case "editor":
        console.log("You can edit content.");
        break;
    case "viewer":
        console.log("You can view content.");
        break;
    default:
        console.log("Invalid role.");
};

// example 2: message based on day of the week
const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Tuesday":
        console.log("Keep going, you are doing great.");
        break;
    case "Wednesday":
        console.log("Midweek already.");
        break;
    case "Thursday":
        console.log("Almost the weekend.");
        break;
    case "Friday":
        console.log("Last working day of the week.");
        break;
    case "Saturday":
        console.log("Enjoy your weekend.");
        break;
    case "Sunday":
        console.log("Rest and prepare for the new week.");
        break;
    default:
        console.log("Invalid day.");
}