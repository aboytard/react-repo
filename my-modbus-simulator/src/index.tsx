import React from "react";
import ReactDOM from "react-dom/client";
import SlaveRegister from "./components/modbus/register-data/register";
import SelectedRegisterContextProvider from "./core/context-provider/modbus-register-provider";
import AutojustButton from "./components/autojust-button/autojust-button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SelectedRegisterContextProvider>
      <SlaveRegister />
    </SelectedRegisterContextProvider>
    {/* <AutojustButton
      url={
        "https://www.leparking.fr/voiture-occasion-detail/bmw-serie-5-touring-520/bmw-520d-touring-essential-edition-steptronic/13FDB4GW.html"
      }
      marque={"bmw"}
      modele={"serie-5-touring-520"}
    /> */}
  </React.StrictMode>
);
