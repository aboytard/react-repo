type RecordOfStringBool = Record<string, boolean>;

function searchCocoInRecord(record: RecordOfStringBool): boolean {
    for (const key in record) {
        if (key.includes("coco") && record[key]) {
            return true;
        }
    }
    return false;
}

// Example usage
const myRecord: RecordOfStringBool = {
    prop1: false,
    prop2: true,
    coco123: true,
    xyz: false,
    coco456: true
};

const containsCoco = searchCocoInRecord(myRecord);
console.log("Contains 'coco':", containsCoco);