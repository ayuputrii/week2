const cekNamaSiswa = (siswa) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataSiswa = ["Upin", "Ipin", "Mail", "Fizi", "Ehsan", "Jarjit", "Susanti", "Mei-Mei", "Devi"];
            let cek = dataSiswa.find((item) => {
                return item == siswa;
            });
            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Siswa ini bukan siswa dari TK Tadika Mesra"));
            }
        }, 3000);
    });

// Then Catch
// Start

cekNamaSiswa("Ayu")
    .then((result) => {
        console.log("Siswa Ini adalah siswa dari TK Tadika Mesra");
    })
    .catch((error) => {
        console.log(error.message);
    });

// End

//Try Catch
// Start

const manggilCekNamaSiswa = async() => {
    try {
        let result = await cekNamaSiswa("Fizi");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("selesai");
    }
};

// End
manggilCekNamaSiswa();