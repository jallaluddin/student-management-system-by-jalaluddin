#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

    console.log(chalk.bold.italic.blueBright("\n \t \t Wellcome to Governer Sindh IT Initiative students managment Portal\n",));
    
    const randomNumber: number = Math.floor(500000 - Math.random () *400000)

    // Student current balance
let myBalance = 0

let answer = await inquirer.prompt ([
    {
        name: "students",
        type: "input",
        message: "Enter your name",
    },

    {
        name: "courses",
        type: "list",
        message: chalk.yellow("Select the course to enrolled:"),
        choices: ["Typescript", "Node.js" , "Python" , "Web 3.0" , "Metaverse"],
    },
])

const feesList: {[key: string]: number} = {
    "Typescript" : 5000,
    "Node.js" : 8000,
    "Python" : 13000,
    "Web 3.0" : 20000,
    "Metaverse" : 30000,
};

console.log (`\n Course fees ${feesList [answer.courses]}/-`);
console.log(`\n You enrolled  ${chalk.blueBright (answer.courses)} But your balance is ${chalk.yellow (myBalance)}\n`);

let paymentType = await inquirer.prompt ([
    {
        name: "payment",
        type: "list",
        choices: ["Bank transfer" , "Easy Paisa" , "Jazzcash" , "Cash"],
    },

    {
        name: "amount",
        type: "input",
        message: "Pay your fees",
        validate: function(value) {
            if (value.trim() !== "") {
                return true
            }
            return "Please enter a course amount";
        },
    },
])

console.log (`\n Your payment method is ${chalk.blueBright(paymentType.payment)} \n`);

const coursesFees = feesList[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if (coursesFees === paymentAmount) {
    console.log (`\n Congratulations , you have successfully enrolled ${chalk.blueBright (answer.courses)}\n`);
}

else {
    console.log(chalk.bold ("\nSorry! Invalid amount due to course"));
 }

let Ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View your proper identity card" , "Exit"],
    },

])

// Generate student proper identity card 
if (Ans.select === "View your proper identity card") {
    console.log(`Your Name: ${chalk.yellowBright (answer.students)}`);
    console.log(`Your ID: ${chalk.yellowBright (randomNumber)}`);
    console.log(`Course: ${chalk.yellowBright (answer.courses)}`);
    console.log(`Course fees paid: ${chalk.yellowBright (paymentAmount)}`);
    console.log(`Your balance: ${chalk.yellowBright (myBalance += paymentAmount)}`);
}

// When the student click on Exit then print this messege
else {
        console.log("\n Exiting Governer Sindh IT initiative  students managments portal");
};
