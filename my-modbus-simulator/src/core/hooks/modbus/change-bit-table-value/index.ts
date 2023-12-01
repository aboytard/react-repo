export interface IChangeBooleanValueFromBitTable{
    index: number,
    event : React.MouseEvent<HTMLDivElement>,
    previousValue : string[]
}

const ChangeBooleanValueFromBitTable = (bitValueChangeObject:IChangeBooleanValueFromBitTable) : string[] => {
    if (bitValueChangeObject.event.detail === 2) {
        const values = [...bitValueChangeObject.previousValue];
        if (bitValueChangeObject.previousValue[bitValueChangeObject.index] === String(false)) {
          values[bitValueChangeObject.index] = String(true);
        } else {
          values[bitValueChangeObject.index] = String(false);
        }
        console.log("ChangeBooleanValueFromBitTable values : ", values);
        return values;
      }
    return bitValueChangeObject.previousValue;
}

export default ChangeBooleanValueFromBitTable;