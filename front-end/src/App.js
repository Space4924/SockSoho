import './App.css';
import Navigator from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feature from './Feature';
import Productlist from './Productlist';
// import Home from './Home';
import Update from './Update';
function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Routes>
          {/* <Route exact path='/' element={<Home/>}/> */}
            <Route exact path='/' element={<Productlist/>}></Route>
            <Route exact path='/feature' element={<Feature />}></Route>
            <Route exact path='/Update/:id' element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
