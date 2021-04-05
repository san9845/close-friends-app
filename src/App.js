
import './App.css';
import {Home} from './components/Home'
import { AddFriend } from './components/AddFriend'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <div className="layout">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-friend" component={AddFriend} />
          </Switch>
        </Router>
      </GlobalProvider>

    </div>
  );
}

export default App;
