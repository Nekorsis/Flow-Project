// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import './home.styl';

function mapStateToProps(state) {
  return {
    events: state.appReducers.events,
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ ...actions }, dispatch) };
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='home-container'>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
