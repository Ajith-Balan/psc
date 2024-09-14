import {useState} from 'react'



import home from './components/home';


import React,{Component} from "react";import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App(){

const [count,setCount]=useState(0)
return(
<>
<BrowserRouter>
<Routes>
               

                    <Route path="/" Component={home} />


                    
              
</Routes>
</BrowserRouter>
</>
)

 
}
export default App;
