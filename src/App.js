import React from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Us from './components/us'
function App() {
  return (
    <div className="App">
     <Router>
       <div>
         {/* //link 大写 */}
       <Link to='/'>首页</Link>
       <Link to='/about'>关于</Link>
       <Link to='/us'>我们</Link>
      <hr></hr>

      <Route path='/' exact component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/us' component={Us}></Route>
       </div>
     
     </Router>
    </div>
  );
}

export default App;
