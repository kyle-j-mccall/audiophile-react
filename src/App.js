import './App.css';
import Login from './Components/Auth/Login';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/Auth/SignUp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/landing" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
