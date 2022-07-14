import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import AlertPopUp from './components/Alert/Alert';
import Backdrop from './components/Backdrop/Backdrop';

//  http://localhost:3001
//  https://short-url-back-end.herokuapp.com

function App() {
  return (
    <div className="App">
      <Backdrop/>
      <AlertPopUp/>
      <LoginPage/>
      <button onClick={()=> fetch('https://short-url-back-end.herokuapp.com/delete_by_range_id')}>Delete form DB all users</button>
    </div>
  );
}

export default App;
