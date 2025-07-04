// import user from "../models/UserModel.js"
// import userValidationSchema from "../middleware/validation/UserValidation.js"
// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken"
// import "dotenv/config"

// export const register = async (req,res)=>{
//     try {
//         const {name,username,email,password,image} = req.body

//         const {error} = userValidationSchema.validate(req.body)

//         if (error) {
//             return res.status(400).json({message:error.details[0].message})
//         }

//         const existUser = await user.findOne({email})

//         if (existUser) {
//             return res.status(400).json({message:"User already exists"})
//         }

//         const hasedPassword = await bcrypt.hash(password, 10);

//     const newUser = new user({
//       image: imageUrl,
//       name,
//       username,
//       email,
//       password: hasedPassword,
//     });

//     await newUser.save();

//     const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET,{expiresIn:"2m"})

//     return res.status(201).json({
//         message:"User create successfully",
//         newUser,
//         token
//     })

    
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }

import user from "../models/UserModel.js";
import { registerValidationSchema } from "../middleware/validation/UserRegisterValidation.js";
import bcrypt from "bcrypt";
import { loginValidationSchema } from "../middleware/validation/UserLoginValidation.js";
import { generateToken } from "../utils/generateToken.js";
import { recieveMail } from "../middleware/mailer/mailer.js";
import jwt from "jsonwebtoken"

// export const register = async (req, res) => {
//   try {
//     const { name, username, email, password, confirmPassword, image } = req.body;

//     const {filename} = req.file

//     const imageUrl = `images/${filename}`.replace(/\\/g, "/");

//     const { error } = registerValidationSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }

//     const existUser = await user.findOne({email});
//     if (existUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new user({
//       image:imageUrl,
//       name,
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     generateToken(newUser._id,res)
//     return res.status(201).json({
//       message: "User created successfully",
//       newUser,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };


// export const login = async (req,res)=>{
//     const {username,password} = req.body

//     const {error} = loginValidationSchema.validate(req.body)

//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//       }

//       const existUser = await user.findOne({username:username});


//       if (!existUser) {
//        return res.status(400).json({message:"User not found"}) 
//       }

//       const isMatch = await bcrypt.compare(password,existUser.password)

//       if (!isMatch) {
//         return res.status(400).json({message:"Username or Password wrong"}) 
//       }

 
//      generateToken(existUser._id,res);


//       return res.status(200).json({
//         message:"User logged in successfully",
//         existUser,
//         token,
//       })
// }




export const register = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;
    const { filename } = req.file || {};

    if (!filename) {
      return res.status(400).json({ message: "Şəkil yüklənməyib" });
    }

    const { error } = registerValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existUser = await user.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Bu email artıq qeydiyyatdan keçib" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const imageUrl = `images/${filename}`;

    const newUser = new user({
      image: imageUrl,
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = generateToken(newUser._id, res);

    const confirmLink = `${process.env.SERVER_LINK}/auth/verify/${token}`

    recieveMail(newUser, confirmLink)

    return res.status(201).json({
      message: "İstifadəçi uğurla yaradıldı",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const verifyEmail = async (req,res)=>{
  try {

    const {token} = req.params

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const updatedVerify = await user.findByIdAndUpdate({_id:decoded.id},{isVerified:true})

  if (updatedVerify) {
    return res.redirect(`${process.env.CLIENT_LINK}/login`)
  }

   
    
  } catch (error) {
    return res.status(400).json({message:"Token not valid or exparid in"})
  }
}


export const login = async (req, res) => {
  const { username, password } = req.body;

  const { error } = loginValidationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const existUser = await user.findOne({ username });

  if (!existUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, existUser.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Username or Password wrong" });
  }

  const token = generateToken(existUser._id, res); // düzəliş BURDADIR

  return res.status(200).json({
    message: "User logged in successfully",
    existUser,
    token,
  });
};


export const logout = (req,res)=>{
  res.clearCookie("token")
  return res.status(200).json({ message: "User logged out successfully" });
}