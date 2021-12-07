import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Match from "../../logic/Match";
import Menu from "../menu/Menu";
import "./GameMath.css"
import Drag from "../../components/drag&drop/AnswerCard";
import AnswerDropArea from "../../components/drag&drop/AnswerDropArea";
import AnswerCard from "../../components/drag&drop/AnswerCard";
import Alert from "../../components/alert/Alert";
import { useDispatch } from "react-redux";
import getRandomIntInclusive from "../../components/random/Random";


export default function GameMath() {
    console.log(Match.data[getRandomIntInclusive(1, 11)])
    const dispatch = useDispatch()
    const randomIndex = getRandomIntInclusive(1, 11)
    const [firstOperand, setFirstOperand] = useState(Match.data[randomIndex].symbol)
    const [lastOperand, setLastOperand] = useState(Match.data[getRandomIntInclusive(1, Match.data[getRandomIntInclusive(1, randomIndex)])].symbol)
    const [operation, setOperation] = useState(['-', '+'][getRandomIntInclusive(0, 2)])
    const [answer, setAnswer] = useState(Match.appendOperationToSymbols(firstOperand, lastOperand, operation))
    console.log(answer, 3232)
    const [firstPossibleAnswer, setFirstPossibleAnswer] = useState(Match.data[getRandomIntInclusive(1, 11)].symbol)
    const [secondPossibleAnswer, setSecondPossibleAnswer] = useState(Match.data[getRandomIntInclusive(1, 11)].symbol)
    const [thirdPossibleAnswer, setThirdPossibleAnswer] = useState(Match.getSymbolByNumber(answer))
    
    const [answerOptions, setAnswerOptions] = useState (firstPossibleAnswer, secondPossibleAnswer, thirdPossibleAnswer)
    const [childAnswer, setChildAnswer] = useState(null)
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    const restore = () => {
        setChildAnswer(null)
    }
    const navigate = useNavigate();
    useEffect(() => setIsCorrectAnswer(childAnswer === null ? null : childAnswer === answer), [childAnswer, answer])
    useEffect(() => {
        if(isCorrectAnswer === null) return

        let timer
        if(!isCorrectAnswer) {
            timer = setTimeout(() =>  restore() ,2000)
        }   else {
            let utterance = new SpeechSynthesisUtterance
            (`${Match.getNumberBySymbol(firstOperand)} ${Match.getDescriptionByOperation(operation)} ${Match.getNumberBySymbol(lastOperand)} равно ${answer}`);
            speechSynthesis.speak(utterance);
            dispatch({type: 'CARRYOVER_ANSWER', payload: {
                answer: Match.getSymbolByNumber(childAnswer), 
                firstOperand, 
                lastOperand, 
                operation,
            }})
            console.log(childAnswer)
            timer = setTimeout(() =>  navigate('/gameMathAnswer') ,2000)
        }
        return () => clearTimeout(timer)
    }, [isCorrectAnswer])
    return (
        <DndProvider backend={HTML5Backend}>
        <div className="containerGameMath">
            <div className="answers">
                  <AnswerCard id={1} name={firstPossibleAnswer} onDragEnd={(setChildAnswer)}/>
                  <AnswerCard id={2} name={secondPossibleAnswer} onDragEnd={(setChildAnswer)}/>
                  <AnswerCard id={3} name={thirdPossibleAnswer} onDragEnd={(setChildAnswer)}/>
                    
                
            </div>
            <div className="find-the-answer">
                <p>Найди ответ</p>
            </div>
            <div>
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
                       {<AnswerDropArea symbol={Match.getSymbolByNumber(childAnswer)}/>}
                    </div>
                </div>
                <div className="example">
                    <div className="card1 card">
                        <p>{Match.getNumberBySymbol(firstOperand)}</p>
                    </div>
                    <div className="mathematical-sign sing">
                        <p>{operation}</p>
                    </div>
                    <div className="card2 card">
                        <p>{Match.getNumberBySymbol(lastOperand)}</p>
                    </div>
                    <div className="equals sing">
                        <p>=</p>
                    </div>
                    <div className="example-answer card">
                        {isCorrectAnswer && <p>{answer}</p>}
                        
                    </div>
                    {isCorrectAnswer === false ? <Alert /> : null}
                </div>
            </div>
            <Link to="/menu">
                <button>выйти</button>
            </Link>
            <Routes>
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </div>
        </DndProvider>
    )
}