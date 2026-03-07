import "./App.css";
import { useState } from "react";
import AssetList from "./components/AssetList";
import TelemetryPanel from "./components/TelemetryPanel";

function App() {
  const [selectedAsset, setSelectedAsset] = useState(null);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Assets</h1>

      <div className="flex gap-4">
        <AssetList onSelect={setSelectedAsset} hasSelected={!!selectedAsset} />

        {selectedAsset && (
          <div
            className={`fixed inset-0 z-1 bg-white p-4 overflow-y-auto grow xl:relative xl:p-0`}
          >
            <TelemetryPanel
              asset={selectedAsset}
              onClose={() => setSelectedAsset(null)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
