import {useEffect, useState} from "react";

export default function Users() {
    let [users, setUsers] = useState([]);

    let [user, setUser] = useState(null)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    const userChoose = ({target: {value}}) => {
        setUser(users.find(xxx => xxx.id === +value))
    }
    return (
        <div>
            <form onSubmit={userChoose}>
                <select onChange={userChoose} item={user}>
                    {users.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
                {user && <h3>{user.id}-{user.name}</h3>}
            </form>
        </div>
    )


}