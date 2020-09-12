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

let cipher = "";
for (let col = 0; col < 6; col++) {
    for (let row = 0; row < table.length; row++) {
        cipher += table[row][col];
    }
}
console.log("Шифрованное слово - ", cipher);
