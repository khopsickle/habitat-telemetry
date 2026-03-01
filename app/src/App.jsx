import "./App.css";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const data = [
  { time: "10:00", value: 100 },
  { time: "11:00", value: 120 },
];

function App() {
  return (
    <>
      <div className="bg-blue-500 text-white p-4">Tailwind is here</div>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line dataKey="value" stroke="#2563eb" />
      </LineChart>
    </>
  );
}

export default App;
