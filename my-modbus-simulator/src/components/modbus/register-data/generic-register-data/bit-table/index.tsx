import { MouseEvent } from "react";
import HelloWebSocket from "../../../../web-socket-component/hello-websocket";

interface IBitTableProps {
  onBitClick?: (index: number) => (event: MouseEvent<HTMLDivElement>) => void;
  booleanArray: string[];
  editable?: boolean;
}

const BitTable = ({
  onBitClick,
  booleanArray,
  editable = true,
}: IBitTableProps) => {
  return (
    <div className="bit-table">
      <HelloWebSocket url={"ws://127.0.0.1:14456"} />
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {booleanArray.map((value, index) => (
            <tr key={index}>
              <td className="label">{index + 1}</td>
              <td
                onClick={(e) => {
                  if (editable) {
                    onBitClick?.(index)(e);
                  }
                }}
              >
                <div className="value-without-style">{value}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BitTable;
