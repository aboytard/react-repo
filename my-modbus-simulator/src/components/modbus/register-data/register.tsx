import React, { useEffect, useMemo, useState } from "react";
import HoldingRegister from "./holding/holding-register";
import { useSelectedRegisterContext } from "../../../core/context/modbus-register";
import EWriteFunctionCode from "../../../core/enums/modbus/write-function-code";
import GenericRegisterData, {
  EModbusRegisterTab,
} from "./generic-register-data";

const SlaveRegister = (): JSX.Element => {
  const { selectedRegisterStorage, setSelectedRegisterStorage } =
    useSelectedRegisterContext();

  const tabs = useMemo(() => {
    return [
      {
        id: 0,
        title: "Discrete inputs",
        content: <div>Discrete inputs</div>,
        editable: false,
        registerTab: EModbusRegisterTab.DISCRETE_INPUT,
      },
      {
        id: 1,
        title: "Coils",
        content: <div>Coils</div>,
        editable: true,
        registerTab: EModbusRegisterTab.COILS,
      },
      {
        id: 2,
        title: "Input registers",
        content: <div>Input registers</div>,
        editable: false,
        registerTab: EModbusRegisterTab.INPUT_REGISTER,
      },
      {
        id: 3,
        title: "Holding",
        content: <HoldingRegister valuesPerWord={8} nbWord={1} />,
        editable: true,
        registerTab: EModbusRegisterTab.HOLDING,
      },
    ];
  }, []);

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    // TODO : change this here
    setSelectedRegisterStorage(EWriteFunctionCode.SingleRegister);
  }, [activeTab, tabs, selectedRegisterStorage]);

  return (
    <div className="slave-register">
      <ul className="tabs">
        {tabs.map(({ title, id }) => {
          return (
            <li key={id}>
              <button
                className={`${activeTab === id ? "active" : ""}`}
                onClick={() => setActiveTab(id)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="register-content">
        <GenericRegisterData type={tabs[activeTab].registerTab} />
      </div>
    </div>
  );
};

export default SlaveRegister;
