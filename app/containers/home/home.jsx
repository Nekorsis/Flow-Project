// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import EventsList from './../../components/eventsList';
import './home.styl';

function mapStateToProps(state) {
  return {
    events: state.homeReducers.events,
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ ...actions }, dispatch) };
}

class Home extends React.Component {
  static propTypes = {
    requestEvents: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  render() {
    return (
      <div className='home-container'>
        <EventsList events={this.props.events} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
