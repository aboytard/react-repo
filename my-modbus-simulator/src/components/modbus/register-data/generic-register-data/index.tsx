import ChangeBooleanValueFromBitTable, {
  IChangeBooleanValueFromBitTable,
} from "../../../../core/hooks/modbus/change-bit-table-value";
import ChangeUshortTableValue, {
  IChangeUshortValueFromUshortTable,
} from "../../../../core/hooks/modbus/change-ushort-table-value";
import BitTable from "./bit-table";
import UshortTable from "./ushort-table";

// check for more consistency in the naming
export enum EModbusRegisterTab {
  DISCRETE_INPUT = "Discrete inputs",
  COILS = "Coils",
  INPUT_REGISTER = "Input registers",
  HOLDING = "Holding",
}
export interface IGenericRegisterData {
  type: EModbusRegisterTab;
}
const GenericRegisterData = ({ type }: IGenericRegisterData): JSX.Element => {
  const handleReadButton = () => {
    console.log("handleReadButton is being asked");
  };

  const handleClickBit =
    (index: number) => (event: React.MouseEvent<HTMLDivElement>) => {
      console.log("handleClickBit is being asked");
      let bitValueChangeObject = {
        index: index,
        event: event,
        previousValue: writeDataBooleanDefault, // changed to the stored data
      } as IChangeBooleanValueFromBitTable;
      ChangeBooleanValueFromBitTable(bitValueChangeObject);
    };

  const handleUshortChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // TODO : Add debounce
      //   useDebounce(200);
      console.log("handleUshortChange is being asked");
      let ushortValueChangeObject = {
        index: index,
        event: event,
        previousValue: writeDataBooleanDefault, // changed to the stored data
      } as IChangeUshortValueFromUshortTable;
      ChangeUshortTableValue(ushortValueChangeObject);
    };

  let writeDataBooleanDefault = Array.from({ length: 8 }, () => "false");
  return (
    <div className="generic-register-data">
      {type.toString()}
      <button onClick={handleReadButton}>Read from server</button>
      {type === EModbusRegisterTab.COILS ||
      type === EModbusRegisterTab.DISCRETE_INPUT ? (
        <BitTable
          onBitClick={handleClickBit}
          booleanArray={writeDataBooleanDefault}
          editable={type === EModbusRegisterTab.COILS}
        />
      ) : (
        <UshortTable
          onChange={handleUshortChange}
          ushortArray={writeDataBooleanDefault}
          editable={type === EModbusRegisterTab.HOLDING}
        />
      )}
    </div>
  );
};

export default GenericRegisterData;
