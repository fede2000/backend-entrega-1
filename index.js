import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewExpense } from "./userPrompts.js";
import { calcTotalExpenses, createNewExpense, getAllExpenses } from "./utilsFunctions.js";
import { subMenuExpensives } from "./subMenuExpensives.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Actions:",
        choices: [
          { value: 1, name: "View expenses" },
          { value: 2, name: "Create new expense" },
          { value: 99, name: "EXIT" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await subMenuExpensives();
        break;
      case 2:
        await createNewExpense();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Bye!");
};

main();

// async function createNewExpense() {
//   console.log("Adding new expense:");
//   const newExpenseData = await promptNewExpense();

//   //TODO En vez del log podria hacer un nuevo prompt para confirmar los datos
//   // si no confirma no los guardo
//   console.log("New data to create: ", newExpenseData);

//   //TODO validar la info

//   const currentExpenses = await get("users");

//   //TODO Validar que no exista el Documento...

//   currentExpenses.push(newExpenseData);
//   await save("users", currentExpenses);
// }

// async function getAllUsers() {
//   const currentExpenses = await get("users");

//   console.log(currentExpenses);
  
// }

// async function calcTotalExpenses() {
//   const currentExpenses = await get("users");
//   let totalExpenses = 0;
//   for (let i = 0; i < currentExpenses.length; i++) {
//     totalExpenses += parseInt(currentExpenses[i].amount)
//   }
//   console.log("El gasto total es de: $",totalExpenses)
// }

