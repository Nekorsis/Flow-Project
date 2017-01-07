import React from 'react';

import './EventCard.styl';

const EventCard = ({event}) => {
  return (
      <div key={event.eventId} className='event-card-container' style={{backgroundImage: `url(${event.eventThumbnailUrl})`}}>
        <div className='event-card-container__blackout blackout-container'>
          <a href='#' className='blackout-container__link'>{event.eventName}</a>
          <span className='blackout-container__time'>{'Start time: ' + event.eventTime}</span>
        </div>
      </div>
  );
};

EventCard.propTypes= {
  event: React.PropTypes.object.isRequired,
};

export default EventCard;
