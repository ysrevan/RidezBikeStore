import mongoose from "mongoose"

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connect MongoDB")).catch(()=>console.log("Disconnect MongoDB"))