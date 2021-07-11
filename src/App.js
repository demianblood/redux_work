import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

const SomeNestedChildComponent = () => {
    const counter = useSelector(({counterValue}) => counterValue);
    console.log(counter, 'sasrv');


    return (
        <header className="App-header">
            <h1>{counter}</h1>

            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}
const SomeChildComponent = () => {
    return (
        <SomeNestedChildComponent/>
    )
}


function App() {
    const dispatch = useDispatch();

    function getNumber(e) {
        e.preventDefault()
        dispatch({type: 'INC_CUSTOM', paiload: +
                e.target[0].value})
        e.target[0].value = ''
    }

    return (
        <div className="App">


            <div>
                <button onClick={() => {
                    dispatch({type: 'INC'})
                }}>inc
                </button>
                <button onClick={() => {
                    dispatch({type: 'DEC'})
                }}>dec
                </button>
                <button onClick={() => {
                    dispatch({type: 'RESET'})
                }}>reset
                </button>
                <form onSubmit={getNumber}>
                    <input type='number' name='number'/>
                    <button>ok
                    </button>
                </form>

            </div>
            < SomeChildComponent/>
        </div>
    );
}

export default App;
