import Header from "./pages/header.js";
import './App.css';
import Home from "./pages/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about.js";
import Resume from "./pages/resume.js";
import Skill from "./pages/skill.js";
import Project from "./pages/project.js";

function App(){
  return(
<div className="App">
  <BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Navigate to="/home"/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/resume" element={<Resume/>}/>
  <Route path="/skill" element={<Skill/>}/>
  <Route path="/project" element={<Project/>}/>
</Routes>
 </BrowserRouter>
</div>
   
  )
}

export default App;