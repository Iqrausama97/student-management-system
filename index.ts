#! /usr/bin/env node
import inquirer from "inquirer"

const studentID : number = Math.floor(10000 + Math.random()* 90000);

let myBalance : number = 0;

let answer = await inquirer.prompt([{
    name : "StudentsName",
    type : "input",
    validate : function (value){
        if (value.trim() !== ""){
            return true;
    }return "Please enter value"
}
},
{
    name: "courses",
    type : "list",
    choices : ["Typescript", "Javascript", "Python", "Next.js", "HTML"],
    message : "Select the course to enrolled."
}
]);

const tutionFee : {[key: string] : number}={
    "Typescript": 2000,
    "Javascript" : 1500,
    "Python" : 1000,
    "Next.js" : 2500,
    "HTML" : 1800
}

console.log(`\nTuition fees : ${tutionFee[answer.courses]}/-`);
console.log(`Balance ${myBalance}\n`);

let paymentType = await inquirer.prompt ([
    {
        name : "payment",
        type : "list",
        message : "Please select Payment method",
        choices : ["Bank Transfer","EasyPaisa","JazzCash"]
    },
    {
        name : "amount",
        type: "input",
        message: "Transfer money:",
        validate: function(value){
            if(value.trim() !== ""){
                return true;
            }
            return "Please enter a non-empty value"
        }
    }
]);

console.log(`You select payment method ${paymentType.payment}`);

const tutionFees = tutionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount){
    console.log(`Congratulations! You have successfully enrolled in ${answer.courses}.\n`);    

let ans = await inquirer.prompt([
    {
        name: "select",
        type : "list",
        message : "What would you like to do next?",
        choices : ["View Status","Exit"]
    }
])
if (ans.select === "View Status"){
    console.log("\n**********Status***********\n");
    console.log(`STUDENT NAME: ${answer.StudentsName}`);
    console.log(`STUDENT ID: ${studentID}`);
    console.log(`COURSE: ${answer.courses}`);
    console.log(`TUITION FEES PAID : ${paymentAmount}`);
    console.log(`BALANCE : ${myBalance += paymentAmount}`);
}else{
    console.log("\nExiting Student Management System\n");
    
}
}else{
    console.log("Invalid amount..");
    
}
