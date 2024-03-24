#! /usr/bin/env node
import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random()*10+1);
const answer=await inquirer.prompt([
    {
        name: "Guesse_Number",
        type:"number",
        message:"Please Guesse Any Number"
    }
]);
if(answer.Guesse_Number === randomNumber){
    console.log("Congratulation! You Guess Right Number");
}else{
    console.log("Sorry! You Guesse a Wrong Number")
}