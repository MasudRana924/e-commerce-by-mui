import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Shops from './Components/Shops/Shops';
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Header></Header>
       <Switch>
         <Route exact path="/">
           <Shops></Shops>
         </Route>
         <Route  path="/home">
           <Shops></Shops>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>

       </Switch>
      <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
