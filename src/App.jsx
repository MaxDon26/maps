import React from "react";
import Spinner from "./components/loader";
import Maps from "./components/map";
import { useMaps } from "./hooks/useMaps";

function App() {
  const style = {
    display: "flex",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const { isLoading } = useMaps();

  return (
    <div className="App" style={style}>
      {!isLoading ? <Maps /> : <Spinner />}
    </div>
  );
}

export default App;
