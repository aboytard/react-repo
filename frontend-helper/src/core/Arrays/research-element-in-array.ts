interface ObjetA {
    prop1: string;
    prop2: string;
}

function rechercheCoco(listeObjets: ObjetA[]): boolean {
    for (const objet of listeObjets) {
        if (objet.prop1.includes("coco") || objet.prop2.includes("coco")) {
            return true;
        }
    }
    return false;
}

// Exemple d'utilisation
const liste: ObjetA[] = [
    { prop1: "abc", prop2: "def" },
    { prop1: "coco123", prop2: "ghi" },
    { prop1: "xyz", prop2: "coco456" }
];

const contientCoco = rechercheCoco(liste);
console.log("Contient 'coco':", contientCoco);