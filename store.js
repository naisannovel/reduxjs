import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const myStore = createStore(reducer, applyMiddleware(thunk));

export default myStore;

// jodi kono form data UI te show korar dorkar na pore kintu form data ta just server a store korle e hobe
// se khetre se component ar moddhe axios call kore post kore dile e hobe. redux ar sathe connect korar dorkar nai
