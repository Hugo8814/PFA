import Header from "../../ui/Header";

function PotsPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Pots" btn={true} text="+Add New Pot" />
    </div>
  );
}

export default PotsPage;
