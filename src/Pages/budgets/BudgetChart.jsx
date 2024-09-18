import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 400 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#900112"];

export default class BudgetChart extends PureComponent {
  render() {
    return (
      <PieChart width={250} height={250} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={84}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
