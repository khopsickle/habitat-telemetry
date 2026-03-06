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
        <AssetList onSelect={setSelectedAsset} selected={selectedAsset} />

        {selectedAsset && <TelemetryPanel asset={selectedAsset} />}
      </div>
    </>
  );
}

export default App;
