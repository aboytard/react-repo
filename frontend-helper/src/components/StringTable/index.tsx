import React from "react";

const StringTable = (stringArray: string[]) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Strings</th>
        </tr>
      </thead>
      <tbody>
        {stringArray.map((str, index) => (
          <tr key={index}>
            <td>{str}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StringTable;
