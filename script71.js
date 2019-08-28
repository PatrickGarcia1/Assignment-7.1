var age = prompt("How old are you?");

if (age < 0) {
    console.error("Age cannot be negative");
} else if (age == 21) {
    console.log("Happy 21st Birthday!!");
} else if ((age % 2) !== 0) {
    console.log("Your age is odd!");
} else if ((age % 2) == 0) {
    console.log("Your age is even!");
}