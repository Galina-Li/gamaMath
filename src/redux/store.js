import { createStore } from "redux";
import reducer from "./reducer";
const inicialState = {
    operation: null, 
    answer: null,
    firstOperand: null, 
    lastOperand: null
}
const store = createStore(reducer, inicialState)
export default store