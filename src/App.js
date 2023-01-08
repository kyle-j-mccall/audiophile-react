import './App.css';
import Login from './Components/Auth/Login';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/Auth/SignUp';
import Browse from './Components/Browse/Browse';
import Sell from './Components/Sell/Sell';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/landing" component={Landing} />
        <Route path="/browse" component={Browse} />
        <Route path="/sell" component={Sell} />
      </Switch>
    </div>
  );
}

export default App;
