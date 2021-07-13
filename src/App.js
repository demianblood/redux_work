// import {createRef} from "react";
//
// export default function App() {
//
//     let myFormRef = createRef();
//     let myButton=createRef()
//     const onFormSubmit = (e) => {
//         e.preventDefault();//заборона дефолтної події
//         console.log(myFormRef.current.username.value);
//         console.log(myButton.current);
//     }
//     return (
//         <div>
//             <form action={"/someUrl"} method={'post'} onSubmit={onFormSubmit} ref={myFormRef}>
//                 <input type="text" name={'username'}/>
//                 <button  ref={myButton}>save</button>
//             </form>
//         </div>
//     );
//
//
// }
import {useEffect, useState} from "react";

// export default function App() {
//     let [usernameInputState, setUsernameInputState] = useState('asdasd')
//     ;
//     let onInputChange = (e) => {
//         console.log(e.target.value)
//         setUsernameInputState(e.target.value);
//     }
//     return (
//         <div>
//             <form action={'/someUrl'} method={'post'}>
//                 <input type="text" name={'username'} value={usernameInputState} onChange={onInputChange}/>
//                 <button>save</button>
//             </form>
//         </div>
//     );
//
//
// }
import Form from "./Form";

export default function App() {
    let [users, setUser] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json() )
            .then(value => {
                setUser([...value])
            })
    },[])
    return (
        <div>
            <Form users={users}/>
        </div>
    );


}