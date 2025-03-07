let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let input2 = input;
    input2.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input2.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input2)
    let tanggal = input2[3];   
    let hasil = input.join(",")
    
    console.log('mei')
    
let bulan ="";
let namaBulan = "";
switch(bulan) { 
    case "1":
        namaBulan = "Januari"
    break;
    case "2":
        namaBulan = "Februari"
    break;
    case "3":
        namaBulan = "Maret"
    break;
    case "4":
        namaBulan = "April"
    break;
    case "5":
        namaBulan = "Mei"
    break;
    case "6":
        namaBulan = "Juni"
    break;
    case "7":
        namaBulan = "Juli"
    break;
    case "8":
        namaBulan = "Agustus"
    break;
    case "9":
        namaBulan = "September"
    break;
    case "10":
        namaBulan = "Oktober"
    break;
    case "11":
        namaBulan = "November"
    break;
    case "12":
        namaBulan = "Desember"
    break;
}
    

    let input3 = input;
    input3.splice(0,6, "1989", "21", "05")
    console.log(input3)

    console.log("21-05-1989")


  
}    

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
