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

import { useEffect } from "react";

import { selectAuthToken, setAuthToken } from "../../../backend/data/authSlice"; // Adjust the path
import { Link, useNavigate } from "react-router-dom";
import { resetOverviewState } from "./overviewSlice";

function OverviewPage() {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);

  const budgetTotal = useSelector(getBudgetSpent);
  const transactionIncome = useSelector(getTransactionIncome);
  const transactionEpenses = useSelector(getTransactionExpense);
  const PotTotal = useSelector(getPotTotal);

  const expenses = (budgetTotal - transactionEpenses).toFixed(2);
  const income = (PotTotal + transactionIncome).toFixed(2);
  const currentBalance = (income - expenses).toFixed(2);
  const navigate = useNavigate();
 

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
  
    // Reset all Redux state (e.g., overview and auth tokens)
    dispatch(resetOverviewState());
    dispatch(setAuthToken(null));
  
    // Navigate to the login page
    navigate("/login");
  };
  

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
      window.location.href = "/"; // Redirect if no token
    }
  }, [token, dispatch]); // Add dispatch to dependencies

  // Ensure the token is available
  if (!token) {
    return <div>Loading...</div>; // Show loading if token is not available
  }

  return (
    <div className="w-full flex flex-col px-28 py-28 gap-12 overflow-auto max-1400:px-7 max-1200:scale-90 max-1200:px-0 max-1000:scale-100  max-1000:p-10 bg-[#F8F4F0]">
      <div className="flex justify-between items-center ">
        <h1 className="text-6xl font-bold  max-500:text-5xl">Overview</h1>

        <Link
          to="/"
          className="bg-black shadow-md text-white text-3xl font-semibold p-6 rounded-xl max-500:text-2xl"
          onClick={handleLogout}
        >
          Log Out
        </Link>
      </div>
      <MoneyTabs current={currentBalance} income={income} expenses={expenses} />

      <div className="w-full h-full flex gap-8 max-800:flex-col">
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
