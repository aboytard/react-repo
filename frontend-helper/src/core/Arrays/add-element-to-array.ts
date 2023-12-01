import { useState } from "react";

const AddElementToArray = (newValue:string) => {
    const [array, setArray] = useState<string[]>([]);
    setArray(prev => [...prev, newValue]);
}

const AddElementToSet = (newValue : string) => {
    const [set, setSet] = useState<Set<string>>(new Set());
    setSet(prev => new Set([...prev, newValue]));
}

const AddElementToRecord = (key: string, value : boolean) => {
    const [record, setRecord] = useState<Record<string, boolean>>({});
    setRecord(prev => ({ ...prev, [key]: value }));
}