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
    timestamp: new Date(data.timestamp).toLocaleTimeString(),
  };
}
