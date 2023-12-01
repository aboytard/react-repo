import React, { ChangeEvent, FormEvent, useState } from "react";

// TODO : issue about DOM-Nesting
interface IInputTableProps {
  onInputChange?: (
    index: number
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  inputArray: string[];
  editable?: boolean;
}

const InputTable = ({
  onInputChange,
  inputArray,
  editable = true,
}: IInputTableProps) => {
  const [selectedRow, setSelectedRow] = useState(0);

  return (
    <div className="input-table">
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {inputArray?.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {editable && index === selectedRow ? (
                <input value={value} onChange={onInputChange?.(index)} />
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

export default InputTable;
