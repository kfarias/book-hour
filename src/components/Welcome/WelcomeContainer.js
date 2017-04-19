import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../actions/actions';
import Welcome                from './Welcome';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
