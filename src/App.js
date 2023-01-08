import './App.css';
import Login from './Components/Auth/Login';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/Auth/SignUp';
import Browse from './Components/Browse/Browse';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/landing" component={Landing} />
        <Route path="/browse" component={Browse} />
      </Switch>
    </div>
  );
}

export default App;
