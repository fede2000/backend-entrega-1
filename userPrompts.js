import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewExpense() {
  return await inquirer.prompt(newExpensePrompt);
}

const newExpensePrompt = [
  {
    type: "input",
    name: "description",
    message: "Description:",
  },
  {
    type: "input",
    name: "amount",
    message: "Amount: $",
  },
  {
    type: "date",
    name: "expenseDate",
    message: "Expense Date:",
    locale: "en-US",
    format: { month: "short", minute: undefined },
  },
];
