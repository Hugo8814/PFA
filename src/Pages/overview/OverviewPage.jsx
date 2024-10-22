import Header from "../../ui/Header";
import MoneyTabs from "./MoneyTabs";
import PotWiget from "./PotWiget";
import { useDispatch, useSelector } from "react-redux";
import TransactionWiget from "./TransactionWiget";
import BugetsWiget from "./BugetsWiget";
import RecurringWiget from "./RecurringWiget";
import { getBudgetSpent } from "../budgets/budgetSlice";
import {
  getTransactionExpense,
  getTransactionIncome,
} from "../transactions/transactionSlice";
import { getPotTotal } from "../pots/potSlice";
import { getReData } from "../recurringBills/recurringSlice";
import { useEffect } from "react";

import { selectAuthToken, setAuthToken } from "../../../backend/data/authSlice"; // Adjust the path

function OverviewPage() {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const budgetTotal = useSelector(getBudgetSpent);
  const transactionIncome = useSelector(getTransactionIncome);
  const transactionEpenses = useSelector(getTransactionExpense);
  const PotTotal = useSelector(getPotTotal);
  const { paidBills, totalUpcoming, dueSoon } = useSelector(getReData);

  const reTotal = paidBills + totalUpcoming + dueSoon;

  const expenses = (budgetTotal - reTotal - transactionEpenses).toFixed(2);
  const income = (PotTotal + transactionIncome).toFixed(2);
  const currentBalance = (income - expenses).toFixed(2);

  useEffect(() => {
    const localToken = localStorage.getItem("token"); // Retrieve token from local storage

    if (localToken) {
      console.log("Token retrieved:", localToken);
      // Only dispatch if the Redux token is not set
      if (!token) {
        dispatch(setAuthToken(localToken)); // Dispatch to update Redux state
      }
    } else {
      console.log("No token found. Redirecting to login...");
      window.location.href = "/login"; // Redirect if no token
    }
  }, [token, dispatch]); // Add dispatch to dependencies

  // Ensure the token is available
  if (!token) {
    return <div>Loading...</div>; // Show loading if token is not available
  }

  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Overview" />
      <MoneyTabs current={currentBalance} income={income} expenses={expenses} />

      <div className="w-full h-full flex gap-8">
        <div className="flex flex-col gap-4 w-full ">
          <PotWiget />
          <TransactionWiget />
        </div>

        <div className="w-full  flex flex-col gap-4">
          <BugetsWiget />
          <RecurringWiget />
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
