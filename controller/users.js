const UserModel = require('../models/users')


//Registrasi
module.exports.registrasi = (req,res)=>{
    console.log(req.body)
    const newUser = new UserModel({email:req.body.email, 
        userid:req.body.userid, 
        nohp:req.body.nohp, 
        password:req.body.password})

    newUser.save().then(()=>{
        res.send({code:200, message: 'Registrasi Data Berhasil'})
    }).catch((err)=>{
        res.send({code:500 , message: 'Registrasi Gagal!!'})
    })

    

}



//Login
module.exports.login = (req,res)=>{
    console.log(req.body.email)

    UserModel.findOne({email: req.body.email}).then(result=>{
        console.log(result)
        if(result.password!==req.body.password){
            res.send({code:404,message:'Password salah, Login Gagal'})
        }else{
            res.send({code:200,message:'Login Sukses, data di temukan' ,token:'oke'})
        }


        
    }).catch(err=>{
        res.send({code:500,message:`Login Gagal`})
    })
    

    // newUser.save().then(()=>{
    //     res.send({code:200, message: 'Login Berhasil'})
    // }).catch((err)=>{
    //     res.send({code:500 , message: 'Login Gagal!!'})
    // })

    

}