import { get, save } from "./filesMethods.js";
import { promptNewExpense } from "./userPrompts.js";
import moment from "moment";

export async function createNewExpense() {
    console.log("Adding new expense:");
    const newExpenseData = await promptNewExpense();
  
    //TODO En vez del log podria hacer un nuevo prompt para confirmar los datos
    // si no confirma no los guardo
    console.log("New data to create: ", newExpenseData);
  
    //TODO validar la info
  
    const currentExpenses = await get("users");
  
    //TODO Validar que no exista el Documento...
  
    currentExpenses.push(newExpenseData);
    await save("users", currentExpenses);
  }
  
export async function getAllExpenses() {
    const currentExpenses = await get("users");
  
    console.log(currentExpenses);
    
  }
  
export async function calcTotalExpenses() {
    const currentExpenses = await get("users");
    let totalExpenses = 0;
    for (let i = 0; i < currentExpenses.length; i++) {
      totalExpenses += parseInt(currentExpenses[i].amount)
    }
    console.log("El gasto total es de: $",totalExpenses)
  }

export async function calcMonthlyExpenses() {
    const currentExpenses = await get("users");
    let january = 0;
    let february = 0;
    let march = 0;
    let april = 0;
    let may = 0;
    let june = 0;
    let july = 0;
    let august = 0;
    let september = 0;
    let octuber = 0;
    let november = 0;
    let december = 0;
    for (let i = 0; i < currentExpenses.length; i++) {
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-01-01', '2023-01-31')){
            january += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-02-01', '2023-02-28')){
            february += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-03-01', '2023-03-31')){
            march += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-04-01', '2023-04-30')){
            april += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-05-01', '2023-05-31')){
            may += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-06-01', '2023-01-30')){
            june += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-07-01', '2023-07-31')){
            july += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-08-01', '2023-08-31')){
            august += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-09-01', '2023-09-30')){
            september += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-10-01', '2023-10-31')){
            octuber += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-11-01', '2023-11-30')){
            november += parseInt(currentExpenses[i].amount);
        }
        if (moment(currentExpenses[i].expenseDate).isBetween('2023-12-01', '2023-12-31')){
            december += parseInt(currentExpenses[i].amount);
        }
      }

    console.log("January expenses: $",january)
    console.log("February expenses: $",february)
    console.log("March expenses: $",march)
    console.log("April expenses: $",april)
    console.log("May expenses: $",may)
    console.log("June expenses: $",june)
    console.log("July expenses: $",july)
    console.log("August expenses: $",august)
    console.log("September expenses: $",september)
    console.log("Octuber expenses: $",octuber)
    console.log("November expenses: $",november)
    console.log("December expenses: $",december)


    
}