//the connect utility helps us map the state to react component's props
import { connect } from 'react-redux';

import app from "./app.jsx";

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	};
}

const AppContainer = connect(
  mapStateToProps
)(app);


export default AppContainer;