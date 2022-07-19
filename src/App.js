import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import AlertPopUp from './components/Alert/Alert';
import Backdrop from './components/Backdrop/Backdrop';
import { useState, useEffect } from 'react';

//  http://localhost:3001
//  https://short-url-back-end.herokuapp.com

let URL = (process.env.REACT_APP_LOCAL_API && process.env.REACT_APP_HEROKU_API) ? process.env.REACT_APP_HEROKU_API : process.env.REACT_APP_LOCAL_API

function App() {
  const [db, getBd] = useState('')
  const get_data_from_db = async () => {
    try {
      let response = await fetch(URL+'/users')
      let data = await response.json();
      getBd(data)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    setInterval(() => {
      get_data_from_db()
    }, 2000)
  }, [])

  // setInterval( () => get_data_from_db(), 2000);

  return (
    <div className="App">
      <Backdrop />
      <AlertPopUp />
      <LoginPage />
      <span>BD</span>
      <br></br>
      <br></br>
      <div style={{display: "flex", justifyContent: 'center'}}>
        <div style={{border: "1px solid black", width: '300px'}}>
          {db != "" ? db.map(x=> <div> <span>id:{x.id}</span> <span>{x.email}</span>  <span>{x.password}</span> </div>) : "" } 
        </div>
        <br></br>
      </div>
      <br></br>
      <button onClick={() => fetch(URL+'/delete_by_range_id')}>Delete form DB all users</button>
    </div>
  );
}

export default App;
