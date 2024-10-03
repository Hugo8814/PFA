/* eslint-disable react/prop-types */
import { formatCurrency, formatDate } from "../../utils/helpers";

function RecTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="text-2xl font-normal text-gray-500 text-left p-6">
            Recipent / Sender
          </th>
          <th className="text-2xl font-normal text-gray-500 text-left">
            Category
          </th>
          <th className="text-2xl font-normal text-gray-500 text-left">
            Transaction Date
          </th>
          <th className="text-2xl font-normal text-gray-500 text-right">
            Amount
          </th>
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((item, index) => (
            <tr key={index} className="border-t ">
              <td className="text-2xl font-normal flex items-center p-6">
                <img
                  className="w-14 rounded-full"
                  src={item.avatar}
                  alt="icon"
                />
                <p className="pl-4 font-bold ">{item.name}</p>
              </td>
              <td className="text-2xl font-normal text-gray-500">
                {item.category}
              </td>
              <td className="text-2xl font-normal text-gray-500">
                {formatDate(item.date)}
              </td>
              <td className="text-2xl   font-bold text-right">
                {formatCurrency(item.amount).slice(1)}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default RecTable;
