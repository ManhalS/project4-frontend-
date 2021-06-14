import logo from './logo.svg';
import './App.css';
import Nav from './components/navigataion';
import About from './components/About.jsx'
import Login from './components/login.jsx'
import {BrowserRouter as Router,Switch, Route } from'react-router-dom'
import Home from './components/Home';
import addbook from './components/Addbook';
import editbook from './components/editbook';
import Searchbar from './components/searchbar';
import PostForm from './components/postform';
import Deletebook from './components/deletebook';

function App() {

  return (
  <Router>
    <div >
      <Nav/>
      
      <Route path = '/'exact component ={Home}/>
      <Route path = '/about' component ={About}/>
      <Route path = '/login' component={Login} />
      <Route path = '/addbook' component={addbook}/>
      <Route path ='/editbook' component={editbook}/>
      <Route path ='/postform' component={PostForm}/>
      <Route path ='/deletebook' component={Deletebook}/>


     
    </div>
  </Router>
  );
  }





export default App;
