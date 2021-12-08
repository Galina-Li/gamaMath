import React from "react";
import "./Menu.css"
import { Routes, Route, Link } from "react-router-dom"
import Timer from "../timer/Timer"
import ParentsMenu from "../parentsMenu/ParentsMenu"
import GameMath from "../gameMath/GameMath"


export default function Menu() {
        return (
        <>
            <div className="container">
                <div className="links">

                    <Link to="/timer">
                        <button className="timer-game">TIMER</button>
                    </Link>
                    <Link to="/parentsMenu">
                        <button className="menuForParents">menu for parents</button>
                    </Link>
                </div>
                <div className="gamesMenu">
                    <div className="Math">
                        <Link to="/gameMath">
                           Maths
                        </Link>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/timer" element={<Timer />} />
                <Route path="/parentsMenu" element={<ParentsMenu />} />
                <Route path="/gameMath" element={<GameMath />} />


            </Routes>
        </>
    )
}