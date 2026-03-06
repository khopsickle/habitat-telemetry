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
