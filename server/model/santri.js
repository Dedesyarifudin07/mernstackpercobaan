const mongoose = require('mongoose');

const Santri = mongoose.model('santri', 
{
     name: {
        type:String,
        required :true
    } ,
    nohp: {
        type:String,
        required :true
    },
    email:{
        type:String,
        required :true
    }
});

module.exports = Santri;