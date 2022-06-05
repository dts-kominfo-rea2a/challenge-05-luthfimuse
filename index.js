const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (dataNames, functionSort) => {
    sortData = functionSort(dataNames)

    let result = []
    for (let i = 0; i < sortData.length; i++) {
      result.push(i + 1 + '. ' + sortData[i])
    }

  return result
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;
const sortAscending = (dataNames) => {
  let result = dataNames.sort()
  return result
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;

const sortDescending = (dataNames) => {
  let result = dataNames.sort().reverse()
  return result
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
