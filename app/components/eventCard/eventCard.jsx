import React from 'react';

import './EventCard.styl';

const EventCard = ({event}) => {
  return (
      <div key={event.eventId} className='event-card-container' style={{backgroundImage: `url(${event.eventThumbnailUrl})`}}>
        <a href='#' className='event-card-container__link'>{event.eventName}</a>
        <span className='event-card-container__time'>{event.eventTime}</span>
      </div>
  );
};

export default EventCard;
