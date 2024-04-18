const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

// const Express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// // Define your MongoDB connection URL
// const mongoURL = "mongodb+srv://vivekanand80516:vINGCgt3L28dPqkt@cluster0.wndzquq.mongodb.net/people";

// // Connect to MongoDB
// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to MongoDB");
// }).catch((error) => {
//     console.error("MongoDB connection error:", error);
// });

// // Create Mongoose schemas and models as needed

// const personSchema=new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             required:true
//         },age:{
//             type:Number
//         },
//         services:{
//          type:String,
//          enum:["cook","chef", "waiter"],
//         //  required:true
//         },
//         mobile:{
//             type:Number,
//             required:true
//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true
//         },
//         message:{
//          type:String
//         }
//     }
// )
// const StudentSchema=new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             required:true
//         },age:{
//             type:Number
//         },
//         services:{
//          type:String,
//          enum:["cook","chef", "waiter"],
//         //  required:true
//         },
//         mobile:{
//             type:Number,
//             required:true
//         },
//         email:{
//             type:String,
//             required:true,
//             unique:true
//         },
//         message:{
//          type:String
//         }
//     }
// )

// const Person= mongoose.model("Person",personSchema);
// const Student = mongoose.model("Student",StudentSchema)





// // Create Express application
// const app = Express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // POST route to save data
// app.post('/', async (req, res) => {
//     try {
//         const data = req.body;
//         const newPerson = new Person(data);
//         const savedPerson = await newPerson.save();
//         console.log("Data saved successfully");
//         res.status(200).json(savedPerson);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// // GET route to fetch data
// app.get('/person', async (req, res) => {
//     try {
//         const getData = await Person.find();
//         console.log("Data fetched successfully");
//         res.status(200).json(getData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
