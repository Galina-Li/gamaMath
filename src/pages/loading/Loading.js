import React from "react";
import  "./Loading.css"
import Baloons from "../../components/baloons/Baloons";

export default function Loading (){
    return(
    
        <div className="loading">
            <p className="loaderText">LOADING</p>
            <Baloons />
        </div>
    )

}