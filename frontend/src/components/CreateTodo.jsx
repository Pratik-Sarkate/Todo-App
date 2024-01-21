import { useState } from "react"

export function CreateTodo(){
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
    <>
        <input type="text" placeholder = "title" style={{
            margin: 10,
            padding: 10
        }} onChange={function(ele){
            setTitle(ele.target.value);
        }}/> <br />
        
        <input type="text" placeholder = "description" style={{
            margin: 10,
            padding: 10
        }} onChange={function(ele){
            setDescription(ele.target.value);
        }}/> <br />

        <button style={{
            margin: 10,
            padding: 10
        }} onClick={()=>{

            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(()=>{
                alert("Todo added")
            })
        }}>Add a todo</button>
    </>
    )
}
