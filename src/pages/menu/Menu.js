import React from "react";
import "./Menu.css"
import { Routes, Route, Link } from "react-router-dom"
import Timer from "../timer/Timer"
import ParentsMenu from "../parentsMenu/ParentsMenu"
import GameMath from "../gameMath/GameMath"


export default function Menu() {
    // async function convert() {
    // if(from === to) return [amount, 1]
    // const timer = setTimeout(() => {
    //     loading.style.display = 'flex'
    // }, 500)
    // const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&places=4`)
    // .catch(() => alert('Нет сети!'))
    // loading.style.display = 'none'
    // clearTimeout(timer)
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