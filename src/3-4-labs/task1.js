const name = [...'товсточубвладислав'];
console.log("Слово - ", name.join(""));
const table = [];
let wordNum = 0;
for (let row = 0; row < Math.ceil(name.length / 6); row++) {
    table[row] = [];
    for (let col = 0; col < 6; col++) {
        table[row][col] = name[wordNum] || Math.floor(Math.random() * 10)
        wordNum++;
    }
}
console.log("Таблица - ", table);

let keyCol = [...'245136']
const cipherTableByRow = [];
for (let row = 0; row < table.length; row++) {
    cipherTableByRow[row] = []
    for (let col = 0; col < 6; col++) {
        cipherTableByRow[row][col] = table[row][keyCol[col] - 1];
    }
}

let keyRow = [...'231']
const cipherTableByCol = [];
for (let row = 0; row < table.length; row++) {
    cipherTableByCol[row] = []
    for (let col = 0; col < 6; col++) {
        cipherTableByCol[row][col] = cipherTableByRow[keyRow[row] - 1][col];
    }
}

let cipher = cipherTableByCol.map(e => e.join("")).join("")
console.log("Шифрованное таблица - ", cipherTableByCol);
console.log("Шифрованное слово - ", cipher);