//import img from './Sign-up.png';
import img1 from './Happy Tail.jp.jpg';
//import img2 from './Login4.jpg.png';

import './App.css';

function App() {
  return (
    <>
    <nav className="head">
    <div className="img">
      <img src={img1} alt="Happy Tail"height="150" width="150"></img>
    </div>
    <div className="Head1">  
    <p1><b>HAPPY TAIL</b></p1>
    </div>
    </nav>
    
    <nav className="navbar">  
    <div className="navbar-container">
      <a href="/" >Home</a>
         <a href="/" >Category</a>
      <a href="/" >Doctor</a>
    <a href="/" >Trainer</a>
    <a href="/">About us</a>
  </div>
  <div className="navbar-containers2">
  <input className="int" type="text" name="search" placeholder="search"></input>
         <button className="but" value="search"><b>Search</b></button>

          </div>
  
  <div className="navbar-containers">
      <a href="/">Sing up/</a>
      <a href="/">Login</a>
    </div>
    
   </nav> 

   </> 
  );
}

export default App;
