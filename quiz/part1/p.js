let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    let input2 = input;
    input.splice(1,2, "Roman Alamsyah Elsharawy","provinsi Bandar Lampung")
    input.splice(4,1, "Pria", "SMA Internasional Metro")
    console.log(input2)



}

dataHandling2(input)