
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

function App() {

  const state = useSelector(state => state.userReducer);
  console.log(state);
  let dispatch = useDispatch();

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          dispatch({type: 'LOAD_USERS', payload: value});
        })


  }, []);



  return (
    <div className="App">

    </div>
  );
}

export default App;
