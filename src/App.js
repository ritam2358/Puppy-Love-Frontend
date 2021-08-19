import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedinPage from './components/LoggedinPage/LoggedinPage';


function App() {
  return (
    <Router>
      <Route path="/dashboard" component={LoggedinPage} />
      <Route path="/Puppy-Love-Frontend" exact component={LoginPage} />
      {/* <LoginPage />
      <LoggedinPage /> */}
    </Router>
  );
}

export default App;
