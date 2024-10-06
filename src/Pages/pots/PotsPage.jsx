import { useDispatch, useSelector } from "react-redux";
import Header from "../../ui/Header";
import { getPotsData } from "./PotSlice";
import { formatCurrency } from "../../utils/helpers";
import AddModal from "../../ui/AddModal";
import { openAddModal, openWithdrawModal } from "../../ui/modalSlice";
import WithdrawModal from "../../ui/WithdrawModal";

function PotsPage() {
  const data = useSelector(getPotsData);

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col px-28 pt-28 gap-12 overflow-auto">
      <Header title="Pots" btn={true} text="+Add New Pot" />
      <div className="grid grid-cols-3 gap-10">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-2xl p-10 h-full flex flex-col gap-8"
            >
              <div className="flex justify-between p-2 w-full">
                <div className="flex gap-4 items-center">
                  <span
                    style={{ backgroundColor: item.theme }}
                    className=" w-8 h-8 rounded-full"
                  ></span>
                  <div className="text-4xl font-bold">{item.name}</div>
                </div>
                <button className="text-gray-900 text-4xl font-bold">
                  ...
                </button>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-2xl text-gray-500 p-2 font-semibold">
                  Total Saved
                </p>
                <p className="text-5xl p-2 font-bold">
                  {formatCurrency(item.total)}
                </p>
              </div>

              <div className="w-full bg-[#F8F4F0] h-5 rounded-full ">
                <div
                  style={{
                    backgroundColor: item.theme,
                    width: `${(item.total / item.target) * 100}%`,
                  }}
                  className=" h-5 rounded-full"
                ></div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-2xl text-gray-500 p-2 font-semibold">
                  {((item.total / item.target) * 100).toFixed(2)}%
                </p>
                <p className="text-2xl p-2  font-semibold text-gray-500">
                  Target of {formatCurrency(item.target)}
                </p>
              </div>

              <div className="flex  gap-6">
                <button
                  onClick={() => {
                    dispatch(openAddModal({ item }));
                  }}
                  className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl"
                >
                  + Add Money
                </button>
                <AddModal />
                <button
                  onClick={() => {
                    dispatch(openWithdrawModal({ item }));
                  }}
                  className="bg-[#F8F4F0]  text-2xl font-bold p-6 w-full rounded-xl"
                >
                  Withdraw
                </button>
                <WithdrawModal />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PotsPage;
