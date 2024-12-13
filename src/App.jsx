import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/herosection/login';
import Password from './components/forgottenPassword/password';
import CreateAccount from './components/CreateAccount/create';
import { years } from "./data.json";

console.log(years)

function App() {
  return ( 
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='forgottenPassword' element={<Password />} />
      <Route path='createaccount' element={<CreateAccount />}/>
    </Routes>
  );
}

export default App













// import React from 'react';
// import Hero from './components/herosection/index.jsx';
// // import SubHero from './components/subherosection/index.jsx';

// const App = () => {
//   return (
//     <div>
//       <Hero />
//       {/* <SubHero /> */}
//     </div>
//   )
// }

// export default App;