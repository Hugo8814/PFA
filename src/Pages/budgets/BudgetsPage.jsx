import Header from "../../ui/Header";

function BudgetsPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Budgets" btn={true} text="+Add New Budget" />
    </div>
  );
}

export default BudgetsPage;
