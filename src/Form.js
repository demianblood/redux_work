import {useState} from "react";

export default function Form({users}) {
    let [userOne, setUserOne] = useState({})
    let [user, setUser] = useState({})
    let userChoose = (e) => {
        let user_id = e.target.value;
        console.log(user_id)
        let find = users.find(user => user.id === user_id);
        setUser(find);

    }

    return (
        <div>
            <form onSubmit={userChoose}>
                <select onChange={userChoose} value={user}>
                    {
                        users.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
                    }
                </select>

            </form>
        </div>
    );


}