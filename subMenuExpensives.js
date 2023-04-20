import { calcMonthlyExpenses, calcTotalExpenses, getAllExpenses } from "./utilsFunctions.js";
import inquirer from "inquirer";
import moment from "moment";

export const subMenuExpensives = async () => {
    let run = true;
    while (run) {
      const action = await inquirer.prompt([
        {
          type: "list",
          name: "chosen",
          message: "Actions:",
          choices: [
            { value: 1, name: "Get all expensives" },
            { value: 2, name: "Total expenses" },
            { value: 3, name: "monthly expenses" },
            // { value: 4, name: "weekly expenses" },
            { value: 99, name: "BACK TO MAIN MENU" },
          ],
        },
      ]);
      switch (action.chosen) {
        case 1:
          await getAllExpenses();
          break;
        case 2:
          await calcTotalExpenses();
          break;
        case 3:
          await calcMonthlyExpenses();
          break;
        case 99:
          run = false;
          break;
        default:
          run = false;
          break;
      }
    }
  };