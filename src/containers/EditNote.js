//the connect utility helps us map the state to react component's props
import { connect } from 'react-redux';

import { createNote } from 'flux/notes/actions';

import EditNote from "./../components/EditNote.jsx";

const mapStateToProps = (state) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch(createNote(note))
    }
  }
}

const EditNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote);


export default EditNoteContainer;