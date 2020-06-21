import React from 'react';
// import './App.css';
import {
  HashRouter as Router, Route, Link, Switch
} from 'react-router-dom'

function Home(){
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li><Link to="/home/a">1</Link></li>
        <li><Link to="/home/b">2</Link></li>
        <Route path="/home/a" render={() => <div>homea</div>}></Route>
        <Route path="/home/b" render={() => <div>homeb</div>}></Route>
      </ul>

    </div>
  )
}

function My() {
  return (
    <div>my</div>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/home">hmoe</Link></li>
          <li><Link to="/my">my</Link></li>
        </ul>
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/my" component={My}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
