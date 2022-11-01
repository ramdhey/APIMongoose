const express = require('express');
const cors = require('cors')
const userController = require('./controller/users')

const app = express();
const PORT = 2720
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

//koneksi db gKxpVxTIuZju9rbh
mongoose.connect('mongodb+srv://tugaseduwork:gKxpVxTIuZju9rbh@tugaseduwork.lban5qn.mongodb.net/?retryWrites=true&w=majority',(err,success)=>{
    if(err){
        console.log("Tidak dapat tersambung ke database,Error")
    }else{
        console.log("Sukses tersambung ke MongoDB")
    }

})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(cors())

app.post('/registrasi',userController.registrasi)
app.post('/login',userController.login)

app.listen(PORT,()=>{console.log(`Server ada di PORT ${PORT}`)})


