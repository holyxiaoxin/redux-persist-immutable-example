import { bindActionCreators } from 'redux';
import { connect as reduxConnect } from 'react-redux';
import Actions from '../actions';

export const connect = reduxConnect;
// Map all actions to dispatch
export const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) };
};
