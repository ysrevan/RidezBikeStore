import jwt from "jsonwebtoken"
import "dotenv/config"


export const verifyToken = (req,res,next)=>{
 

  try {
    const token = res.cookies.token

    if (!token) {
      return res.status(403).json({message:"Token is required"})
    }
  
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    if (!decoded) {
      return res.status(401).json({message:"Invalid Token"})
    }
  } catch (error) {
    return res.status(401).json({message:"Unauthorized"})
  }

  next();
}

export default verifyToken