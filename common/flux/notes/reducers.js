import {CREATE_NOTE} from "./actions.js";

const startingNotes = [
	"I'm the first starting note!",
	"Here is a second starting note."
];


//operations on single notes
const note = (state, action) => {
	switch(action.type){
		case CREATE_NOTE:
			return action.note;
		default:
			return state;
	}
}

//operations on list of notes
const notes = (state = startingNotes, action) => {
	switch(action.type){
		case CREATE_NOTE:
			return [...state, note(undefined, action)]
		default:
			return state;
	}
}

export default notes;