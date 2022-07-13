import './App.css';

import LoginPage from './components/LoginPage/LoginPage';
import AlertPopUp from './components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <AlertPopUp/>
      <LoginPage/>
      <button onClick={()=> fetch('http://localhost:3001/delete_by_range_id')}>Delete form DB all users</button>
    </div>
  );
}

export default App;
