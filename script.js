

console.log("==================================");
console.log("       SISTEM KASIR SEDERHANA");
console.log("==================================");

// Data barang
let namaBarang = "Mie Instan";
let harga = 3500;
let jumlah = 5;
let total = harga * jumlah;
let diskon = 0;

// Menampilkan data barang
console.log("Nama Barang : " + namaBarang);
console.log("Harga Barang: Rp" + harga);
console.log("Jumlah Beli : " + jumlah);
console.log("Total Harga : Rp" + total);

// Percabangan 1: Memeriksa jumlah barang
if (jumlah <= 0) {
    console.log("Jumlah barang tidak valid!");
} else {
    console.log("Jumlah barang valid.");
}

// Percabangan 2-5: Menentukan diskon
if (total >= 200000) {
    diskon = 20;
} else if (total >= 100000) {
    diskon = 15;
} else if (total >= 50000) {
    diskon = 10;
} else if (total >= 20000) {
    diskon = 5;
} else {
    diskon = 0;
}

console.log("Diskon: " + diskon + "%");

// Menghitung potongan dan total bayar
let potongan = total * diskon / 100;
let totalBayar = total - potongan;

console.log("Potongan Harga: Rp" + potongan);
console.log("Total Bayar   : Rp" + totalBayar);

// Percabangan 6: Menentukan kategori belanja
if (totalBayar >= 100000) {
    console.log("Kategori: Belanja Besar");
} else {
    console.log("Kategori: Belanja Biasa");
}

// Percabangan 7: Menentukan bonus
if (totalBayar >= 50000) {
    console.log("Bonus: Mendapatkan hadiah");
} else {
    console.log("Bonus: Tidak mendapatkan hadiah");
}

// Perulangan FOR
console.log("\nDaftar barang:");

for (let i = 1; i <= jumlah; i++) {
    console.log("Barang ke-" + i + ": " + namaBarang);
}

// Perulangan WHILE
console.log("\nProses pembayaran:");

let hitung = 1;

while (hitung <= 3) {
    console.log("Memproses pembayaran " + hitung);
    hitung++;
}

console.log("\nTerima kasih sudah berbelanja!");
console.log("==================================");



console.log("\nProgram selesai.");
