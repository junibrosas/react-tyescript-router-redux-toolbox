import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import Layout from './modules/shared/layouts/Default';

function mapStateToProps(state: any){
    return Object.assign({}, state); // everything on the state should be map to props
}

function mapDispatchToProps(dispatch: any){
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;