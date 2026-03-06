export default function TelemetryPanel({ asset }) {
  return (
    <div
      className={`
        border
        rounded-lg
        shadow-lg
        p-4
        w-96
        transition-all
        duration-300
        ease-in-out
        transform
        h-full
        overflow-y-auto
        ${asset ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      {asset && (
        <>
          <h2 className="font-bold text-lg mb-2">{asset.name}</h2>
          <p className="text-xs text-gray-500">ID: {asset.id}</p>
          <p>Status: {asset.status}</p>
        </>
      )}
    </div>
  );
}
