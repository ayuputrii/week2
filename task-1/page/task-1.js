function myFunction() {
    const angka = [2, 10, 5, 2, 0];

    // // 1. Reduce
    // // Jumlahkan seluruh elemen pada array
    // const newNilai = angka.reduce((accumulator, currentValue) =>
    //     accumulator + currentValue);
    // console.log(newNilai);

    // 2. POP
    // Menghapus value dari array di index terakhir
    // const n = [2, 10, 5, 2, 0];
    // n.pop()
    // console.log(n);

    // // 3. Sorting
    // // Mengurutkan huruf A sampai Z
    // var arr = new Array("Z", "C", "V", "A");
    // var sorted = arr.sort();
    // console.log(arr)

    // // 4. Date
    // // Mengetahui tanggal dan waktu hari ini
    // var dt = Date();
    // var date = ("Date and Time : " + dt);
    // console.log(dt);

    // // 5. Filter
    // // Menfilter angka lebih besar dari a
    // const angka1 = angka.filter(function(a) {
    //     return a >= 5;
    // });
    // console.log(angka1);

    // // 6. Map
    // // Perkalian semua dengan angka 3 
    // const angka2 = angka.map(a => a * 3);
    // console.log(angka2);

    // // 7. For (Looping)
    // // Mencari angka >= 4
    // const newB = [];
    // for (let i = 0; i < angka.length; i++) {
    //     if (angka[i] >= 4) {
    //         newB.push(angka[i]);
    //     }
    // };
    // console.log(newB);

    // // 8. Find
    // // Menemukan satu nilai sama dengan
    // var angka3 = angka.find(function(x) {
    //     return x == 2;
    // });
    // console.log(angka3);

    // // 9. Split
    // // Menemukan 2 huruf sebelumnya secara "",""
    // var str = "Ayu Armadani Putri Mahirun";
    // var splitted = str.split(" ", 2);
    // console.log(splitted)

    // // 10. Replace
    // // Mengubah data Var re pada str, ke newstr
    // var re = /Putri/gi;
    // var str = "Ayu Putri";
    // var newstr = str.replace(re, "Armadani");
    // console.log(newstr);
}
myFunction()