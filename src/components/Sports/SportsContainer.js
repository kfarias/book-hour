import { connect } from 'react-redux';
import Sports      from './Sports';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Sports);
