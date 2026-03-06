import { useAssets } from "../hooks/useAssets";
import { getStatusClass } from "../services/statusHelpers";

export default function AssetList({ onSelect }) {
  const { data: assets, isLoading, error } = useAssets();

  if (isLoading) return <div>Loading assets...</div>;
  if (error) return <div>Error loading assets</div>;
  if (!assets || assets.length === 0) return <div>No assets found.</div>;

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* header */}
        <div className="grid grid-cols-5 rounded bg-gray-50 font-semibold text-gray-700 p-3">
          <div> </div>
          <div>Type</div>
          <div>Location</div>
          <div>Status</div>
          <div>Last Updated</div>
        </div>

        {/* rows */}
        {assets.map((asset) => (
          <div
            key={asset.id}
            onClick={() => onSelect(asset)}
            className={`grid grid-cols-5 my-2 p-4 border border-l-3 rounded-e-lg ${getStatusClass(asset.status, "border")} cursor-pointer hover:bg-gray-50`}
          >
            <div>
              <p className="font-bold">{asset.name}</p>
              <p className="text-xs text-gray-400">{asset.id}</p>
            </div>
            <div>{asset.type}</div>
            <div>{asset.location}</div>
            <div
              className={`font-semibold ${getStatusClass(asset.status, "text")}`}
            >
              {asset.status}
            </div>
            <div>{asset.lastUpdated}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
