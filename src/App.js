// import logo from './logo.svg'; 
import { startTransition } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() { 
  return (
    <>
  
   <Navbar title ="Texts" />
   <div className="container my-3">
   {/* <TextForm/> */}
   {/* <Navbar/> */}
   <TextForm heading ="Enter the text below "/>
   </div>
    </>
  )
}

export default App;
