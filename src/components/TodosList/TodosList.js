export const TodosList = ({todos, isLoading, updateTodo,deleteTodo}) => {
    if (isLoading) return <h1>...LOADING</h1>
    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                    <p>Is completed:{todo.completed.toString()}</p>
                    <span>Created At:{new Date(todo.createdAt).toLocaleString()}</span>
                    <button onClick={() => updateTodo(todo.id, todo.completed)}>Update todos</button>
                    <button onClick={()=>deleteTodo(todo.id)}>Delete Todos</button>
                </div>
            ))}


        </div>
    )
}