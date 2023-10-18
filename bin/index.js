#! /usr/bin/env node

import inquirer from "inquirer";

async function main() {
    let optionQuestion = [{
        type : 'list',
        name : 'options',
        choices : ['Simple Calculator', 'Expression Calculator'],
        message : `
        !!!!!!------------------------- INSTRUCTIONS -----------------------!!!!!

        1: "Simple Calculator: Perform one operation at a time with two numbers."
        2: "Expression Calculator: Evaluate multiple operations together."
        
        `
    }];

    let optionAnswer = await inquirer.prompt(optionQuestion);
    let option = optionAnswer.options;

    if(option === 'Simple Calculator'){
        let question_1 = [{
            type : 'input',
            name : 'num1',
            message : 'Enter First Number = '
        },
        {
            type : 'input',
            name : 'num2',
            message : 'Enter Second Number = '
        },
        {
            type : 'list',
            name : 'operation',
            choices : ['addition','subtraction','multiplication','division'],
            message : 'Select Operation : '
        }];

        console.log(`----------------------------------------------------------------------------------`);
        
        let answer_1 = await inquirer.prompt(question_1);
        
        let num1 = parseFloat(answer_1.num1);
        let num2 = parseFloat(answer_1.num2);
        let operation = answer_1.operation;
        let result;

        if(!isNaN(num1) && !isNaN(num2)){
            
            switch (operation) {
        
            case 'addition':
                result = (num1 + num2).toFixed(2);
                break;
            case 'subtraction':
                result = (num1 - num2).toFixed(2);
                break;
            case 'multiplication':
                result = (num1 * num2).toFixed(2);
                break;
            case 'division':
                result = (num1 / num2).toFixed(2);
                break;
            }
            console.log(`----------------------------------------------------------------------------------`);
            console.log(`
            Your First Number : ${num1}
            Your Second Number :${num2}
            
            Selected Operation : ${operation}
            
            Result : ${result}`);
            console.log(`----------------------------------------------------------------------------------`);
        }else {
            console.log(`----------------------------------------------------------------------------------`);
            console.log(`            Operation Denied : Input Valid Numbers`);
            console.log(`----------------------------------------------------------------------------------`);
        }}else if(option === 'Expression Calculator'){
        
        let question_2 = [{
            type : 'input',
            name : 'multipleOperations',
            message : 'Enter Mathematical Expression : '
        }];
        
        console.log(`----------------------------------------------------------------------------------`);
        let answer_2 = await inquirer.prompt(question_2);
    
        let expression = answer_2.multipleOperations;
        let expressionResult;
    
        let validInput = /^[0-9+\-*/(). ]+$/; 
        //https://chat.openai.com/share/c6508ee1-eb7e-422c-b23f-68c55ae94bd9
        if(!validInput.test(expression)){
            
            console.log(`----------------------------------------------------------------------------------`);
            console.log('          Invalid input. Please enter a valid expression');
            console.log(`----------------------------------------------------------------------------------`);
        }
        try{
            
            expressionResult = eval(expression);
            console.log(`----------------------------------------------------------------------------------`);
            console.log(`          
            Expression : ${expression}

            Result     : ${expressionResult}`);
            console.log(`----------------------------------------------------------------------------------`);
            
        }
        catch{
            
            console.log(`----------------------------------------------------------------------------------`);
            console.log('          Error evaluating the expression. Please check your input');
            console.log(`----------------------------------------------------------------------------------`);
        }

    }
  
}

main();
