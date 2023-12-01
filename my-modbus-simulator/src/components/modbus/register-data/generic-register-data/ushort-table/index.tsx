import { ChangeEvent, useState } from "react";
import GoodbyeWebSocket from "../../../../web-socket-component/goodby-websocket";

interface IUshortTableProps {
  onChange: (
    index: number
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  ushortArray: string[];
  editable?: boolean;
}
const UshortTable = ({
  onChange,
  ushortArray,
  editable = true,
}: IUshortTableProps): JSX.Element => {
  const [selectedRow, setSelectedRow] = useState(0);

  return (
    <div className="input-table">
      <GoodbyeWebSocket url={"ws://127.0.0.1:14456"} />
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {ushortArray?.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {editable && index === selectedRow ? (
                <input value={value} onChange={onChange?.(index)} />
              ) : (
                <td
                  onClick={() => {
                    setSelectedRow(index);
                  }}
                >
                  {value}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UshortTable;
