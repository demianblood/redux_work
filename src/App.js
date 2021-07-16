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

import Users from "./Components/Users/Users";

export default function App() {

    return (
        <div>
            <Users/>
        </div>
    );


}