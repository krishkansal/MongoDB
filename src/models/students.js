const mongoose=require('mongoose');
const validator=require("validator");

const studentSchema=new mongoose.Schema({
    name:mongoose.Schema.Types.String
})

module.exports=new mongoose.model('Student',studentSchema);
