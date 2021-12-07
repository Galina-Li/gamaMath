import React, {useState} from "react";
import { useDrop } from 'react-dnd';
import AnswerCard from "./AnswerCard";

 
const AnswerDropArea = (props) => {
    const {symbol} = props
    const [answer, setAnswer] = useState(null)
    const [{ isOver }, dropRef] = useDrop({
        accept: 'answer',
        drop: (item) => setAnswer(item),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })
 
    return (
            <div className='answer-area' ref={dropRef}>
               {/* { answer?.id && <AnswerCard id={answer.id} name={answer.name} />} */}
               { answer?.id && symbol}
                {isOver && <div>Drop Here!</div>}
            </div>
        
    )
}

export default AnswerDropArea;