import React from "react";
import Index2 from "./index2";
import Index3 from "./index3";
import Index5 from "./index5";
import Index6 from "./index6";
import Index7 from "./index7";
import  './main.css'
import { BrowserRouter as Router  , Route, Routes  } from "react-router-dom";

const Index1 = () => {
           return (

           <Router>

<Routes>

    <Route  path = '/' element = {<Index3/>}   />
    <Route path="/try" element = {<Index2/>}  />
    <Route path="/try1" element = {<Index5/>}  />
    <Route path="/try2" element = {<Index6/>}  />
    <Route path="/try3" element = {<Index7/>}  />
</Routes> 

           </Router>

       
           )
}


export default Index1