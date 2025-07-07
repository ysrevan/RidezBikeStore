import jwt from "jsonwebtoken"
import "dotenv/config"
import user from "../../models/UserModel.js"

export const verifyToken = async (req, res, next) => {

  try {
    const token = req.cookies.token 

    if (!token) {
      return res.status(403).json({ message: "Token is required" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (!decoded) {
      return res.status(401).json({ message: "Invalid Token" })
    }

   
    req.user = await user.findById(decoded.id).select("-password")

    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" })
  }
}

export default verifyToken
