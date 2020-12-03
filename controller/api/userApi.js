// const User=require('../../models/user');

// function index(req,res){
// return res.status(200).json({
//          success:true
// })
// }
// function signup(req,res){
// const{password,confirm_password:confirmPassword,email,name}=req.body;
// console.log(req.body);
// if(password!==confirmPassword){
//          return res.status(500).json({
//                   error:"password should match"
//          })
// }
// if (!name || !email) {
//   return res.status(500).json({
//     error: "name and email compulsory",
//   });
// }
// const user= User.findOne({email:email});
// try{
//   if(!user){
//            const createdUser= User.create({
// name,email,password
//            });
//            if(createdUser){
//                  return res.status(200).json({
//                    // error:"password should match"
//                    message:'user created successfully',
//                    name: createdUser.name,
//                    email: createdUser.email,
//                    password: createdUser.password,
//                  });      
//            }
//             return res.status(500).json({
//               error: "something went Wrong",
//             });
//   }   
//   else{
//      return res.status(500).json({
//        error: "User already Exist",
//      });       
//   }    
// }
// catch(error){

// }
// }
// module.exports={
//          index,signup
// }
const User = require("../../models/user");
// const jwt = require("jsonwebtoken");
// const { response } = require("express");

function index(req, res) {
  return res.status(200).json({
    success: false,
  });
}

async function signup(req, res) {
  const { password, confirm_password: confirmPassword, email, name } = req.body;

  console.log(req.body);
  if (password !== confirmPassword) {
    return res.status(500).json({
      error: "Password should match",
    });
  }

  if (!name || !email) {
    return res.status(500).json({
      error: "Name and email compulsory",
    });
  }

  const user = await User.findOne({ email: email });

  try {
    if (!user) {
      const createdUser = await User.create({
        name,
        email,
        password,
      });

      if (createdUser) {
        return res.status(201).json({
          message: "User created succssefully!",
          name: createdUser.name,
          email: createdUser.email,
          id: createdUser.id,
        });
      }

      return res.status(500).json({
        error: "Something went wrong",
      });
    } else {
      return res.status(500).json({
        error: "User already exists!",
      });
    }
  } catch (error) {
    console.log("signup -> error", error);
    return res.status(500).json({
      error,
    });
  }
}


module.exports = {
  index,
  signup
  
};