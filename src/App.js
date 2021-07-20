import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    setLoadingTrue,
    setLoadingFalse,
    appTodos,
    pushNewTodo,
    updTodo, delTodo,

} from "./redux/actionCriaters/actionCriatesIndex";
import {CreateTodoForm} from "./components/CreateTodoForm/CreateTodoForm";
import {TodosList} from "./components/TodosList/TodosList";


export default function App() {

    const {todos, isLoading} = useSelector(({todosReducer}) => todosReducer);
    const dispatch = useDispatch()
    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        //для того щоб выдображалось без оновлення сторінки
        dispatch(pushNewTodo(data))
        console.log(data)
    };

    useEffect(() => {
        fetchTodos()
    }, []);

    const fetchTodos = async () => {
        try {
            dispatch(setLoadingTrue())
            const response = await fetch('http://localhost:8888/get-todos');
            const data = await response.json();
            dispatch(appTodos(data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setLoadingFalse())
        }
    }
    const updateTodo = async (id, completed) => {
        const response = await fetch("http://localhost:8888/update-todo/" + id, {
            method: "PATCH",
            body: JSON.stringify({completed: !completed}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        dispatch(updTodo(data))
    }
    const deleteTodo = async (id) => {
        await fetch("http://localhost:8888/delete-todo/" + id, {
            method: "DELETE",
            body: JSON.stringify({id})
        });
        dispatch(delTodo(id));
    }

    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <TodosList todos={todos} isLoading={isLoading} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}
