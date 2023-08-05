const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 3000

//schema
const schemaData = mongoose.Schema({
    Train_name : String,
    Description : String,
    Train_no : Number,
    Timing : String,
    Station : String,
    Platform : Number,
},{
    timestamps : true
})

//model
const userModel = mongoose.model("user",schemaData)

//read
app.get('/',async(req,res)=>{
    const data = await userModel.find({})
    res.json({success : true, data : data})
})

//create & save
app.post('/create',async(req,res)=>{
    console.log(req.body)
    const data = new userModel(req.body)
    await data.save()
    res.send({success : true, message : "data saved successfully",data : data})
})

//update & save
    app.put('/edit/',async(req,res)=>{
    console.log(req.body)
    const {_id,newdata} = req.body
    const data = await userModel.findByIdAndUpdate(_id,newdata)
    //console.log(req)
    res.send({success : true, message : "data updated successfully",data : data})
})

//view
app.get('/viewdata/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const data = await userModel.findById(id);
      console.log(id);
      res.send(data);
    } catch (error) {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
})


//,,,
app.get('/edititemform/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const data = await userModel.findById(id);
      console.log(id);
      res.send(data);
    } catch (error) {
      console.log("Error fetching data:", error);
      res.status(500).json({ error: "Error fetching data" });
    }
})


//delete
app.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id
    const data = await userModel.deleteOne({_id : id})
    console.log(id)
    res.send({success : true, message : "data deleted successfully",data : data})
})

//mongoose connection
mongoose.connect("mongodb://127.0.0.1/CRUD-Operation")
.then(()=>{
    console.log("Connected to DB")
    app.listen(PORT,()=>{console.log(`Server is running`)})
})
.catch((err)=>{
    console.log("err")
})

//edit-form
