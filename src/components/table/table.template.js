// Pure function
const CODES = {
  A: 65,
  Z: 90,
};

function toCell(infoCell = '') {
  return `<div class="cell" contenteditable>${infoCell}</div>`;
}

function toColumn(content = '') {
  return `<div class="column">
            ${content}
         </div>`;
}

function createRow(rowData = '', rowInfo = '') {
  return `<div class="row">
            <div class="row-info">${rowInfo}</div>
            <div class="row-data">${rowData}</div>
         </div>`;
}
// Реализация по уроку
function toChar(_, index) {
  return String.fromCharCode(CODES.A+index);
}

export function createTable(rowsCount = 15, colsCounts) {
  const colsCount = (CODES.Z - CODES.A) + 1;
  // Границы 65-90
  const row = [];

  // первая строка в таблице с буквами
  const colLetter = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');
  row.push(createRow(colLetter));
  // ---

  for (let i = 0; i < rowsCount; i++) {
    // остальные строки
    const cols = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('');

    row.push(createRow(cols, i+1));
    // ---
  }

  return row.join('');
}

// Моя реализация
/* export function createTable(rowsCount = 15, colsCounts) {
  const count = CODES.Z - CODES.A;
  // Границы 65-90
  const row = [];
  // row.push(createRow());

  for (let i=0; i<=rowsCount; i++) {
    const col = [];
    for (let j=0; j<=count; j++) {
      if (i===0) {
        // Создание 1-й строки (С буквами)
        col.push(createCol(String.fromCharCode(CODES.A+j)));
      } else {
        col.push(createCell());
      }
    }
    const np = i>0 ? i : '';
    row.push(createRow(col.join(''), np));
  }

  return row.join('');
}*/
//