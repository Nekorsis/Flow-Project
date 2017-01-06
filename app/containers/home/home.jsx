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
    selectedTheme: state.homeReducers.selectedTheme,
    selectedTime: state.homeReducers.selectedTime,
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators({ ...actions }, dispatch) };
}

class Home extends React.Component {
  /*
  static propTypes = {
    requestEvents: React.PropTypes.func,
    // selectCity: React.PropTypes.string,
    selectTheme: React.PropTypes.func,
    // events: React.PropTypes.object,
    // selectCity: React.PropTypes.string,
    selectedTheme: React.PropTypes.string,
  }
  */
  constructor(props) {
    super(props);
    this._onCitySelect = this._onCitySelect.bind(this);
    this._onThemeSelect = this._onThemeSelect.bind(this);
    this._onTimeSelect = this._onTimeSelect.bind(this);
  }

  componentWillMount() {
    this.props.requestEvents();
  }

  _onTimeSelect (option) {
    this.props.selectTime(option.label);
  }

  _onCitySelect (option) {
    this.props.selectCity(option.label);
    this.props.selectTime('Any');
    this.props.selectTheme('Any');
  }

  _onThemeSelect (option) {
    this.props.selectTheme(option.label);
  }

  render() {
    const normalizedDta = features.normalizeEventsData(this.props.events);

    const dropdownCities = ['Moscow', 'Saint Petersburg', 'Tomsk'];
    const dropdownThemes = ['Any', 'Theatre', 'Concert', 'Museum'];
    const dropdownTime = features.dropdownTimeOptions(normalizedDta);

    const filteredByCity = features.filterEventsByCity(normalizedDta, this.props.selectedCity);


    const filters = {
      selectedTheme: this.props.selectedTheme,
      selectedTime: this.props.selectedTime,
    };

    return (
      <div className='home-container'>
        <TopBanner city={this.props.selectedCity}/>
        <div className='home-container__filter-toolpot'>
          You can filter events by city here,
          your city is <strong> {this.props.selectedCity} </strong>
        </div>
        <Dropdown options={dropdownCities} onChange={this._onCitySelect} value={this.props.selectedCity} placeholder="Select an city" />
        <div className='home-container__filter-toolpot'>
          You can filter events by theme here, your theme is <strong> {this.props.selectedTheme} </strong>
        </div>
        <Dropdown options={dropdownThemes} onChange={this._onThemeSelect} value={this.props.selectedTheme} placeholder="Select a theme" />
        <div className='home-container__filter-toolpot'>
          You can filter events by time here, your start time is <strong> {this.props.selectedTime} </strong>
        </div>
        <Dropdown options={dropdownTime} onChange={this._onTimeSelect} value={this.props.selectedTime} placeholder="Select a time" />
        <EventsList events={filteredByCity} filters={filters} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
