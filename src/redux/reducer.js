const initialState = {
    operation: null, 
    answer: null,
    firstOperand: null, 
    lastOperand: null
    
}
function reducer(state = initialState, action) {
   switch (action.type) {
        case 'CARRYOVER_ANSWER': {
            const {operation, answer, firstOperand, lastOperand} = action.payload
            return {...state,
                operation,
                answer,
                firstOperand, 
                lastOperand,
            }
        }
   }



    return state
}


export default reducer