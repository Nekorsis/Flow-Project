import React from 'react';

import './eventsList.styl';
import EventCard from './../eventCard/EventCard';
import * as features from './../../features/features';

const EventsList = ({events, filters}) => {
  const filteredByTheme = features.filterEventsByTheme(events, filters.selectedTheme);
  const filteredByTime = features.filterEventsByTime(events, filters.selectedTime);
  const mergedEvents = features.mergeEvents(filteredByTheme, filteredByTime);

  const whatToRender = (filteredByTheme, filteredByTime, mergedEvents, filters) => {
    if (filters.selectedTheme === 'Any' && filters.selectedTime === 'Any') {
      return events.length > 0 ? events.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      }) : <div className='tooltip-no-events'>Sorry we couldn't find any events here </div>;
    } else if (filters.selectedTheme != 'Any' && filters.selectedTime === 'Any') {
      return filteredByTheme.length > 0 ? filteredByTheme.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      }) : <div className='tooltip-no-events'>{"Sorry we couldn't find any events, there is no " + filters.selectedTheme.toLowerCase() + ' events in this city'}</div>;
    } else if (filters.selectedTheme === 'Any' && filters.selectedTime != 'Any') {

      return filteredByTime.length > 0 ? filteredByTime.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      }) : <div className='tooltip-no-events'>{"Sorry we couldn't find any events, there is no event at " + filters.selectedTime.toLowerCase() + ' in this city'}</div>;
    } else {
      return mergedEvents.length > 0 ? mergedEvents.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      }) : <div className='tooltip-no-events'>{"Sorry we couldn't find any events with your filtes"}</div>;
    }
  };

  return (
    <div className='events-list-container'>
      {whatToRender(filteredByTheme, filteredByTime, mergedEvents, filters)}
    </div>
  );
};

EventsList.propTypes = {
  events: React.PropTypes.array.isRequired,
  filters: React.PropTypes.object.isRequired,
};

export default EventsList;
