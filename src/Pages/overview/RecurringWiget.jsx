import SubTitle from "./SubTitle";

function RecurringWiget() {
  return (
    <div className="flex bg-white rounded-md h-full w-full flex-col gap-4">
      <SubTitle to="/recurringBills">Recurring Bills</SubTitle>

      <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-lime-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Rent</p>
        </div>
        <div className="text-2xl font-bold">$399.50</div>
      </div>

      <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-blue-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Due soon</p>
        </div>
        <div className="text-2xl font-bold">$184.58</div>
      </div>

      <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Car Insurance</p>
        </div>
        <div className="text-2xl font-bold">$84.58</div>
      </div>

      <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-blue-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Due soon</p>
        </div>
        <div className="text-2xl font-bold">$184.58</div>
      </div>

      <div className="flex justify-between mx-6 p-6 bg-[#F8F4F0]  border-l-4 border-red-500 rounded-xl">
        <div className="flex gap-4 items-center  ">
          <p className="text-2xl font-bold">Car Insurance</p>
        </div>
        <div className="text-2xl font-bold">$84.58</div>
      </div>
    </div>
  );
}

export default RecurringWiget;
