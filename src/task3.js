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

let key = [...'245136']
let cipher = "";
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < 6; col++) {
        cipher += table[row][key[col]-1];
    }
}
console.log("Шифрованное слово - ", cipher);

const cipherTable = [];
for (let row = 0; row < table.length; row++) {
    cipherTable[row] = []
    for (let col = 0; col < 6; col++) {
        cipherTable[row][col] = table[row][key[col]-1];
    }
}
console.log("Шифрованное таблица - ", cipherTable);
