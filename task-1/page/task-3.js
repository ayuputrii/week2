let seleksiNilai = (awal, akhir, data) => {
    if (typeof awal == 'number' && typeof akhir == 'number') {
        if (awal < akhir) {
            if (data.length >= 5) {
                const score = data;
                score.sort(function(a, b) { return a - b });
                const filtered = score.filter(Nilai => Nilai >= awal && Nilai <= akhir);
                console.log(filtered);
            } else {
                console.log('Jumlah dalam data array harus lebih dari 5');
            }
        } else {
            console.log('Nilai akhir harus lebih besar dari nilai awal');
        }
    } else {
        console.log('Data harus valid')
    }
}

// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17, [2, 25, 4, 12, 3]);
// seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);