import img from './Sign-up.png';
//import img1 from './pet.jpg';
import img2 from './Login4.jpg.png';

import './App.css';

function App() {
  return (
    <>
    <nav className="head">
    <div className="Head1">  
    <p1><b>Happy Tail</b></p1>
    </div>
    </nav>
    
    <nav className="navbar">  
    <div className="navbar-container">
      <a href="/" ><b>Home</b></a>
         <a href="/" ><b>Category</b></a>
      <a href="/" ><b>Doctor</b></a>
    <a href="/" ><b>Trainer</b></a>
    <a href="/"><b>About us</b></a>
  </div>
  <div className="navbar-containers2">
  <input className="int" type="text" name="search" placeholder="search"></input>
         <button className="but" value="search"><b>Search</b></button>

          </div>
  
  <div className="navbar-containers">
  
         <a href="/"><img src={img} alt="Sign up" height="50" width="100">
         </img> </a>
         <a href="/"><img src={img2} alt="login" height="50" width="70">
         </img> </a>
         
    </div>
    
   </nav> 

   </> 
  );
}

export default App;
