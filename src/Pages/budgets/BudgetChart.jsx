/* eslint-disable react/prop-types */
import { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

class BudgetChart extends PureComponent {
  render() {
    const { data } = this.props; // Data passed from the parent component

    return (
      <PieChart width={250} height={250}>
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
            <Cell key={`cell-${index}`} fill={entry.theme} />
          ))}
        </Pie>
        <circle
          cx={125}
          cy={125}
          r={85} // Same as innerRadius to overlap the middle
          fill="none"
          stroke="rgba(255,255,255,0.2)" // White border
          strokeWidth={30} // Thickness of the border
        />
      </PieChart>
    );
  }
}

export default BudgetChart;
