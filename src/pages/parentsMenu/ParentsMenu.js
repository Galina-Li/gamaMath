import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Questions from "../questions/Questions"

export default function ParentsMenu (){
    return(
        <div>
            <div>
               <label>
                   name
                   <input/>
               </label> 
               <label>
                   age
                   <input/>
               </label>
                <label>
                  email
                  <input/>
                </label>
                <button>register</button>
               
            </div>
            <div>
                <Link to="/questions"/>
                <Routes>
                    <Route path="/questions" element={<Questions/>}/>
                </Routes>
            </div>

        </div>
    )
}
