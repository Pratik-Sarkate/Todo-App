const express = require("express");
const {createTodo, updateTodo} = require("./types")
const mongoose = require("mongoose");
const { Todo } = require("./db");

const app = express();
const PORT = require("./config/index");

app.use(express.json());

// body {
//     title: string,
//     description: string;
// }
app.post("/todo", async function(req,res){
    
    const todo = req.body;
    const valid = createTodo.safeParse(todo);

    if(!valid.success){
        res.status(411).json({
            message: "Invalid input format"
        });
        return;
    }

    await Todo.create(todo);


    res.json({
        message: "Succeessfully added tehe todo"
    })
}) 

app.get("/todos", async function(req,res){

    const todos = await Todo.find({});

    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const id = req.body;
    const valid = createTodo.safeParse(id);

    if(!valid.success){
        res.status(411).json({
            message: "Invalid input format"
        });
        return;
    }

    await Todo.findOneAndUpdate({id}, {completed: true});
})

app.listen(PORT, ()=>{
    console.log("Backend server started on PORT ",PORT);   
});