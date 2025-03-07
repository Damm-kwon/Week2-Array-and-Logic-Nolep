let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let input2 = [...input]; // Salin array agar tidak mengubah aslinya
    
    // Mengubah isi array
    input2.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input2.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input2); // Debugging

    // Mengambil dan memisahkan tanggal
    let tanggal = input2[3];
    let tanggalSplit = tanggal.split("/");
    console.log(tanggalSplit, tanggalSplit[1]);

    // Menggabungkan array menjadi satu baris
    let hasil = input2.join(" ");
    console.log(hasil);
}

// Panggil fungsi
dataHandling(input);
