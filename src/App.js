import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import Header from './components/header';

import LayOut from './components/layout';
function App () {
  return (
    <HashRouter>
      {/* // HashRouter只能有一个根节点  带#号 */}
      {/* react 路由写在组件里 */}

      <LayOut />

      <Route path='/' component={Header}></Route>




    </HashRouter >
  );
}

export default App;
