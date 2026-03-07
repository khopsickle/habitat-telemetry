import { useAssets } from "../hooks/useAssets";
import { getStatusClass } from "../services/statusHelpers";

export default function AssetList({ onSelect, hasSelected }) {
  const { data: assets, isLoading, error } = useAssets();

  if (isLoading) return <div>Loading assets...</div>;
  if (error) return <div>Error loading assets</div>;
  if (!assets || assets.length === 0) return <div>No assets found.</div>;

  return (
    <div
      className={`overflow-x-auto transition-all duration-300 ease-in-out ${hasSelected ? "flex-shrink-0" : "w-full"}`}
    >
      {/* header */}
      <div className="hidden lg:grid lg:grid-cols-4 rounded border border-gray-200 bg-gray-50 font-semibold text-gray-700 p-3">
        <div> </div>
        <div>Type</div>
        <div>Location</div>
        <div>Status</div>
      </div>

      {/* rows */}
      {assets.map((asset) => (
        <div
          key={asset.id}
          onClick={() => onSelect(asset)}
          className={`block sm:grid sm:grid-cols-3 lg:grid-cols-4 my-2 p-2 lg:p-4 border border-l-3 rounded-e-lg ${getStatusClass(asset.status, "border")} cursor-pointer hover:bg-gray-50`}
        >
          <div className="sm:col-span-3 border-b mb-4 lg:col-span-1 lg:border-b-0 lg:mb-0">
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
        </div>
      ))}
    </div>
  );
}
