const name = [..."заседаниесостоитсязавтраюстас"]
console.log("Слово - ", name.join(""));

const magicTable = [1, 23, 20, 12, 9, 15, 7, 4, 21, 18, 24, 16, 13, 10, 2, 8, 5, 22, 19, 11, 17, 14, 6, 3, 25];

let cipher = '';
for (let i = 0; i < magicTable.length; i++) {
    cipher += name[magicTable[i] - 1]
}

console.log("Шифрованное слово - ", cipher);