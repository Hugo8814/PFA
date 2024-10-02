import breadIcon from "../../../Temp/assets/images/avatars/savory-bites-bistro.jpg";
import SubTitle from "./SubTitle";

function TransactionWiget() {
  return (
    <div className="flex bg-white rounded-xl  flex-col p-8">
      <SubTitle to="/transactions">Transactions</SubTitle>
      <div className="flex justify-between p-6">
        <div className="flex gap-4 items-center ">
          <img src={breadIcon} alt="" className="w-16 rounded-full" />
          <p className="text-2xl font-bold">Name</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-green-700">+$399.50</div>
          <div className="text-gray-500 text-xl">19 Jul 2021</div>
        </div>
      </div>

      <div className="flex justify-between p-6">
        <div className="flex gap-4 items-center ">
          <img src={breadIcon} alt="" className="w-16 rounded-full" />
          <p className="text-2xl font-bold">Name</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-green-700">+$399.50</div>
          <div className="text-gray-500 text-xl">19 Jul 2021</div>
        </div>
      </div>

      <div className="flex justify-between p-6">
        <div className="flex gap-4 items-center ">
          <img src={breadIcon} alt="" className="w-16 rounded-full" />
          <p className="text-2xl font-bold">Name</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-green-700">+$399.50</div>
          <div className="text-gray-500 text-xl">19 Jul 2021</div>
        </div>
      </div>
    </div>
  );
}

export default TransactionWiget;
