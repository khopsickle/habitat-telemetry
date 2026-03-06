import "./App.css";
import { useState } from "react";
import AssetList from "./components/AssetList";

function App() {
  const [selectedAsset, setSelectedAsset] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assets</h1>
      <AssetList onSelect={setSelectedAsset} />

      {/* telemetry panel */}
      {selectedAsset && (
        <div>
          Selected asset: <strong>{selectedAsset.name}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
