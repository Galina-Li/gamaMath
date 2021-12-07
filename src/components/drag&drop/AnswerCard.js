import React from "react";
import { useDrag } from 'react-dnd'

 
const AnswerCard = ({ id, name, onDragEnd }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'answer',
        item: { id, name },
        end: () => onDragEnd(id),
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='answer card' style={{opacity: isDragging ? 0 : 1 }} ref={dragRef}>
            {name}
            {isDragging && 'Oops'}
        </div>
    )
}

export default AnswerCard
