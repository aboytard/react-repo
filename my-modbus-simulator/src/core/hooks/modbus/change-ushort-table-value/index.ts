export interface IChangeUshortValueFromUshortTable{
    index: number,
    event : React.ChangeEvent<HTMLInputElement>,
    previousValue : string[]
}

const ChangeUshortTableValue = (ushortValueChangeObject:IChangeUshortValueFromUshortTable) : string[] => {
    const values = [...ushortValueChangeObject.previousValue];
    values[ushortValueChangeObject.index] = ushortValueChangeObject.event.target.value
    console.log("ChangeUshortTableValue values : ", values);
    return values;
}

export default ChangeUshortTableValue;