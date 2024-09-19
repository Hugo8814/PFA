import Header from "../../ui/Header";

function PotsPage() {
  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Pots" btn={true} text="+Add New Pot" />

      <div className="grid grid-cols-3 gap-10">
        <div className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8">
          <div className="flex justify-between p-2 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-700 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">
              Total Saved
            </p>
            <p className="text-5xl p-2 font-bold"> $200.00</p>
          </div>

          <div className="w-full bg-[#F8F4F0] h-5 rounded-full ">
            <div className="w-2/3 bg-blue-700 h-5 rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">68.8%</p>
            <p className="text-2xl p-2 ">Target of $2,000</p>
          </div>

          <div className="flex  gap-6">
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              + Add Money
            </button>
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              Withdraw
            </button>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8">
          <div className="flex justify-between p-2 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-700 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">
              Total Saved
            </p>
            <p className="text-5xl p-2 font-bold"> $200.00</p>
          </div>

          <div className="w-full bg-[#F8F4F0] h-5 rounded-full ">
            <div className="w-2/3 bg-blue-700 h-5 rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">68.8%</p>
            <p className="text-2xl p-2 ">Target of $2,000</p>
          </div>

          <div className="flex  gap-6">
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              + Add Money
            </button>
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              Withdraw
            </button>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8">
          <div className="flex justify-between p-2 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-700 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">
              Total Saved
            </p>
            <p className="text-5xl p-2 font-bold"> $200.00</p>
          </div>

          <div className="w-full bg-[#F8F4F0] h-5 rounded-full ">
            <div className="w-2/3 bg-blue-700 h-5 rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">68.8%</p>
            <p className="text-2xl p-2 ">Target of $2,000</p>
          </div>

          <div className="flex  gap-6">
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              + Add Money
            </button>
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              Withdraw
            </button>
          </div>
        </div>
        <div className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8">
          <div className="flex justify-between p-2 w-full">
            <div className="flex gap-4 items-center">
              <span className="bg-blue-700 w-8 h-8 rounded-full"></span>
              <div className="text-4xl font-bold">Car</div>
            </div>
            <button className="text-gray-900 text-4xl font-bold">...</button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">
              Total Saved
            </p>
            <p className="text-5xl p-2 font-bold"> $200.00</p>
          </div>

          <div className="w-full bg-[#F8F4F0] h-5 rounded-full ">
            <div className="w-2/3 bg-blue-700 h-5 rounded-full"></div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl text-gray-500 p-2 font-semibold">68.8%</p>
            <p className="text-2xl p-2 ">Target of $2,000</p>
          </div>

          <div className="flex  gap-6">
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              + Add Money
            </button>
            <button className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PotsPage;
