import React from 'react';

import './eventsList.styl';
import EventCard from './../eventCard/EventCard';

const EventsList = ({events}) => {
  return (
    <div className='events-list-container'>
      {events.map(event => {
        return <EventCard key={event.eventId} event={event} />;
      })}
    </div>
  );
};

EventsList.propTypes = {
  events: React.PropTypes.array.isRequired,
};

export default EventsList;
