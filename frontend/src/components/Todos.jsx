
export function Todos({todos}){

    return (
        <>  
            {todos.map(function(todo){
                return (
                    <>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>  
                        <button>{todo.completed? "Completed" : "Mark as done"}</button>
                    </>
                )

            })}
        </>
    )
}