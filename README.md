# Penjelasan Program Sistem Kasir Sederhana

## 1. Tujuan Program

Program Sistem Kasir Sederhana ini saya buat untuk membantu menghitung total belanja pelanggan. Program ini bisa untuk menghitung harga barang, menentukan diskon, menghitung total pembayaran, dan menentukan apakah pelanggan mendapatkan bonus atau tidak.

Dalam program ini, saya menggunakan JavaScript dengan konsep percabangan dan perulangan yang sudah dipelajari dalam materi dasar pemrograman.

## 2. Penjelasan Kode Program

### A. Menampilkan Judul Program

Pada bagian awal, saya menggunakan `console.log()` untuk menampilkan judul program, yaitu Sistem Kasir Sederhana. Tujuannya supaya tampilan program lebih rapi dan pengguna tahu program apa yang sedang dijalankan.

### B. Menentukan Data Barang

Pada bagian ini, saya membuat beberapa variabel, seperti nama barang, harga, jumlah pembelian, total harga, dan diskon.

Contohnya, barang yang dibeli adalah mie instan dengan harga Rp3.500 sebanyak 5 buah. Jadi, total harga sebelum diskon adalah Rp17.500.

### C. Menampilkan Data Barang

Selanjutnya, saya menggunakan `console.log()` untuk menampilkan nama barang, harga satuan, jumlah pembelian, dan total harga. Dengan begitu, informasi barang bisa terlihat di terminal.

### D. Percabangan untuk Memeriksa Jumlah Barang

Pada bagian ini, saya menggunakan `if` dan `else` untuk mengecek jumlah barang yang dibeli.

Kalau jumlah barang kurang dari atau sama dengan nol, program akan menampilkan pesan bahwa jumlah barang tidak valid. Sebaliknya, kalau jumlahnya lebih dari nol, program akan menampilkan bahwa jumlah barang valid.

### E. Percabangan untuk Menentukan Diskon

Di bagian ini, saya menggunakan `if`, `else if`, dan `else` untuk menentukan diskon berdasarkan total belanja pelanggan.

Semakin besar total belanja, semakin besar diskon yang bisa didapatkan. Misalnya, belanja minimal Rp200.000 mendapatkan diskon 20%, sedangkan belanja di bawah Rp20.000 tidak mendapatkan diskon.

Bagian ini menunjukkan bahwa percabangan bisa digunakan untuk menentukan keputusan berdasarkan kondisi yang berbeda-beda.

### F. Menghitung Potongan dan Total Pembayaran

Setelah diskon ditentukan, program menghitung jumlah potongan harga dan total pembayaran yang harus dibayar pelanggan.

Caranya, total harga dikalikan dengan persentase diskon, kemudian dibagi 100. Hasilnya menjadi potongan harga. Setelah itu, potongan tersebut dikurangi dari total belanja.

### G. Menentukan Kategori Belanja

Pada bagian ini, saya menggunakan percabangan untuk menentukan kategori belanja pelanggan.

Kalau total pembayaran mencapai Rp100.000 atau lebih, pelanggan masuk kategori belanja besar. Kalau kurang dari itu, pelanggan masuk kategori belanja biasa.

### H. Menentukan Bonus Pelanggan

Selanjutnya, program mengecek apakah pelanggan berhak mendapatkan bonus.

Jika total pembayaran mencapai Rp50.000 atau lebih, pelanggan akan mendapatkan hadiah. Namun, jika total pembayarannya kurang dari Rp50.000, pelanggan tidak mendapatkan hadiah.

### I. Perulangan `for`

Pada bagian ini, saya menggunakan perulangan `for` untuk menampilkan daftar barang sesuai jumlah pembelian.

Misalnya, pelanggan membeli 5 mie instan, program akan menampilkan daftar barang dari urutan pertama sampai kelima. Jadi, perulangan `for` digunakan ketika jumlah pengulangan sudah bisa ditentukan.

### J. Perulangan `while`

Selain `for`, saya juga menggunakan perulangan `while` untuk menampilkan proses pembayaran sebanyak tiga kali.

Perulangan akan terus berjalan selama kondisi yang ditentukan masih benar. Setelah mencapai angka tiga, perulangan berhenti.

### K. Menampilkan Pesan Penutup

Pada bagian terakhir, program menampilkan pesan terima kasih sudah berbelanja. Pesan ini menjadi penutup setelah seluruh proses dalam program selesai dijalankan.

## 3. Kesimpulan

Dari program yang saya buat, saya belajar bagaimana menggunakan JavaScript untuk membuat sistem kasir sederhana. Di dalamnya terdapat variabel untuk menyimpan data, operasi aritmetika untuk menghitung pembayaran, percabangan untuk menentukan diskon dan bonus, serta perulangan untuk menampilkan data secara berulang.

Menurut saya, percabangan dan perulangan merupakan bagian penting dalam pemrograman karena bisa membuat program menjalankan perintah sesuai kondisi dan mengulang proses tanpa harus menulis kode yang sama berkali-kali.# tugas-percabangan-dan-perulangan
