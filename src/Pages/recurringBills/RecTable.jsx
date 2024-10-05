/* eslint-disable react/prop-types */
import { formatCurrency, formatDay } from "../../utils/helpers";

function RecTable({ data }) {
  const today = new Date();
  const day = today.getDate();
  const currentMonth = today.getMonth();

  return (
    <table>
      <thead>
        <tr>
          <th className="text-2xl font-normal text-gray-500 text-left p-6">
            Recipient / Sender
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
          data.map((item, index) => {
            const itemDate = new Date(item.date); // Parse the item's date
            const billDay = itemDate.getDate();
            const billMonth = itemDate.getMonth();
            let statusColor = "blue"; // Default is gray (due but not soon)

            console.log(
              `Today: ${today.toLocaleDateString()}, Bill Date: ${itemDate.toLocaleDateString()}`
            );

            if (billMonth === currentMonth) {
              if (billDay > day) {
                // Bill is due soon (after today)
                statusColor = "red";
              } else if (billDay <= day) {
                // Bill is past due
                statusColor = "green";
              }
            } else if (billMonth < currentMonth) {
              statusColor = "green";
            }

            return (
              <tr key={index} className="border-t">
                <td className="text-2xl font-normal flex items-center p-6">
                  <img
                    className="w-14 rounded-full"
                    src={item.avatar}
                    alt="icon"
                  />
                  <p className="pl-4 font-bold">{item.name}</p>
                </td>
                <td className="text-2xl font-normal text-gray-500">
                  {item.category}
                </td>
                <td
                  style={{ color: statusColor }} // Set the color dynamically
                  className="text-2xl font-normal text-gray-500"
                >
                  Monthly-{formatDay(item.date)}
                </td>
                <td className="text-2xl font-bold text-right">
                  {formatCurrency(item.amount).slice(1)}{" "}
                  {/* Assuming currency symbol is sliced off */}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default RecTable;
