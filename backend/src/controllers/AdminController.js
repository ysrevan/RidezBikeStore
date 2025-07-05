import { generateToken } from "../utils/generateToken.js";

export const adminLogin = (req, res) => {
  const { username, password } = req.body;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username !== adminUsername || password !== adminPassword) {
    return res.status(401).json({ message: "İcazə verilmir" });
  }

  const fakeAdminId = "admin"; 
  const token = generateToken(fakeAdminId, res);

  return res.status(200).json({ message: "Admin daxil oldu", token });
};
