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
      return events.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      });
    } else if (filters.selectedTheme != 'Any' && filters.selectedTime === 'Any') {
      return filteredByTheme.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      });
    } else if (filters.selectedTheme === 'Any' && filters.selectedTime != 'Any') {
      return filteredByTime.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      });
    } else {
      return mergedEvents.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      });
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
