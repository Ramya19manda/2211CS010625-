// import logo from './logo.svg';
// import './App.css';
    // import Home from './Components/Home';
    // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
    // import About from './Components/About';
    // // import logoimage from './component'
    // import Login from './Components/login';
    // import Contact from'./Components/Contact';

    // function App() {
    // return (
    //     <div className="App">
    //       <center>
    //       <h2 style={{color:'black'}}> <br/>
    //           M.Ramya <br/> Group-8D<br/> 2211CS010625 Week-7</h2>
    //           <hr style={{color:"black"}}/>
    //           <h2 style={{color:'blue'}}>StockPulse</h2></center>
    //           <br/>
    //     <BrowserRouter>
        
    //     <nav>
    //         <div className='navbar'>
    //         {/* <img src={logoimage} alt="Logo" /> */}
    //         <ul>
            
    //             <li><Link to='/' style={{ color: 'black', fontSize: '20px' }}>Home</Link></li>
    //             <li><Link to='/about' style={{ color: 'black', fontSize: '20px' }}>About</Link></li>
    //             <li><Link to='/login' style={{ color: 'black', fontSize: '20px' }}>Login</Link></li>
    //             <li><Link to='/contact' style={{ color: 'black', fontSize: '20px' }}>Contact</Link></li>
    //         </ul>
    //         <form className="form-inline my-2 my-lg-0">
    //           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    //           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //         </form>
    //         </div>
    //     </nav>
    //     <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/login" element={<Login />} />
    //         <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //     </BrowserRouter>
    //     </div>
    // );
    // }

    // export default App;

//     import Counter from './Components/Counter';
// import EmployeeList from './Components/EmployeeList';
//     const App = () =>{
//         return(
//             <div>
//                 {/* <Counter/> */}
//                 <EmployeeList/>
//             </div>
//         );
//     }
//     export default App;


// import React, { useState } from 'react';

// function ComponentA({ handleClick }) {
//   return (
//     <div>
//       <h2>Component A</h2>
//       <button onClick={handleClick}>Click me to switch</button>
//     </div>
//   );
// }

// function ComponentB({ handleClick }) {
//   return (
//     <div>
//       <h2>Component B</h2>
//       <button onClick={handleClick}>Click me to switch</button>
//     </div>
//   );
// }

// function App() {
//   const [showComponentA, setShowComponentA] = useState(true);

//   const handleClick = () => {
//     setShowComponentA(!showComponentA);
//   };

//   return (
//     <div>
//       {showComponentA ? (
//         <ComponentA handleClick={handleClick} />
//       ) : (
//         <ComponentB handleClick={handleClick} />
//       )}
//     </div>
//   );
// }

// export default App;

// import Counter from './Components/Counter';
// const App = () =>{
//   return(
//     <div>
//       <Counter/>
//     </div>
//   )
// }
// export default App;




// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // empty dependency array means this effect will only run once after the initial render

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // export default App;
// import Counter from './Components/Counter';
// import EmployeeList from './Components/EmployeeList';
// import Student from './Components/Student';
// import EmployeeInfo from './Components/EmployeeInfo';
//  const App = () =>{
// //   const StudentDetails ={
// //     rollNo:'2345',
// //     name:'ramya',
// //     email:'1234@email.com',
// //     mobile:'4658',

//   // }
//   return(
//     <div>
//       {/* <Counter/> */}
//       {/* <EmployeeList/> */}
//       {/* <Student{...StudentDetails}></Student> */}
//         <EmployeeInfo/>
//     </div>
//   );
// }
// export default App;


import React, {useState}from 'react';
import './App.css';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState('');

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLogoutMessage('You have been logged out.');
    setTimeout(() => {
    setLogoutMessage('');
    }, 3000); // Clear the message after 3 seconds
  };
  <center>
      </center>
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
      <div className='navbar'>

      <h2>Stock pulse</h2>
        <ul>
  

          <li>
            <Link to="/Home" style={{ color: 'black', fontSize: '20px' }}>Home</Link>
          </li>
          <li>
            <Link to="/About"style={{ color: 'black', fontSize: '20px' }}>About Us</Link>
          </li>
          <li>
            <Link to="/Contact"style={{ color: 'black', fontSize: '20px' }}>Contact us</Link>
          </li>
          {isLoggedIn ?
                <li><button onClick={handleLogout} style={{ color: 'black', fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button></li> :
                <li className="nav-item">
                  <Link to="/LoginPage" style={{ color: 'black', fontSize: '20px' }}>Login/Register</Link>
                </li>

}
        </ul>
        <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
      </nav>
      {logoutMessage && <div>{logoutMessage}</div>}
      <Routes>
        <Route exact path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/LoginPage" element={<LoginPage onLoginSuccess={handleLoginSuccess}/>}/>

        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;








