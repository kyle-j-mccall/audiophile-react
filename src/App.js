import './App.css';
import Auth from './Components/Auth/Auth';
import { Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/landing" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
