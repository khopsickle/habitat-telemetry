import { api } from "../http/client";
import { sanitizeAssets } from "./sanitizeData";

export async function getAssets() {
  const { data } = await api.get("/assets");
  return sanitizeAssets(data);
}

export async function getAsset(assetId) {
  const { data } = await api.get(`/assets/${assetId}`);
  return data;
}

export async function getTelemetry(assetId) {
  const { data } = await api.get(`/telemetry/${assetId}`);
  return data;
}

export async function getPowerData(assetId) {
  const { data } = await api.get(`/power/${assetId}`);
  return data;
}

export async function getConfiguration(assetId) {
  const { data } = await api.get(`/configuration/${assetId}`);
  return data;
}

export async function saveConfiguration(payload) {
  const { data } = await api.post("/configuration", payload);
  return data;
}
