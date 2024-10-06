import OverviewPage from "./Pages/overview/overviewPage";
import PotsPage from "./Pages/pots/potsPage";
import RecurringBillsPage from "./Pages/recurringBills/recurringBillsPage";
import TransactionsPage from "./Pages/transactions/transactionsPage";
import BudgetsPage from "./Pages/budgets/BudgetsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,

    children: [
      {
        path: "/Overview",
        element: <OverviewPage />,
      },
      {
        path: "/Transactions",
        element: <TransactionsPage />,
      },
      {
        path: "/Budgets",
        element: <BudgetsPage />,
      },
      {
        path: "/Pots",
        element: <PotsPage />,
      },
      {
        path: "/RecurringBills",
        element: <RecurringBillsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
