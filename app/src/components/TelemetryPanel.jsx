import { useTelemetry } from "../hooks/useTelemetry";
import { usePowerHistory } from "../hooks/usePowerHistory";
import { getStatusClass } from "../services/statusHelpers";
import PowerHistoryChart from "./PowerHistoryChart";

const TelemetryPanel = ({ asset, onClose }) => {
  const { id, name, status } = asset || {};
  const {
    data: telemetryData,
    isLoading: isTelemetryLoading,
    error: telemetryError,
  } = useTelemetry(id);
  const {
    data: powerData,
    isLoading: isPowerLoading,
    error: powerError,
  } = usePowerHistory(id);

  const isLoading = isTelemetryLoading;
  const error = telemetryError;

  if (!id)
    return <p className="text-gray-500">Select an asset to view telemetry.</p>;
  if (isLoading) return <p>Loading telemetry...</p>;
  if (error) return <p className="text-red-500">Failed to load telemetry.</p>;

  const borderColor = getStatusClass(asset.status, "border");
  const textColor = getStatusClass(asset.status, "text");

  const metrics = [
    { label: "Temperature", value: telemetryData.temperature },
    { label: "Pressure", value: telemetryData.pressure },
    { label: "Vibration", value: telemetryData.vibration },
    { label: "Power Consumption", value: telemetryData.powerConsumption },
  ];

  return (
    <div
      className={`border ${borderColor} rounded-lg shadow-lg p-4 w-full max-h-full overflow-y-auto transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-gray-400 xl:hidden"
      >
        ✕
      </button>
      <h2 className={`font-bold text-xl my-2 ${textColor}`}>{name}</h2>
      <p className="text-xs text-gray-500 mb-8">ID: {id}</p>
      <p className="text-sm mb-4">
        <strong>
          Status: <span className={textColor}>{status}</span>
        </strong>
      </p>
      <div className="mb-8 space-y-2">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex justify-between items-center px-4 py-2 bg-gray-50 rounded"
          >
            <span className="text-gray-500 font-medium">{metric.label}:</span>
            <span className="text-gray-900 font-bold">{metric.value}</span>
          </div>
        ))}
      </div>
      {powerData && (
        <PowerHistoryChart
          metadata={powerData.metadata}
          chartData={powerData.chartData}
        />
      )}

      <p className="text-sm text-gray-500 mt-2">
        Last updated: {telemetryData.localeTimestamp}
      </p>
    </div>
  );
};

export default TelemetryPanel;
