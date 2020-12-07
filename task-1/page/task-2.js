function searchName() {
    name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]

    function filterName(abjad, total, callback) {
        const data = callback(abjad)

        const hasil = data.filter((item, index) => index < total)

        return hasil
    }

    function search(abjad) {
        const data = name.filter(item => {
            const word = item.toLowerCase().search(abjad.toLowerCase())
            return word >= 0
        })
        return data
    }
    console.log(filterName("an", 3, search))
}
searchName()

// kurang validasi <pr>