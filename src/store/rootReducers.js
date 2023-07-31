import { counterReducer } from "react-lib-052023";
import { combineReducers } from "redux";

const stateReducer= (state={env: "dev"}, action)=> {
	switch (action.type) {
		case "toggle":
			return {env: state.env === 'dev' ? "qa":'dev'}
			
			break;
	
		default:
			return state;
	}

	return state;
}


const rootReducer = combineReducers({
	state: stateReducer
})

export default rootReducer;