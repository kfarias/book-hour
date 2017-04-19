import { connect } from 'react-redux';
import NonFiction  from './NonFiction';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(NonFiction);
