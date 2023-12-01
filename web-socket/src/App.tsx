import React from "react";
import "./App.css";
import LanScannerSim from "./components/lan-scanner-sim";
import MyModbusComponent from "./components/modbus-sim";

function App() {
  return (
    <div className="App">
      <LanScannerSim url="ws://127.0.0.1:12345" ip_port="127.0.0.1_10001" />
      <MyModbusComponent url="ws://127.0.0.1:12345" ip_port="127.0.0.1_502" />
    </div>
  );
}

export default App;
