import "./index.css";

import { Route, Routes} from "react-router-dom"

import HomePage from "./components/homePage";
import HomePage2 from "./components/pages/homepage2";




export default function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path ="/:name" element ={<HomePage2 />} />
      </Routes>
     
      
     
    </div>
  );
}