import { connect } from 'react-redux';
import Fiction     from './Fiction';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Fiction);
