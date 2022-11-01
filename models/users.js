const mongoose =  require('mongoose')


module.exports = mongoose.model('User',{email: String,userid: String,nohp: Number,password: String})

