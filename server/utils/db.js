const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tkj1', {
    useNewUrlParser:true,
    useUnifiedTopology :true,
    useCreateIndex:true,
});

let db = mongoose.connection;
db.on('error',console.error.bind(console,'database conect eror'));
db.once('open',() => {
    console.log('database connected');
})

// const santri = require('../model/santri');

// // menambahkan 1 data
// const santri1 = new santri({
//     name:'Ahmad syarifudin',
//     nohp:'089675434d67',
//     email:'Dedesyarifudin@gmail.com'
// });


// //simpan ke collection
// santri1.save().then((santri) => console.log(santri))