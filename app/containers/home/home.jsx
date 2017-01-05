// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Dropdown from 'react-dropdown';

import Header from './../../components/header/header';
import TopBanner from './../../components/TopBanner/TopBanner';
import EventsList from './../../components/eventsList/eventsList';
import * as features from './../../features/features';
import './home.styl';
import './dropdown.styl';

function mapStateToProps(state) {
  return {
    events: state.homeReducers.events,
    selectedCity: state.homeReducers.selectedCity,
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
    this._onSelect = this._onSelect.bind(this);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  _onSelect (option) {
    this.props.selectCity(option.label);
  }

  render() {
    const defaultOption = 'Moscow';
    const normalizedDta = features.normalizeEventsData(this.props.events);
    const options = [];
    normalizedDta.forEach((element) => {
      options.includes(element.eventCity) ? null : options.push(element.eventCity);
    });
    const filteredByCity = features.filterEventsByCity(normalizedDta, this.props.selectedCity);
    return (
      <div className='home-container'>
        <TopBanner city={this.props.selectedCity}/>
        {/*<Header city={this.props.selectedCity}/> not used right now*/}
        <div className='home-container__selected-city'>
          You can filter events by city here,
          your city is <strong> {this.props.selectedCity} </strong>
        </div>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an city" />
        <EventsList events={filteredByCity} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
