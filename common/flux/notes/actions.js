/*
 * action types
 */
export const CREATE_NOTE = 'CREATE_NOTE'

/*
 * action creators
 */
export function createNote(note) {
	return { 
		type: CREATE_NOTE, 
		note 
	}
}

