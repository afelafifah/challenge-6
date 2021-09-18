const { user_game_biodata } = require('./models')

user_game_biodata.create({
    alamat: "jl. jalan",
    notelp: "098192833",
    nama: "afiful",
    tanggal_lahir: "02/03/2000",
    id_user_game: 1
})
.then(result => {
    console.log(result)
})