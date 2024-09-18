import Header from "../../ui/Header";

function TransactionsPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <div>
        <Header title="Transactions" btn={true} text="+Add New Transaction" />
      </div>
    </div>
  );
}

export default TransactionsPage;
