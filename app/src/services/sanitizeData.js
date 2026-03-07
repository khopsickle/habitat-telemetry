export function sanitizeAsset(raw) {
  return {
    id: raw.id,
    name: raw.name ?? "Unnamed Asset",
    type: raw.type ?? "Unknown",
    location: raw.location ?? "Unknown",
    status: raw.status ?? "Unknown",
    lastUpdated: raw.last_updated
      ? new Date(raw.last_updated).toLocaleString()
      : null,
  };
}

export function sanitizeAssets(rawArray) {
  return rawArray.map(sanitizeAsset);
}

export function sanitizeTelemetry(data) {
  return {
    assetId: data.asset_id,
    temperature: `${data.temperature.toFixed(1)} °C`,
    pressure: `${data.pressure.toFixed(2)} PSI`,
    vibration: `${data.vibration.toFixed(3)} mm/s`, // assuming mm/s
    powerConsumption: `${data.power_consumption.toFixed(2)} kW`, // assuming kW
    status: data.status,
    localeTimestamp: new Date(data.timestamp).toLocaleTimeString(),
  };
}

function mapTimeSeries(arr, type) {
  // assumes chronological order from API
  return (arr || []).map((item) => ({
    timestamp: new Date(item.timestamp).getTime(),
    historicalPower: type === "historical" ? item.power_kw : null,
    forecastPower: type === "forecast" ? item.power_kw : null,
    efficiency: item.efficiency,
    type,
    powerDisplay: `${item.power_kw.toFixed(2)}`,
    efficiencyDisplay: `${Math.round(item.efficiency)}%`,
  }));
}

export function sanitizePowerHistory(raw) {
  const history = mapTimeSeries(raw.history, "historical");
  const forecast = mapTimeSeries(raw.forecast, "forecast");

  // assumes no overlap from API
  const chartData = [...history, ...forecast];

  const metadata = {
    unit: raw.metadata.unit,
    isGenerator: raw.metadata.is_generator,
    minPower: raw.metadata.min_power_kw,
    maxPower: raw.metadata.peak_power_kw,
  };

  return {
    assetId: raw.asset_id,
    name: raw.asset_name,
    type: raw.asset_type,
    metadata,
    chartData,
  };
}
