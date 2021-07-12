import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function Users() {

    const dispatch = useDispatch();
    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatch({
            type: 'SET_USERS',
            payload: data,
        })
    }
    useEffect(() => {
        fetchUsers()
    }, []);
    const users = useSelector(({users}) => users);
    console.log({users})
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );


}