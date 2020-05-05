import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "../src/component/Header"
import Body from "../src/component/Body"
import Footer from "../src/component/Footer"
import Subproduct from "../src/component/Subproduct"
import Details from "../src/component/Details"



function App() {
  return (
    <div className="App">
     <Header></Header>
     <BrowserRouter>
     <Switch>
     <Route path="/home" component={Body}></Route>
     <Route path="/details/:id?" component={Details}></Route>
   <Route path="/category/:id?" component={Subproduct}></Route>
   <Route path="/category/details/:id?" component={Details}></Route>

      </Switch>
     </BrowserRouter>
   
<Footer></Footer>
    </div>
  );
}

export default App;
