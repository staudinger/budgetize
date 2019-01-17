import { Budget } from "./budget";

export class AvgBudget 
{
    avgFood: number;
    avgCharity: number;
    avgUtilities: number;
    avgPersonal: number;
    avgRecreation: number;
    avgTransportation: number;
    avgInsurance: number;
    avgDebts: number;
    avgMedical: number;
    avgClothing: number;
    avgHousing: number;
    avgSaving: number;
    avgExpenses: number;
    avgIncome: number;

    constructor()
    {
        this.avgFood = 0;
        this.avgCharity = 0;
        this.avgUtilities = 0;
        this.avgPersonal = 0;
        this.avgRecreation = 0;
        this.avgTransportation = 0;
        this.avgInsurance = 0;
        this.avgDebts = 0;
        this.avgMedical = 0;
        this.avgClothing = 0;
        this.avgHousing = 0;
        this.avgSaving = 0;
        this.avgExpenses = 0;
        this.avgIncome = 0;
    }

    averageBudgets(budgets: Budget[], avgBudget: AvgBudget): AvgBudget
    {
        for (let budget of budgets)
        {
            avgBudget.avgIncome += (budget.income);
            avgBudget.avgFood += (budget.food / budget.income);
            avgBudget.avgSaving += (budget.saving / budget.income);
            avgBudget.avgHousing += (budget.housing / budget.income);
            avgBudget.avgInsurance += (budget.insurance / budget.income);
            avgBudget.avgCharity += (budget.charitableGifts / budget.income);
            avgBudget.avgPersonal += (budget.personal / budget.income);
            avgBudget.avgRecreation += (budget.recreation / budget.income);
            avgBudget.avgDebts += (budget.debts / budget.income);
            avgBudget.avgMedical += (budget.medicalAndHealth / budget.income);
            avgBudget.avgClothing += (budget.clothing / budget.income);
            avgBudget.avgTransportation += (budget.transportation / budget.income);
            avgBudget.avgUtilities += (budget.utilities / budget.income);
            avgBudget.avgExpenses += (budget.totalExpense / budget.income);
        }
        
        avgBudget.avgIncome = avgBudget.avgIncome / budgets.length;
        avgBudget.avgFood = avgBudget.avgFood / budgets.length;
        avgBudget.avgSaving = avgBudget.avgSaving / budgets.length;
        avgBudget.avgTransportation = avgBudget.avgTransportation / budgets.length;
        avgBudget.avgUtilities = avgBudget.avgUtilities / budgets.length;
        avgBudget.avgPersonal = avgBudget.avgPersonal / budgets.length;
        avgBudget.avgRecreation = avgBudget.avgRecreation / budgets.length;
        avgBudget.avgCharity = avgBudget.avgCharity / budgets.length;
        avgBudget.avgMedical = avgBudget.avgMedical / budgets.length;
        avgBudget.avgInsurance = avgBudget.avgInsurance / budgets.length;
        avgBudget.avgHousing = avgBudget.avgHousing / budgets.length;
        avgBudget.avgDebts = avgBudget.avgDebts / budgets.length;
        avgBudget.avgClothing = avgBudget.avgClothing / budgets.length;
        avgBudget.avgExpenses = avgBudget.avgExpenses / budgets.length;

        return avgBudget;
  }

    
}
