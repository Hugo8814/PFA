import OverviewPage from "./Pages/overview/OverviewPage";
import PotsPage from "./Pages/pots/potsPage";
import RecurringBillsPage from "./Pages/recurringBills/recurringBillsPage";
import TransactionsPage from "./Pages/transactions/transactionsPage";
import BudgetsPage from "./Pages/budgets/BudgetsPage";
import LoginPage from "./Pages/login/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/", // Now this is the login page
    element: <LoginPage />,
  },
  {
    path: "/app", // Main app routes will be under /app
    element: <AppLayout />,
    children: [
      {
        path: "Overview",
        element: <OverviewPage />,
      },
      {
        path: "Transactions",
        element: <TransactionsPage />,
      },
      {
        path: "Budgets",
        element: <BudgetsPage />,
      },
      {
        path: "Pots",
        element: <PotsPage />,
      },
      {
        path: "RecurringBills",
        element: <RecurringBillsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
