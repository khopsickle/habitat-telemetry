import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function PowerHistoryChart({ chartData = [], metadata }) {
  const { minPower, maxPower, isGenerator, unit } = metadata;

  const tooltipFormatter = (_value, name, props) => {
    const { payload } = props;

    if (name === "Efficiency") {
      return [`${payload.efficiencyDisplay}`, "Efficiency"];
    }

    return [`${payload.powerDisplay} ${unit}`, "Power"];
  };

  const scaleEfficiency = (efficiency) =>
    minPower + ((maxPower - minPower) * efficiency) / 100;
  const historicalColor = isGenerator
    ? "rgba(190, 18, 60, 1)"
    : "rgba(5, 150, 105, 1)";
  const forecastColor = isGenerator
    ? "rgba(190, 18, 60, 0.5)"
    : "rgba(5, 150, 105, 0.5)";

  return (
    <div className="h-full w-full bg-white rounded-lg shadow mt-4 p-4 pl-2">
      <h2 className="font-bold text-xl my-2">Power History</h2>
      <ResponsiveContainer width="100%" height="100%" minHeight={300}>
        <ComposedChart
          responsive
          data={chartData}
          barCategoryGap={0}
          barGap={0}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis
            dataKey="timestamp"
            // type="number"
            // scale="time"
            interval={5}
            domain={["dataMin", "dataMax"]}
            tickFormatter={(t) =>
              new Date(t).toLocaleTimeString([], { hour: "numeric" })
            }
          />
          <YAxis
            allowDecimals={false}
            domain={["dataMin - 1", "dataMax"]}
            unit={unit}
          />
          <Tooltip
            formatter={tooltipFormatter}
            labelFormatter={(label) => new Date(label).toLocaleString()}
          />

          <Bar dataKey="historicalPower" fill={historicalColor} />
          <Bar dataKey="forecastPower" fill={forecastColor} />

          <Line
            dataKey={(d) => scaleEfficiency(d.efficiency)}
            stroke="#93c5fd"
            strokeWidth={1.5}
            dot={{ r: 1.5, fill: "#93c5fd" }}
            name="Efficiency"
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
