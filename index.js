#! /usr/bin/env node
import inquirer from "inquirer";
// printing a wellcome messege
console.log("\n\tWELLCOME TO\'SAADS Q\' - CLI SIMPLE CALCULATOR\n");
const answers = await inquirer.prompt([{
        type: "number",
        name: "No1",
        message: "write your No1?",
    },
    {
        type: "number",
        name: "No2",
        message: "write your No2?",
    },
    {
        type: "list",
        name: "operator",
        message: "Select your operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLY", "DIVISION"],
    },
]);
const { No1, No2, operator } = answers;
if (No1 && No2 && operator) {
    let result = 0;
    if (operator === "ADDITION") {
        result = No1 + No2;
    }
    else if (operator === "SUBTRACTION") {
        result = No1 - No2;
    }
    else if (operator === "MULTIPLY") {
        result = No1 * No2;
    }
    else if (operator === "DIVISION") {
        result = No1 / No2;
    }
    console.log(+result);
}
else {
    console.log("please select a valid operater");
}
