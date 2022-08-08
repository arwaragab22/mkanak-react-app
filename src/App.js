
import './App.css';

import Nav from './components/nav';
import Home from './pages/home';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Post from './pages/post';
import Login from './pages/login';

function App() {
 
  return (
    <BrowserRouter>
      < div className="App">
        <Nav />
      
      
    <Routes>
      <Route path="/" element={<Home/>}/>
         
        <Route path="post" element={<Post/>}/>
          <Route path="sign" element={<Login/>} />
         
             </Routes>
      </div>
     
  </BrowserRouter>
   
  );
}

export default App;
