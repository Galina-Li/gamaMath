import React from "react";
import "./ContinueTheGame.css"
import { Routes, Route, Link } from "react-router-dom";

export default function ContinueTheGame() {
    return (
        <div className="containerContinue">
            <div className="continueContainer">
                <div className="continue">
                    <p>
                        Хочешь продолжить?
                    </p>
                </div>
                <div className="chahgeAnswer">
                    <Link to="/gameMath" className="yes continue-answer">
                        <img src={'./img/yes.gif'}/>
                        <p>Да</p>



                    </Link>
                    <Link to="/menu" className="no continue-answer">
                        <img src={"./img/no.gif"}/>
                        <p>Нет</p>
                    </Link>
                </div>
            </div>

        </div >
    )
}