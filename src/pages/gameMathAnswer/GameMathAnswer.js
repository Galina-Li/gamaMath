import React from "react";
import "./GameMathAnswer.css"
import { Routes, Route, Link } from "react-router-dom";
import Menu from "../menu/Menu";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import Match from "../../logic/Match";
import Canvas from "../../components/canvas/Canvas";
import GameMath from "../gameMath/GameMath";

const answerSelector = (state) => state.answer;
const operationSelector = (state) => state.operation;
const firstOperandSelector = (state) => state.firstOperand;
const lastOperandSelector = (state) => state.lastOperand;


export default function GameMathAnswer() {
    const answer = useSelector(answerSelector)
    const firstOperand = useSelector(firstOperandSelector)
    const lastOperand = useSelector(lastOperandSelector)
    const operation = useSelector(operationSelector)
    const navigate = useNavigate()
    
    if(answer === null){ 
        console.log(answer, 43434)
        navigate('/gameMath')
        return <GameMath />
    }

    console.log(answer, firstOperand, lastOperand, operation)
    return (
        <div className="answer-card">
            <div className="example-association">
                <div className="card1 card">
                    <p>{firstOperand}</p>
                </div>
                <div className="mathematical-sign sing">
                    <p>{operation}</p>
                </div>
                <div className="card2 card">
                    <p>{lastOperand}</p>
                </div>
                <div className="equals sing">
                    <p>=</p>
                </div>
                <div className="example-answer card">
                    <p>{answer}</p>
                </div>
            </div>
            <div className="write-an-answer">
                <p>Напиши ответ</p>
            </div>
            <div className="example">
                <div className="card1 card">
                    <p>{Match.getNumberBySymbol(firstOperand)}</p>
                </div>
                <div className="mathematical-sign sing">
                    <p>{operation}</p>
                </div>
                <div className="card2 card">
                    <p>{Match.getNumberBySymbol(lastOperand)} </p>
                </div>
                <div className="equals sing">
                    <p>=</p>
                </div>
                <div className="example-answer card">
                <p>{Match.getNumberBySymbol(answer)}</p>
                    <Canvas  />
                </div>
            </div>
            <Link to="/menu">
                <button>выйти</button>
            </Link>
            <Routes>
                <Route path="/Menu" element={<Menu />} />
            </Routes>
        </div>
    )
}