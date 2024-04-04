import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";
const Chart = () => {
  const data = [
    { name: "Food", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];
  console.log("opened")
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Expense Tracker</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Chart;

{/* <BarChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 5,
    right: 30,
    left: 80,
    bottom: 5,
  }}
  barSize={20}
>
  <XAxis
    dataKey="name"
    scale="point"
    padding={{ left: 10, right: 10 }}
  />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid strokeDasharray="3 3" />
  <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
</BarChart> */}