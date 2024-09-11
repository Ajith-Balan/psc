import {useState} from 'react'


import AddQuestion from './components/AddQuestion';
import showquestion from './components/showquestion';
import UpdateQuestion from './components/UpdateQuestion';
import home from './components/home';


import React,{Component} from "react";import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App(){

const [count,setCount]=useState(0)
return(
<>
<BrowserRouter>
<Routes>
               
                    <Route path="/addquestion" Component={AddQuestion} />
                    
                    <Route path="/showquestion" Component={showquestion} />     

                    <Route path="/updatequestion/:id" Component={UpdateQuestion} />

                    <Route path="/" Component={home} />


                    
              
</Routes>
</BrowserRouter>
</>
)

 
}
export default App;