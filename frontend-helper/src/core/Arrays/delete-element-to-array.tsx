import { useState } from "react";

const DeleteElementToArray = (array: string[], id: string) => {
  const updatedArray = array.filter((item) => item !== id);
  return updatedArray;
};

const DeleteFromArrayStoredInState = (id: string) => {
  const [array, setArray] = useState<string[]>([]);
  setArray((prev) => {
    return { ...prev, [id]: true };
  });
};

const DeleteFromRecord = (id: string) => {
  const [record, setRecord] = useState<Record<string, boolean>>({});
  setRecord((prev) => ({ ...prev, [id]: true }));
};
