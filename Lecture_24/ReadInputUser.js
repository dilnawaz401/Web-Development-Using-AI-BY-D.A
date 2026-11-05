

// Program 1: Ask user information and display a personalized message.
function runPersonalizedMessageProgram() {
  const userName = prompt("Enter your name:");
  const userCity = prompt("Enter your city:");
  const userHobby = prompt("Enter your favorite hobby:");

  if (!userName || !userCity || !userHobby) {
    const message = "You cancelled or missed some information.";
    alert(message);
    console.log(message);
    return;
  }

  const personalizedMessage = `Hello ${userName}! You are from ${userCity} and your favorite hobby is ${userHobby}.`;
  alert(personalizedMessage);
  console.log(personalizedMessage);
}

// Program 2: Ask user information and check driving qualification.
function runDrivingQualificationProgram() {
  const driverName = prompt("Enter your name:");
  const ageInput = prompt("Enter your age:");
  const licenseInput = prompt("Do you have a valid driving license? (yes/no)");

  const age = Number(ageInput);
  const hasLicense =
    licenseInput !== null && licenseInput.trim().toLowerCase() === "yes";

  let drivingMessage = "";

  if (!driverName || ageInput === null || !licenseInput) {
    drivingMessage = "You cancelled or missed some information.";
  } else if (Number.isNaN(age)) {
    drivingMessage = "Invalid age entered. Please refresh and try again.";
  } else if (age >= 18 && hasLicense) {
    drivingMessage = `${driverName}, you are qualified to drive a car.`;
  } else {
    drivingMessage = `${driverName}, you are not qualified to drive a car.`;
  }

  alert(drivingMessage);
  console.log(drivingMessage);
}

runPersonalizedMessageProgram();
runDrivingQualificationProgram();
