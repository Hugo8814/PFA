import { useSelector } from "react-redux";

import SubTitle from "../../ui/SubTitle";

function TransactionWiget() {
  const data = useSelector((state) => state.overview.data.transactions);
  console.log(data[0]);
  return (
    <div className="flex bg-white rounded-xl  flex-col p-8">
      <SubTitle to="/transactions">Transactions</SubTitle>

      {data &&
        data
          .map((item, index) => (
            <div key={index} className="flex justify-between p-6">
              <div className="flex gap-4 items-center ">
                <img src={item.avatar} alt="" className="w-16 rounded-full" />
                <p className="text-2xl font-bold">{item.name}</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-700">
                  +$399.50
                </div>
                <div className="text-gray-500 text-xl">19 Jul 2021</div>
              </div>
            </div>
          ))
          .slice(0, 7)}
    </div>
  );
}

export default TransactionWiget;
