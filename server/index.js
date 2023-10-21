const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LaptopModel = require("./models/Laptops")
const TelevisionModel = require("./models/Televisions") 
const EmployeeModel = require("./models/Employee")

const app = express(); 
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/4thSemProject")
//mongodb://localhost:27017

//sign in

app.post("/signIn", (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => console.log(err)) 
})

app.post("/login", (req, res) => {
    const {name, password} = req.body;
    EmployeeModel.findOne({name:name})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("success")
            } else {
                res.json("Incorrect password")
            }
        } else {
            res.json("Invalid user")
        }
    })
})


//For Laptop

app.get('/laptops', (req, res) => {
    LaptopModel.find({})
    .then(laptops => res.json(laptops))
    .catch(err => err.res.data)
})

app.get("/getLaptop/:id", (req, res) => {
    const id = req.params.id;
    LaptopModel.findById({_id: id})
    .then(laptops => res.json(laptops))
    .catch(err => err.res.data)
})

app.delete("/deleteLaptop/:id", (req, res) => {
    const id = req.params.id;
    LaptopModel.findByIdAndDelete({_id:id})
    .then(laptops => res.json(laptops))
    .catch(err => res.json(err))
})

app.put("/updateLaptop/:id", (req, res) => {
    const id = req.params.id;
    LaptopModel.findByIdAndUpdate({_id: id}, {
        brand: req.body.brand, 
        model:req.body.model, 
        quantity: req.body.quantity
    })
    .then(laptops => res.json(laptops))
    .catch(err => res.json(err))
})

app.post("/addLaptop", (req, res) => {
    LaptopModel.create(req.body).then(laptops => res.json(laptops))
    .catch(err => res.json(err))
})

//For Television

app.get('/televisions', (req, res) => {
    TelevisionModel.find({})
    .then(televisions => res.json(televisions))
    .catch(err => err.res.data)
})

app.get("/getTelevision/:id", (req, res) => {
    const id = req.params.id;
    TelevisionModel.findById({_id: id})
    .then(televisions => res.json(televisions))
    .catch(err => err.res.data)
})

app.put("/updateTelevision/:id", (req, res) => {
    const id = req.params.id;
    TelevisionModel.findByIdAndUpdate({_id: id}, {
        brand: req.body.brand, 
        model:req.body.model, 
        quantity: req.body.quantity
    })
    .then(televisions => res.json(televisions))
    .catch(err => res.json(err))
})

app.delete("/deleteTelevision/:id", (req, res) => {
    const id = req.params.id;
    TelevisionModel.findByIdAndDelete({_id:id})
    .then(televisions => res.json(televisions))
    .catch(err => res.json(err))
})

app.post("/addTelevision", (req, res) => {
    TelevisionModel.create(req.body).then(televisions => res.json(televisions))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running");
})